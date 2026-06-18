# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Search HDFC BANK stock
- Location: tests/searchStock.spec.ts:6:9

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nseindia.com/market-data/live-equity-market
Call log:
  - navigating to "https://www.nseindia.com/market-data/live-equity-market", waiting until "load"

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
  8  |     readonly searchIcon: Locator;
  9  |     readonly searchTextbox: Locator;
  10 |     //readonly searchButton: Locator;
  11 |     readonly searchResult: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         this.page = page;
  15 | 
  16 |         this.searchIcon = page.locator('#header-search-input') 
  17 |         this.searchTextbox = page.locator('input[placeholder*="Search"]');
  18 |         //this.searchButton = page.locator('button:has-text("Search")');
  19 | 
  20 |         // Dynamic result locator
  21 |         this.searchResult = page.locator('//div//p//span[contains(text(),"HDFC Bank")]');
  22 |     }
  23 | 
  24 |     /**
  25 |      * Navigate to NSE Live Equity Market page
  26 |      */
  27 |     async navigateToLiveEquityMarket() {
> 28 |         await this.page.goto('https://www.nseindia.com/market-data/live-equity-market');
     |                         ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.nseindia.com/market-data/live-equity-market
  29 |     }
  30 |     /**
  31 |      * Search stock
  32 |      */
  33 |     async searchStock(stockName: string) {
  34 | 
  35 |         await this.searchIcon.click();
  36 | 
  37 |         await this.searchTextbox.waitFor({
  38 |             state: 'visible'
  39 |         });
  40 | 
  41 |        await this.searchTextbox.fill(stockName);
  42 | 
  43 |         await this.searchResult.waitFor({
  44 |         state: 'visible'
  45 |     });
  46 | 
  47 |         await this.searchResult.click();
  48 |     }
  49 | 
  50 |     /**
  51 |      * Verify search result
  52 |      */
  53 |     async verifySearchResult(stockName: string) {
  54 | 
  55 |         await expect(
  56 |             this.page.locator(`text=${stockName}`)
  57 |         ).toBeVisible();
  58 |     }
  59 | }
```