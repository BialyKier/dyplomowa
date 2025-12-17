'use client'; // Global error musi być Client Component

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Tutaj w przyszłości podepniesz Sentry / logowanie błędów
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          fontFamily: 'sans-serif'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            500 - Krytyczny błąd serwera
          </h2>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            Nie udało się załadować głównego szablonu strony. Prawdopodobnie backend (Strapi) jest niedostępny. OUT
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Spróbuj ponownie
          </button>
        </div>
      </body>
    </html>
  );
}