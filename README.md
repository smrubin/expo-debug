This repo serves as a minimally reproducible example of an issue whereby expo-router loses context and/or redirects out of the requested route.

This issue exists when all of the following conditions are met:
1. A code path in the root _layout does not yield a Slot on the first render
2. Async routes are enabled
3. The app is built and served. It is not reproducible with expo start.

To reproduce:

1. Clone this repo
2. Run `npm install`
3. Run `npm run build`
4. Run `npx serve dist --single`
5. Navigate to `http://localhost:{port}/home` in your browser and open DevTools.
6. The log `AuthedAppLayout href: ${window.location.href}` will output the root route `/` instead of `/home` as the current value of window.location.href.
