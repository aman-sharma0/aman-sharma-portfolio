import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export async function GET() {
  const redis = Redis.fromEnv();
  try {
    const result = await redis.ping();

    return NextResponse.json({ success: result === "PONG" });
  } catch (e) {
    return NextResponse.json({ success: false });
  }
}
