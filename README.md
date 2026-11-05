# PIKO storefront demo

A frontend-only React + TypeScript storefront and seller dashboard. Product data, cart contents, wishlist, demo account, categories and orders are kept in browser `localStorage`; payment details are never verified or sent to a service.

## Run locally

```sh
npm install
npm run dev
```

Open `/` for the customer store. Use **Account → Admin demo** or visit `/admin` and follow the demo sign-in to explore seller tools. The **Reset demo data** action restores the starter catalogue and clears browser-local demo state.

The product artwork is original CSS-rendered placeholder design. The pasted brief mentioned an official wax-seal logo, but no logo asset was included in the workspace, so the interface uses a typographic PIKO label until that original file is provided.
