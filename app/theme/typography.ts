import type { TypographyVariantsOptions } from '@mui/material/styles'

const FONT_FAMILY = ['Poppins', 'sans-serif'].join(',')

export const typography: TypographyVariantsOptions = {
  fontFamily: FONT_FAMILY,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 800,
    fontSize: '3.5rem',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
  },
  h2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 800,
    fontSize: '2.75rem',
    lineHeight: 1.15,
    letterSpacing: '-0.025em',
  },
  h3: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h4: {
    fontFamily: FONT_FAMILY,
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.25,
    letterSpacing: '-0.015em',
  },
  h5: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h6: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.4,
    letterSpacing: '-0.005em',
  },

  subtitle1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  subtitle2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },

  body1: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },

  button: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '0.9375rem',
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    textTransform: 'none',
  },

  caption: {
    fontFamily: FONT_FAMILY,
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.02em',
  },

  overline: {
    fontFamily: FONT_FAMILY,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
}
