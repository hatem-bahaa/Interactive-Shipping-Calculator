import { z } from 'zod'

export const ServiceLevelSchema = z.enum(['standard', 'express', 'same-day'])
export type ServiceLevel = z.infer<typeof ServiceLevelSchema>

export const CourierSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  logoUrl: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
  tagline: z.string().optional(),
})
export type Courier = z.infer<typeof CourierSchema>

export const CourierQuoteSchema = z.object({
  id: z.string().min(1),
  courier: CourierSchema,
  service: ServiceLevelSchema,
  currency: z.string().min(1),
  totalBeforeTax: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  total: z.number().nonnegative(),
  estimatedDeliveryTime: z.string().min(1),
  badges: z.array(z.string()).default([]),
})
export type CourierQuote = z.infer<typeof CourierQuoteSchema>

export const CourierQuoteListSchema = z.array(CourierQuoteSchema)
