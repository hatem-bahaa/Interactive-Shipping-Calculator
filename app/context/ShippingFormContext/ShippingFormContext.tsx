import { createContext, useCallback, useReducer } from 'react'
import type { ReactNode } from 'react'
import type {
  ShippingFormAction,
  ShippingFormContextValue,
  ShippingFormState,
  StepIndex,
} from './types'

const INITIAL_STATE: ShippingFormState = {
  origin: undefined,
  destination: undefined,
  packageInfo: undefined,
  currentStep: 0,
}

const clampStep = (step: number): StepIndex => {
  if (step <= 0) return 0
  if (step >= 2) return 2
  return step as StepIndex
}

const shippingFormReducer = (
  state: ShippingFormState,
  action: ShippingFormAction
): ShippingFormState => {
  switch (action.type) {
    case 'SET_ORIGIN':
      return { ...state, origin: action.payload }
    case 'SET_DESTINATION':
      return { ...state, destination: action.payload }
    case 'SET_PACKAGE':
      return { ...state, packageInfo: action.payload }
    case 'SET_CURRENT_STEP':
      return { ...state, currentStep: action.payload }
    case 'GO_TO_NEXT_STEP': {
      if (state.currentStep >= 2) return state
      return { ...state, currentStep: clampStep(state.currentStep + 1) }
    }
    case 'GO_TO_PREVIOUS_STEP': {
      if (state.currentStep <= 0) return state
      return { ...state, currentStep: clampStep(state.currentStep - 1) }
    }
    case 'RESET':
      return INITIAL_STATE
    default: {
      const _exhaustive: never = action
      return _exhaustive
    }
  }
}

export const ShippingFormContext = createContext<
  ShippingFormContextValue | undefined
>(undefined)

export const ShippingFormProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatchShippingFormState] = useReducer(
    shippingFormReducer,
    INITIAL_STATE
  )

  const goNextStep = useCallback(
    () => dispatchShippingFormState({ type: 'GO_TO_NEXT_STEP' }),
    []
  )
  const goPreviousStep = useCallback(
    () => dispatchShippingFormState({ type: 'GO_TO_PREVIOUS_STEP' }),
    []
  )
  const reset = useCallback(
    () => dispatchShippingFormState({ type: 'RESET' }),
    []
  )
  const setCurrentStep = useCallback(
    (step: StepIndex) =>
      dispatchShippingFormState({ type: 'SET_CURRENT_STEP', payload: step }),
    []
  )

  return (
    <ShippingFormContext.Provider
      value={{
        ...state,
        dispatchShippingFormState,
        goNextStep,
        goPreviousStep,
        reset,
        setCurrentStep,
      }}
    >
      {children}
    </ShippingFormContext.Provider>
  )
}
