import { pgSchema, uuid, varchar, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const portfolio = pgSchema("portfolio");

export const contactMessages = portfolio.table("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 200 }),
  message: text("message").notNull(),
  source: varchar("source", { length: 50 }).default("portfolio"),
  read: boolean("read").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const pageViews = portfolio.table("page_views", {
  id: uuid("id").defaultRandom().primaryKey(),
  path: varchar("path", { length: 255 }).notNull(),
  referrer: varchar("referrer", { length: 500 }),
  userAgent: text("user_agent"),
  viewedAt: timestamp("viewed_at", { withTimezone: true }).defaultNow(),
});
