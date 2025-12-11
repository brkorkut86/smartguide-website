import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://smartguide.com.tr'),
  title: {
    default: "SmartGuide - Endüstriyel İSG ve Yapay Zeka Çözümleri",
    template: "%s | SmartGuide"
  },
  description: "SmartGuide, otomotiv OEM ve tedarik sanayisindeki 20+ yıllık deneyimiyle, iş sağlığı ve güvenliği çözümleri ile yapay zeka tabanlı akıllı uygulamaları tek çatı altında sunar.",
  keywords: [
    'iş sağlığı güvenliği',
    'İSG çözümleri',
    'kişisel koruyucu donanım',
    'KKD',
    'endüstriyel yapay zeka',
    'akıllı çözümler',
    'Bursa İSG',
    'otomotiv güvenlik',
    'Apex KKD',
    'Dräger',
  ],
  authors: [{ name: 'SmartGuide Endüstriyel Çözümler' }],
  creator: 'SmartGuide',
  publisher: 'SmartGuide Endüstriyel Çözümler Ltd. Şti.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://smartguide.com.tr',
    siteName: 'SmartGuide',
    title: 'SmartGuide - Endüstriyel İSG ve Yapay Zeka Çözümleri',
    description: 'İş sağlığı ve güvenliği çözümleri ile yapay zeka tabanlı akıllı uygulamalar.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'SmartGuide - Endüstriyel Çözümler'
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SmartGuide Endüstriyel Çözümler Ltd. Şti.",
    "description": "İş sağlığı ve güvenliği çözümleri ile yapay zeka tabanlı akıllı uygulamalar",
    "url": "https://smartguide.com.tr",
    "logo": "https://smartguide.com.tr/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-549-694-80-80",
        "contactType": "sales",
        "availableLanguage": ["tr"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+90-532-322-24-65",
        "contactType": "sales",
        "availableLanguage": ["tr"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Demirci Mah., Dereçavuş Sk No:12",
      "postalCode": "16159",
      "addressLocality": "Nilüfer",
      "addressRegion": "Bursa",
      "addressCountry": "TR"
    }
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
