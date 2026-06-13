# Springbok
https://springbok-eight.vercel.app/

Have a cloudflare worker (cloud function) to handle sending emails
Need to set theses secrets in cloudflare: 
```
RESEND_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Need .env in root folder:
```
VITE_WORKER_URL
```