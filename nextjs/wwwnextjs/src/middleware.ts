

export const RoutingConfig = {
  // 1. Języki
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  cookieName: 'site-lang',

  // 2. Aplikacje Niezależne (Twoje "wyjątki" poza [lang])
  // Te ścieżki Middleware będzie IGNOROWAĆ (puszczać do folderów w app/*)
  protectedPaths: [
    '/forex',
    '/dashboard',
    '/api' // API też tu pasuje
  ],

  // 3. Pliki techniczne (Next.js, obrazki) - zawsze ignorowane
  technicalPaths: [
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml'
  ],

  // 4. Mapa Przekierowań (Opcjonalnie - jeśli masz stare linki)
  // np. '/stary-kontakt': '/kontakt'
  redirects: {} as Record<string, string>,
};


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. IGNOROWANIE TECHNICZNYCH I WYJĄTKÓW (Forex)
  if (RoutingConfig.technicalPaths.some((path) => pathname.startsWith(path))) return NextResponse.next();
  if (RoutingConfig.protectedPaths.some((path) => pathname.startsWith(path))) return NextResponse.next();

  // ==============================================================
  // 2. SPRAWDZENIE CZY MA PREFIKS (Główna Logika)
  // ==============================================================
  const hasLocalePrefix = RoutingConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Jeśli adres ma już poprawny prefiks (np. /pl, /en/o-nas) -> JEST OK.
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // ==============================================================
  // 3. OBSŁUGA BRAKU PREFIKSU (W tym strony głównej "/")
  // ==============================================================
  
  // Musimy ustalić, na jaki język PRZEKIEROWAĆ użytkownika.
  let targetLocale = RoutingConfig.defaultLocale;

  // A. Sprawdź Ciasteczko
  const cookieLang = request.cookies.get(RoutingConfig.cookieName)?.value;
  if (cookieLang && RoutingConfig.locales.includes(cookieLang)) {
    targetLocale = cookieLang;
  } 
  // B. Jeśli brak ciasteczka -> Sprawdź Nagłówek (Browser Language)
  else {
    try {
      const headers = { 'accept-language': request.headers.get('accept-language') || '' };
      const languages = new Negotiator({ headers }).languages();
      targetLocale = match(languages, RoutingConfig.locales, RoutingConfig.defaultLocale);
    } catch (e) {}
  }

  // ==============================================================
  // 4. WYKONANIE PRZEKIEROWANIA (Redirect)
  // ==============================================================
  // Zmieniamy adres w przeglądarce!
  // /       -> /pl
  // /o-nas  -> /pl/o-nas
  
  const newUrl = new URL(`/${targetLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};












/* backup
export const RoutingConfig = {
  // Twoje języki
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  
  // Nazwa ciasteczka do zapamiętywania wyboru
  cookieName: 'site-lang',

  // Aplikacje niezależne (Forex, Forum) - Middleware ich nie dotyka
  protectedPaths: [
    '/forex',
    '/forum',
    '/dashboard'
  ],

  // Pliki techniczne - zawsze ignorowane
  technicalPaths: [
    '/_next', '/favicon.ico', '/robots.txt', '/sitemap.xml', '/api'
  ]
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RoutingConfig } from "./config/routing";
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. SZYBKA ŚCIEŻKA: Ignoruj pliki techniczne i wyjątki (Forex)
  if (RoutingConfig.technicalPaths.some((path) => pathname.startsWith(path))) return NextResponse.next();
  if (RoutingConfig.protectedPaths.some((path) => pathname.startsWith(path))) return NextResponse.next();

  // 2. CZY MA PREFIKS? (np. /pl, /en)
  const hasLocalePrefix = RoutingConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (hasLocalePrefix) {
    return NextResponse.next(); // Jest OK, puszczamy
  }

  // 3. NIE MA PREFIKSU - DECYDUJEMY GDZIE PRZEKIEROWAĆ
  let targetLocale = RoutingConfig.defaultLocale;

  // A. Sprawdź Ciasteczko (tylko na stronie głównej, dla lepszego UX)
  if (pathname === '/') {
      const cookieLang = request.cookies.get(RoutingConfig.cookieName)?.value;
      if (cookieLang && RoutingConfig.locales.includes(cookieLang)) {
        targetLocale = cookieLang;
      } else {
        // B. Brak ciasteczka? Sprawdź przeglądarkę
        try {
          const headers = { 'accept-language': request.headers.get('accept-language') || '' };
          const languages = new Negotiator({ headers }).languages();
          targetLocale = match(languages, RoutingConfig.locales, RoutingConfig.defaultLocale);
        } catch (e) {}
      }
  }

  // 4. PRZEKIEROWANIE (Redirect)
  // Zmieniamy adres w przeglądarce na poprawny (np. / -> /pl, /o-nas -> /pl/o-nas)
  const newUrl = new URL(`/${targetLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};



'use client';
import Link from "next/link";
import Cookies from "js-cookie";
import { RoutingConfig } from "@/config/routing";

const SwitchLanguage = ({ langItems }: { langItems: { pl: string, en: string } }) => {
  
  const handleLanguageChange = (lang: string) => {
    // Zapisujemy wybór na rok
    Cookies.set(RoutingConfig.cookieName, lang, { expires: 365 });
  };

  return (
    <div className="flex gap-2">
      <Link href={langItems.pl} onClick={() => handleLanguageChange('pl')}>PL</Link>
      <Link href={langItems.en} onClick={() => handleLanguageChange('en')}>EN</Link>
    </div>
  );
};
export default SwitchLanguage;
*/