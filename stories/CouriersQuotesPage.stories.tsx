import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

import { useQuotes } from '../app/routes/couriers-quotes/hooks/useQuotes.mock'
import {
  ShippingFormContext,
  type ShippingFormAction,
  type StepIndex,
} from '~/context/ShippingFormContext'
import CouriersQuotesPage from '~/routes/couriers-quotes/CouriersQuotesPage'
import type {
  CourierQuote,
  DestinationAddress,
  OriginAddress,
  PackageDimensions,
} from '~/routes/find-courier'

const SAMPLE_ORIGIN: OriginAddress = {
  contactName: 'Hatem Bahaa',
  contactPhone: '01012345678',
  country: 'EG',
  governorate: 'Cairo',
  city: 'Cairo',
  area: 'Maadi',
  street: '9th Street',
  buildingNumber: '12',
  floor: '3',
  apartment: '5',
  postalCode: '11431',
  landmark: 'Near Maadi metro',
}

const SAMPLE_DESTINATION: DestinationAddress = {
  contactName: 'Sara Ahmed',
  contactPhone: '+971501234567',
  country: 'AE',
  governorate: 'Dubai',
  city: 'Dubai',
  area: 'Downtown',
  street: 'Sheikh Mohammed bin Rashid Blvd',
  buildingNumber: '8',
  floor: '12',
  apartment: '1204',
  postalCode: '',
  landmark: 'Near Burj Khalifa',
  confirmInternational: true,
}

const SAMPLE_PACKAGE: PackageDimensions = {
  weightKg: 5,
  lengthCm: 30,
  widthCm: 20,
  heightCm: 15,
  contents: 'Documents and small electronics',
  isFragile: true,
}

const SAMPLE_QUOTES: CourierQuote[] = [
  {
    id: 'aramex-standard',
    courier: {
      id: 'aramex',
      name: 'Aramex',
      logoUrl: 'https://logo.clearbit.com/aramex.com',
      rating: 4.4,
      tagline: 'Worldwide express delivery',
    },
    service: 'standard',
    currency: 'EGP',
    totalBeforeTax: 95,
    tax: 13,
    total: 108,
    estimatedDeliveryTime: '2-4 business days',
    badges: [],
  },
  {
    id: 'aramex-express',
    courier: {
      id: 'aramex',
      name: 'Aramex',
      logoUrl: 'https://logo.clearbit.com/aramex.com',
      rating: 4.4,
      tagline: 'Worldwide express delivery',
    },
    service: 'express',
    currency: 'EGP',
    totalBeforeTax: 150,
    tax: 21,
    total: 171,
    estimatedDeliveryTime: '1-2 business days',
    badges: ['Fastest delivery'],
  },
  {
    id: 'bosta-standard',
    courier: {
      id: 'bosta',
      name: 'Bosta',
      logoUrl: 'https://logo.clearbit.com/bosta.co',
      rating: 4.3,
      tagline: "Egypt's fastest e-commerce courier",
    },
    service: 'standard',
    currency: 'EGP',
    totalBeforeTax: 70,
    tax: 10,
    total: 80,
    estimatedDeliveryTime: '2-3 business days',
    badges: ['Best value'],
  },
]

const noop = () => undefined
const noopDispatch: (action: ShippingFormAction) => void = () => undefined

const ShipmentDecorator: Decorator = (Story) => (
  <ShippingFormContext.Provider
    value={{
      origin: SAMPLE_ORIGIN,
      destination: SAMPLE_DESTINATION,
      packageInfo: SAMPLE_PACKAGE,
      currentStep: 2 as StepIndex,
      goNextStep: noop,
      goPreviousStep: noop,
      reset: noop,
      setCurrentStep: noop,
      dispatchShippingFormState: noopDispatch,
    }}
  >
    <Story />
  </ShippingFormContext.Provider>
)

const meta = {
  title: 'Pages/CouriersQuotesPage',
  component: CouriersQuotesPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [ShipmentDecorator],
} satisfies Meta<typeof CouriersQuotesPage>

export default meta

type Story = StoryObj<typeof meta>

export const Success: Story = {
  beforeEach: () => {
    useQuotes.mockReturnValue({
      quotes: SAMPLE_QUOTES,
      isLoading: false,
    })
  },
}

export const Loading: Story = {
  beforeEach: () => {
    useQuotes.mockReturnValue({
      quotes: [],
      isLoading: true,
    })
  },
}

export const Empty: Story = {
  beforeEach: () => {
    useQuotes.mockReturnValue({
      quotes: [],
      isLoading: false,
    })
  },
}
