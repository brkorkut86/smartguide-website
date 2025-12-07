"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Shield,
  Brain,
  HardHat,
  GraduationCap,
  Flame,
  Cpu,
  Eye,
  BarChart3,
  Leaf,
  Factory,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  // Reference logos
  const referanslarAkilli = [
    "Beko", "Roketsan", "Aselsan", "Betonstar", "Borusan", "Enerjisa"
  ];

  const referanslarISG = [
    "Mercedes-Benz", "Hidromek", "Brisa", "Toyotetsu", "TEMSA", "Karsan"
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-32 overflow-hidden">
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
              <Link href="#isg-cozumleri">
                <Button size="xl" className="bg-primary hover:bg-primary/90">
                  İSG Çözümlerini İncele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#akilli-cozumler">
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                  Akıllı Çözümleri İncele
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section id="hakkimizda" className="py-16 lg:py-24 bg-white">
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

      {/* Faaliyet Alanları Section */}
      <section id="faaliyet-alanlari" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faaliyet Alanları
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              İki ana faaliyet alanımızda uzman çözümler sunuyoruz
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
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <HardHat className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Kişisel Koruyucu Donanımlar (KKD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Eğitim ve Danışmanlık Hizmetleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Flame className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-gray-600">Yangına Dayanıklı Dolaplar</span>
                  </li>
                </ul>
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
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Wisdom AI platformu üzerinden sunduğumuz yapay zeka çözümleri ile
                  üretim süreçlerinizi optimize edin.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• WisdomWatch - Görüntü tabanlı güvenlik izleme</li>
                  <li>• WisdomTest - Sensör tabanlı kalite tahmini</li>
                  <li>• Dijital İkiz ve Kestirimci Bakım</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* İSG Çözümleri Detail Section */}
      <section id="isg-cozumleri" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                İSG Çözümleri
              </h2>
              <p className="text-gray-600 mb-8">
                Kapsamlı iş sağlığı ve güvenliği çözümlerimizle işletmenizi koruyun.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <HardHat className="h-5 w-5 text-primary" />
                    Kişisel Koruyucu Donanımlar (KKD)
                  </h3>
                  <ul className="space-y-2 text-gray-600 ml-7">
                    <li>• Baş koruma (Baretler)</li>
                    <li>• Göz ve yüz koruma</li>
                    <li>• İşitme koruma</li>
                    <li>• Solunum koruma</li>
                    <li>• El koruma (Eldivenler)</li>
                    <li>• Ayak koruma (Güvenlik ayakkabıları)</li>
                    <li>• Vücut koruma (İş elbiseleri)</li>
                    <li>• Düşme koruma sistemleri</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Eğitim ve Danışmanlık
                  </h3>
                  <ul className="space-y-2 text-gray-600 ml-7">
                    <li>• İSG temel eğitimleri</li>
                    <li>• Tehlikeli madde taşımacılığı (ADR)</li>
                    <li>• Yangın güvenliği eğitimleri</li>
                    <li>• İlk yardım eğitimleri</li>
                    <li>• Risk değerlendirme danışmanlığı</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Flame className="h-5 w-5 text-primary" />
                    Yangına Dayanıklı Dolaplar
                  </h3>
                  <p className="text-gray-600 ml-7">
                    PRIORIT marka yangına dayanıklı dolaplar ile tehlikeli maddelerin güvenli depolanması.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/katalog/isg-cozumleri">
                  <Button size="lg">
                    Tüm İSG Kataloğunu Görüntüle
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Çözüm Ortaklarımız</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Apex", "Dräger", "BBU", "PRIORIT"].map((partner) => (
                  <div
                    key={partner}
                    className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-24 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-xl font-bold text-gray-700">{partner}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/katalog/apex">
                  <Button variant="outline" className="w-full">
                    Apex KKD Kataloğunu İncele
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akıllı Çözümler Detail Section */}
      <section id="akilli-cozumler" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Akıllı Çözümler
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Endüstriyel Yapay Zeka Uygulamaları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Eye, title: "Wisdom AI", desc: "Görüntü işleme ve derin öğrenme çözümleri" },
              { icon: Cpu, title: "Dijital İkiz", desc: "Üretim süreçlerinin sanal modellenmesi" },
              { icon: BarChart3, title: "Kestirimci Bakım", desc: "Makine öğrenmesi ile arıza tahmini" },
              { icon: Factory, title: "Kalite Tahmini", desc: "Sensör verilerinden kalite öngörüsü" },
              { icon: Leaf, title: "Karbon Ayak İzi", desc: "Sürdürülebilirlik ve çevre yönetimi" },
              { icon: Brain, title: "MES Entegrasyonu", desc: "Üretim yönetim sistemleri entegrasyonu" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WisdomWatch Card */}
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle>WisdomWatch</CardTitle>
                <CardDescription>Görüntü Tabanlı Güvenlik İzleme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Yapay zeka destekli görüntü işleme ile KKD uyumu, tehlikeli bölge ihlalleri
                  ve güvensiz davranışları gerçek zamanlı tespit edin.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• KKD uyum takibi (%95+ doğruluk)</li>
                  <li>• Tehlikeli bölge erişim kontrolü</li>
                  <li>• Düşen işçi tespiti</li>
                  <li>• Anlık uyarı ve raporlama</li>
                </ul>
              </CardContent>
            </Card>

            {/* WisdomTest Card */}
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle>WisdomTest</CardTitle>
                <CardDescription>Sensör Tabanlı Kalite Tahmini</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Yarı denetimli makine öğrenmesi ile sensör verilerinden kalite sorunlarını
                  test tezgahından önce tespit edin.
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Çoklu sensör füzyonu</li>
                  <li>• %99.5 tespit doğruluğu</li>
                  <li>• 3-9 saniye tespit süresi</li>
                  <li>• Hat başına €250K-€900K yıllık tasarruf</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://wisdomaihub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Wisdom AI Hub&apos;ı Ziyaret Edin
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Referanslar Section */}
      <section id="referanslar" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Referanslar
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Türkiye&apos;nin önde gelen sanayi kuruluşlarına hizmet veriyoruz
            </p>
          </div>

          <div className="space-y-12">
            {/* Akıllı Çözümler Referansları */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Akıllı Çözümler</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {referanslarAkilli.map((ref) => (
                  <div
                    key={ref}
                    className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-20 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-700">{ref}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* İSG Çözümleri Referansları */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">İSG Çözümleri</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {referanslarISG.map((ref) => (
                  <div
                    key={ref}
                    className="bg-gray-50 rounded-xl p-4 flex items-center justify-center h-20 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-700">{ref}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Section */}
      <section id="iletisim" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              İletişim
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Bizimle iletişime geçin, size en uygun çözümü birlikte bulalım
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">İletişim Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">E-posta</p>
                      <a href="mailto:ozgur.dogan@smartguide.com.tr" className="text-gray-600 hover:text-primary">
                        ozgur.dogan@smartguide.com.tr
                      </a>
                      <br />
                      <a href="mailto:okan.tamer@smartguide.com.tr" className="text-gray-600 hover:text-primary">
                        okan.tamer@smartguide.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefon</p>
                      <a href="tel:+905496948080" className="text-gray-600 hover:text-primary">
                        +90 549 694 80 80
                      </a>
                      <br />
                      <a href="tel:+905323222465" className="text-gray-600 hover:text-primary">
                        +90 532 322 24 65
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adres</p>
                      <p className="text-gray-600">
                        Demirci Mah. Dereçavuş (390) Sk.<br />
                        No: 12/1, Nilüfer / Bursa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Bize Yazın</CardTitle>
                <CardDescription>
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Teşekkürler!</h3>
                    <p className="text-gray-600">Mesajınız alındı, en kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Adınızı giriniz"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="E-posta adresinizi giriniz"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Konu
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        placeholder="Konu başlığı"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mesajınız
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Mesajınızı yazınız..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Gönder
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
