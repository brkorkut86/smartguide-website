"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [katalogDropdownOpen, setKatalogDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Referanslarımız", href: "/referanslar" },
    { name: "İSG Çözümleri", href: "/isg-cozumleri" },
    { name: "Akıllı Çözümler", href: "/akilli-cozumler" },
  ];

  const kataloglar = [
    { name: "SmartGuide Sunumu", href: "/katalog/sunum" },
    { name: "Apex KKD Kataloğu", href: "/katalog/apex" },
    { name: "Von Maske Kataloğu", href: "https://www.vonmaske.com/", external: true },
    { name: "İSG Eğitim ve Danışmanlık Kataloğu", href: "/katalog/isg-cozumleri" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img src="/logo.png" alt="SmartGuide" className="h-10 w-auto" />
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
        <div className="hidden lg:flex lg:items-center lg:gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Kataloglar dropdown - fixed alignment */}
          <div className="relative flex items-center">
            <button
              onClick={() => setKatalogDropdownOpen(!katalogDropdownOpen)}
              onBlur={() => setTimeout(() => setKatalogDropdownOpen(false), 150)}
              className={`inline-flex items-center gap-1 text-sm font-medium leading-6 transition-colors ${
                pathname.startsWith("/katalog")
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              <FileText className="h-4 w-4" />
              Kataloglar
              <ChevronDown className={`h-4 w-4 transition-transform ${katalogDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {katalogDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {kataloglar.map((katalog) => (
                    katalog.external ? (
                      <a
                        key={katalog.name}
                        href={katalog.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      >
                        {katalog.name}
                      </a>
                    ) : (
                      <Link
                        key={katalog.name}
                        href={katalog.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                      >
                        {katalog.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* İletişim Button */}
          <Link href="/iletisim">
            <Button>İletişim</Button>
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
                className={`block rounded-lg px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2">
              <p className="px-3 py-2 text-sm font-semibold text-gray-900">Kataloglar</p>
              {kataloglar.map((katalog) => (
                katalog.external ? (
                  <a
                    key={katalog.name}
                    href={katalog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {katalog.name}
                  </a>
                ) : (
                  <Link
                    key={katalog.name}
                    href={katalog.href}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {katalog.name}
                  </Link>
                )
              ))}
            </div>
            <div className="pt-4">
              <Link href="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">İletişim</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
