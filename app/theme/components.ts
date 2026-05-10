import type { Components, Theme } from '@mui/material/styles'

/**
 * Component-level overrides.
 */
export const components: Components<Omit<Theme, 'components'>> = {
  MuiCssBaseline: {
    styleOverrides: {
      'html, body, #root': {
        height: '100%',
      },
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '*::-webkit-scrollbar': {
        width: 10,
        height: 10,
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#CBD5E1',
        borderRadius: 9999,
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#94A3B8',
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        borderRadius: 9999,
        paddingInline: 20,
        paddingBlock: 10,
        fontWeight: 600,
        ...(ownerState.size === 'small' && {
          paddingInline: 14,
          paddingBlock: 6,
        }),
        ...(ownerState.size === 'large' && {
          paddingInline: 28,
          paddingBlock: 14,
          fontSize: '1rem',
        }),
      }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 16,
        border: 'none',
        boxShadow: 'none',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        border: 'none',
        boxShadow: 'none',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      size: 'medium',
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 9999,
        fontWeight: 500,
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
  },

  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
}
