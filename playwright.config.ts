import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// Fraza export zawiera konfigurację testów Playwright, 
// - definiuje różne ustawienia i projekty testowe.
// pola takie jak testDir, retries, reporter, use, projects, webServer itp.
// to ustawienia konfiguracyjne, które określają, jak testy będą uruchamiane i jakie środowisko będzie używane do testowania.
// - testDir określa katalog, w którym znajdują się testy (./tests).
// - fullyParallel: true pozwala na uruchamianie testów równolegle, co przyspiesza wykonanie testów.
// - forbidOnly: !!process.env.CI zapobiega przypadkowemu pozostawieniu test.only w kodzie, co mogłoby spowodować uruchomienie tylko jednego testu.     
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // uruchamiaj testy w plikach równolegle
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  // Wyłącz testy równoległe na CI
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: [['html', { outputFolder: 'playwright-report', open: 'always' }]],
  reporter: [
  ['line'],
  ['html', {
    outputFolder: 'playwright-report',
    open: process.env.CI ? 'never' : 'always'
  }]
],
  /* Ustawienia współdzielone między wszystkimi projektami. 
     Zobacz: https://playwright.dev/docs/api/class-testoptions. */
// Fraza use zawiera ustawienia, które będą stosowane do wszystkich testów,
// - takie jak screenshot, trace, video, headless, viewport itp.
// Te ustawienia to m.in:
// - screenshot: 'on' - zapisuje zrzut ekranu dla każdego testu, niezależnie od jego wyniku (pass/fail).
// - trace: 'retain-on-failure' - zachowuje śledzenie (trace) tylko dla testów, które zakończyły się niepowodzeniem.
// - video: 'retain-on-failure' - zachowuje nagranie wideo tylko dla testów, które zakończyły się niepowodzeniem.
// - headless: true - uruchamia przeglądarkę w trybie bezgłowym (bez interfejsu użytkownika).
// - viewport: { width: 1280, height: 720 } - ustawia rozmiar okna przeglądarki.
  use: {
    // baseURL: 'http://localhost:3000',
    screenshot: 'on',   // zapisuje screenshot dla każdego testu, niezależnie od jego wyniku (pass/fail)
    trace: 'retain-on-failure', 
    video: 'retain-on-failure', 
    headless: true,
    viewport: { width: 1280, height: 720 }
  },

  /* Skonfiguruj projekty dla głównych przeglądarek */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*       {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }, */
/*     {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }, */

    /* Testuj z użyciem urządzeń mobilnych  */
    {
       name: 'Mobile Chrome',
       use: { ...devices['Pixel 5'] },
    },
   //{
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Testuj w przeglądarkach takich jak Microsoft Edge lub Google Chrome (branded) */
    //  {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
/*    {
       name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
   } */
  ],

  /* Przed rozpoczęciem testów uruchom lokalny serwer deweloperski (dev server) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
