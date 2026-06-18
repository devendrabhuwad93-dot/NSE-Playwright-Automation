# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchStock.spec.ts >> Search and Select HDFC Bank
- Location: tests/searchStock.spec.ts:5:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//input[contains(@placeholder,\'Search\')]') resolved to 2 elements:
    1) <input type="search" name="search" class="searchbox-input" placeholder="Search...."/> aka getByPlaceholder('Search....')
    2) <input dir="auto" type="text" aria-label="" role="combobox" spellcheck="false" aria-expanded="false" aria-autocomplete="list" aria-describedby="basic-addon1" aria-labelledby="companySearchLbl" placeholder="Search by company name or symbol" class="form-control QLAutocomplete typeahead tt-input" aria-owns="tt-2d2decd8-3079-6cf7-7aa6-a50f16d43657_listbox"/> aka getByPlaceholder('Search by company name or')

Call log:
  - waiting for locator('//input[contains(@placeholder,\'Search\')]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
    - navigation [ref=e38]:
      - generic [ref=e39]:
        - link "NSE India" [ref=e40] [cursor=pointer]:
          - /url: /
          - img "NSE India" [ref=e41]
        - generic [ref=e43]:
          - generic [ref=e44]:
            - generic [ref=e45]:
              - combobox "Search by Company name, Index or Symbol..." [ref=e46]
              - status [ref=e47]
            - text: 
            - button "Click to Search" [ref=e48] [cursor=pointer]:
              - img "Get Quote Search" [ref=e49]
          - generic [ref=e50]:
            - list
        - generic [ref=e52]:
          - generic [ref=e53]:
            - figure [ref=e55]:
              - link "NSE - NIFTY 50" [ref=e56] [cursor=pointer]:
                - /url: /index-tracker/NIFTY%2050
                - img "NSE - NIFTY 50" [ref=e57]
            - generic [ref=e59]:
              - generic [ref=e61]:
                - text: (
                - text: "%)"
              - generic:
                - paragraph
              - generic [ref=e62]:
                - text: Streaming
                - img "Streaming" [ref=e63]
          - generic "Market Ticker Carousel" [ref=e64]:
            - generic [ref=e66]:
              - generic [ref=e68]:
                - figure [ref=e69]:
                  - link [ref=e70] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e71]:
                  - generic [ref=e72]: 
                  - text: "|"
              - tabpanel [ref=e73]:
                - generic [ref=e74]:
                  - generic [ref=e75]:
                    - img "GiftNifty" [ref=e77]
                    - generic [ref=e80]:
                      - text: (
                      - text: "%)"
                  - generic:
                    - paragraph
              - tabpanel [ref=e81]:
                - generic [ref=e82]:
                  - figure [ref=e83]: Futures
                  - paragraph [ref=e84]:
                    - text: "|"
                    - generic [ref=e85]: 
              - tabpanel [ref=e86]:
                - generic [ref=e87]:
                  - figure [ref=e88]:
                    - link [ref=e89] [cursor=pointer]:
                      - /url: "#"
                      - text: Market Capitalization
                  - paragraph [ref=e90]:
                    - generic [ref=e91]: 
                    - text: "|"
              - generic [ref=e94]:
                - img [ref=e96]
                - generic [ref=e99]: (%)
              - generic [ref=e101]:
                - figure [ref=e102]: Futures
                - paragraph [ref=e103]:
                  - text: "|"
                  - generic [ref=e104]: 
              - generic [ref=e106]:
                - figure [ref=e107]:
                  - link [ref=e108] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e109]:
                  - generic [ref=e110]: 
                  - text: "|"
            - tablist [ref=e111]:
              - tab "Slide 1" [selected] [ref=e112] [cursor=pointer]: "01"
              - tab "Slide 2" [ref=e113] [cursor=pointer]: "02"
              - tab "Slide 3" [ref=e114] [cursor=pointer]: "03"
          - button "playpause" [ref=e115] [cursor=pointer]:
            - generic [ref=e116]: 
      - navigation [ref=e119]:
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "Home" [ref=e122] [cursor=pointer]:
              - /url: /
          - listitem [ref=e123]:
            - link "About" [ref=e124] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e125]:
            - link "Market Data" [ref=e126] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e127]:
            - link "Invest" [ref=e128] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e129]:
            - link "List" [ref=e130] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e131]:
            - link "Trade" [ref=e132] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e133]:
            - link "Regulation" [ref=e134] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e135]:
            - link "Learn" [ref=e136] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e137]:
            - link "Resources" [ref=e138] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e139]:
            - link "Complaints" [ref=e140] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e141]:
            - link "RESEARCH" [ref=e142] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e143]:
            - link "Investor Relations" [ref=e144] [cursor=pointer]:
              - /url: /static/investor-relations/announcements
  - generic:      
  - generic [ref=e145]:
    - generic [ref=e147]:
      - text:    
      - heading "Market Watch - Equity/Stock" [level=1] [ref=e148]
    - tabpanel [ref=e155]:
      - navigation [ref=e156]:
        - tablist [ref=e158]:
          - tab "Equity/Stock" [ref=e159] [cursor=pointer]
          - link "T0 settlement" [ref=e160] [cursor=pointer]:
            - /url: /market-data/live-t0-market
          - link "SME Market" [ref=e161] [cursor=pointer]:
            - /url: /market-data/sme-market
          - link "Sovereign Gold Bonds (SGB)" [ref=e162] [cursor=pointer]:
            - /url: /market-data/sovereign-gold-bond
          - link "Exchange Traded Funds" [ref=e163] [cursor=pointer]:
            - /url: /market-data/exchange-traded-funds-etf
          - link "Block Deals" [ref=e164] [cursor=pointer]:
            - /url: /market-data/block-deal-watch
          - link "REITS/INVITS" [ref=e165] [cursor=pointer]:
            - /url: /market-data/reits-invits
      - tabpanel [ref=e168]:
        - generic [ref=e169]:
          - combobox "Category 1" [ref=e172] [cursor=pointer]
          - link "Add a new Category Tab" [ref=e174] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e177]:
          - link "Refresh" [ref=e180] [cursor=pointer]:
            - /url: "#"
            - img "Refresh" [ref=e181]
          - list [ref=e184]:
            - listitem [ref=e185]: Advances -
            - listitem [ref=e186]: Declines -
            - listitem [ref=e187]: Unchanged -
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "csv Download (.csv)" [ref=e192] [cursor=pointer]:
                - /url: "#"
                - img "csv" [ref=e193]
                - generic [ref=e194]: Download (.csv)
        - generic [ref=e198]:
          - generic [ref=e199]: Change denomination
          - group "Value Convention" [ref=e200]:
            - generic [ref=e201]:
              - radio "Lakhs" [ref=e202]
              - generic [ref=e203] [cursor=pointer]: Lakhs
            - generic [ref=e204]:
              - radio "Crores" [checked] [ref=e205]
              - generic [ref=e206] [cursor=pointer]: Crores
            - generic [ref=e207]:
              - radio "Billions" [ref=e208]
              - generic [ref=e209] [cursor=pointer]: Billions
        - generic [ref=e213]:
          - heading "Note" [level=2] [ref=e214]:
            - generic [ref=e215]: Note
          - list [ref=e216]:
            - listitem [ref=e217]:
              - text: "-"
              - strong [ref=e218]: "%CHNG:"
              - text: "% change is calculated with respect to adjusted price on ex-date for Corporate Actions like: Dividend, Bonus, Consolidation, Rights & Face Value Split."
            - listitem [ref=e219]:
              - text: "-"
              - strong [ref=e220]: "52 W H/L:"
              - text: 52 week High & Low prices are adjusted for Bonus, Consolidation, Split & Rights Corporate actions.
            - listitem [ref=e221]: "- The legend for the 52-week H/L indicator is given below:"
            - listitem [ref=e222]:
              - text: "- for Stocks closer to 52-week high:"
              - list [ref=e223]:
                - listitem [ref=e224]:
                  - generic [ref=e225]: "- within 0% and 2%"
                - listitem [ref=e226]:
                  - generic [ref=e227]: "- within 2% and 5%"
                - listitem [ref=e228]:
                  - generic [ref=e229]: "- within 5% and 7%"
            - listitem [ref=e230]:
              - text: "- Symbols for Stocks closer to 52-week low:"
              - list [ref=e231]:
                - listitem [ref=e232]:
                  - generic [ref=e233]: "- within 0% and 2%"
                - listitem [ref=e234]:
                  - generic [ref=e235]: "- within 2% and 5%"
                - listitem [ref=e236]:
                  - generic [ref=e237]: "- within 5% and 7%"
            - listitem [ref=e238]: "- In case, any of the index constituent undergo a scheme of arrangement (e.g. demerger), such stock will not be displayed under 'Market Watch - Equity/ Stock' section during Special Pre-Open session and it will be displayed post resumption of trading of such stock under 'Normal' market."
            - listitem [ref=e239]: "- Data is displayed for securities where orders have been received during the pre-open session."
            - listitem [ref=e240]: "- Trade Timings for T+0 settlement: One continuous trading session from 09:15 AM to 1:30 PM."
            - listitem [ref=e241]: "- Price Band for T+0 settlement: Price band of +/- 1% (100 Basis points) based on close price of corresponding T+1 settled security, which will be re-calibrated throughout the trading hours after +/- 0.5% (50 basis points) movement in the LTP of T+1 settled security in the regular market."
    - contentinfo [ref=e242]:
      - generic [ref=e243]:
        - generic [ref=e244]:
          - generic [ref=e246]:
            - generic [ref=e247]: About NSE
            - list [ref=e248]:
              - listitem [ref=e249]:
                - link "About Us" [ref=e250] [cursor=pointer]:
                  - /url: /national-stock-exchange/about-nse-company
              - listitem [ref=e251]:
                - link "Structure & Key Personnel" [ref=e252] [cursor=pointer]:
                  - /url: /structure-key-personnel/corporate-structure
              - listitem [ref=e253]:
                - link "Awards and Recognitions" [ref=e254] [cursor=pointer]:
                  - /url: /national-stock-exchange/awards-recognition
              - listitem [ref=e255]:
                - link "Regulations" [ref=e256] [cursor=pointer]:
                  - /url: /regulations/exchange-market-regulations-rules-byelaws-nseil
              - listitem [ref=e257]:
                - link "Event Gallery" [ref=e258] [cursor=pointer]:
                  - /url: /event-gallery
              - listitem [ref=e259]:
                - link "Media" [ref=e260] [cursor=pointer]:
                  - /url: /resources/exchange-communication-media-center
              - listitem [ref=e261]:
                - link "Holidays" [ref=e262] [cursor=pointer]:
                  - /url: /resources/exchange-communication-holidays
              - listitem [ref=e263]:
                - link "Careers" [ref=e264] [cursor=pointer]:
                  - /url: /careers-at-nse
              - listitem [ref=e265]:
                - link "Contact Us" [ref=e266] [cursor=pointer]:
                  - /url: /contact/contact-us
              - listitem [ref=e267]:
                - link "Web Information Manager" [ref=e268] [cursor=pointer]:
                  - /url: /static/contact/contact-us
          - generic [ref=e270]:
            - generic [ref=e271]: NSE Group Companies
            - list [ref=e272]:
              - listitem [ref=e273]:
                - link "NAL Academy Limited" [ref=e274] [cursor=pointer]:
                  - /url: /nse-academy/nse-academy-overview
              - listitem [ref=e275]:
                - link "NSE Clearing" [ref=e276] [cursor=pointer]:
                  - /url: /nse-clearing
              - listitem [ref=e277]:
                - link "NSE Data & Analytics" [ref=e278] [cursor=pointer]:
                  - /url: /nse-data-and-analytics
              - listitem [ref=e279]:
                - link "NSE Foundation" [ref=e280] [cursor=pointer]:
                  - /url: /nse-foundation/about-us
              - listitem [ref=e281]:
                - link "NSE Indices" [ref=e282] [cursor=pointer]:
                  - /url: /nse-indices
              - listitem [ref=e283]:
                - link "NSE International Exchange" [ref=e284] [cursor=pointer]:
                  - /url: /nse-international-exchange/about
              - listitem [ref=e285]:
                - link "NSE International Clearing" [ref=e286] [cursor=pointer]:
                  - /url: /nseint_clearing/nse-international-clearing-overview
              - listitem [ref=e287]:
                - link "NSE Investments" [ref=e288] [cursor=pointer]:
                  - /url: /nse-investments
              - listitem [ref=e289]:
                - link "View all" [ref=e290] [cursor=pointer]:
                  - /url: /national-stock-exchange/our-group
          - generic [ref=e292]:
            - generic [ref=e293]: Products & Services
            - list [ref=e294]:
              - listitem [ref=e295]:
                - link "Equity Market" [ref=e296] [cursor=pointer]:
                  - /url: /products-services/about-equity-market
              - listitem [ref=e297]:
                - link "Indices" [ref=e298] [cursor=pointer]:
                  - /url: /products-services/about-indices
              - listitem [ref=e299]:
                - link "Emerge Platform" [ref=e300] [cursor=pointer]:
                  - /url: /products-services/emerge-platform-about-sme
              - listitem [ref=e301]:
                - link "Mutual Funds" [ref=e302] [cursor=pointer]:
                  - /url: /products-services/mf-about-mfss
              - listitem [ref=e303]:
                - link "Equity Derivatives" [ref=e304] [cursor=pointer]:
                  - /url: /products-services/about-equity-derivatives
              - listitem [ref=e305]:
                - link "Currency Derivatives" [ref=e306] [cursor=pointer]:
                  - /url: /products-services/about-currency-derivatives
              - listitem [ref=e307]:
                - link "Commodity Derivatives" [ref=e308] [cursor=pointer]:
                  - /url: /products-services/about-commodity-derivatives
              - listitem [ref=e309]:
                - link "Interest Rate Derivatives" [ref=e310] [cursor=pointer]:
                  - /url: /products-services/about-interest-rate-derivatives
              - listitem [ref=e311]:
                - link "Fixed Income and Debt" [ref=e312] [cursor=pointer]:
                  - /url: /products-services/fixed-income-debt-overview
              - listitem [ref=e313]:
                - link "Public Issues" [ref=e314] [cursor=pointer]:
                  - /url: /products-services/about-initial-public-offerings
          - generic [ref=e316]:
            - list [ref=e318]:
              - listitem [ref=e319]:
                - link "Disclaimer" [ref=e320] [cursor=pointer]:
                  - /url: /nse-disclaimer
              - listitem [ref=e321]:
                - link "Privacy Policy" [ref=e322] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e323]:
                - link "Terms of Use" [ref=e324] [cursor=pointer]:
                  - /url: /nse-terms-of-use
              - listitem [ref=e325]:
                - link "Copyright" [ref=e326] [cursor=pointer]:
                  - /url: /nse-copyright
              - listitem [ref=e327]:
                - link "Feedback" [ref=e328] [cursor=pointer]:
                  - /url: /feedback/new
              - listitem [ref=e329]:
                - link "Site Map" [ref=e330] [cursor=pointer]:
                  - /url: /sitemap
              - listitem [ref=e331]:
                - link "Website Policies" [ref=e332] [cursor=pointer]:
                  - /url: /website-policies
              - listitem [ref=e333]:
                - link "Empanelment of Internal Auditors/System Auditor of Members" [ref=e334] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/auditorRegistration/
                  - text: Empanelment of Internal
                  - text: Auditors/System Auditor of Members
              - listitem [ref=e335]:
                - link "List of Empaneled Audit Firms" [ref=e336] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/viewEmpanelledAuditors/
              - listitem [ref=e337]:
                - link "Help" [ref=e338] [cursor=pointer]:
                  - /url: /static/help
            - generic:
              - list
        - generic [ref=e340]:
          - generic [ref=e341]:
            - generic [ref=e342]: Download NSE App
            - generic [ref=e343]:
              - link "appstore" [ref=e344] [cursor=pointer]:
                - /url: https://apps.apple.com/in/app/nseindia/id6736678487
                - img "appstore" [ref=e345]
              - link "playstore" [ref=e346] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.nse.nseindia
                - img "playstore" [ref=e347]
          - generic [ref=e348]:
            - generic [ref=e349]:
              - generic [ref=e350]: Scan QR to
              - generic [ref=e351]: Download App
            - img "qr-code" [ref=e353]
          - generic [ref=e354]:
            - link "NSE GO-BID" [ref=e358] [cursor=pointer]:
              - /url: https://eipo.nseindia.com/eipodc/rest/login
            - generic [ref=e360]:
              - generic [ref=e361]: Login to
              - link "NCFM" [ref=e363] [cursor=pointer]:
                - /url: https://www.ncfm-india.com/ORE/OREloginPage.jsp
    - generic [ref=e367]:
      - generic [ref=e369]:
        - paragraph [ref=e370]:
          - link "Copyright ©" [ref=e371] [cursor=pointer]:
            - /url: /nse-copyright
          - text: National Stock Exchange of India Ltd. All rights reserved. Best viewed in Chrome and 1366 X 768 resolution. Recommended to use latest browser versions.
        - paragraph [ref=e372]:
          - generic [ref=e373]:
            - img "GIGW" [ref=e374]
            - text: GIGW Compliant
      - generic [ref=e376]:
        - list [ref=e377]:
          - listitem [ref=e378]:
            - link "Whatsapp chatbot of National Stock Exchange" [ref=e379] [cursor=pointer]:
              - /url: https://wa.me/918655986573?text=Hi
              - generic [ref=e380]: 
          - listitem [ref=e381]:
            - link "Facebook Page of National Stock Exchange" [ref=e382] [cursor=pointer]:
              - /url: https://www.facebook.com/NationalStockExchange/
              - generic [ref=e383]: 
          - listitem [ref=e384]:
            - link "Twitter Profile of NSEIndia" [ref=e385] [cursor=pointer]:
              - /url: https://twitter.com/NSEIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
              - img [ref=e386]
          - listitem [ref=e388]:
            - link "LinkedIn Profile of NSEIndia" [ref=e389] [cursor=pointer]:
              - /url: https://in.linkedin.com/company/national-stock-exchange-of-india-limited
              - generic [ref=e390]: 
          - listitem [ref=e391]:
            - link "YouTube Channel of NSEIndia" [ref=e392] [cursor=pointer]:
              - /url: https://www.youtube.com/user/NSEIL1india
              - generic [ref=e393]: 
          - listitem [ref=e394]:
            - link "Instagram Profile of NSEIndia" [ref=e395] [cursor=pointer]:
              - /url: https://www.instagram.com/nseindia
              - generic [ref=e396]: 
          - listitem [ref=e397]:
            - link "RSS Feed of NSEIndia" [ref=e398] [cursor=pointer]:
              - /url: https://www.nseindia.com/rss-feed
              - generic [ref=e399]: 
        - text: 17 Jun 2026 | 23:03 (IST)
    - text:  
  - generic "Go to Top" [ref=e400] [cursor=pointer]:
    - img [ref=e401]:
      - generic [ref=e404]: ↑
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
  15 |         this.searchBox = page.locator("//input[contains(@placeholder,'Search')]");
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
  34 |     async searchAndSelectHdfcBank() {
  35 | 
  36 |         // Click Search box
> 37 |         await this.searchBox.click();
     |                              ^ Error: locator.click: Error: strict mode violation: locator('//input[contains(@placeholder,\'Search\')]') resolved to 2 elements:
  38 | 
  39 |         // Enter HDFC
  40 |         await this.searchBox.fill('HDFC');
  41 | 
  42 |         // Wait for dropdown suggestion
  43 |         await expect(this.hdfcBankOption).toBeVisible({
  44 |             timeout: 10000
  45 |         });
  46 | 
  47 |         // Hover on dropdown option
  48 |         await this.hdfcBankOption.hover();
  49 | 
  50 |         // Click HDFC BANK option
  51 |         await this.hdfcBankOption.click();
  52 |     }
  53 | }
```