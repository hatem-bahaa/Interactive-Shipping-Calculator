import type { Courier, ServiceLevel } from '../routes/find-courier/schemas'

export interface ServicePricing {
  level: ServiceLevel
  totalBeforeTax: number
  tax: number
  total: number
  estimatedDeliveryTime: string
  badges: ReadonlyArray<string>
}

export interface CourierSeed {
  courier: Courier
  services: ReadonlyArray<ServicePricing>
}

export const COURIER_SEEDS: ReadonlyArray<CourierSeed> = [
  {
    courier: {
      id: 'aramex',
      name: 'Aramex',
      logoUrl: 'https://logo.clearbit.com/aramex.com',
      rating: 4.4,
      tagline: 'Worldwide express delivery',
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 95,
        tax: 13,
        total: 108,
        estimatedDeliveryTime: '2-4 business days',
        badges: [],
      },
      {
        level: 'express',
        totalBeforeTax: 150,
        tax: 21,
        total: 171,
        estimatedDeliveryTime: '1-2 business days',
        badges: ['Fastest delivery'],
      },
    ],
  },
  {
    courier: {
      id: 'bosta',
      name: 'Bosta',
      logoUrl: 'https://logo.clearbit.com/bosta.co',
      rating: 4.3,
      tagline: "Egypt's fastest e-commerce courier",
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 70,
        tax: 10,
        total: 80,
        estimatedDeliveryTime: '2-3 business days',
        badges: [],
      },
      {
        level: 'express',
        totalBeforeTax: 110,
        tax: 15,
        total: 125,
        estimatedDeliveryTime: '1-2 business days',
        badges: ['Fastest delivery'],
      },
    ],
  },
  {
    courier: {
      id: 'egypt-post',
      name: 'Egypt Post EPS',
      logoUrl: 'https://logo.clearbit.com/egyptpost.org',
      rating: 3.5,
      tagline: 'Nationwide postal coverage',
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 35,
        tax: 5,
        total: 40,
        estimatedDeliveryTime: '4-7 business days',
        badges: ['Cheapest delivery'],
      },
    ],
  },
  {
    courier: {
      id: 'mylerz',
      name: 'Mylerz',
      logoUrl: 'https://logo.clearbit.com/mylerz.com',
      rating: 4.1,
      tagline: 'Smart last-mile in Egypt',
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 60,
        tax: 8,
        total: 68,
        estimatedDeliveryTime: '2-4 business days',
        badges: [],
      },
      {
        level: 'express',
        totalBeforeTax: 105,
        tax: 15,
        total: 120,
        estimatedDeliveryTime: '1-2 business days',
        badges: [],
      },
      {
        level: 'same-day',
        totalBeforeTax: 170,
        tax: 24,
        total: 194,
        estimatedDeliveryTime: 'Same day, within 6 hours',
        badges: [],
      },
    ],
  },
  {
    courier: {
      id: 'dhl',
      name: 'DHL Express',
      logoUrl: 'https://logo.clearbit.com/dhl.com',
      rating: 4.6,
      tagline: 'Premium express, end-to-end visibility',
    },
    services: [
      {
        level: 'express',
        totalBeforeTax: 220,
        tax: 31,
        total: 251,
        estimatedDeliveryTime: '1-2 business days',
        badges: [],
      },
      {
        level: 'same-day',
        totalBeforeTax: 390,
        tax: 55,
        total: 445,
        estimatedDeliveryTime: 'Same day, dedicated courier',
        badges: [],
      },
    ],
  },
  {
    courier: {
      id: 'jt-express',
      name: 'J&T Express',
      logoUrl: 'https://logo.clearbit.com/jtexpress.eg',
      rating: 4.0,
      tagline: 'Reliable value shipping',
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 55,
        tax: 8,
        total: 63,
        estimatedDeliveryTime: '3-5 business days',
        badges: [],
      },
      {
        level: 'express',
        totalBeforeTax: 95,
        tax: 13,
        total: 108,
        estimatedDeliveryTime: '1-3 business days',
        badges: ['Fastest delivery'],
      },
    ],
  },
  {
    courier: {
      id: 'r2s',
      name: 'R2S Logistics',
      logoUrl: 'https://logo.clearbit.com/r2s.com',
      rating: 3.8,
      tagline: 'Egypt-wide bulk & regional',
    },
    services: [
      {
        level: 'standard',
        totalBeforeTax: 45,
        tax: 6,
        total: 51,
        estimatedDeliveryTime: '3-6 business days',
        badges: [],
      },
    ],
  },
]
