import { z } from 'zod'

export const PackageDimensionsSchema = z.object({
  weightKg: z
    .number({ error: 'Weight is required' })
    .positive('Weight must be positive')
    .max(1000, 'Maximum 1000 kg'),
  lengthCm: z
    .number({ error: 'Length is required' })
    .positive('Length must be positive')
    .max(500, 'Maximum 500 cm'),
  widthCm: z
    .number({ error: 'Width is required' })
    .positive('Width must be positive')
    .max(500, 'Maximum 500 cm'),
  heightCm: z
    .number({ error: 'Height is required' })
    .positive('Height must be positive')
    .max(500, 'Maximum 500 cm'),
  contents: z.string().max(200, 'Maximum 200 characters').optional(),
  isFragile: z.boolean(),
})

export type PackageDimensions = z.infer<typeof PackageDimensionsSchema>

export const PACKAGE_DEFAULTS: Partial<PackageDimensions> = {
  weightKg: undefined,
  lengthCm: undefined,
  widthCm: undefined,
  heightCm: undefined,
  contents: undefined,
  isFragile: false,
}
