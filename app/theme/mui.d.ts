import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary']
    yellow: Palette['primary']
    green: Palette['primary']
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary']
    yellow?: PaletteOptions['primary']
    green?: PaletteOptions['primary']
  }

  interface Theme {
    radii: Radii
    customLayouts: {
      couriersCardGrid: object
    }
  }
  interface ThemeOptions {
    radii?: Radii
    customLayouts: {
      couriersCardGrid: object
    }
  }
}
