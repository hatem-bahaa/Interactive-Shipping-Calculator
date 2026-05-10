import { Container, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router'

interface PageFeedbackProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}
export const PageFeedback = ({
  title,
  description,
  buttonText,
  buttonLink,
}: PageFeedbackProps) => {
  return (
    <Container maxWidth={false} sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body1' color='text.secondary'>
          {description}
        </Typography>
        <Button
          component={RouterLink}
          to={buttonLink}
          variant='contained'
          size='large'
          sx={{ width: 'fit-content', mt: '20px' }}
        >
          {buttonText}
        </Button>
      </Box>
    </Container>
  )
}
