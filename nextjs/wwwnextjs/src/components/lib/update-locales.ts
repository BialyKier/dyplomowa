import fs from 'fs';
import path from 'path';

// Interfejsy
interface StrapiLocale {
  id: number;
  name: string;
  code: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

const STRAPI_URL = process.env.PRIVATE_STRAPI_URL || 'http://srv-strapi:1337';

async function updateLocales() {
  console.log('🌍 [Script] Start: Pobieranie języków ze Strapi...');

  // ---------------------------------------------------------
  // KLUCZOWA ZMIANA PONIŻEJ:
  // process.cwd() zwraca '/app' (root kontenera)
  // Doklejamy do tego 'src/config'
  // ---------------------------------------------------------
  const configDir = path.join(process.cwd(), 'src/config');
  const configPath = path.join(configDir, 'locales.json');

  console.log(`📂 Katalog główny (CWD): ${process.cwd()}`);
  console.log(`📂 Cel zapisu: ${configPath}`);

  try {
    const response = await fetch(`${STRAPI_URL}/api/i18n/locales`);

    if (!response.ok) {
      throw new Error(`Strapi API Error: ${response.status}`);
    }

    const data = (await response.json()) as StrapiLocale[];

    if (!Array.isArray(data)) {
      throw new Error('Otrzymano błędny format danych (nie jest tablicą).');
    }

    const locales = data.map((item) => item.code);

    // Upewniamy się, że folder istnieje
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    fs.writeFileSync(configPath, JSON.stringify(locales));
    console.log(`✅ [Script] Sukces! Zapisano: ${JSON.stringify(locales)}`);

  } catch (error) {
    console.error('⚠️ [Script] Błąd pobierania języków:', error);

    // Fallback
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }

    if (!fs.existsSync(configPath)) {
      const fallback = ['pl', 'en'];
      fs.writeFileSync(configPath, JSON.stringify(fallback));
      console.warn(`⚠️ [Script] Użyto fallbacku: ${JSON.stringify(fallback)}`);
    }
  }
}

updateLocales();