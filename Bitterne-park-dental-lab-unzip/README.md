# Bitterne Park Dental Laboratory website

A standalone, responsive, 23-page static website for GitHub + Cloudflare Pages.
Prepared for https://www.bitterneparkdentallab.co.uk (singular **lab**).

## Start here

1. Extract this ZIP.
2. Create a GitHub repository, for example `bitterne-park-dental-lab` (private is fine).
3. Upload the contents of this folder into the repository. `public` must be a top-level folder in the repository, beside this README and `build.py`. Do not upload the ZIP itself as the website.
4. Commit the files to the `main` branch.
5. In Cloudflare, open Workers & Pages and create a **Pages** project using Git integration. Connect the repository.
6. Choose these settings:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `public` |
| Root directory | Leave blank (repository root) |
| Environment variables | None required |

7. Deploy and review the temporary `pages.dev` address. Test the homepage, menu, internal pages, phone and email links on your phone and computer.
8. In the Pages project's **Custom domains**, add `www.bitterneparkdentallab.co.uk` and follow the DNS instructions. Add the domain inside Pages first, before creating its CNAME. Its CNAME target will be the actual Pages address assigned to your project, not a placeholder from this guide.
9. Also configure `bitterneparkdentallab.co.uk` (without www) if you own it. An apex domain on Pages requires the zone/nameservers to be managed by Cloudflare. Set a Cloudflare redirect from the apex hostname to `https://www.bitterneparkdentallab.co.uk`, preserving the path and query string, after both domains are correctly connected.
10. Wait until the domain is active and HTTPS works. Then perform the checks below before cancelling WordPress hosting.

No npm install, paid WordPress theme, WordPress plugin, database, API key or server is needed. The site uses locally stored fonts, logo and photographs. GitHub holds the source; Cloudflare Pages serves it. This guide does not use GitHub Pages.

## Correct domain

The website is configured for **www.bitterneparkdentallab.co.uk**, without an `s`, as confirmed by the owner. Canonical links and the sitemap use this address. Connect the domain only after the temporary Cloudflare Pages website has been checked. Domain registration and DNS have not been changed by this package.

## Before cancelling WordPress

- Check the new domain loads with HTTPS on a phone and computer.
- Check telephone and email links and representative pages.
- Keep the domain registration paid and active, wherever it is registered. Hosting cancellation and domain renewal are separate.
- If changing nameservers, first copy and preserve existing email DNS records (MX, SPF, DKIM and DMARC) and any other services you use. This package does not change DNS automatically.
- Keep your WordPress export and original backups.
- Confirm whether your WordPress subscription includes any domain or email services before cancelling it. Cancel only the hosting/plan you no longer need.

## Content and service arrangements

The design follows the supplied screenshots, using the original colours, logo and hero photograph, with a new responsive layout. Copy has been shortened and rewritten rather than reproduced word-for-word. It uses the current WordPress site's home-visit-only arrangements across Hampshire and Dorset.

The old premises address, opening hours, £45 repair advertisement, guaranteed turnaround language and GDC logo have not been carried across. Current prices, visit charges and appointments are confirmed by contacting the business. Legacy URL paths are preserved where relevant, including older paths containing `dentists`; public headings now describe denture services.

Before launch, the business should confirm service availability, current contact details, qualifications/registration and any professional information that needs to appear. The basic website privacy notice is not a complete patient-record privacy notice; replace or extend it with the business's actual arrangements where needed. No clinical records or patient data are stored by this site.

One genuine testimonial excerpt from the supplied homepage is included, identified as historical. The two old positive/negative feedback paths both redirect to the same neutral feedback page.

## Contact functionality

Call buttons use `tel:` links. Email buttons use `mailto:` links and open the visitor's email app. The email address is also written out so it can be copied into webmail. There is no form pretending to submit a message, no form backend and no paid form subscription. To add an on-site submission form later, connect and test a real receiving service before publishing it.

## Editing

- `public/`: ready-to-deploy HTML, CSS, JavaScript, images, fonts, sitemap, redirects and headers.
- `content.json`: editable text for the internal pages.
- `build.py`: standard-library-only Python page generator; includes homepage and shared navigation/footer.
- `public/assets/style.css`: colours, typography, spacing and responsive layout.
- `public/assets/site.js`: mobile menu and dropdown behaviour.
- `ASSET-SOURCES.md`: asset provenance.

After changing `content.json` or `build.py`, run `python build.py` (Python 3), then upload/commit the regenerated public files. Cloudflare uses the already-generated public folder; Python is not needed for deployment. CSS and JavaScript edits can be committed directly. Do not store confidential information in the repository.

For local review, run `python -m http.server 8000 --directory public` from this folder and visit http://localhost:8000. Opening index.html by double-click is not the supported preview method because links use paths from the website root.

## Hosting documentation

- Static HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Redirects: https://developers.cloudflare.com/pages/configuration/redirects/

## Verification

The build was checked for missing local links/assets, CSV URL coverage, page titles, canonical links and one H1 per page. Desktop homepage, dropdown navigation, mobile menu and a mobile content page were checked in a browser. Real DNS, HTTPS on your domain, phone calls and email delivery require checking after deployment. No accounts or subscriptions were changed.
