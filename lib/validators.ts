import { z } from "zod";

export const orderItemSchema = z.object({
  sku: z.string().min(1, "SKU is required"),
  quantity: z.number().int().min(1, "Quantity must be at least 1").max(20, "Quantity too large"),
});

export const createOrderSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email("Valid email is required"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  items: z.array(orderItemSchema).min(1, "At least one item is required"),
  slicing: z.boolean().optional().default(false),
  notes: z.string().max(500, "Notes must be 500 characters or less").optional(),
});

export const contactTopicEnum = z.enum([
  "Reservation request",
  "Catering request",
  "Menu/allergen question",
  "Press/partnership",
  "Other",
]);

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7).optional().or(z.literal("")),
  topic: contactTopicEnum,
  message: z.string().min(10, "Message must be at least 10 characters"),
});
