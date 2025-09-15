import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
  }),
  rsvps: defineTable({
    attending: v.boolean(),
    plusOne: v.boolean(),
    plusOneName: v.optional(v.string()),
    songRequest: v.optional(v.string()),
    createdAt: v.number(),
  }),
});
