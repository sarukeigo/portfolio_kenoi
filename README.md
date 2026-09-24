# Kenoi Salvador — Engineering Portfolio

A responsive portfolio focused on spacecraft and systems engineering, built with semantic HTML, CSS, and a small amount of vanilla JavaScript. The dark theme uses the supplied HyTi launch photograph as its background, with near-black surfaces, deeper overlays, and green accents drawn from the supplied polo portrait. Buttons use the sampled shirt green, with a lighter green tint for text and focus indicators. Supporting text and labels have been enlarged across desktop and mobile layouts. The original Avenir / Georgia typography is preserved. No package installation, framework, or build step is needed.

## Preview locally

From this repository, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://localhost:8080`. Stop the server with `Ctrl+C`.

## Where to edit

| File | Contents |
| --- | --- |
| `index.html` | Page text, projects, experience, publications, skills, education, contact links, and metadata |
| `styles.css` | Colors, typography, layout, responsive rules, print styles, and reduced-motion support |
| `script.js` | Detailed project content, mobile navigation, native project dialogs, and current-section navigation |
| `i18n.js` | Japanese translations, language switching, saved preference, and language-specific metadata |
| `assets/headshot.png` | Original supplied headshot, displayed with a CSS crop |
| `assets/hyti-launch.jpg` | Original supplied launch photograph, used as the page background with CSS overlays |
| `assets/neutron-2-patch.png` | Supplied Neutron-2 mission patch, cropped to its circular border in CSS |
| `assets/aeris-patch.png` | Supplied AERIS mission patch, cropped to its pentagonal border in CSS |
| `assets/aeris/` | Supplied spacecraft bus CAD, subsystem functions diagram, and power / communication interface diagram |
| `assets/uh-aiaa-patch.png` | UH AIAA student branch patch reused from the AIAA website project |
| `assets/aiaa/astrotalk-loral-ohara.jpg` | Original supplied AstroTalk group photograph for the AIAA leadership panel |
| `assets/aiaa/sato-kun.png` | Supplied Sato-kun portrait, cropped to its oval frame in CSS |
| `assets/hawaii-space-grant-logo.png` | Hawaiʻi Space Grant Consortium logo reused from the AIAA website project |
| `assets/rose-lab-patch.png` | Supplied RoSE Lab patch, cropped to its magenta circular border in CSS |
| `assets/rose/` | Supplied rover CAD, workbench build photo, and wheel hardware photo |
| `assets/neutron-2/` | User-supplied integrated CAD, CDR thermal model, structural FEA image, and team photograph for the Neutron-2 case study |
| `assets/hsgc/` | User-supplied Callisto-Sat patch (circular CSS crop), Artemis Kit CAD, and SatNOGs COMMs radio image |
| `assets/kenoi-salvador-resume.pdf` | Original supplied resume, available to view and download |
| `assets/publications/ssc26-raiii-07-neutron-2.pdf` | Original supplied Neutron-2 conference paper, linked from Publications |
| `assets/*.svg` | Original conceptual project illustrations and favicon |

When updating a project, edit its summary and no-JavaScript details in `index.html` and its expanded content in `script.js`. Neutron-2 and AERIS use the supplied mission patches with circular and pentagonal CSS crops. Their source PNGs remain unchanged. The UH AIAA patch is copied from `image/branch-logo.png` in the existing AIAA website project and retains its transparent background and original colors. AIAA highlights student branch leadership and outreach.

## Content sources

Personal experience and contributions come from the supplied **Salvador, Kenoi - Resume.pdf**, with the user’s correction that the AERIS Chief Engineer role ended in December 2025. The AERIS tile, details, bio, and Experience section reflect that end date and use past tense. The downloadable resume remains the original supplied file. No degree title, graduation date, proficiency rating, launch completion, or quantified engineering outcome has been invented.

The home page introduces Kenoi as an Aerospace Engineer with the tagline “Pursuing a career in the stars.” The Japanese version uses the supplied name サルヴァドル  希之唯 throughout visible text, accessible descriptions, and page metadata. The bio connects his engineering and student leadership background in Hawaiʻi with his stated plans to study and work in Japan; it does not invent Japanese employers, partnerships, or qualifications.

The Publications section lists the title, author order, conference, and paper number from the supplied **SSC26-RAIII-07 - Paper.pdf**. The paper is linked unchanged as a direct PDF download.

Background links:

