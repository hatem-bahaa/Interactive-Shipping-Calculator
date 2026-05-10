import { Box } from '@mui/material'
import { PageFeedback } from '~/components'
import { CouriersGridSkeleton } from '~/components/skeletons'
import { CourierCard } from './CourierCard'
import { useQuotes } from '#hooks/useQuotes'

const CouriersGrid = () => {
  const { quotes, isLoading } = useQuotes()
  if (quotes.length === 0 && !isLoading) {
    return (
      <PageFeedback
        title='No couriers found'
        description='No couriers serve the selected route. Please try again with different shipment details.'
        buttonText='Edit shipment'
        buttonLink='/find-courier'
      />
    )
  }

  return (
    <>
      {isLoading ? (
        <CouriersGridSkeleton />
      ) : (
        <Box sx={(theme) => theme.customLayouts.couriersCardGrid}>
          {quotes.map((quote) => (
            <CourierCard key={quote.id} quote={quote} />
          ))}
        </Box>
      )}
    </>
  )
}

export default CouriersGrid
