import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import {
  HardHat,
  Eye,
  Ear,
  Wind,
  Hand,
  Footprints,
  Shirt,
  ArrowDown,
  GraduationCap,
  Flame,
  ArrowRight,
  FileText,
  Shield,
} from "lucide-react";

export default function ISGCozumleriPage() {
  const kkdCategories = [
    { icon: HardHat, name: "Baş Koruma", desc: "Baretler ve koruyucu başlıklar" },
    { icon: Eye, name: "Göz ve Yüz Koruma", desc: "Koruyucu gözlükler ve siperlikler" },
    { icon: Ear, name: "İşitme Koruma", desc: "Kulaklıklar ve kulak tıkaçları" },
    { icon: Wind, name: "Solunum Koruma", desc: "Maskeler ve solunum cihazları" },
    { icon: Hand, name: "El Koruma", desc: "İş eldivenleri" },
    { icon: Footprints, name: "Ayak Koruma", desc: "Güvenlik ayakkabıları" },
    { icon: Shirt, name: "Vücut Koruma", desc: "İş elbiseleri ve önlükler" },
    { icon: ArrowDown, name: "Düşme Koruma", desc: "Emniyet kemerleri ve yaşam hatları" },
  ];

  const trainingServices = [
    "İSG Temel Eğitimleri",
    "Tehlikeli Madde Taşımacılığı (ADR) Eğitimi",
    "Yangın Güvenliği Eğitimleri",
    "İlk Yardım Eğitimleri",
    "Yüksekte Çalışma Eğitimleri",
    "Kimyasal Madde Güvenliği Eğitimi",
    "Risk Değerlendirme Danışmanlığı",
    "İSG Yönetim Sistemi Danışmanlığı",
  ];

  const partners = [
    { name: "Apex", desc: "Kişisel Koruyucu Donanımlar" },
    { name: "Dräger", desc: "Solunum Koruma ve Gaz Algılama" },
    { name: "BBU", desc: "İş Güvenliği Ekipmanları" },
    { name: "PRIORIT", desc: "Yangına Dayanıklı Dolaplar" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/isg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-100 px-4 py-2 rounded-full mb-6">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-medium text-gray-300">İş Sağlığı ve Güvenliği</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            İSG Çözümleri
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Kapsamlı iş sağlığı ve güvenliği ürün ve hizmetlerimizle işletmenizi koruyun
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/katalog/isg-cozumleri">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <FileText className="mr-2 h-5 w-5" />
                İSG Eğitim ve Danışmanlık Hizmetleri Kataloğu
              </Button>
            </Link>
            <Link href="/katalog/apex">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Apex KKD Kataloğu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* KKD Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kişisel Koruyucu Donanımlar (KKD)
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Çalışanlarınızın güvenliği için her kategoride kaliteli ürünler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kkdCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/katalog/apex">
              <Button size="lg">
                Apex KKD Kataloğunu İncele
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-medium">Eğitim ve Danışmanlık</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                İSG Eğitim ve Danışmanlık Hizmetleri
              </h2>
              <p className="text-gray-600 mb-8">
                Deneyimli eğitmenlerimiz ve danışmanlarımız ile çalışanlarınızın İSG bilincini
                artırın, yasal yükümlülüklerinizi yerine getirin.
              </p>

              <ul className="space-y-3">
                {trainingServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8">
              <div className="text-center">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Eğitim ve Danışmanlık Talebi</h3>
                <p className="text-gray-600 mb-6">
                  Eğitim ve Danışmanlık talebi için teklif alın
                </p>
                <Link href="/katalog/isg-cozumleri">
                  <Button size="lg" className="w-full">
                    İSG Eğitim ve Danışmanlık Kataloğunu İncele
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fire Cabinets Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 order-2 lg:order-1">
              <div className="text-center">
                <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Flame className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PRIORIT Dolaplar</h3>
                <p className="text-gray-600 mb-6">
                  Tehlikeli kimyasalların güvenli depolanması için Avrupa standartlarında yangına dayanıklı dolaplar.
                </p>
                <Link href="/iletisim">
                  <Button size="lg" className="w-full">
                    Bilgi Alın
                  </Button>
                </Link>
              </div>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <Flame className="h-5 w-5" />
                <span className="text-sm font-medium">Yangın Güvenliği</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Yangına Dayanıklı Dolaplar
              </h2>
              <p className="text-gray-600 mb-6">
                PRIORIT marka yangına dayanıklı dolaplar ile tehlikeli maddelerin güvenli depolanmasını sağlayın.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-700">90 dakika yangına dayanıklılık</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-700">Avrupa EN 14470-1 standardına uygun</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-700">Yanıcı sıvılar için özel tasarım</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-700">Laboratuvar ve endüstriyel kullanım</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Çözüm Ortaklarımız
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dünyanın önde gelen İSG markalarını sizinle buluşturuyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <Card key={partner.name} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-primary">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{partner.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            İSG İhtiyaçlarınız İçin Yanınızdayız
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ürün ve hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim">
              <Button size="xl" className="bg-white text-primary hover:bg-gray-100">
                İletişime Geçin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/katalog/isg-cozumleri">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                <FileText className="mr-2 h-5 w-5" />
                Kataloğu İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
