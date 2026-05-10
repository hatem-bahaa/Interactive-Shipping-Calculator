import { useContext } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ShippingFormContext } from '~/context/ShippingFormContext'
import { formatAddressLines, formatPackageLines } from '../../../lib'
import { SummarySection } from '~/components/SummarySection'

export const SummarySidebar = () => {
  const ctx = useContext(ShippingFormContext)
  const currentStep = ctx?.currentStep ?? 0

  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Stack spacing={2.5}>
        <Box>
          <Typography variant='h6'>Your shipment</Typography>
          <Typography variant='body2' color='text.secondary'>
            Updated as you complete each step.
          </Typography>
        </Box>

        <Divider />

        <SummarySection
          title='Pickup address'
          isActive={currentStep === 0}
          lines={ctx?.origin ? formatAddressLines(ctx.origin) : null}
        />

        <Divider />

        <SummarySection
          title='Delivery address'
          isActive={currentStep === 1}
          lines={ctx?.destination ? formatAddressLines(ctx.destination) : null}
        />

        <Divider />

        <SummarySection
          title='Package details'
          isActive={currentStep === 2}
          lines={ctx?.packageInfo ? formatPackageLines(ctx.packageInfo) : null}
        />
      </Stack>
    </Paper>
  )
}
