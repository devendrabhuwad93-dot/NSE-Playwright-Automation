# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Search HDFC and select from dropdown
- Location: tests/searchStock.spec.ts:6:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('div.autocompleteList.tt-suggestion.tt-selectable.active') to be visible

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class Homepage {
  4  | 
  5  |     readonly page: Page;
  6  | 
  7  |     // Locators
  8  |     readonly searchBox: Locator;
  9  |     readonly hdfcBankOption: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 | 
  14 |         // Update these locators based on actual DOM inspection
  15 |         this.searchBox = page.locator('#header-search-input');
  16 | 
  17 |         this.hdfcBankOption = page.locator(
  18 |             "//p[contains(normalize-space(),'HDFC BANK')]"
  19 |         );
  20 |     }
  21 | 
  22 |     /**Action Methods
  23 |      * Navigate to Homepage
  24 |      */
  25 |     async navigateToPage() {
  26 |         await this.page.goto(
  27 |             'https://www.nseindia.com/market-data/live-equity-market',
  28 |             {
  29 |                 waitUntil: 'domcontentloaded'
  30 |             }
  31 |         );
  32 |     }
  33 | 
  34 | async searchStock(stockName: string) {
  35 | 
  36 |     await this.searchBox.waitFor({
  37 |         state: 'visible'
  38 |     });
  39 | 
  40 |     await this.searchBox.click();
  41 | 
  42 |     await this.searchBox.fill(stockName);
  43 | 
  44 |     const stockOption = this.page.locator(
  45 |         'div.autocompleteList.tt-suggestion.tt-selectable.active'
  46 |     );
  47 | 
  48 |     // Wait for suggestion to appear
> 49 |     await stockOption.waitFor({
     |                       ^ Error: locator.waitFor: Target page, context or browser has been closed
  50 |         state: 'visible',
  51 |         timeout: 10000
  52 |     });
  53 | 
  54 |     // Hover before click (as per assignment requirement)
  55 |     await stockOption.hover();
  56 | 
  57 |     // Click and wait for navigation simultaneously
  58 |     await Promise.all([
  59 |         this.page.waitForURL(/.*HDFCBANK.*/i, {
  60 |             timeout: 15000
  61 |         }),
  62 |         stockOption.click()
  63 |     ]);
  64 | }
  65 | }
  66 | 
```