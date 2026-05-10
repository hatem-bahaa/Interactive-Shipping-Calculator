// This is a mock for the useQuotes hook, it is used in storybook to test the couriers quotes page.
import { fn } from 'storybook/test'

import * as actual from './useQuotes'

export const useQuotes = fn(actual.useQuotes).mockName('useQuotes')
