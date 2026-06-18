# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Search HDFC BANK stock
- Location: tests/searchStock.spec.ts:6:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#header-search-input')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - 'link "World Cup 2026: The art of the bicycle kick" [ref=e23] [cursor=pointer]':
      - /url: /search?sca_esv=45cb79f7b9520633&q=FIFA+World+Cup+2026&oi=ddle&noiga=1&ct=460194819&hl=en-GB&stick=H4sIAAAAAAAC_-NgVuLQz9U3MDYoNJ_AwriIVdjN081RITy_KCdFwbm0QMHIwMgMAKor_7IlAAAA&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQPQgE
      - 'img "World Cup 2026: The art of the bicycle kick" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - img [ref=e43]
        - combobox "Search" [active] [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e48]:
            - button "Search by voice" [ref=e49] [cursor=pointer]:
              - img [ref=e50]
            - button "Search by image" [ref=e52] [cursor=pointer]:
              - img [ref=e53]
          - link "AI Mode" [ref=e55] [cursor=pointer]:
            - generic [ref=e57]:
              - img [ref=e59]
              - generic [ref=e66]: AI Mode
      - generic [ref=e68]:
        - button "Google Search" [ref=e69] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e70] [cursor=pointer]
  - generic [ref=e73]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCCo
    - link "বাংলা" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCCs
    - link "తెలుగు" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCCw
    - link "मराठी" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCC0
    - link "தமிழ்" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCC4
    - link "ગુજરાતી" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCC8
    - link "ಕನ್ನಡ" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCDA
    - link "മലയാളം" [ref=e81] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCDE
    - link "ਪੰਜਾਬੀ" [ref=e82] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_9N0rPOK3-HsK9Ml_eVQq1e_Xcpo%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjE-evz1Y6VAxWjTWwGHau5IBkQ2ZgBCDI
  - contentinfo [ref=e84]:
    - generic [ref=e85]: India
    - generic [ref=e86]:
      - generic [ref=e87]:
        - link "Advertising" [ref=e88] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e89] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e90] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e91]:
        - link "Privacy" [ref=e92] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e93] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e97] [cursor=pointer]:
          - generic [ref=e98]: Settings
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
  28 |         await this.page.goto(
  29 |             'https://www.google.com'
  30 |         );
  31 |     }
  32 |     /**
  33 |      * Search stock
  34 |      */
  35 |     async searchStock(stockName: string) {
  36 | 
> 37 |         await this.searchIcon.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  38 | 
  39 |         await this.searchTextbox.waitFor({
  40 |             state: 'visible'
  41 |         });
  42 | 
  43 |        await this.searchTextbox.fill(stockName);
  44 | 
  45 |         await this.searchResult.waitFor({
  46 |         state: 'visible'
  47 |     });
  48 | 
  49 |         await this.searchResult.click();
  50 |     }
  51 | 
  52 |     /**
  53 |      * Verify search result
  54 |      */
  55 |     async verifySearchResult(stockName: string) {
  56 | 
  57 |         await expect(
  58 |             this.page.locator(`text=${stockName}`)
  59 |         ).toBeVisible();
  60 |     }
  61 | }
```