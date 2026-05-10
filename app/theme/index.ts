import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { components } from './components'
import { palette } from './palette'
import { radii, shape } from './shape'
import { typography } from './typography'
import { customLayouts } from './customLayouts'

const baseTheme = createTheme({
  cssVariables: true,
  palette,
  typography,
  customLayouts,
  shape,
  radii,
  components,
})

export const theme = responsiveFontSizes(baseTheme)

export type AppTheme = typeof theme
