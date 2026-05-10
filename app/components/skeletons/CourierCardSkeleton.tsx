import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const CourierCardSkeleton = () => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <Stack direction='row' spacing={2} sx={{ alignItems: 'start' }}>
          <Skeleton variant='rounded' width={48} height={48} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant='subtitle1'>
              <Skeleton width='65%' />
            </Typography>
            <Typography variant='caption'>
              <Skeleton width='85%' />
            </Typography>
          </Box>
          <Skeleton variant='text' width={88} />
        </Stack>

        <Stack spacing={0.75}>
          <Skeleton variant='rounded' width={84} height={24} />
          <Typography variant='body2'>
            <Skeleton width='55%' />
          </Typography>
        </Stack>

        <Stack spacing={0.25} sx={{ mt: 'auto' }}>
          <Typography variant='caption'>
            <Skeleton width='45%' />
          </Typography>
          <Typography variant='h5'>
            <Skeleton width='50%' />
          </Typography>
        </Stack>

        <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Skeleton variant='rounded' width={100} height={24} />
          <Skeleton variant='rounded' width={72} height={24} />
        </Stack>
      </CardContent>
    </Card>
  )
}
