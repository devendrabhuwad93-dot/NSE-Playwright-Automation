# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Search HDFC and select from dropdown
- Location: tests/searchStock.spec.ts:6:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*HDFCBANK.*/i
Received string:  "chrome-error://chromewebdata/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "chrome-error://chromewebdata/"

```

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph:
  - text: The web page at
  - strong: https://www.nseindia.com/get-quote/equity/HDFCLIFE/HDFC-Life-Insurance-Company-Limited
  - text: might be temporarily down or it may have moved permanently to a new web address.
- text: ERR_HTTP2_PROTOCOL_ERROR
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Homepage } from '../pages/Homepage';
  3  | 
  4  | test.describe('NSE Live Equity Market', () => {
  5  | 
  6  | test('Search HDFC and select from dropdown', async ({ page }) => {
  7  | 
  8  |         const homePage = new Homepage(page);
  9  | 
  10 |         // Navigate to NSE page
  11 |         await homePage.navigateToPage();
  12 | 
  13 |         // Search HDFC and select suggestion
  14 |         await homePage.searchStock('HDFC');
  15 | 
  16 |         // Validation
> 17 |         await expect(page).toHaveURL(/.*HDFCBANK.*/i);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  18 | 
  19 |     });
  20 | 
  21 | });
```