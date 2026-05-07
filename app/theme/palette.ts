import type { PaletteOptions } from '@mui/material/styles'

/**
 * Color palette inspired by Fincart's brand identity:
 * a vibrant coral-orange primary paired with a deep navy secondary,
 * on clean off-white surfaces.
 */
export const palette: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#FF5A1F',
    light: '#FF8A65',
    dark: '#C73E0E',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#0E1B3D',
    light: '#334B7A',
    dark: '#050B1F',
    contrastText: '#FFFFFF',
  },

  success: {
    main: '#16A34A',
    light: '#4ADE80',
    dark: '#15803D',
    contrastText: '#FFFFFF',
  },

  warning: {
    main: '#F59E0B',
    light: '#FBBF24',
    dark: '#B45309',
    contrastText: '#0E1B3D',
  },

  error: {
    main: '#DC2626',
    light: '#F87171',
    dark: '#991B1B',
    contrastText: '#FFFFFF',
  },

  info: {
    main: '#2563EB',
    light: '#60A5FA',
    dark: '#1E40AF',
    contrastText: '#FFFFFF',
  },

  background: {
    default: '#FFFFFF',
    paper: '#F8FAFC',
  },

  text: {
    primary: '#0E1B3D',
    secondary: '#475569',
    disabled: '#94A3B8',
  },

  divider: '#E2E8F0',

  grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
}
