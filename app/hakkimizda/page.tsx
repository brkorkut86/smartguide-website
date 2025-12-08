import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Target, Award, TrendingUp, ArrowRight } from "lucide-react";

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description: "Her müşterimizin ihtiyaçlarını anlayarak, özelleştirilmiş çözümler sunuyoruz.",
    },
    {
      icon: Target,
      title: "Uzmanlık",
      description: "20+ yıllık sektör deneyimimizle doğru çözümleri sunuyoruz.",
    },
    {
      icon: Award,
      title: "Kalite",
      description: "En yüksek kalite standartlarında ürün ve hizmet sunmayı taahhüt ediyoruz.",
    },
    {
      icon: TrendingUp,
      title: "İnovasyon",
      description: "Sürekli gelişen teknolojileri takip ederek müşterilerimize en güncel çözümleri sunuyoruz.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            SmartGuide Endüstriyel Çözümler - Güvenliğiniz için çalışıyoruz
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img src="/logo.png" alt="SmartGuide" className="w-3/4 h-auto" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                SmartGuide Hakkında
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SmartGuide Endüstriyel Çözümler Ltd. Şti., otomotiv OEM ve tedarik sanayisindeki
                  20 yılı aşkın deneyime sahip kurucuları tarafından kurulmuştur. Şirketimiz,
                  iş sağlığı ve güvenliği (İSG) çözümleri ile endüstriyel yapay zeka uygulamalarını
                  tek çatı altında sunmaktadır.
                </p>
                <p>
                  Amacımız, sanayi kuruluşlarının İSG gereksinimlerini karşılarken, aynı zamanda
                  dijital dönüşüm süreçlerinde de yanlarında olmaktır. Kişisel koruyucu donanımlardan
                  (KKD) yangına dayanıklı dolaplara, eğitim ve danışmanlık hizmetlerinden yapay zeka
                  tabanlı görüntü işleme ve kestirimci bakım çözümlerine kadar geniş bir yelpazede
                  hizmet vermekteyiz.
                </p>
                <p>
                  Müşteri odaklı yaklaşımımız ve teknik uzmanlığımızla, Türkiye&apos;nin önde gelen
                  sanayi kuruluşlarına güvenilir bir iş ortağı olarak hizmet vermekteyiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Değerlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Başarımızın temelini oluşturan ilkelerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Yıllık Sektör Deneyimi</div>
            </div>
            <div className="text-center p-8 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center p-8 bg-primary/5 rounded-2xl">
              <div className="text-5xl font-bold text-primary mb-2">2</div>
              <div className="text-gray-600">Ana Faaliyet Alanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Birlikte Çalışalım
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
