import { z } from 'zod'

export const COUNTRIES = [
  { code: 'EG', name: 'Egypt' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'OM', name: 'Oman' },
  { code: 'QA', name: 'Qatar' },
]

const BaseAddressSchema = z.object({
  contactName: z.string().min(2, 'Contact name is required'),
  contactPhone: z.string().min(10, 'Contact phone is required'),
  country: z.enum(COUNTRIES.map((country) => country.code)),
  governorate: z.string().min(2, 'Governorate is required'),
  city: z.string().min(2, 'City is required'),
  area: z.string().optional(),
  street: z.string().min(3, 'Street address is required'),
  buildingNumber: z.string().optional(),
  floor: z.string().optional(),
  apartment: z.string().optional(),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, 'Postal code must be 5 digits')
    .optional()
    .or(z.literal('')),
  landmark: z.string().optional(),
})

export const OriginAddressSchema = BaseAddressSchema

export type OriginAddress = z.infer<typeof OriginAddressSchema>

export const ORIGIN_ADDRESS_DEFAULTS: OriginAddress = {
  contactName: '',
  contactPhone: '',
  country: 'EG',
  governorate: '',
  city: '',
  area: '',
  street: '',
  buildingNumber: '',
  floor: '',
  apartment: '',
  postalCode: '',
  landmark: '',
}

export const DestinationAddressSchema = BaseAddressSchema.extend({
  confirmInternational: z.boolean(),
}).refine(
  (data) => data.country === 'EG' || data.confirmInternational === true,
  {
    message: 'Please confirm you understand this is an international shipment',
    path: ['confirmInternational'],
  }
)

export type DestinationAddress = z.infer<typeof DestinationAddressSchema>

export const DESTINATION_ADDRESS_DEFAULTS: DestinationAddress = {
  ...ORIGIN_ADDRESS_DEFAULTS,
  confirmInternational: false,
}
