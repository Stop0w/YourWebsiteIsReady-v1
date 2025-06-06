import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const businesses = pgTable("businesses", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  location: text("location"),
  description: text("description"),
  tagline: text("tagline"),
  contact: jsonb("contact").$type<{
    phone?: string;
    email?: string;
    address?: string;
  }>(),
  status: text("status").notNull().default("ready"),
  createdAt: text("created_at").notNull(),
});

export const templates = pgTable("templates", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  templateNumber: integer("template_number").notNull(),
  theme: text("theme").notNull(),
  description: text("description"),
  heroImage: text("hero_image"),
  features: jsonb("features").$type<string[]>(),
  sections: jsonb("sections").$type<{
    hero?: boolean;
    about?: boolean;
    gallery?: boolean;
    contact?: boolean;
    services?: boolean;
  }>(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
  interval: text("interval").notNull(), // monthly, yearly, one-time
  features: jsonb("features").$type<string[]>(),
  popular: boolean("popular").default(false),
});

export const insertBusinessSchema = createInsertSchema(businesses).omit({
  id: true,
  createdAt: true,
});

export const insertTemplateSchema = createInsertSchema(templates).omit({
  id: true,
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

export type Business = typeof businesses.$inferSelect;
export type InsertBusiness = z.infer<typeof insertBusinessSchema>;
export type Template = typeof templates.$inferSelect;
export type InsertTemplate = z.infer<typeof insertTemplateSchema>;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
