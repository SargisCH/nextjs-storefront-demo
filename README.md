This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

DEMO: https://nextjs-storefront-demo.vercel.app/

## Getting Started

First, install the packages
```bash
npm i
```
then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## NOTES:

for OG route I used img native html tag:
next/image is a React component that relies on the browser and Next.js runtime, which isn’t available inside the OG Image Response (ImageResponse from next/og).
But to optimize the image I utilized the proxy pattern to at least be able to cache it in the next.js routes.
I did proxy the image through a /api/image route. I this way next route can cache the image once loaded and not rely on the external image url.
please check ```app/api/image/route.tsx```
