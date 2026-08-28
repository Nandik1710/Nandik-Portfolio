# Nandik Dawar — Personal Portfolio

Personal portfolio for Nandik Dawar, built with Next.js, TypeScript, React and Tailwind CSS.

## Setup

```bash
git clone <repository>
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production:

```bash
npm run build
npm start
```

Copy `.env.local.example` to `.env.local` and fill in the contact form variables before enabling email delivery.

## Environment variables

Create a local environment file with:

```bash
cp .env.local.example .env.local
```

Required variables:

- `RESEND_API_KEY` — server-only Resend API key used by `/api/contact`. Never expose or commit this value.
- `CONTACT_EMAIL` — recipient email address for contact form messages. This is read on the server only.
- `NEXT_PUBLIC_SITE_URL` — public site origin, such as `https://your-domain.com`, used for canonical URLs, OpenGraph metadata, sitemap, and robots.

Do not commit `.env.local` or real credentials. The contact API returns a temporary-service response when Resend variables are not configured locally.

The CV actions in the hero are enabled by `public/Nandik-Dawar-Resume.pdf`. The View CV action opens the PDF in a new tab and Download CV saves it locally.

## Contact form behavior

The form validates fields in the browser and again in `/api/contact` with Zod. The server strips tags and control characters, applies a basic IP-based rate limit, rejects the honeypot field, and sends through Resend without exposing the API key to client code. The sender address is `onboarding@resend.dev` for the default Resend setup; use a verified sending domain in production if your Resend account requires one.
