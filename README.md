# Ahmed Qazafy Ibrahim - Cybersecurity Portfolio

This repository contains the public website for Ahmed Qazafy Ibrahim. It is designed as a cybersecurity portfolio, proof-of-work hub, and future commercial platform for courses, curated products, writeups, tools, and homelab documentation.

## Goals

- Build a credible public technical presence.
- Document cybersecurity projects, homelab work, and research notes.
- Publish future bug bounty writeups after responsible disclosure allows it.
- Sell or promote cybersecurity courses and digital products.
- Keep hosting costs close to zero.
- Avoid storing payment data or sensitive student data in the website codebase.

## Current Stack

- Static HTML, CSS, and JavaScript.
- No build step required.
- Ready for GitHub Pages, Cloudflare Pages, Netlify, or Vercel.
- External checkout links can be added later for Payhip, Paddle, Lemon Squeezy, Tap Payments, Moyasar, Paymob, or another provider.

This approach keeps the first version lightweight and secure while leaving room to migrate to Astro, Next.js, or a full LMS later.

## Site Sections

- `Home` - personal positioning and primary calls to action.
- `Proof` - concise explanation of the website as public evidence of capability.
- `Projects` - security tools, Linux workflows, automation, and homelab builds.
- `Writeups` - future research notes, CTF work, labs, and bug bounty writeups.
- `Courses` - future original cybersecurity courses.
- `Store` - curated products, lab gear, books, templates, and digital resources.
- `Contact` - GitHub, LinkedIn, and TryHackMe links.

## Content Templates

The `templates` folder contains reusable Markdown structures for future publishing:

- `writeup-template.md` for labs, research notes, CTFs, and disclosure-safe bug bounty posts.
- `course-template.md` for original courses.
- `product-template.md` for curated store entries and future digital products.

## Payment And Course Strategy

The website does not process payments directly in version 1. Course and store buttons should link to an external checkout or course platform. This is intentional:

- It reduces security and compliance risk.
- It avoids storing card data.
- It keeps payment providers replaceable.
- It gives flexibility for Arab-region payment needs and multiple currencies.

Recommended first providers to evaluate:

- Payhip for simple course hosting and digital products.
- Paddle or Lemon Squeezy for merchant-of-record digital product sales.
- Tap Payments, Moyasar, or Paymob for stronger regional payment support, depending on business location and payout requirements.

## Deployment Options

### GitHub Pages

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to `Pages`.
4. Deploy from the default branch.
5. Add a custom domain when ready.

### Cloudflare Pages

1. Connect the GitHub repository.
2. Use no build command.
3. Use `/` as the output directory.
4. Add a custom domain through Cloudflare DNS.

## Custom Domain Notes

Possible domains:

- `ahmedqazafy.com`
- `ahmed-qazafy.com`
- `qazafy.dev`
- `ahmedqazafy.dev`

Avoid underscores in domain names. `Ahmed_Qazafy.com` is not a valid conventional domain format because underscores are not allowed in normal hostnames.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.

Example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Future Upgrade Path

When content volume grows, this site can be migrated to:

- Astro with Markdown or MDX collections.
- A headless CMS for easier editing.
- A dedicated LMS for course access control.
- A newsletter platform for audience building.
- Regional and global checkout providers based on actual buyer demand.

## Security Notes

- No payment credentials should be committed to this repository.
- No API keys should be stored in frontend JavaScript.
- Payment links should point to trusted checkout providers.
- Bug bounty content should only be published after disclosure rules allow it.
- Student access and paid course delivery should be handled by a provider until a secure backend is justified.
