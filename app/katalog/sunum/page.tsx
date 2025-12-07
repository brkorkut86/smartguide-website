"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export default function SunumKatalog() {
  const pdfUrl = "/pdfs/sunum.pdf";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ana Sayfa
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">SmartGuide Sunumu</h1>
          </div>
          <div className="flex items-center gap-2">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Yeni Sekmede Aç
              </Button>
            </a>
            <a href={pdfUrl} download="SmartGuide-Sunum.pdf">
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                İndir
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Desktop/Tablet View */}
          <div className="hidden sm:block">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full"
              style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
            >
              <div className="p-8 text-center">
                <p className="text-gray-600 mb-4">
                  PDF görüntüleyici yüklenemedi. Lütfen aşağıdaki bağlantılardan birini kullanın.
                </p>
                <div className="flex justify-center gap-4">
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Yeni Sekmede Aç
                    </Button>
                  </a>
                  <a href={pdfUrl} download="SmartGuide-Sunum.pdf">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      PDF İndir
                    </Button>
                  </a>
                </div>
              </div>
            </object>
          </div>

          {/* Mobile View - Direct link since PDF viewers are inconsistent on mobile */}
          <div className="sm:hidden p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">SmartGuide Sunumu</h2>
              <p className="text-gray-600">
                PDF dosyasını görüntülemek veya indirmek için aşağıdaki butonu kullanın.
              </p>
            </div>
            <div className="space-y-3">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full" size="lg">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  PDF&apos;i Görüntüle
                </Button>
              </a>
              <a href={pdfUrl} download="SmartGuide-Sunum.pdf" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  PDF&apos;i İndir
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
