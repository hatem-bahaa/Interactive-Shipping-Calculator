import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

import type { StepIndex } from '~/context/ShippingFormContext'

export interface ShippingStepperProps {
  currentStep: StepIndex
  onStepClick?: (step: StepIndex) => void
}

const STEP_LABELS = [
  'Pickup address',
  'Delivery address',
  'Package details',
] as const

export const ShippingStepper = ({ currentStep }: ShippingStepperProps) => {
  return (
    <Stepper activeStep={currentStep} alternativeLabel>
      {STEP_LABELS.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
