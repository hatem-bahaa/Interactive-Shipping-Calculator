# Interactive Shipping Calculator

A React Router app for comparing courier quotes from shipment details.

## What It Does

Users enter origin address, destination address, and package dimensions through a multi-step form. The app validates the shipment details, keeps a live summary beside the form, then shows matching courier quotes with prices and delivery estimates.

## Tech Stack

- React Router
- React
- TypeScript
- Material UI
- React Hook Form
- Zod
- Storybook
- ESLint

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
npm run storybook
```

## Instructions

- To see empty state of couriers page go to [`useQuotes.ts`](./app/routes/couriers-quotes/hooks/useQuotes.ts):
  - comment `setQuotes(result.data)`
  - uncomment `setQuotes([])`

## Questions

### Q1: How would you handle an API error, for example if the DHL rate service is down?

Since the backend handles all courier API communication, the frontend should focus on presenting backend failures clearly and keeping the user in control.

- Show a clear error state with a retry button if the full quotes request fails.
- Use timeouts and retry logic on the backend for temporary courier outages, ideally with exponential backoff.
- Support partial results when possible. If DHL fails but other couriers succeed, the UI should still show the successful courier cards and mark DHL as unavailable.
- Do not assume a `200` response means everything succeeded. With GraphQL, for example, the response can include both `data` and `errors`, so the UI should inspect both.
- Keep each courier card independent. A failed courier should not block the rest of the available courier options.
- Treat quoting and booking as separate operations. A successful quote does not guarantee a successful booking.
- If booking fails, keep the user on the results page, preserve the shipment details, and allow them to choose another courier without filling the form again.
- Show actionable error messages when available, such as package weight limits, unsupported destination, or service temporarily unavailable.

### Q2: How would you optimize bundle size for slow 3G connections in emerging markets?

- Apply route-based code splitting. React Router does this automatically, so instead of one big `bundle.js` file, there are multiple chunks served only when requested.
- Lazy-load non-critical UI, like charts, maps, or heavy modals.
- Use manual chunks in the build config for big libraries and packages. This helps caching because these packages do not change much, unlike the app code itself.
- Use lightweight image formats like WebP and SVG icons.
- Avoid unnecessary packages that bloat the bundle size. Keep `package.json` clean and replace heavy packages with lighter alternatives when possible.
- Enable tree shaking in the bundling tool, which helps remove unused code that is not imported.
- Avoid importing entire libraries. Importing only what is needed helps tree shaking work well.
- Self-host app fonts and using only variations needed.
