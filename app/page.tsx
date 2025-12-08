import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Shield,
  Brain,
  HardHat,
  GraduationCap,
  Flame,
  Eye,
  BarChart3,
  ArrowRight,
  Building2,
  Zap,
  Target,
  Users,
} from "lucide-react";

export default function Home() {
  const valueProps = [
    {
      icon: Users,
      title: "20+ Yıllık Deneyim",
      description: "Otomotiv OEM ve tedarik sanayisindeki köklü tecrübemiz.",
    },
    {
      icon: Target,
      title: "Kapsamlı Çözümler",
      description: "İSG ve yapay zeka çözümlerini tek çatı altında sunuyoruz.",
    },
    {
      icon: Zap,
      title: "Hızlı Uygulama",
      description: "Haftalar içinde devreye alınan pratik çözümler.",
    },
  ];

  const referanslar = [
    "Mercedes-Benz", "Beko", "Roketsan", "Aselsan", "Borusan", "Hidromek"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat opacity-5" style={{ backgroundSize: '600px' }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Endüstriyel İSG ve Yapay Zeka Çözümleri
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
              SmartGuide, otomotiv OEM ve tedarik sanayisindeki 20+ yıllık deneyimiyle,
              iş sağlığı ve güvenliği çözümleri ile yapay zeka tabanlı akıllı uygulamaları
              tek çatı altında sunar.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/isg-cozumleri">
                <Button size="xl" className="bg-primary hover:bg-primary/90">
                  İSG Çözümleri
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/akilli-cozumler">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                  Akıllı Çözümler
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <div key={prop.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{prop.title}</h3>
                  <p className="text-gray-600">{prop.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faaliyet Alanlarımız
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              İki ana alanda uzman çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* İSG Çözümleri Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">İSG Çözümleri</CardTitle>
                <CardDescription className="text-base">
                  İş Sağlığı ve Güvenliği Ürün ve Hizmetleri
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <HardHat className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">Kişisel Koruyucu Donanımlar (KKD)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">Eğitim ve Danışmanlık Hizmetleri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-primary" />
                    <span className="text-gray-600">Yangına Dayanıklı Dolaplar</span>
                  </li>
                </ul>
                <Link href="/isg-cozumleri" className="block pt-4">
                  <Button className="w-full">
                    Detaylı Bilgi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Akıllı Çözümler Card */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Brain className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl">Akıllı Çözümler</CardTitle>
                <CardDescription className="text-base">
                  Endüstriyel Yapay Zeka Uygulamaları
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-accent" />
                    <span className="text-gray-600">WisdomWatch - Görüntü tabanlı güvenlik</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-accent" />
                    <span className="text-gray-600">WisdomTest - Sensör tabanlı kalite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-accent" />
                    <span className="text-gray-600">Dijital İkiz ve Kestirimci Bakım</span>
                  </li>
                </ul>
                <Link href="/akilli-cozumler" className="block pt-4">
                  <Button variant="secondary" className="w-full">
                    Detaylı Bilgi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <Building2 className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Güvenilir İş Ortağı</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Referanslarımız
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Türkiye&apos;nin önde gelen sanayi kuruluşlarına hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {referanslar.map((ref) => (
              <div
                key={ref}
                className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-20 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-700">{ref}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/referanslar">
              <Button variant="outline" size="lg">
                Tüm Referansları Görüntüle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim">
              <Button size="xl" className="bg-white text-primary hover:bg-gray-100">
                İletişime Geçin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/hakkimizda">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                Hakkımızda
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
