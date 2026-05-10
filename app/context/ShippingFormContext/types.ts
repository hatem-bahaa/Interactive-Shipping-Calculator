import type {
  DestinationAddress,
  OriginAddress,
  PackageDimensions,
} from '~/routes/find-courier'

export type StepIndex = 0 | 1 | 2

export interface ShippingFormState {
  origin: OriginAddress | undefined
  destination: DestinationAddress | undefined
  packageInfo: PackageDimensions | undefined
  currentStep: StepIndex
}

interface ShippingFormActions {
  goNextStep: () => void
  goPreviousStep: () => void
  reset: () => void
  setCurrentStep: (step: StepIndex) => void
  dispatchShippingFormState: (action: ShippingFormAction) => void
}

export type ShippingFormContextValue = ShippingFormState & ShippingFormActions

export type ShippingFormAction =
  | { type: 'SET_ORIGIN'; payload: OriginAddress }
  | { type: 'SET_DESTINATION'; payload: DestinationAddress }
  | { type: 'SET_PACKAGE'; payload: PackageDimensions }
  | { type: 'SET_CURRENT_STEP'; payload: StepIndex }
  | { type: 'GO_TO_NEXT_STEP' }
  | { type: 'GO_TO_PREVIOUS_STEP' }
  | { type: 'RESET' }
