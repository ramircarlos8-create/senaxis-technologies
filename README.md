# SenAxis Technologies website

A responsive, static business website for SenAxis Technologies. Built with HTML, CSS, and vanilla JavaScript so it can be hosted on Netlify's free plan without a build step.

## Included

- Responsive homepage with business websites and Shopify/e-commerce as primary service pillars
- Services, concept portfolio, process, about, FAQ, and contact sections
- Mobile navigation and accessible form controls
- SEO title, meta description, canonical URL, Open Graph metadata, JSON-LD, `robots.txt`, and `sitemap.xml`
- Netlify Forms-compatible project inquiry form with honeypot spam field and thank-you page
- Basic security headers in `netlify.toml`
- SVG favicon and social-sharing graphic

## Before publishing

1. Confirm the correct custom domain. The current metadata uses `https://senaxistech.com/` as a placeholder based on the intended brand domain. Change it in `index.html`, `robots.txt`, and `sitemap.xml` if your actual domain differs.
2. Confirm `hello@senaxistech.com` is active, or replace it with the correct business email.
3. Review all copy and services to ensure they match what SenAxis can currently deliver.
4. Portfolio cards are explicitly labeled concept demos, not client work. Keep this disclosure until real case studies are available.
5. This is a static site. The contact form is configured for Netlify Forms; it will be processed after the site is deployed to Netlify with form detection enabled. Submit a test inquiry after deployment and check Netlify's Forms area. If form detection was not enabled at first deploy, enable it and redeploy.
6. Google Fonts is loaded remotely. If you prefer no third-party font request, remove the font links and use system fonts in `styles.css`.

## Deploy to Netlify from GitHub

1. Create a new GitHub repository named `senaxis-technologies` (public or private is your choice).
2. Upload the contents of this folder to the repository root. Ensure `index.html`, `styles.css`, `script.js`, `netlify.toml`, and `assets/` are at the root level—not nested inside another `senaxis-technologies/` folder.
3. Sign in to Netlify and choose **Add new project → Import an existing project**.
4. Select GitHub, authorize Netlify, and choose `senaxis-technologies`.
5. Set the production branch to `main`. Build command: leave blank. Publish directory: `.`.
6. Deploy. Netlify will publish the site and automatically redeploy when you push changes to the connected branch.
7. In your Netlify project, check Forms and submit a test inquiry.
8. When ready, add your custom domain under **Domain management** and follow the DNS instructions shown by Netlify. Do not change DNS until you're ready to move the live domain from Framer.

## Update later

Edit the files in GitHub's web interface or locally, commit the changes, and push to the connected branch. Netlify will run a new deploy automatically.

## Important notes

- Netlify free plan usage limits and terms may change. Review the current plan before launch.
- A custom domain name registration is separate from free hosting; you can initially use the Netlify subdomain.
- No analytics, tracking pixels, paid integrations, or fabricated testimonials have been added.
