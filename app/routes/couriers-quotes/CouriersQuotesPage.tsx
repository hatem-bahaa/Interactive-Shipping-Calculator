import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import { Link as RouterLink, useNavigate } from 'react-router'
import CouriersGrid from './components/CouriersGrid'
import { ShipmentSummary } from './components'
import { useContext, useEffect, useState } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import { PageFeedback } from '~/components'
import type { Route } from './+types/CouriersQuotesPage'

export const meta = (_args: Route.MetaArgs) => [
  { title: 'Couriers quotes' },
  {
    name: 'description',
    content: 'View available couriers for your shipment.',
  },
]

const CouriersQuotesPage = () => {
  const ctx = useContext(ShippingFormContext)
  const navigate = useNavigate()
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (isResetting) {
      ctx?.reset()
      navigate('/find-courier')
    }
  }, [isResetting, ctx, navigate])

  if (!ctx?.origin || !ctx?.destination || !ctx?.packageInfo) {
    return !isResetting ? (
      <PageFeedback
        title='No shipment details found'
        description='Please fill in the shipment details to see available couriers.'
        buttonText='Edit shipment'
        buttonLink='/find-courier'
      />
    ) : (
      <></>
    )
  }
  return (
    <Container maxWidth='lg' sx={{ py: 6, alignItems: 'center' }}>
      <Stack spacing={4}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: { sm: 'flex-end' },
          }}
        >
          <Stack spacing={1}>
            <Typography variant='h3' component='h1'>
              Available couriers
            </Typography>
          </Stack>

          <Stack direction='row' spacing={2}>
            <Button
              onClick={() => setIsResetting(true)}
              variant='outlined'
              size='large'
              color='error'
              startIcon={<RestartAltOutlinedIcon />}
            >
              Reset
            </Button>
            <Button
              component={RouterLink}
              to='/find-courier'
              variant='outlined'
              size='large'
            >
              Edit shipment
            </Button>
          </Stack>
        </Stack>

        <ShipmentSummary />
        <CouriersGrid />
      </Stack>
    </Container>
  )
}

export default CouriersQuotesPage
