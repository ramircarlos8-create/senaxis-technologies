# Swapping in real photos (optional)

The site ships with custom illustrated artwork in `assets/img/` (SVG, so it stays sharp and loads fast).
If you'd rather use photographs or AI-generated images, generate them with the prompts below, save
them as WebP or JPG, and replace the matching file. Then update the `src` in the HTML
(for example `hero-bg.svg` to `hero-bg.webp`).

Tips: keep each file under about 250 KB (use squoosh.app), keep the width/height attributes the same
ratio as the original, and write a short, honest `alt` description for any image that carries meaning.
Use only images you have the rights to use.

| File | Size | Prompt |
|---|---|---|
| hero-bg | 1920x1080 | Cinematic dark-navy workspace, a laptop and a phone showing a clean modern ecommerce website, soft electric-blue rim lighting, shallow depth of field, large empty dark area on the left for text, no readable text, no logos |
| svc-web | 800x500 | Overhead view of a designer's desk, laptop showing a modern business website, notebook with wireframe sketches, cool blue ambient light, dark navy tones |
| svc-shopify | 800x500 | Neatly packed online-store orders on a desk, kraft boxes and a laptop showing a product page, soft daylight with blue accents, no brand logos |
| svc-redesign | 800x500 | Split composition: left half a cluttered outdated website on a monitor, right half the same site redesigned clean and modern, dark navy background |
| svc-support | 800x500 | Monitor showing a website analytics and uptime dashboard, dark room, blue glow, close-up, no readable text |
| about-studio | 900x700 | Small web studio at dusk, two monitors on a desk by a large window with a city skyline, warm desk lamp, plant, calm professional mood |
| contact-globe | 900x800 | Glowing digital globe on a dark navy background with light arcs connecting the Philippines to other countries, no text |

For a real team photo (best for trust and Google's E-E-A-T signals), add one to `about.html` with names and roles.
