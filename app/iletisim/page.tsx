"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe, Clock } from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
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
                        Demirci Mah. Dereçavuş (390) Sk.<br />
                        No: 12/1, Nilüfer / Bursa
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

                  <div className="flex items-start gap-4">
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
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.876!2d28.9784!3d40.2256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEzJzMyLjIiTiAyOMKwNTgnNDIuMiJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SmartGuide Konum"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Bize Yazın</CardTitle>
                <CardDescription>
                  Formu doldurun, en kısa sürede size dönüş yapalım.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-12">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Adınız Soyadınız *
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
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Firma
                        </label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Firma adı"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-posta *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="E-posta adresiniz"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Telefon numaranız"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Konu *
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
                        Mesajınız *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Mesajınızı yazınız..."
                        rows={5}
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
