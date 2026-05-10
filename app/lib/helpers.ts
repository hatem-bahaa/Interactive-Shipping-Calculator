import type {
  DestinationAddress,
  OriginAddress,
  PackageDimensions,
} from '../routes/find-courier/schemas'
import type { ChipProps } from '@mui/material/Chip'

export const formatAddressLines = (
  addr: OriginAddress | DestinationAddress
): string[] => {
  const street = [addr.buildingNumber, addr.street].filter(Boolean).join(' ')
  const floorApt = [
    addr.floor && `Floor ${addr.floor}`,
    addr.apartment && `Apt ${addr.apartment}`,
  ]
    .filter(Boolean)
    .join(', ')
  const cityLine = [addr.area, addr.city, addr.governorate]
    .filter(Boolean)
    .join(', ')

  return [
    addr.contactName,
    addr.contactPhone,
    street,
    floorApt,
    cityLine,
    addr.postalCode || undefined,
    addr.landmark ? `Landmark: ${addr.landmark}` : undefined,
  ].filter((line): line is string => Boolean(line))
}

export const formatPackageLines = (pkg: PackageDimensions): string[] => {
  const lines: string[] = [
    `${pkg.weightKg} kg`,
    `${pkg.lengthCm} × ${pkg.widthCm} × ${pkg.heightCm} cm`,
  ]
  if (pkg.contents) {
    lines.push(`Contents: ${pkg.contents}`)
  }
  if (pkg.isFragile) {
    lines.push('Marked as fragile')
  }
  return lines
}

export const formatCurrency = (amount: number, currency: string): string =>
  `${amount.toLocaleString()} ${currency}`

export const getCourierBadgeColor = (badge: string): ChipProps['color'] => {
  switch (badge) {
    case CourierBadges.CHEAPEST_DELIVERY:
      return 'success'
    case CourierBadges.FASTEST_DELIVERY:
      return 'warning'
    default:
      return 'default'
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Enums

export enum ShippingFormIds {
  ORIGIN = 'step-origin',
  DESTINATION = 'step-destination',
  PACKAGE = 'step-package',
}

export enum CourierBadges {
  CHEAPEST_DELIVERY = 'Cheapest delivery',
  FASTEST_DELIVERY = 'Fastest delivery',
}
