import { Contact } from "@/lib/schema";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";
import * as React from "react";

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
}: Contact) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>📩 New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Hr style={hr} />

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Hr style={hr} />

            <Text style={label}>Subject</Text>
            <Text style={value}>{subject}</Text>
            <Hr style={hr} />

            <Text style={label}>Message</Text>
            <Text style={value}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f9fafb",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "24px",
  maxWidth: "600px",
  margin: "0 auto",
};

const h1 = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#111827",
};

const section = {
  marginBottom: "20px",
};

const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#374151",
  marginBottom: "4px",
};

const value = {
  fontSize: "14px",
  color: "#1f2937",
  marginBottom: "12px",
  whiteSpace: "pre-line", // supports multi-line messages
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "12px 0",
};
