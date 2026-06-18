# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chart.spec.ts >> Verify user can open HDFCBANK chart
- Location: tests/chart.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nseindia.com/market-data/live-equity-market
Call log:
  - navigating to "https://www.nseindia.com/market-data/live-equity-market", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class Homepage {
  4  |     clickPriceGraph() {
  5  |         throw new Error('Method not implemented.');
  6  |     }
  7  |     verifyHdfcQuotePage() {
  8  |         throw new Error('Method not implemented.');
  9  |     }
  10 |     clickHdfcBankSymbol() {
  11 |         throw new Error('Method not implemented.');
  12 |     }
  13 | 
  14 |     readonly page: Page;
  15 | 
  16 |     // Locators
  17 |     readonly searchBox: Locator;
  18 |     readonly hdfcBankOption: Locator;
  19 | 
  20 |     constructor(page: Page) {
  21 |         this.page = page;
  22 | 
  23 |         // Update these locators based on actual DOM inspection
  24 |         this.searchBox = page.locator('#header-search-input');
  25 | 
  26 |         this.hdfcBankOption = page.locator(
  27 |             "//p[contains(normalize-space(),'HDFC BANK')]"
  28 |         );
  29 |     }
  30 | 
  31 |     /**Action Methods
  32 |      * Navigate to Homepage
  33 |      */
  34 |     async navigateToPage() {
> 35 |         await this.page.goto(
     |                         ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nseindia.com/market-data/live-equity-market
  36 |             'https://www.nseindia.com/market-data/live-equity-market',
  37 |             {
  38 |                 waitUntil: 'domcontentloaded'
  39 |             }
  40 |         );
  41 |     }
  42 | 
  43 |     async searchStock(stockName: string) {
  44 | 
  45 |         await this.searchBox.waitFor({
  46 |             state: 'visible'
  47 |         });
  48 | 
  49 |         await this.searchBox.click();
  50 | 
  51 |         await this.searchBox.fill(stockName);
  52 | 
  53 |         const stockOption = this.page.locator(
  54 |             'div.autocompleteList.tt-suggestion.tt-selectable.active'
  55 |         );
  56 | 
  57 |         await stockOption.waitFor({
  58 |             state: 'visible',
  59 |             timeout: 10000
  60 |         });
  61 | 
  62 |         await stockOption.click();
  63 | 
  64 |         // Wait for navigation to complete
  65 |         await this.page.waitForLoadState('domcontentloaded');
  66 |     }
  67 | 
  68 |     async verifyHdfcBankPage() {
  69 | 
  70 |         await expect(this.page).toHaveURL(
  71 |             'https://www.nseindia.com/get-quote/equity/HDFCBANK/HDFC-Bank-Limited',
  72 |             {
  73 |                 timeout: 15000
  74 |             }
  75 |         );
  76 |     }
  77 | }
```