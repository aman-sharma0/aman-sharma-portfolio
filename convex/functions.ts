import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values"; // or "convex/server" depending on your setup

export const createContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      await ctx.db.insert("contacts", args);

      return {
        message: "success",
      };
    } catch (e) {
      throw new ConvexError("Something went wrong while adding the contact");
    }
  },
});
