import { Activity, useContext, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import {
  DestinationAddressForm,
  OriginAddressForm,
  PackageDimensionsForm,
  ShippingStepper,
  StepNavigation,
} from './components'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import { SummarySidebar } from './components/SummarySidebar'
import type { Route } from './+types/FindCourierPage'
import { scrollToTop } from '~/lib/helpers'

export const meta = (_args: Route.MetaArgs) => [
  { title: 'Find a courier' },
  { name: 'description', content: 'Find a courier for your shipment.' },
]

const FindCourierPage = () => {
  const ctx = useContext(ShippingFormContext)

  useEffect(() => {
    scrollToTop()
  }, [ctx?.currentStep])

  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant='h3' component='h1'>
            Find a courier
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            Tell us about your shipment and we&apos;ll match you with the right
            couriers.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ alignItems: 'flex-start' }}
        >
          <Stack
            spacing={3}
            sx={{ flex: 1, minWidth: 0, width: { xs: '100%', md: 'auto' } }}
          >
            <ShippingStepper currentStep={ctx?.currentStep ?? 0} />

            <Paper sx={{ p: { xs: 3, sm: 4 }, width: '100%' }}>
              <Stack spacing={4} useFlexGap>
                <Activity
                  mode={ctx?.currentStep === 0 ? 'visible' : 'hidden'}
                  name='origin'
                >
                  <OriginAddressForm />
                </Activity>

                <Activity
                  mode={ctx?.currentStep === 1 ? 'visible' : 'hidden'}
                  name='destination'
                >
                  <DestinationAddressForm />
                </Activity>

                <Activity
                  mode={ctx?.currentStep === 2 ? 'visible' : 'hidden'}
                  name='package'
                >
                  <PackageDimensionsForm />
                </Activity>

                <StepNavigation />
              </Stack>
            </Paper>
          </Stack>

          <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 360 } }}>
            <SummarySidebar />
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default FindCourierPage
