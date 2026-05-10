import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { getCourierBadgeColor, type CourierQuote } from '~/routes/find-courier'
import { Link } from 'react-router'
import { formatCurrency } from '~/lib/helpers'
import { ServiceLevelSchema } from '~/routes/find-courier/schemas'

export interface CourierCardProps {
  quote: CourierQuote
}

export const CourierCard = ({ quote }: CourierCardProps) => {
  const {
    courier,
    service,
    currency,
    totalBeforeTax,
    tax,
    total,
    estimatedDeliveryTime,
    badges,
  } = quote

  return (
    <Card
      component={Link}
      to={`#`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
      }}
    >
      <Stack
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          padding: 0,
        }}
      >
        <Stack direction='column' spacing={2} sx={{ padding: 2 }}>
          <Stack direction='row' spacing={2} sx={{ alignItems: 'start' }}>
            <Avatar
              src={courier.logoUrl}
              alt={courier.name}
              variant='rounded'
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'background.default',
                color: 'text.secondary',
              }}
            >
              {courier.name.charAt(0)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant='subtitle1' noWrap>
                {courier.name}
              </Typography>
              {courier.tagline && (
                <Typography variant='caption' color='text.secondary' noWrap>
                  {courier.tagline}
                </Typography>
              )}
            </Box>
            {courier.rating != null && (
              <Stack spacing={0.25}>
                <Rating
                  value={courier.rating}
                  precision={0.1}
                  readOnly
                  size='small'
                />
              </Stack>
            )}
          </Stack>

          <Stack spacing={0.75}>
            <Chip
              label={ServiceLevelSchema.enum[service]}
              size='small'
              color='primary'
              variant='outlined'
              sx={{ alignSelf: 'flex-start' }}
            />
            <Typography variant='body2' color='text.secondary'>
              {estimatedDeliveryTime}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction='row'
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 2,
            backgroundColor: 'blue.light',
          }}
        >
          <Stack spacing={0.25} sx={{ mt: 'auto' }}>
            <Typography variant='caption' color='text.secondary'>
              {formatCurrency(totalBeforeTax, currency)} +{' '}
              {formatCurrency(tax, currency)} tax
            </Typography>
            <Typography variant='h5' color='primary'>
              {formatCurrency(total, currency)}
            </Typography>
          </Stack>

          {badges.length > 0 && (
            <Stack
              direction='row'
              spacing={1}
              useFlexGap
              sx={{ flexWrap: 'wrap' }}
            >
              <Chip
                label={badges[0]}
                size='small'
                color={getCourierBadgeColor(badges[0])}
              />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Card>
  )
}
