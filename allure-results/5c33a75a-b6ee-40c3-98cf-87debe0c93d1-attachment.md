# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> NSE Live Equity Market >> Search HDFC BANK stock
- Location: tests/searchStock.spec.ts:6:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('input[placeholder*="Search"]') resolved to 2 elements:
    1) <input type="search" name="search" class="searchbox-input" placeholder="Search...."/> aka getByPlaceholder('Search....')
    2) <input dir="auto" type="text" aria-label="" role="combobox" spellcheck="false" aria-expanded="false" aria-autocomplete="list" aria-describedby="basic-addon1" aria-labelledby="companySearchLbl" placeholder="Search by company name or symbol" class="form-control QLAutocomplete typeahead tt-input" aria-owns="tt-eedc5122-04b4-43ad-6ff2-893c8109d9d4_listbox"/> aka getByPlaceholder('Search by company name or')

Call log:
  - waiting for locator('input[placeholder*="Search"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - list [ref=e6]:
    - listitem [ref=e7]:
      - link "Option Chain" [ref=e8] [cursor=pointer]:
        - /url: /option-chain
    - listitem [ref=e9]:
      - link "Market Turnover" [ref=e10] [cursor=pointer]:
        - /url: "#modal_market_turnover_popup"
    - listitem [ref=e11]:
      - link "Listings" [ref=e12] [cursor=pointer]:
        - /url: /market-data/new-stock-exchange-listings-today
    - listitem [ref=e13]:
      - link "IPO" [ref=e14] [cursor=pointer]:
        - /url: /market-data/all-upcoming-issues-ipo
    - listitem [ref=e15]:
      - link "Circulars" [ref=e16] [cursor=pointer]:
        - /url: /resources/exchange-communication-circulars
    - listitem [ref=e17]:
      - link "Daily Report" [ref=e18] [cursor=pointer]:
        - /url: /all-reports
    - listitem [ref=e19]:
      - link "Holidays" [ref=e20] [cursor=pointer]:
        - /url: /resources/exchange-communication-holidays
    - listitem [ref=e21]:
      - link "Corporates" [ref=e22] [cursor=pointer]:
        - /url: /companies-listing/corporate-filings-application
    - listitem [ref=e23]:
      - link "Press Releases" [ref=e24] [cursor=pointer]:
        - /url: /resources/exchange-communication-press-releases
    - listitem [ref=e25]:
      - link "Contact Us" [ref=e26] [cursor=pointer]:
        - /url: /contact/contact-us
    - listitem [ref=e27]:
      - generic [ref=e28] [cursor=pointer]:
        - generic [ref=e29]: English
        - img "down-arrow" [ref=e30]
    - listitem [ref=e31]:
      - button [ref=e32] [cursor=pointer]:
        - img [ref=e33]: 
    - listitem [ref=e34]:
      - button "Events List" [ref=e35] [cursor=pointer]:
        - img [ref=e36]: 
  - banner [ref=e37]:
    - navigation [ref=e39]:
      - generic [ref=e40]:
        - link "NSE India" [ref=e41] [cursor=pointer]:
          - /url: /
          - img "NSE India" [ref=e42]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - combobox "Search by Company name, Index or Symbol..." [expanded] [active] [ref=e47]:
                - listbox [ref=e48]:
                  - toolbar "search filters" [ref=e49]:
                    - generic [ref=e50] [cursor=pointer]: All
                    - generic [ref=e51] [cursor=pointer]: Equity Stocks
                    - generic [ref=e52] [cursor=pointer]: Derivatives
                    - generic [ref=e53] [cursor=pointer]: ETFs
                    - generic [ref=e54] [cursor=pointer]: Debt/Others
                  - paragraph [ref=e56]:
                    - generic [ref=e57]: No record found
              - status [ref=e58]
            - text: 
            - button "Click to Search" [ref=e59] [cursor=pointer]:
              - img "Get Quote Search" [ref=e60]
          - generic [ref=e61]:
            - list
        - generic [ref=e63]:
          - generic [ref=e64]:
            - figure [ref=e66]:
              - link "NSE - NIFTY 50" [ref=e67] [cursor=pointer]:
                - /url: /index-tracker/NIFTY%2050
                - img "NSE - NIFTY 50" [ref=e68]
            - generic [ref=e70]:
              - generic [ref=e72]:
                - text: (
                - text: "%)"
              - generic:
                - paragraph
              - generic [ref=e73]:
                - text: Streaming
                - img "Streaming" [ref=e74]
          - generic "Market Ticker Carousel" [ref=e75]:
            - generic [ref=e77]:
              - generic [ref=e79]:
                - figure [ref=e80]:
                  - link [ref=e81] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e82]:
                  - generic [ref=e83]: 
                  - text: "|"
              - tabpanel [ref=e84]:
                - generic [ref=e85]:
                  - generic [ref=e86]:
                    - img "GiftNifty" [ref=e88]
                    - generic [ref=e91]:
                      - text: (
                      - text: "%)"
                  - generic:
                    - paragraph
              - tabpanel [ref=e92]:
                - generic [ref=e93]:
                  - figure [ref=e94]: Futures
                  - paragraph [ref=e95]:
                    - text: "|"
                    - generic [ref=e96]: 
              - tabpanel [ref=e97]:
                - generic [ref=e98]:
                  - figure [ref=e99]:
                    - link [ref=e100] [cursor=pointer]:
                      - /url: "#"
                      - text: Market Capitalization
                  - paragraph [ref=e101]:
                    - generic [ref=e102]: 
                    - text: "|"
              - generic [ref=e105]:
                - img [ref=e107]
                - generic [ref=e110]: (%)
              - generic [ref=e112]:
                - figure [ref=e113]: Futures
                - paragraph [ref=e114]:
                  - text: "|"
                  - generic [ref=e115]: 
              - generic [ref=e117]:
                - figure [ref=e118]:
                  - link [ref=e119] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e120]:
                  - generic [ref=e121]: 
                  - text: "|"
            - tablist [ref=e122]:
              - tab "Slide 1" [selected] [ref=e123] [cursor=pointer]: "01"
              - tab "Slide 2" [ref=e124] [cursor=pointer]: "02"
              - tab "Slide 3" [ref=e125] [cursor=pointer]: "03"
          - button "playpause" [ref=e126] [cursor=pointer]:
            - generic [ref=e127]: 
      - navigation [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132]:
            - link "Home" [ref=e133] [cursor=pointer]:
              - /url: /
          - listitem [ref=e134]:
            - link "About" [ref=e135] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e136]:
            - link "Market Data" [ref=e137] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e138]:
            - link "Invest" [ref=e139] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e140]:
            - link "List" [ref=e141] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e142]:
            - link "Trade" [ref=e143] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e144]:
            - link "Regulation" [ref=e145] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e146]:
            - link "Learn" [ref=e147] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e148]:
            - link "Resources" [ref=e149] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e150]:
            - link "Complaints" [ref=e151] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e152]:
            - link "RESEARCH" [ref=e153] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e154]:
            - link "Investor Relations" [ref=e155] [cursor=pointer]:
              - /url: /static/investor-relations/announcements
  - generic:      
  - generic [ref=e156]:
    - generic [ref=e158]:
      - text:    
      - heading "Market Watch - Equity/Stock" [level=1] [ref=e159]
    - tabpanel [ref=e166]:
      - navigation [ref=e167]:
        - tablist [ref=e169]:
          - tab "Equity/Stock" [ref=e170] [cursor=pointer]
          - link "T0 settlement" [ref=e171] [cursor=pointer]:
            - /url: /market-data/live-t0-market
          - link "SME Market" [ref=e172] [cursor=pointer]:
            - /url: /market-data/sme-market
          - link "Sovereign Gold Bonds (SGB)" [ref=e173] [cursor=pointer]:
            - /url: /market-data/sovereign-gold-bond
          - link "Exchange Traded Funds" [ref=e174] [cursor=pointer]:
            - /url: /market-data/exchange-traded-funds-etf
          - link "Block Deals" [ref=e175] [cursor=pointer]:
            - /url: /market-data/block-deal-watch
          - link "REITS/INVITS" [ref=e176] [cursor=pointer]:
            - /url: /market-data/reits-invits
      - tabpanel [ref=e179]:
        - generic [ref=e180]:
          - combobox "Category 1" [ref=e183] [cursor=pointer]
          - link "Add a new Category Tab" [ref=e185] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e188]:
          - link "Refresh" [ref=e191] [cursor=pointer]:
            - /url: "#"
            - img "Refresh" [ref=e192]
          - list [ref=e195]:
            - listitem [ref=e196]: Advances -
            - listitem [ref=e197]: Declines -
            - listitem [ref=e198]: Unchanged -
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link "csv Download (.csv)" [ref=e203] [cursor=pointer]:
                - /url: "#"
                - img "csv" [ref=e204]
                - generic [ref=e205]: Download (.csv)
        - generic [ref=e209]:
          - generic [ref=e210]: Change denomination
          - group "Value Convention" [ref=e211]:
            - generic [ref=e212]:
              - radio "Lakhs" [ref=e213]
              - generic [ref=e214] [cursor=pointer]: Lakhs
            - generic [ref=e215]:
              - radio "Crores" [checked] [ref=e216]
              - generic [ref=e217] [cursor=pointer]: Crores
            - generic [ref=e218]:
              - radio "Billions" [ref=e219]
              - generic [ref=e220] [cursor=pointer]: Billions
        - generic [ref=e224]:
          - heading "Note" [level=2] [ref=e225]:
            - generic [ref=e226]: Note
          - list [ref=e227]:
            - listitem [ref=e228]:
              - text: "-"
              - strong [ref=e229]: "%CHNG:"
              - text: "% change is calculated with respect to adjusted price on ex-date for Corporate Actions like: Dividend, Bonus, Consolidation, Rights & Face Value Split."
            - listitem [ref=e230]:
              - text: "-"
              - strong [ref=e231]: "52 W H/L:"
              - text: 52 week High & Low prices are adjusted for Bonus, Consolidation, Split & Rights Corporate actions.
            - listitem [ref=e232]: "- The legend for the 52-week H/L indicator is given below:"
            - listitem [ref=e233]:
              - text: "- for Stocks closer to 52-week high:"
              - list [ref=e234]:
                - listitem [ref=e235]:
                  - generic [ref=e236]: "- within 0% and 2%"
                - listitem [ref=e237]:
                  - generic [ref=e238]: "- within 2% and 5%"
                - listitem [ref=e239]:
                  - generic [ref=e240]: "- within 5% and 7%"
            - listitem [ref=e241]:
              - text: "- Symbols for Stocks closer to 52-week low:"
              - list [ref=e242]:
                - listitem [ref=e243]:
                  - generic [ref=e244]: "- within 0% and 2%"
                - listitem [ref=e245]:
                  - generic [ref=e246]: "- within 2% and 5%"
                - listitem [ref=e247]:
                  - generic [ref=e248]: "- within 5% and 7%"
            - listitem [ref=e249]: "- In case, any of the index constituent undergo a scheme of arrangement (e.g. demerger), such stock will not be displayed under 'Market Watch - Equity/ Stock' section during Special Pre-Open session and it will be displayed post resumption of trading of such stock under 'Normal' market."
            - listitem [ref=e250]: "- Data is displayed for securities where orders have been received during the pre-open session."
            - listitem [ref=e251]: "- Trade Timings for T+0 settlement: One continuous trading session from 09:15 AM to 1:30 PM."
            - listitem [ref=e252]: "- Price Band for T+0 settlement: Price band of +/- 1% (100 Basis points) based on close price of corresponding T+1 settled security, which will be re-calibrated throughout the trading hours after +/- 0.5% (50 basis points) movement in the LTP of T+1 settled security in the regular market."
    - contentinfo [ref=e253]:
      - generic [ref=e254]:
        - generic [ref=e255]:
          - generic [ref=e257]:
            - generic [ref=e258]: About NSE
            - list [ref=e259]:
              - listitem [ref=e260]:
                - link "About Us" [ref=e261] [cursor=pointer]:
                  - /url: /national-stock-exchange/about-nse-company
              - listitem [ref=e262]:
                - link "Structure & Key Personnel" [ref=e263] [cursor=pointer]:
                  - /url: /structure-key-personnel/corporate-structure
              - listitem [ref=e264]:
                - link "Awards and Recognitions" [ref=e265] [cursor=pointer]:
                  - /url: /national-stock-exchange/awards-recognition
              - listitem [ref=e266]:
                - link "Regulations" [ref=e267] [cursor=pointer]:
                  - /url: /regulations/exchange-market-regulations-rules-byelaws-nseil
              - listitem [ref=e268]:
                - link "Event Gallery" [ref=e269] [cursor=pointer]:
                  - /url: /event-gallery
              - listitem [ref=e270]:
                - link "Media" [ref=e271] [cursor=pointer]:
                  - /url: /resources/exchange-communication-media-center
              - listitem [ref=e272]:
                - link "Holidays" [ref=e273] [cursor=pointer]:
                  - /url: /resources/exchange-communication-holidays
              - listitem [ref=e274]:
                - link "Careers" [ref=e275] [cursor=pointer]:
                  - /url: /careers-at-nse
              - listitem [ref=e276]:
                - link "Contact Us" [ref=e277] [cursor=pointer]:
                  - /url: /contact/contact-us
              - listitem [ref=e278]:
                - link "Web Information Manager" [ref=e279] [cursor=pointer]:
                  - /url: /static/contact/contact-us
          - generic [ref=e281]:
            - generic [ref=e282]: NSE Group Companies
            - list [ref=e283]:
              - listitem [ref=e284]:
                - link "NAL Academy Limited" [ref=e285] [cursor=pointer]:
                  - /url: /nse-academy/nse-academy-overview
              - listitem [ref=e286]:
                - link "NSE Clearing" [ref=e287] [cursor=pointer]:
                  - /url: /nse-clearing
              - listitem [ref=e288]:
                - link "NSE Data & Analytics" [ref=e289] [cursor=pointer]:
                  - /url: /nse-data-and-analytics
              - listitem [ref=e290]:
                - link "NSE Foundation" [ref=e291] [cursor=pointer]:
                  - /url: /nse-foundation/about-us
              - listitem [ref=e292]:
                - link "NSE Indices" [ref=e293] [cursor=pointer]:
                  - /url: /nse-indices
              - listitem [ref=e294]:
                - link "NSE International Exchange" [ref=e295] [cursor=pointer]:
                  - /url: /nse-international-exchange/about
              - listitem [ref=e296]:
                - link "NSE International Clearing" [ref=e297] [cursor=pointer]:
                  - /url: /nseint_clearing/nse-international-clearing-overview
              - listitem [ref=e298]:
                - link "NSE Investments" [ref=e299] [cursor=pointer]:
                  - /url: /nse-investments
              - listitem [ref=e300]:
                - link "View all" [ref=e301] [cursor=pointer]:
                  - /url: /national-stock-exchange/our-group
          - generic [ref=e303]:
            - generic [ref=e304]: Products & Services
            - list [ref=e305]:
              - listitem [ref=e306]:
                - link "Equity Market" [ref=e307] [cursor=pointer]:
                  - /url: /products-services/about-equity-market
              - listitem [ref=e308]:
                - link "Indices" [ref=e309] [cursor=pointer]:
                  - /url: /products-services/about-indices
              - listitem [ref=e310]:
                - link "Emerge Platform" [ref=e311] [cursor=pointer]:
                  - /url: /products-services/emerge-platform-about-sme
              - listitem [ref=e312]:
                - link "Mutual Funds" [ref=e313] [cursor=pointer]:
                  - /url: /products-services/mf-about-mfss
              - listitem [ref=e314]:
                - link "Equity Derivatives" [ref=e315] [cursor=pointer]:
                  - /url: /products-services/about-equity-derivatives
              - listitem [ref=e316]:
                - link "Currency Derivatives" [ref=e317] [cursor=pointer]:
                  - /url: /products-services/about-currency-derivatives
              - listitem [ref=e318]:
                - link "Commodity Derivatives" [ref=e319] [cursor=pointer]:
                  - /url: /products-services/about-commodity-derivatives
              - listitem [ref=e320]:
                - link "Interest Rate Derivatives" [ref=e321] [cursor=pointer]:
                  - /url: /products-services/about-interest-rate-derivatives
              - listitem [ref=e322]:
                - link "Fixed Income and Debt" [ref=e323] [cursor=pointer]:
                  - /url: /products-services/fixed-income-debt-overview
              - listitem [ref=e324]:
                - link "Public Issues" [ref=e325] [cursor=pointer]:
                  - /url: /products-services/about-initial-public-offerings
          - generic [ref=e327]:
            - list [ref=e329]:
              - listitem [ref=e330]:
                - link "Disclaimer" [ref=e331] [cursor=pointer]:
                  - /url: /nse-disclaimer
              - listitem [ref=e332]:
                - link "Privacy Policy" [ref=e333] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e334]:
                - link "Terms of Use" [ref=e335] [cursor=pointer]:
                  - /url: /nse-terms-of-use
              - listitem [ref=e336]:
                - link "Copyright" [ref=e337] [cursor=pointer]:
                  - /url: /nse-copyright
              - listitem [ref=e338]:
                - link "Feedback" [ref=e339] [cursor=pointer]:
                  - /url: /feedback/new
              - listitem [ref=e340]:
                - link "Site Map" [ref=e341] [cursor=pointer]:
                  - /url: /sitemap
              - listitem [ref=e342]:
                - link "Website Policies" [ref=e343] [cursor=pointer]:
                  - /url: /website-policies
              - listitem [ref=e344]:
                - link "Empanelment of Internal Auditors/System Auditor of Members" [ref=e345] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/auditorRegistration/
                  - text: Empanelment of Internal
                  - text: Auditors/System Auditor of Members
              - listitem [ref=e346]:
                - link "List of Empaneled Audit Firms" [ref=e347] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/viewEmpanelledAuditors/
              - listitem [ref=e348]:
                - link "Help" [ref=e349] [cursor=pointer]:
                  - /url: /static/help
            - generic:
              - list
        - generic [ref=e351]:
          - generic [ref=e352]:
            - generic [ref=e353]: Download NSE App
            - generic [ref=e354]:
              - link "appstore" [ref=e355] [cursor=pointer]:
                - /url: https://apps.apple.com/in/app/nseindia/id6736678487
                - img "appstore" [ref=e356]
              - link "playstore" [ref=e357] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.nse.nseindia
                - img "playstore" [ref=e358]
          - generic [ref=e359]:
            - generic [ref=e360]:
              - generic [ref=e361]: Scan QR to
              - generic [ref=e362]: Download App
            - img "qr-code" [ref=e364]
          - generic [ref=e365]:
            - link "NSE GO-BID" [ref=e369] [cursor=pointer]:
              - /url: https://eipo.nseindia.com/eipodc/rest/login
            - generic [ref=e371]:
              - generic [ref=e372]: Login to
              - link "NCFM" [ref=e374] [cursor=pointer]:
                - /url: https://www.ncfm-india.com/ORE/OREloginPage.jsp
    - generic [ref=e378]:
      - generic [ref=e380]:
        - paragraph [ref=e381]:
          - link "Copyright ©" [ref=e382] [cursor=pointer]:
            - /url: /nse-copyright
          - text: National Stock Exchange of India Ltd. All rights reserved. Best viewed in Chrome and 1366 X 768 resolution. Recommended to use latest browser versions.
        - paragraph [ref=e383]:
          - generic [ref=e384]:
            - img "GIGW" [ref=e385]
            - text: GIGW Compliant
      - generic [ref=e387]:
        - list [ref=e388]:
          - listitem [ref=e389]:
            - link "Whatsapp chatbot of National Stock Exchange" [ref=e390] [cursor=pointer]:
              - /url: https://wa.me/918655986573?text=Hi
              - generic [ref=e391]: 
          - listitem [ref=e392]:
            - link "Facebook Page of National Stock Exchange" [ref=e393] [cursor=pointer]:
              - /url: https://www.facebook.com/NationalStockExchange/
              - generic [ref=e394]: 
          - listitem [ref=e395]:
            - link "Twitter Profile of NSEIndia" [ref=e396] [cursor=pointer]:
              - /url: https://twitter.com/NSEIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
              - img [ref=e397]
          - listitem [ref=e399]:
            - link "LinkedIn Profile of NSEIndia" [ref=e400] [cursor=pointer]:
              - /url: https://in.linkedin.com/company/national-stock-exchange-of-india-limited
              - generic [ref=e401]: 
          - listitem [ref=e402]:
            - link "YouTube Channel of NSEIndia" [ref=e403] [cursor=pointer]:
              - /url: https://www.youtube.com/user/NSEIL1india
              - generic [ref=e404]: 
          - listitem [ref=e405]:
            - link "Instagram Profile of NSEIndia" [ref=e406] [cursor=pointer]:
              - /url: https://www.instagram.com/nseindia
              - generic [ref=e407]: 
          - listitem [ref=e408]:
            - link "RSS Feed of NSEIndia" [ref=e409] [cursor=pointer]:
              - /url: https://www.nseindia.com/rss-feed
              - generic [ref=e410]: 
        - text: 17 Jun 2026 | 22:32 (IST)
    - text:  
  - generic "Go to Top" [ref=e411] [cursor=pointer]:
    - img [ref=e412]:
      - generic [ref=e415]: ↑
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
  28 |         await this.page.goto('https://www.nseindia.com/market-data/live-equity-market',
  29 |      {
  30 |         waitUntil: 'domcontentloaded',
  31 |         timeout: 60000
  32 |      }
  33 |     );
  34 |     }
  35 |     /**
  36 |      * Search stock
  37 |      */
  38 |     async searchStock(stockName: string) {
  39 | 
  40 |         await this.searchIcon.click();
  41 | 
> 42 |         await this.searchTextbox.waitFor({
     |                                  ^ Error: locator.waitFor: Error: strict mode violation: locator('input[placeholder*="Search"]') resolved to 2 elements:
  43 |             state: 'visible'
  44 |         });
  45 | 
  46 |        await this.searchTextbox.fill(stockName);
  47 | 
  48 |         await this.searchResult.waitFor({
  49 |         state: 'visible'
  50 |     });
  51 | 
  52 |         await this.searchResult.click();
  53 |     }
  54 | 
  55 |     /**
  56 |      * Verify search result
  57 |      */
  58 |     async verifySearchResult(stockName: string) {
  59 | 
  60 |         await expect(
  61 |             this.page.locator(`text=${stockName}`)
  62 |         ).toBeVisible();
  63 |     }
  64 | }
```