import type { Components, Theme } from '@mui/material/styles'

/**
 * Component-level overrides that give MUI primitives a Fincart-style
 * polish: rounded corners, soft elevation, no uppercase buttons.
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
        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'primary' && {
            boxShadow: '0 8px 20px -8px rgba(255, 90, 31, 0.55)',
            '&:hover': {
              boxShadow: '0 10px 24px -8px rgba(255, 90, 31, 0.65)',
            },
          }),
      }),
    },
  },

  MuiPaper: {
    styleOverrides: {
      rounded: {
        borderRadius: 16,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 20,
        border: '1px solid #E2E8F0',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
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

  MuiAppBar: {
    defaultProps: {
      color: 'inherit',
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
      },
    },
  },

  MuiLink: {
    defaultProps: {
      underline: 'hover',
    },
  },
}
