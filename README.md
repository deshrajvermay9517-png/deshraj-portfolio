# Deshraj Verma Portfolio — V1

Recruiter-focused portfolio built with Next.js, TypeScript and Tailwind CSS.

## Included
- Responsive one-page portfolio
- Dark/light mode
- Experience, featured projects and filters
- Open-source contributions
- Skills, coding profiles, achievements, education
- FutureRouteX section
- Services and contact form
- Security headers + server-side validation + honeypot + basic rate limiting
- Central data file for easy future updates

## Main file for future edits
`src/data/portfolio.ts`

Projects, links, skills, stats, achievements and profile copy live here. This makes future updates simple instead of rebuilding the website.

## Add profile photo later
Put the image at:
`public/images/profile/deshraj.jpg`

Then update the hero component to render the image instead of the current `DV` placeholder. This is intentionally left for the final photo selection.

## Add safe public resume later
Put the phone-number-free PDF at:
`public/resume/deshraj-verma-resume.pdf`

Then set in `src/data/portfolio.ts`:
`resumeUrl: "/resume/deshraj-verma-resume.pdf"`

## FutureRouteX embeds
Exact Reel/YouTube links are still pending. Add them later without changing the overall design.

## Contact form
Copy `.env.example` to `.env.local` and add a Resend API key/from address. Direct email remains visible even before the form is configured.

## Run
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Before public deployment
1. Add final profile photo.
2. Add phone-free resume.
3. Verify all public URLs.
4. Add exact FutureRouteX embed links.
5. Configure contact form environment variables.
6. Run `npm run build`.
7. Push to GitHub and deploy through Vercel.

## Privacy rules already applied
Not published: phone number, exact address/hostel, roll number/student ID, DOB, API keys/tokens, private VSERV letter, confidential company data.

## V5 polish

- Reduced oversized vertical gaps between sections
- Added subtle section dividers and card hover polish
- Added responsive mobile navigation menu
- Improved FutureRouteX section structure for later embeds
- Kept the existing profile photo, safe resume, and contact-form architecture

## V6 fix
- Fixed FutureRouteX runtime crash when `content.selected` was missing.
- Added defensive rendering with `(p.content.selected ?? [])`.


## V7 — SEO & deployment preparation

Added:
- SEO metadata and canonical URL
- Twitter / Open Graph metadata
- auto-generated social preview image
- favicon / app icon
- web app manifest
- `robots.txt`
- `sitemap.xml`
- Person structured data (JSON-LD)
- `NEXT_PUBLIC_SITE_URL` environment variable support

### Production environment

When the final Vercel URL exists, set:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR-VERCEL-DOMAIN.vercel.app
```

Keep the existing Resend environment variables configured in Vercel as well.


## V8 — FutureRouteX embeds

Added the final selected content embeds:
- YouTube: Interactive 3D AGI Singularity
- YouTube: Interactive 11D String Theory / Calabi-Yau
- Instagram: 10K-view Reel
- Instagram: 9K+ view Reel

YouTube uses the privacy-enhanced `youtube-nocookie.com` embed domain. Instagram uses official Reel embed URLs.
