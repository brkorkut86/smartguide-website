import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";

export default function IletisimPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            İletişim
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Bizimle iletişime geçin, size en uygun çözümü birlikte bulalım
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">İletişim Bilgileri</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">E-posta</p>
                <a href="mailto:ozgur.dogan@smartguide.com.tr" className="text-gray-600 hover:text-primary block">
                  ozgur.dogan@smartguide.com.tr
                </a>
                <a href="mailto:okan.tamer@smartguide.com.tr" className="text-gray-600 hover:text-primary block">
                  okan.tamer@smartguide.com.tr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Telefon</p>
                <a href="tel:+905496948080" className="text-gray-600 hover:text-primary block">
                  +90 549 694 80 80
                </a>
                <a href="tel:+905323222465" className="text-gray-600 hover:text-primary block">
                  +90 532 322 24 65
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Adres</p>
                <p className="text-gray-600">
                  Demirci Mah., Dereçavuş Sk No:12<br />
                  16159 Nilüfer/Bursa, Türkiye
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</p>
                <p className="text-gray-600">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi - Pazar: Kapalı
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:col-span-2 justify-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Web Siteleri</p>
                <a href="https://www.smartguide.com.tr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary block">
                  www.smartguide.com.tr
                </a>
                <a href="https://wisdomaihub.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary block">
                  wisdomaihub.com
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.5!2d28.9927!3d40.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3f3b8a6b5555%3A0x1234567890abcdef!2sDemirci%2C%20Dere%C3%A7avu%C5%9F%20Sk.%20No%3A12%2C%2016110%20Nil%C3%BCfer%2FBursa!5e0!3m2!1str!2str!4v1702100000000!5m2!1str!2str"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SmartGuide Konum"
            />
          </div>
          <div className="mt-2 text-center">
            <a
              href="https://www.google.com/maps/place/Demirci,+Dereçavuş+Sk+No:12,+16159+Nilüfer,+Bursa,+Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Google Maps&apos;te Aç →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
