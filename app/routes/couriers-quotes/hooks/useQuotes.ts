import { useContext, useEffect, useState } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import {
  CourierQuoteListSchema,
  type CourierQuote,
} from '~/routes/find-courier'
import { COURIER_SEEDS } from '~/lib'

export const useQuotes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotes, setQuotes] = useState<CourierQuote[]>([])
  const ctx = useContext(ShippingFormContext)

  const getCourierQuotes = async () => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1000) // we can use data from ctx to query couriers from backend
      })

      const result = CourierQuoteListSchema.safeParse(flattenSeeds())
      if (!result.success) {
        throw new Error(
          `getCourierQuotes: response failed schema validation — ${result.error.message}`
        )
      }

      // use this to toggle between success and empty state
      setQuotes(result.data)
      // setQuotes([])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCourierQuotes()
  }, [ctx])

  return { quotes, isLoading }
}

const flattenSeeds = (): CourierQuote[] => {
  return COURIER_SEEDS.flatMap((seed) =>
    seed.services.map((svc) => ({
      id: `${seed.courier.id}-${svc.level}`,
      courier: seed.courier,
      service: svc.level,
      currency: 'EGP',
      totalBeforeTax: svc.totalBeforeTax,
      tax: svc.tax,
      total: svc.total,
      estimatedDeliveryTime: svc.estimatedDeliveryTime,
      badges: [...svc.badges],
    }))
  )
}
