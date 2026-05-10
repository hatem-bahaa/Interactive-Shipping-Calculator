import { Box } from '@mui/material'
import { CourierCardSkeleton } from './CourierCardSkeleton'

export const CouriersGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <Box sx={(theme) => theme.customLayouts.couriersCardGrid}>
      {Array.from({ length: count }).map((_, index) => (
        <CourierCardSkeleton key={index} />
      ))}
    </Box>
  )
}
