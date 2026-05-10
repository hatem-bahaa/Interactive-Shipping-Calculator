import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export interface SummarySectionProps {
  title: string
  isActive?: boolean
  lines: string[] | null
  emptyState?: string
}

const DEFAULT_EMPTY_STATE = 'Not provided yet'

export const SummarySection = ({
  title,
  isActive = false,
  lines,
  emptyState = DEFAULT_EMPTY_STATE,
}: SummarySectionProps) => {
  const hasContent = lines !== null && lines.length > 0

  return (
    <Stack spacing={1}>
      <Typography
        variant='subtitle2'
        sx={{ color: isActive ? 'primary.main' : 'text.primary' }}
      >
        {title}
      </Typography>

      {hasContent ? (
        <Stack spacing={0.25}>
          {lines.map((line) => (
            <Typography key={line} variant='body2' color='text.secondary'>
              {line}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Typography
          variant='body2'
          sx={{ color: 'text.disabled', fontStyle: 'italic' }}
        >
          {emptyState}
        </Typography>
      )}
    </Stack>
  )
}
