import type { Shape } from '@mui/system'

/**
 * Generously rounded shape — matches the soft, modern card/button
 * aesthetic used across Fincart's marketing surfaces.
 */
export const shape: Partial<Shape> = {
  borderRadius: 12,
}

/**
 * Extended radius scale, accessible from `theme.radii.*` via module
 * augmentation in `theme/index.ts`. Useful for components where the
 * single `theme.shape.borderRadius` value isn't expressive enough.
 */
export const radii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 9999,
} as const

export type Radii = typeof radii
