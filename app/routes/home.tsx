import type { Route } from './+types/home'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router'

export const meta = (_args: Route.MetaArgs) => [
  { title: 'Interactive Shipping Calculator' },
  { name: 'description', content: 'Compare couriers in seconds.' },
]

const Home = () => {
  return (
    <Box component='main' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='md'>
        <Stack spacing={4} sx={{ alignItems: 'flex-start' }}>
          <Stack spacing={2}>
            <Typography variant='overline' color='primary'>
              Interactive shipping calculator
            </Typography>
            <Typography variant='h2' component='h1'>
              Compare couriers in seconds.
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Tell us where your parcel is going and how big it is. We&apos;ll
              show you a side-by-side comparison of trusted couriers, with
              transparent pricing and delivery estimates.
            </Typography>
          </Stack>

          <Button
            component={RouterLink}
            to='/find-courier'
            variant='contained'
            color='primary'
            size='large'
          >
            Find a courier
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
