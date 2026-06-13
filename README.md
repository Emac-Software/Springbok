# Springbok Media

Marketing website for Springbok Media, built with Vite + React and Tailwind CSS.

## Stack

- **Frontend:** Vite + React, Tailwind CSS, React Router
- **Email:** Cloudflare Worker → Resend API
- **Rate limiting:** Upstash Redis (on the Worker)
- **Hosting:** Hostinger (static)

## Local Development

```bash
npm install
npm run dev
```

Create a `.env` file in the project root:

```env
VITE_WORKER_URL=your_cloudflare_worker_url
```

## Cloudflare Worker

The contact form submits to a Cloudflare Worker that handles email delivery via Resend and rate-limits requests using Upstash Redis.

Set the following secrets on the Worker (via the Cloudflare dashboard or `wrangler secret put`):

```
RESEND_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

## Deployment

```bash
npm run build
```

Upload the `dist/` folder to Hostinger.
