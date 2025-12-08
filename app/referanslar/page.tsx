import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, Brain, Shield } from "lucide-react";

export default function ReferanslarPage() {
  const referanslarISG = [
    { name: "Mercedes-Benz", sector: "Otomotiv" },
    { name: "Hidromek", sector: "İş Makineleri" },
    { name: "Brisa", sector: "Lastik" },
    { name: "Toyotetsu", sector: "Otomotiv Yan Sanayi" },
    { name: "TEMSA", sector: "Otobüs Üretimi" },
    { name: "Karsan", sector: "Otomotiv" },
    { name: "BMC", sector: "Otomotiv & Savunma" },
    { name: "Türk Traktör", sector: "Tarım Makineleri" },
  ];

  const referanslarAkilli = [
    { name: "Beko", sector: "Beyaz Eşya" },
    { name: "Roketsan", sector: "Savunma" },
    { name: "Aselsan", sector: "Savunma & Elektronik" },
    { name: "Betonstar", sector: "İnşaat Ekipmanları" },
    { name: "Borusan", sector: "Çelik & Otomotiv" },
    { name: "Enerjisa", sector: "Enerji" },
    { name: "Coca-Cola", sector: "İçecek" },
    { name: "Tofaş", sector: "Otomotiv" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-gray-300" />
            <span className="text-sm font-medium text-gray-300">Güvenilir İş Ortağınız</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Referanslarımız
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Türkiye&apos;nin önde gelen sanayi kuruluşlarına güvenle hizmet veriyoruz
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">20+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">100+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-gray-600">Farklı Sektör</div>
            </div>
          </div>
        </div>
      </section>

      {/* İSG Çözümleri Referansları - First */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">İSG Çözümleri</h2>
              <p className="text-gray-600">İş sağlığı ve güvenliği ürün ve hizmetlerimiz</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {referanslarISG.map((ref) => (
              <div
                key={ref.name}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-primary/5 hover:shadow-md transition-all text-center group"
              >
                <div className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                  {ref.name}
                </div>
                <div className="text-sm text-gray-500">{ref.sector}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/isg-cozumleri">
              <Button variant="outline">
                İSG Çözümlerimizi İnceleyin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Akıllı Çözümler Referansları - Second */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Brain className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Akıllı Çözümler</h2>
              <p className="text-gray-600">Yapay zeka ve dijital dönüşüm projelerimiz</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {referanslarAkilli.map((ref) => (
              <div
                key={ref.name}
                className="bg-white rounded-2xl p-6 hover:bg-accent/5 hover:shadow-md transition-all text-center group"
              >
                <div className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors mb-1">
                  {ref.name}
                </div>
                <div className="text-sm text-gray-500">{ref.sector}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/akilli-cozumler">
              <Button variant="outline">
                Akıllı Çözümlerimizi İnceleyin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Neden SmartGuide?
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                20 yılı aşkın sektör deneyimimizle, müşterilerimizin ihtiyaçlarını derinlemesine
                anlıyor ve onlara en uygun çözümleri sunuyoruz.
              </p>
              <p>
                Türkiye&apos;nin en büyük sanayi kuruluşlarından küçük ve orta ölçekli işletmelere
                kadar geniş bir müşteri portföyüne sahibiz.
              </p>
              <p>
                Her projede kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Siz de Referanslarımız Arasına Katılın
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            İSG ve dijital dönüşüm ihtiyaçlarınız için bizimle iletişime geçin.
          </p>
          <Link href="/iletisim">
            <Button size="xl" className="bg-white text-primary hover:bg-gray-100">
              İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
