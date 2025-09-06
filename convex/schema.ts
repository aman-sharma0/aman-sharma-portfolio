import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.optional(v.string()),
  }).index("by_email", ["email"]),
});
