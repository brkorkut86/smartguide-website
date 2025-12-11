import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function ReferanslarPage() {
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

      {/* References Image */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/references.png"
              alt="SmartGuide Referansları"
              className="w-full max-w-5xl rounded-2xl shadow-lg"
            />
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
