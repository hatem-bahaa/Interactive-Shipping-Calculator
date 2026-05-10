import { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined'

import { ShippingFormContext } from '~/context/ShippingFormContext'

export const ShipmentSummary = () => {
  const ctx = useContext(ShippingFormContext)
  const { origin, destination, packageInfo } = ctx ?? {}

  const items = [
    {
      label: 'From',
      icon: <MyLocationOutlinedIcon sx={{ color: 'text.primary' }} />,
      value: `${origin?.city}, ${origin?.country}`,
    },
    {
      label: 'To',
      icon: <LocationOnOutlinedIcon sx={{ color: 'text.primary' }} />,
      value: `${destination?.city}, ${destination?.country}`,
    },
    {
      label: 'Package',
      icon: <Inventory2OutlinedIcon sx={{ color: 'text.primary' }} />,
      value: `${packageInfo?.weightKg} kg · ${packageInfo?.lengthCm} × ${packageInfo?.widthCm} × ${packageInfo?.heightCm} cm`,
    },
  ]

  return (
    <Paper
      variant='outlined'
      sx={{ px: 3, py: 2, backgroundColor: 'yellow.main' }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        divider={
          <Divider
            orientation='vertical'
            flexItem
            sx={{
              display: { xs: 'none', sm: 'block' },
              borderColor: 'text.primary',
            }}
          />
        }
      >
        {items.map(({ label, icon, value }) => (
          <Stack
            key={label}
            direction='row'
            spacing={1.5}
            sx={{ alignItems: 'center', flex: 1, minWidth: 0 }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: 'transparent',
                color: 'primary.main',
                '& .MuiSvgIcon-root': { fontSize: '1.75rem' },
              }}
            >
              {icon}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant='caption'
                color='text.secondary'
                sx={{ display: 'block', lineHeight: 1.2 }}
              >
                {label}
              </Typography>
              <Typography variant='body2' sx={{ fontWeight: 600 }} noWrap>
                {value}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Paper>
  )
}
