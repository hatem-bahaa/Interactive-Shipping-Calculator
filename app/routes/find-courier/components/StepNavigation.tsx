import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useContext } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'

export const StepNavigation = () => {
  const ctx = useContext(ShippingFormContext)
  const STEP_NEXT_LABELS = ['Continue', 'Continue', 'Find couriers']
  const STEP_FORM_IDS = ['step-origin', 'step-destination', 'step-package']

  return (
    <Stack direction='row' spacing={2}>
      <Button
        type='button'
        onClick={() => {
          ctx?.goPreviousStep()
        }}
        disabled={ctx?.currentStep === 0}
        variant='text'
        size='large'
      >
        Back
      </Button>
      <Button
        type='submit'
        form={STEP_FORM_IDS[ctx?.currentStep ?? 0]}
        variant='contained'
        size='large'
      >
        {STEP_NEXT_LABELS[ctx?.currentStep ?? 0]}
      </Button>
    </Stack>
  )
}