- [HSFL Neutron-2 mission](https://www.hsfl.hawaii.edu/missions/neutron-2/)
- [UH News: original VIA-SEEs / CSLI selection announcement, April 2023](https://www.hawaii.edu/news/2023/04/25/student-team-develop-cubesat/)
- [UH AIAA student branch](https://uhaiaa.github.io/uhaiaa-website/)
- [Hawaiʻi Space Grant Consortium](https://www.spacegrant.hawaii.edu/)

AERIS’s name, 6U format, and personal responsibilities come from the resume. The older VIA-SEEs announcement is linked as historical background; its projected launch dates are not treated as current. The AIAA presidency dates and contributions also come from the resume, consistent with the Experience section.

The AERIS case study opens with the supplied bus CAD and summarizes the former Chief Engineer role in a paragraph. It connects the user's SPATIUM internship and Artemis Kit flatsat assembly to the later Callisto-Sat upgrade, then explains the user's Capella MBSE diagrams through their visible functions, data flows, power paths, and communication interfaces. All three images are unchanged and link to full-size originals. The text does not attribute authorship of the bus CAD or claim completed hardware validation; the Chief Engineer end date remains December 2025.

Neutron-2 remains featured above a two-column grid: AIAA and Hawaiʻi Space Grant Consortium on the first row, followed by AERIS and RoSE Lab. Tiles stack in that order on phones. The Space Grant tile highlights the resume’s undergraduate research internship, satellite hardware integration and testing, CubeSat radio communications, and firmware packet-loss investigation. RoSE Lab is presented as the user's introductory engineering role, with the confirmed Mechanical Engineer title, rover construction, and wheel design contributions. Its case study uses the supplied rover CAD and two hardware photos unchanged, with full-size links. No role dates, manufacturing methods, test results, or performance improvements are inferred.

Neutron-2 opens a longer case study with spacecraft design, thermal analysis, structural FEA, and leadership / LEAN sections. The user supplied the CAD, CDR thermal model, structural analysis image, and team photo and confirmed progression through SRR, SCR, PMR, PDR, and CDR. The FEA section describes experience with a SolidWorks static displacement study of the 3U frame and notes that deformation is magnified; it does not conflate the displacement color scale with the separate equivalent-strain table in the supplied image. The case study does not claim structural qualification, factors of safety, specific thermal margins, test validation, review dates, or quantified LEAN outcomes. Its leadership section reflects the stated LEAN implementation and mentoring focus; concrete practices can be added when supplied. All four images are copied unchanged; technical images have links to the full-resolution originals.

The AIAA leadership panel summarizes event organization, professional connections, and outreach while describing growth from the founder’s foundation. The user identified AstroTalk with Loral O’Hara as the club’s biggest event and supplied its group photograph. The image is shown uncropped and links to the full-size original; no attendance count or event date has been inferred.

The Neutron-2 thermal model is featured at full content width with supporting notes below. Structural FEA uses a smaller image beside its explanation on desktop; the layout stacks on smaller screens.

Sato-kun’s section draws on the existing AIAA website’s mascot profile and community event captions. It explains the mascot’s outreach role and links to that profile, without attributing the mascot’s creation to Kenoi. The supplied portrait is displayed through an oval CSS crop; its source file is unchanged.

HSGC opens a Callisto-Sat case study about SatNOGs COMMs integration, F′/SPI flight-software work, and MBSE manuals with a reusable Capella library. AERIS: SPATIUM appears beneath it, explaining the user's Artemis Kit flatsat work and how the limitations encountered led to the upgrade. The supplied extension report was used only as a reference: it is not copied, embedded, linked, or included in the repository. TRL 7 is a development goal, not an achieved result; proposed schedules, launch opportunities, and hardware validation are not presented as completed milestones.

The case-study markup lives inside each project's `<details>` element in `index.html` for access without JavaScript. Opening a project moves its original nodes into the expanded dialog; closing it restores them. This keeps the English/Japanese text synchronized without duplicating case-study content. The close button stays available while scrolling.

The visible contact section uses the supplied university email, LinkedIn, and the GitHub account from the requested repository. The downloadable original resume also contains the supplied phone number.

## GitHub Pages

Public portfolio: [sarukeigo.github.io/portfolio_kenoi](https://sarukeigo.github.io/portfolio_kenoi/)

GitHub Pages deploys from the `main` branch and `/ (root)`, with HTTPS enforced. Updates committed to `main` trigger a new deployment. The `.nojekyll` file keeps the site as plain static HTML, CSS, JavaScript, and assets.

The canonical URL and Open Graph URLs use the public Pages address, including an absolute URL for the headshot preview image. Update them if the domain changes. Page links and assets remain relative so they also work in the local preview.

The site has no analytics, third-party fonts, tracking scripts, or contact-form backend.

## Accessibility and maintenance

- The header contains a keyboard-accessible English / 日本語 sliding switch. It updates page copy, accessible labels, image descriptions, metadata, and project dialogs. English remains the default when no preference is available. The chosen language is saved locally when storage is available; `?lang=ja` and `?lang=en` support direct links and take precedence over the saved preference.
- Japanese copy is stored in `japaneseCopy` in `i18n.js`, keyed by the exact English source text. When editing English copy in HTML or project data, update the corresponding translation key. Proper names and software brands remain unchanged. The PDFs remain in English and are labeled accordingly in Japanese mode. Japanese fonts use local system fallbacks; no translation service or font request is required.
- Main content, project overviews, contact links, and resume links are available without JavaScript. Native `<details>` elements provide fallback project contributions.
- Project dialogs use native `<dialog>` for keyboard focus containment, Escape to close, and an explicit close control; focus returns to the originating project link.
- The mobile menu exposes its expanded state, closes on selection or Escape, and restores useful keyboard focus.
- Keyboard focus is visible, a skip link bypasses navigation, and reduced-motion preferences disable animation and smooth scrolling.
- Desktop, tablet, and phone layouts, image loading, section navigation, resume downloads, project dialogs, and console errors should be checked when updating the site.

## Useful next additions

1. Confirm degree name, anticipated graduation date, and current role dates.
2. Add approved project photos or CAD renders and specific individual deliverables.
3. Expand mission case studies with requirements, design tradeoffs, validation evidence, and measurable results.
