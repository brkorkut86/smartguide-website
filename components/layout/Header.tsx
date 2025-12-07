"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [katalogDropdownOpen, setKatalogDropdownOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/#hero" },
    { name: "Hakkımızda", href: "/#hakkimizda" },
    { name: "Faaliyet Alanları", href: "/#faaliyet-alanlari" },
    { name: "İSG Çözümleri", href: "/#isg-cozumleri" },
    { name: "Akıllı Çözümler", href: "/#akilli-cozumler" },
    { name: "Referanslar", href: "/#referanslar" },
    { name: "İletişim", href: "/#iletisim" },
  ];

  const kataloglar = [
    { name: "SmartGuide Sunumu", href: "/katalog/sunum" },
    { name: "Apex KKD Kataloğu", href: "/katalog/apex" },
    { name: "İSG Çözümleri Kataloğu", href: "/katalog/isg-cozumleri" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img src="/logo.png" alt="SmartGuide" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">SmartGuide</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menüyü aç/kapat</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Kataloglar dropdown - Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <div className="relative">
            <button
              onClick={() => setKatalogDropdownOpen(!katalogDropdownOpen)}
              onBlur={() => setTimeout(() => setKatalogDropdownOpen(false), 150)}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              Kataloglar
              <ChevronDown className={`h-4 w-4 transition-transform ${katalogDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {katalogDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {kataloglar.map((katalog) => (
                    <Link
                      key={katalog.name}
                      href={katalog.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {katalog.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/#iletisim">
            <Button>İletişime Geç</Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 pb-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2">
              <p className="px-3 py-2 text-sm font-semibold text-gray-900">Kataloglar</p>
              {kataloglar.map((katalog) => (
                <Link
                  key={katalog.name}
                  href={katalog.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {katalog.name}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/#iletisim" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">İletişime Geç</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
