import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <img src="/logo.png" alt="SmartGuide" className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              SmartGuide Endüstriyel Çözümler Ltd. Şti. - Otomotiv OEM ve tedarik sanayisindeki 20+ yıllık deneyimiyle,
              iş sağlığı ve güvenliği çözümleri ile yapay zeka tabanlı akıllı uygulamaları tek çatı altında sunar.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-primary" />
                <div className="text-sm text-gray-400">
                  <a href="mailto:ozgur.dogan@smartguide.com.tr" className="hover:text-primary transition-colors block">
                    ozgur.dogan@smartguide.com.tr
                  </a>
                  <a href="mailto:okan.tamer@smartguide.com.tr" className="hover:text-primary transition-colors block">
                    okan.tamer@smartguide.com.tr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-primary" />
                <div className="text-sm text-gray-400">
                  <a href="tel:+905496948080" className="hover:text-primary transition-colors block">
                    +90 549 694 80 80
                  </a>
                  <a href="tel:+905323222465" className="hover:text-primary transition-colors block">
                    +90 532 322 24 65
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <span className="text-sm text-gray-400">
                  Demirci Mah., Dereçavuş Sk No:12<br />
                  16159 Nilüfer/Bursa, Türkiye
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Bağlantılar</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <a
                  href="https://www.smartguide.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  www.smartguide.com.tr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <a
                  href="https://wisdomaihub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  wisdomaihub.com
                </a>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white mb-4 mt-6">Kataloglar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/katalog/sunum" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  SmartGuide Sunumu
                </Link>
              </li>
              <li>
                <Link href="/katalog/apex" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  Apex KKD Kataloğu
                </Link>
              </li>
              <li>
                <Link href="/katalog/isg-cozumleri" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  İSG Eğitim ve Danışmanlık Kataloğu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} SmartGuide Endüstriyel Çözümler Ltd. Şti. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
