# SenAxis Technologies website

Static website (HTML, CSS, a little JavaScript). No build step. Deploys directly to Netlify.

## Pages
- `index.html` Home (hero, services, concept work, process, about, FAQ, contact form)
- `about.html` About us
- `privacy-policy.html` Privacy Policy (written around the Philippine Data Privacy Act of 2012)
- `terms-of-use.html` Terms of Use
- `thank-you.html` Shown after the contact form is sent (not indexed)
- `404.html` Branded not-found page

## Deploy (Netlify)
1. Upload this folder (or connect the Git repo). Publish directory is `.` (already set in `netlify.toml`).
2. In Netlify: Site settings > Forms. The contact form is detected automatically on deploy.
   Set up an email notification there so enquiries reach you.
3. Add your custom domain and enable HTTPS.

## Before you launch: edit these
1. **Domain.** The placeholder `https://senaxistech.com` is used in every page head, `sitemap.xml` and
   `robots.txt`. If your domain is different, find and replace it across all files.
2. **Email.** `hello@senaxistech.com` appears in the pages and in the Privacy Policy. Make sure that inbox exists.
3. **Legal pages.** The Privacy Policy and Terms are solid general drafts, not legal advice. Please have a
   qualified Philippine lawyer review them, and add your registered business name and address if you have one.
   Confirm the 24-month retention period in the Privacy Policy matches how you actually work.
   Under the Data Privacy Act you should also designate someone responsible for data privacy (it can be you).
4. **Security headers.** `netlify.toml` includes a strict Content-Security-Policy. If you later add Google Analytics,
   a chat widget or any third-party script, add its domain to the policy, and update the Privacy Policy
   (Section 8, Cookies) and add a consent banner where required.

## Google checklist
- Verify the site in **Google Search Console** (use the DNS option or add the HTML meta tag to the `<head>` of `index.html`), then submit `https://yourdomain/sitemap.xml`.
- Create a **Google Business Profile** and use the same business name and email.
- Done in the code already: unique titles and descriptions, canonical URLs, Open Graph/Twitter cards, structured data
  (Organization, WebSite, AboutPage, BreadcrumbList), favicons in the sizes Google requires, sitemap, robots.txt,
  mobile-first responsive layout, HTTPS-ready, self-hosted fonts (no third-party requests), lazy-loaded images,
  alt text, skip link and keyboard focus styles.
- To strengthen trust over time: add a real founder/team section with names and photos on `about.html`, link your social profiles
  (then add them as `sameAs` in the Organization data), and add real client work to the portfolio with permission.

## Images
Artwork lives in `assets/img/`. See `PHOTO-PROMPTS.md` if you want to swap in photographs.
Logo files: `logo.png` (full emblem), `logo-mark.png` (transparent symbol used in the header), icons in `assets/icons/`.
