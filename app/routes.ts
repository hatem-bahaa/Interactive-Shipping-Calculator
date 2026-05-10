import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('find-courier', 'routes/find-courier/FindCourierPage.tsx'),
  route('couriers-quotes', 'routes/couriers-quotes/CouriersQuotesPage.tsx'),
] satisfies RouteConfig
