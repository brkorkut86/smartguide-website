import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import {
  Brain,
  Eye,
  BarChart3,
  Cpu,
  Factory,
  Leaf,
  Settings,
  ArrowRight,
  ExternalLink,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default function AkilliCozumlerPage() {
  const solutions = [
    { icon: Eye, title: "Wisdom AI", desc: "Görüntü işleme ve derin öğrenme çözümleri" },
    { icon: Cpu, title: "Dijital İkiz", desc: "Üretim süreçlerinin sanal modellenmesi" },
    { icon: BarChart3, title: "Kestirimci Bakım", desc: "Makine öğrenmesi ile arıza tahmini" },
    { icon: Factory, title: "Kalite Tahmini", desc: "Sensör verilerinden kalite öngörüsü" },
    { icon: Leaf, title: "Karbon Ayak İzi", desc: "Sürdürülebilirlik ve çevre yönetimi" },
    { icon: Settings, title: "MES Entegrasyonu", desc: "Üretim yönetim sistemleri entegrasyonu" },
  ];

  const watchFeatures = [
    "KKD uyum takibi (%95+ doğruluk)",
    "Tehlikeli bölge erişim kontrolü",
    "Düşen işçi tespiti (pose estimation)",
    "Anlık uyarı ve raporlama",
    "Çoklu kamera desteği",
    "Mevcut RTSP kameralarla entegrasyon",
  ];

  const testFeatures = [
    "Çoklu sensör füzyonu (sıcaklık, basınç, titreşim, ses)",
    "%99.5 tespit doğruluğu",
    "3-9 saniye tespit süresi",
    "Yarı denetimli öğrenme (az etiketli veri)",
    "Drift algılama ve otomatik model güncelleme",
    "Hat başına €250K-€900K yıllık tasarruf",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/akilli.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Brain className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-medium text-gray-300">Endüstriyel Yapay Zeka</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Akıllı Çözümler
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Yapay zeka ve makine öğrenmesi ile üretim süreçlerinizi optimize edin
          </p>
          <div className="mt-8">
            <a href="https://wisdomaihub.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                Wisdom AI Hub&apos;ı Ziyaret Edin
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Yapay Zeka Çözümlerimiz
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Üretim, kalite ve güvenlik alanlarında kapsamlı AI çözümleri
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.title}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{solution.title}</h3>
                  <p className="text-sm text-gray-600">{solution.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WisdomWatch Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Eye className="h-5 w-5" />
                <span className="text-sm font-medium">Görüntü Tabanlı Güvenlik</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                WisdomWatch
              </h2>
              <p className="text-gray-600 mb-6">
                Yapay zeka destekli görüntü işleme ile KKD uyumu, tehlikeli bölge ihlalleri
                ve güvensiz davranışları gerçek zamanlı tespit edin. Mevcut kamera altyapınızı
                kullanarak haftalar içinde devreye alın.
              </p>

              <ul className="space-y-3 mb-8">
                {watchFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wisdomaihub.com/watch" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  WisdomWatch Detayları
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Haftalar İçinde</div>
                    <div className="text-gray-600">Devreye Alma Süresi</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">%95+</div>
                    <div className="text-gray-600">Tespit Doğruluğu</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">7/24</div>
                    <div className="text-gray-600">Kesintisiz İzleme</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WisdomTest Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">%99.5</div>
                    <div className="text-gray-600">Tespit Doğruluğu</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Zap className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3-9 sn</div>
                    <div className="text-gray-600">Tespit Süresi</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <BarChart3 className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">€250K-€900K</div>
                    <div className="text-gray-600">Yıllık Tasarruf / Hat</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-medium">Sensör Tabanlı Kalite</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                WisdomTest
              </h2>
              <p className="text-gray-600 mb-6">
                Yarı denetimli makine öğrenmesi ile sensör verilerinden kalite sorunlarını
                test tezgahından önce tespit edin. Hurda, yeniden işleme ve garanti maliyetlerini
                önemli ölçüde azaltın.
              </p>

              <ul className="space-y-3 mb-8">
                {testFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wisdomaihub.com/test" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  WisdomTest Detayları
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uygulama Alanları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Farklı sektörlerde kanıtlanmış çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Otomotiv Üretimi", desc: "Motor test, montaj kalite kontrolü, KKD uyumu" },
              { title: "Plastik Enjeksiyon", desc: "Kalıp kalite tahmini, döngü optimizasyonu" },
              { title: "Metal İşleme", desc: "Kaynak kalitesi, yüzey kusur tespiti" },
              { title: "İnşaat", desc: "Şantiye güvenliği, düşme koruması izleme" },
              { title: "Petrol & Gaz", desc: "Tehlikeli bölge izleme, gaz sızıntısı tespiti" },
              { title: "Depolama & Lojistik", desc: "Forklift güvenliği, personel takibi" },
            ].map((useCase) => (
              <Card key={useCase.title} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-accent-900 to-accent-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Yapay Zeka ile Üretiminizi Dönüştürün
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Detaylı bilgi ve demo için Wisdom AI Hub&apos;ı ziyaret edin veya bizimle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wisdomaihub.com" target="_blank" rel="noopener noreferrer">
              <Button size="xl" className="bg-white text-accent hover:bg-gray-100">
                Wisdom AI Hub
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/iletisim">
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                İletişime Geçin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
