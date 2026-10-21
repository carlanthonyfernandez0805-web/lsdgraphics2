# LSD Graphics: build notes for GHL

## Brand colours
| Use | Hex |
|---|---|
| Black (header, hero, footer, dark panels) | #0B0B0B |
| Black, raised surfaces | #161616 |
| Gold (from the LSD logo): buttons, accents, stripes | #FFD400 |
| Gold, button hover | #F2C600 |
| Soft gold (thin stripe accent) | #FFE57A |
| Dark gold (small gold text on white, e.g. eyebrow labels) | #7A5F00 |
| White | #FFFFFF |
| Off-white section background | #F5F5F2 |
| Body text on white | #0B0B0B |
| Muted text on white | #5D5D57 |
| Muted text on black | #BDBDB5 |

Buttons: gold background with black text. On the gold CTA band, use a black button with white text.

## Fonts (Google Fonts)
- Headings: **Bricolage Grotesque**, weight 700, letter-spacing about -0.03em
- Body, buttons, labels: **DM Sans**, weights 400 / 500 / 700
- Small labels ("OUR SERVICES", etc.): DM Sans 700, uppercase, letter-spacing 0.14em, 13px

## Logo files (logo pack)
- Black header/footer: `lsd-graphics-logo-horizontal-gold-white` (gold LSD, white GRAPHICS)
- White backgrounds: `lsd-graphics-logo-horizontal-black`
- Stacked versions are for square spots (social profile, favicon, invoices).
SVG is sharpest; use the PNG if GHL won't accept SVG.

## Photo file names (if using the HTML version)
Put these next to index.html (same level, no folder). Until a file exists, the stripe artwork shows instead.
- `hero.jpg`: landscape, 2400 × 1200 or larger, main subject on the right
- `work-vehicle-wrap.jpg`, `work-fleet-branding.jpg`, `work-storefront.jpg`,
  `work-wall-graphics.jpg`, `work-banners-displays.jpg`: 1600 × 1200 (4:3)
- `owner-romer-fontanilla.jpg`, `owner-david-masongsong.jpg`: 800 × 1000 (4:5), same crop for both

## AI image prompts (ChatGPT / any image generator)
Tip: AI images render signs and lettering as gibberish, so each prompt asks for abstract shapes instead of words.

**Hero (16:9)**
Photorealistic photo of a black commercial cargo van with a bold black-and-gold vinyl wrap made of sweeping diagonal stripes, parked outside a modern industrial unit at dusk. The van sits on the right third of the frame, with dark, empty space on the left. Moody, premium lighting with warm highlights and wet pavement reflections. No readable text, no logos, no brand names.

**Vehicle Wraps (4:3)**
Photorealistic close-up three-quarter view of a pickup truck with a fresh full vinyl wrap in matte black with gold diagonal livery stripes, inside a clean, bright wrap-shop bay. Crisp reflections, professional automotive photography. No readable text or logos.

**Fleet Branding (4:3)**
Photorealistic photo of three identical white delivery vans parked side by side in a lot, each with matching black-and-gold side graphics made of diagonal stripes and a simple abstract emblem. Overcast daylight, even exposure. No readable text or real brand names.

**Storefronts (4:3)**
Photorealistic street-level photo of a small modern storefront in a Toronto neighbourhood, with a black fascia sign featuring an illuminated gold abstract logo shape and frosted window graphics with gold accents. Early evening, warm interior glow. No readable words on the sign or windows.

**Wall Graphics (4:3)**
Photorealistic photo of a modern office reception area with a large black-and-gold wall mural of diagonal stripes, plus a raised dimensional gold emblem on the wall. Clean, bright, architectural photography. No readable text or logos.

**Banners & Displays (4:3)**
Photorealistic photo of a trade-show booth with two black-and-gold roll-up banners and a matching backdrop wall, all using diagonal gold stripes and abstract shapes. Bright event-hall lighting. No readable text or brand names.

**Owner headshots (4:5)**, used with each owner's Facebook photo attached:
Turn the person in the attached photo into a professional corporate headshot. Keep his face, features, skin tone and hair exactly the same. Chest-up, facing the camera, natural friendly expression, dark business-casual shirt, plain charcoal-grey studio background, soft even lighting, sharp focus. 4:5 portrait.
Use the same prompt for both owners so the photos match. Have each owner approve his photo before launch.

## GHL build checklist
1. Create the site with two pages: **Home** (hero, services, our work, CTA) and **About Us** (intro, focus points, Meet the Owners, contact + quote form).
2. Add the two Google fonts and the colours above in the site's typography and colour settings, or via custom CSS.
3. Header: black background, logo on the left, links (Home, Services, Our Work, About Us, Contact) and a gold "Request a Quote" pill button.
4. Quote form: build it with GHL's form builder using Name, Email, Phone, Service needed (dropdown: Vehicle Wraps & Graphics, Fleet Branding, Storefront Signs & Window Graphics, Interior Signs & Wall Graphics, Banners & Displays, Other / Not sure yet) and Project details. Style the submit button gold.
5. Point every "Request a Quote" button to the About page's form section anchor.
6. Check the phone layout in GHL's mobile preview: sections should stack to one column.
