# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Verify user is redirected to HDFC Bank quote page
- Location: tests/searchStock.spec.ts:6:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*HDFCBANK\/HDFC-Bank-Limited/i
Received string:  "chrome-error://chromewebdata/"
Timeout: 15000ms

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    34 × unexpected value "chrome-error://chromewebdata/"

```

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - text: The web page at
  - strong: https://www.nseindia.com/get-quote/equity/HDFCBANK/HDFC-Bank-Limited
  - text: might be temporarily down or it may have moved permanently to a new web address.
- text: ERR_HTTP2_PROTOCOL_ERROR
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
  36 |         await this.searchBox.waitFor({
  37 |             state: 'visible'
  38 |         });
  39 | 
  40 |         await this.searchBox.click();
  41 | 
  42 |         await this.searchBox.fill(stockName);
  43 | 
  44 |         const stockOption = this.page.locator(
  45 |             'div.autocompleteList.tt-suggestion.tt-selectable.active'
  46 |         );
  47 | 
  48 |         await stockOption.waitFor({
  49 |             state: 'visible',
  50 |             timeout: 10000
  51 |         });
  52 | 
  53 |         await stockOption.hover();
  54 | 
  55 |         await stockOption.click();
  56 | 
  57 |         // Wait for navigation to complete
  58 |         await this.page.waitForLoadState('domcontentloaded');
  59 |     }
  60 | 
  61 |     async verifyHdfcBankPage() {
  62 | 
> 63 |         await expect(this.page).toHaveURL(
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  64 |             /.*HDFCBANK\/HDFC-Bank-Limited/i,
  65 |             {
  66 |                 timeout: 15000
  67 |             }
  68 |         );
  69 |     }
  70 | }
```