# SmartGuide Website

Corporate website for **SmartGuide Endüstriyel Çözümler Ltd. Şti.** - an industrial safety (İSG) and AI solutions company based in Bursa, Turkey.

## Tech Stack

- **Framework:** Next.js 14.2 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Custom components using class-variance-authority (CVA)
- **Icons:** Lucide React
- **Deployment:** Vercel (static export)

## Project Structure

```
smartguide/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page with hero carousel
│   ├── hakkimizda/               # About page
│   ├── isg-cozumleri/            # İSG Solutions page
│   ├── akilli-cozumler/          # AI Solutions page
│   ├── referanslar/              # References page
│   ├── iletisim/                 # Contact page with form
│   └── katalog/                  # PDF catalog pages
│       ├── sunum/                # Company presentation PDF
│       ├── apex/                 # Apex KKD catalog PDF
│       └── isg-cozumleri/        # İSG catalog PDF
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav with dropdown
│   │   └── Footer.tsx            # Footer with contact info
│   └── ui/
│       ├── button.tsx            # CVA button variants
│       ├── card.tsx              # Card components
│       ├── input.tsx             # Form input
│       └── textarea.tsx          # Form textarea
├── lib/
│   └── utils.ts                  # cn() utility for Tailwind merging
├── public/
│   ├── logo.png                  # SmartGuide logo
│   ├── isg.png                   # Hero carousel image (İSG)
│   ├── akilli.png                # Hero carousel image (AI)
│   └── pdfs/                     # PDF files for catalogs
│       ├── sunum.pdf
│       ├── apex.pdf
│       └── isg-cozumleri.pdf
└── pdfs/                         # Source PDF files (original names)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero carousel, value props, services, catalogs, references preview |
| `/hakkimizda` | About - Company story, values, experience stats |
| `/isg-cozumleri` | İSG Solutions - KKD, training, fire cabinets, partners |
| `/akilli-cozumler` | AI Solutions - WisdomWatch, WisdomTest, use cases |
| `/referanslar` | References - Client logos split by service type (İSG first) |
| `/iletisim` | Contact - Form, contact info, map |
| `/katalog/sunum` | PDF viewer - Company presentation |
| `/katalog/apex` | PDF viewer - Apex KKD catalog |
| `/katalog/isg-cozumleri` | PDF viewer - İSG solutions catalog |

## Brand Colors

```typescript
// tailwind.config.ts
colors: {
  primary: "#EA580C",    // Orange (SmartGuide brand)
  accent: "#1E3A8A",     // Blue (secondary/AI solutions)
}
```

## Header Navigation Order

1. Ana Sayfa
2. Hakkımızda
3. Referanslarımız
4. İSG Çözümleri
5. Akıllı Çözümler
6. Kataloglar (dropdown)
7. İletişim (button)

## Key Features

- **Hero Carousel:** Rotates between İSG and AI images every 5 seconds. Buttons change color based on active slide.
- **Static Export:** Site is fully static (`output: "export"` in next.config.mjs) for easy hosting.
- **PDF Viewing:** Uses native browser PDF viewer with mobile fallback (download/open in new tab).
- **Turkish Content:** All UI text is in Turkish with proper characters (İ, Ş, Ğ, Ü, Ö, Ç).
- **Responsive:** Mobile-first design with hamburger menu on small screens.

## Contact Information

- **Company:** SmartGuide Endüstriyel Çözümler Ltd. Şti.
- **Emails:** ozgur.dogan@smartguide.com.tr, okan.tamer@smartguide.com.tr
- **Phones:** +90 549 694 80 80, +90 532 322 24 65
- **Address:** Demirci Mah., Dereçavuş Sk No:12, 16159 Nilüfer/Bursa, Türkiye
- **Websites:** smartguide.com.tr, wisdomaihub.com

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
```

## Deployment

The site is deployed on Vercel with automatic deploys from the `main` branch.

```bash
vercel --prod        # Deploy to production
```

## GitHub Repository

https://github.com/brkorkut86/smartguide-website

## Notes for Future Development

- Contact form currently logs to console. To enable email sending, integrate Formspree or similar service.
- Reference logos are text-based placeholders. Replace with actual company logos when available.
- Hero images (isg.png, akilli.png) can be replaced with higher quality images.
- For custom domain setup, configure DNS in Vercel dashboard.
