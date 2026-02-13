## Testy automatyczne funcjonalnośc wyszukiwania podmiotów – Playwright (TypeScript)

[![CI](https://github.com/piotrapl/playwright-typescript-wyszukiwanie-podmiotow-gui-tests/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/piotrapl/playwright-typescript-wyszukiwanie-podmiotow-gui-tests/actions/workflows/playwright.yml)

## Opis projektu
Projekt to zestaw **testów automatycznych UI** napisanych w **Playwright + TypeScript**

Testy weryfikują funkcjonalność wyszukiwania firm po numerze **REGON** na oficjalnej stronie rządowej:
https://wyszukiwarkaregon.stat.gov.pl

---

## Testowana funkcjonalność
- Wyszukiwanie firmy po numerze **REGON**
- Walidacja błędnych numerów REGON
- Wyświetlanie danych firmy dla poprawnych REGONów

---

## Scenariusze testowe
### Przypadki negatywne
- REGON o nieprawidłowej długości
- REGON z błędną cyfrą kontrolną
- REGON zawierający znaki nienumeryczne

### Przypadki pozytywne
- Poprawny REGON 9-cyfrowy → firma znaleziona
- Poprawny REGON 14-cyfrowy → firma znaleziona

---

## Technologie i narzędzia
- **Playwright**
- **TypeScript**
- **Playwright Test Runner**
- **Raport HTML**
- **GitHub Actions (gotowe pod CI)**

---

## Zastosowane dobre praktyki automatyzacji
-  Własne **fixtures Playwright**
-  Testy data-driven
-  Odporne selektory (ARIA, regex)
-  Asercje odporne na zmiany treści UI
-  Zrzuty ekranu dla **każdego testu** (PASS i FAIL)
-  Screenshoty dołączone do raportu HTML
-  Czytelna i łatwa w utrzymaniu struktura testów

---

## Uruchamianie testów lokalnie
```bash
npm install
npx playwright test
npx playwright show-report
```

## Możliwe usprawnienia, optymalizacje:

- Udoskonalenie selektorów przy użyciu **test ID** (jeśli dostępne)
- Oznaczanie lub izolacja **niestabilnych testów**
- Lepsze logowanie i obsługa błędów testowych
- Kategoryzacja testów przy użyciu **tagów Playwright**

## Co można dodać do tego projektu, w jaki sposób go rozszerzyć ?

- **Pipeline CI/CD** z GitHub Actions (równoległe uruchamianie testów, artefakty)
- **Analizę wyników testów** i dashboardy
- **Testy wieloprzeglądarkowe** (Chromium, Firefox, WebKit)
- **Testy w widokach mobilnych**
- Zewnętrzne źródła danych testowych (JSON / CSV)
- Podejście hybrydowe: testy UI + API
- Rozszerzone raportowanie (metadane, środowisko, konfiguracja)
