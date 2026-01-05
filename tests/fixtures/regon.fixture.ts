// definujemy alias dla test (base) bo później rozszerzamy go o nasze fikstury 
import { test as base, expect, Page } from '@playwright/test';

// definiujemy typy dla naszych fikstur
// w tym przypadku fikstura regonPage zawiera metody do interakcji ze stroną
// (to customowe akcje, tzw. custom actions albo custom helpers)
// takie jak otwieranie strony, wyszukiwanie po numerze REGON, pobieranie komunikatów o błędach i nazwy firmy

// każda metoda zwraca Promise, bo operacje te są asynchroniczne
// i wymagają oczekiwania na zakończenie działań w przeglądarce
// dzięki temu możemy korzystać z tych metod w naszych testach w sposób asynchroniczny
// (typowe w testach end-to-end z Playwright)

type RegonFixtures = {
  regonPage: {
    open: () => Promise<void>;
    searchByRegon: (value: string) => Promise<void>;
    getErrorMessage: () => Promise<string>;
    getCompanyName: () => Promise<string>;
  };
};

export const test = base.extend<RegonFixtures>({
  regonPage: async ({ page }, use) => {

    const regonPage = {
      open: async () => {
        await page.goto('https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx');
      },

      searchByRegon: async (value: string) => {
        await page.locator('#txtRegon').fill(value);
        await page.getByRole('button', { name: /szukaj/i }).click();
      },

      getErrorMessage: async () => {
        const error = page.locator('#divInfoKomunikat');
        await expect(error).toBeVisible();
        return (await error.innerText()).trim();
      },

      getCompanyName: async () => {
        const name = page.locator('table >> text=/(spółka|oddział|Sp\\. z o\\. o\\.|Sp\\. z o\\.o\\.|S\\. A\\.|S\\.A\\.)/i').first()
        await expect(name).toBeVisible();
        return (await name.innerText()).trim();
      }
    };

    await use(regonPage);
  }
});

export { expect };