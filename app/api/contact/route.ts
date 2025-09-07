import ContactFormEmail from "@/emails/contact";
import { ratelimit } from "@/lib/rate-limit";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/schema";
import { randomUUID } from "crypto";
import { headers } from "next/headers";
import { after, NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsedSchema = contactSchema.safeParse(body);

    if (!parsedSchema.success) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const contact = parsedSchema.data;

    const ip = await getIp();

    const identifier = ip ?? contact.email;

    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return NextResponse.json(
        { message: "You can only send 2 emails per day" },
        { status: 429 }
      );
    }

    after(async () => {
      await resend.emails.send({
        from: process.env.SENDER_EMAIL ?? "",
        to: process.env.RECEIVER_EMAIL ?? "",
        subject: contact.subject,
        react: ContactFormEmail({ ...contact }),
        headers: {
          "X-Entity-Ref-ID": randomUUID(),
        },
      });
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

async function getIp() {
  let forwardedFor = (await headers()).get("x-forwarded-for");
  let realIp = (await headers()).get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  if (realIp) return realIp.trim();

  return null;
}
