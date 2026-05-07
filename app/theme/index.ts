import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { components } from './components'
import { palette } from './palette'
import { radii, shape, type Radii } from './shape'
import { typography } from './typography'

declare module '@mui/material/styles' {
  interface Theme {
    radii: Radii
  }
  interface ThemeOptions {
    radii?: Radii
  }
}

const baseTheme = createTheme({
  cssVariables: true,
  palette,
  typography,
  shape,
  radii,
  components,
})

export const theme = responsiveFontSizes(baseTheme)

export type AppTheme = typeof theme
