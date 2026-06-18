# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: csvfiledownload.spec.ts >> Verify CSV download and save as Dev.csv
- Location: tests/csvfiledownload.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
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
              - generic [ref=e60]:
                - generic [ref=e61]:
                  - generic [ref=e62]: 24,066.35
                  - generic [ref=e63]: 
                - generic [ref=e64]: "-19.35 (-0.08%)"
              - paragraph [ref=e66]: 18-Jun-2026 11:48
              - generic [ref=e67]:
                - text: Streaming
                - img "Streaming" [ref=e68]
          - generic "Market Ticker Carousel" [ref=e69]:
            - generic [ref=e71]:
              - generic [ref=e73]:
                - figure [ref=e74]:
                  - link [ref=e75] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e76]:
                  - generic [ref=e77]: 
                  - text: Lac Crs 475.04 | Tn $ 5.03
                - paragraph [ref=e78]: 17-Jun-2026
              - tabpanel [ref=e79]:
                - generic [ref=e80]:
                  - generic [ref=e81]:
                    - generic [ref=e82]:
                      - img [ref=e83]
                      - generic [ref=e84]: Futures 30-Jun-2026
                    - generic [ref=e86]: 24,044.00 88.50 (0.37%)
                  - paragraph [ref=e88]: 18-Jun-2026 11:41
              - tabpanel [ref=e89]:
                - generic [ref=e90]:
                  - figure [ref=e91]:
                    - link [ref=e92] [cursor=pointer]:
                      - /url: /currency-getquote?symbol=USDINR#inr-contracts
                      - text: USDINR
                    - text: Futures
                  - paragraph [ref=e93]:
                    - text: 25-Jun-2026 |
                    - generic [ref=e94]: 
                    - text: "94.2800"
                  - paragraph [ref=e95]: 18-Jun-2026 11:45
              - tabpanel [ref=e96]:
                - generic [ref=e97]:
                  - figure [ref=e98]:
                    - link "Market Capitalization" [ref=e99] [cursor=pointer]:
                      - /url: "#"
                  - paragraph [ref=e100]:
                    - generic [ref=e101]: 
                    - text: Lac Crs 475.04 | Tn $ 5.03
                  - paragraph [ref=e102]: 17-Jun-2026
              - generic [ref=e104]:
                - generic [ref=e105]:
                  - generic [ref=e106]:
                    - img [ref=e107]
                    - generic [ref=e108]: Futures 30-Jun-2026
                  - generic [ref=e110]: 24,044.00 88.50 (0.37%)
                - paragraph [ref=e112]: 18-Jun-2026 11:41
              - generic [ref=e114]:
                - figure [ref=e115]:
                  - link [ref=e116] [cursor=pointer]:
                    - /url: /currency-getquote?symbol=USDINR#inr-contracts
                    - text: USDINR
                  - text: Futures
                - paragraph [ref=e117]:
                  - text: 25-Jun-2026 |
                  - generic [ref=e118]: 
                  - text: "94.2800"
                - paragraph [ref=e119]: 18-Jun-2026 11:45
              - generic [ref=e121]:
                - figure [ref=e122]:
                  - link [ref=e123] [cursor=pointer]:
                    - /url: "#"
                    - text: Market Capitalization
                - paragraph [ref=e124]:
                  - generic [ref=e125]: 
                  - text: Lac Crs 475.04 | Tn $ 5.03
                - paragraph [ref=e126]: 17-Jun-2026
            - tablist [ref=e127]:
              - tab "Slide 1" [ref=e128] [cursor=pointer]: "01"
              - tab "Slide 2" [ref=e129] [cursor=pointer]: "02"
              - tab "Slide 3" [selected] [ref=e130] [cursor=pointer]: "03"
          - button "playpause" [ref=e131] [cursor=pointer]:
            - generic [ref=e132]: 
      - navigation [ref=e135]:
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "Home" [ref=e138] [cursor=pointer]:
              - /url: /
          - listitem [ref=e139]:
            - link "About" [ref=e140] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e141]:
            - link "Market Data" [ref=e142] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e143]:
            - link "Invest" [ref=e144] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e145]:
            - link "List" [ref=e146] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e147]:
            - link "Trade" [ref=e148] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e149]:
            - link "Regulation" [ref=e150] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e151]:
            - link "Learn" [ref=e152] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e153]:
            - link "Resources" [ref=e154] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e155]:
            - link "Complaints" [ref=e156] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e157]:
            - link "RESEARCH" [ref=e158] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e159]:
            - link "Investor Relations" [ref=e160] [cursor=pointer]:
              - /url: /static/investor-relations/announcements
  - generic:       
  - generic [ref=e161]:
    - generic [ref=e163]:
      - text:    
      - heading "Market Watch - Equity/Stock" [level=1] [ref=e164]
    - tabpanel [ref=e171]:
      - navigation [ref=e172]:
        - tablist [ref=e174]:
          - tab "Equity/Stock" [ref=e175] [cursor=pointer]
          - link "T0 settlement" [ref=e176] [cursor=pointer]:
            - /url: /market-data/live-t0-market
          - link "SME Market" [ref=e177] [cursor=pointer]:
            - /url: /market-data/sme-market
          - link "Sovereign Gold Bonds (SGB)" [ref=e178] [cursor=pointer]:
            - /url: /market-data/sovereign-gold-bond
          - link "Exchange Traded Funds" [ref=e179] [cursor=pointer]:
            - /url: /market-data/exchange-traded-funds-etf
          - link "Block Deals" [ref=e180] [cursor=pointer]:
            - /url: /market-data/block-deal-watch
          - link "REITS/INVITS" [ref=e181] [cursor=pointer]:
            - /url: /market-data/reits-invits
      - tabpanel [ref=e184]:
        - generic [ref=e185]:
          - combobox "Category 1" [ref=e188] [cursor=pointer]
          - link "Add a new Category Tab" [ref=e190] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e193]:
          - link "Refresh" [ref=e196] [cursor=pointer]:
            - /url: "#"
            - img "Refresh" [ref=e197]
          - list [ref=e200]:
            - listitem [ref=e201]: Advances -
            - listitem [ref=e202]: Declines -
            - listitem [ref=e203]: Unchanged -
          - list [ref=e206]:
            - listitem [ref=e207]:
              - link "csv Download (.csv)" [active] [ref=e208] [cursor=pointer]:
                - /url: "#"
                - img "csv" [ref=e209]
                - generic [ref=e210]: Download (.csv)
        - generic [ref=e214]:
          - generic [ref=e215]: Change denomination
          - group "Value Convention" [ref=e216]:
            - generic [ref=e217]:
              - radio "Lakhs" [ref=e218]
              - generic [ref=e219] [cursor=pointer]: Lakhs
            - generic [ref=e220]:
              - radio "Crores" [checked] [ref=e221]
              - generic [ref=e222] [cursor=pointer]: Crores
            - generic [ref=e223]:
              - radio "Billions" [ref=e224]
              - generic [ref=e225] [cursor=pointer]: Billions
        - table [ref=e229]:
          - rowgroup [ref=e230]:
            - row "Symbol Open High Low PREV. CLOSE LTP Indicative CLose chng %Chng Volume (shares) Value (₹ Crores) 52W H 52W L 30 d %chng" [ref=e231]:
              - columnheader "Symbol" [ref=e232]:
                - link "Symbol" [ref=e233] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e234]: Symbol
              - columnheader "Open" [ref=e235]:
                - generic [ref=e236]: Open
              - columnheader "High" [ref=e237]:
                - generic [ref=e238]: High
              - columnheader "Low" [ref=e239]:
                - generic [ref=e240]: Low
              - columnheader "PREV. CLOSE" [ref=e241]:
                - generic [ref=e242]: PREV. CLOSE
              - columnheader "LTP" [ref=e243]:
                - link "LTP" [ref=e244] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e245]: LTP
              - columnheader "Indicative CLose" [ref=e246]:
                - link "Indicative CLose" [ref=e247] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e248]: Indicative CLose
              - columnheader "chng" [ref=e249]:
                - link "chng" [ref=e250] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e251]: chng
              - columnheader "%Chng" [ref=e252]:
                - link "%Chng" [ref=e253] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e254]: "%Chng"
              - columnheader "Volume (shares)" [ref=e255]:
                - link "Volume (shares)" [ref=e256] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e257]: Volume
                  - generic [ref=e258]: (shares)
              - columnheader "Value (₹ Crores)" [ref=e259]:
                - link "Value (₹ Crores)" [ref=e260] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e261]: Value
                  - generic [ref=e262]: (₹ Crores)
              - columnheader "52W H" [ref=e263]:
                - generic [ref=e264]: 52W H
              - columnheader "52W L" [ref=e265]:
                - generic [ref=e266]: 52W L
              - columnheader "30 d %chng" [ref=e267]:
                - generic [ref=e268]:
                  - text: 30 d
                  - text: "%chng"
              - columnheader [ref=e269]
          - rowgroup [ref=e270]:
            - row "No records available" [ref=e271]:
              - cell "No records available" [ref=e272]
        - generic [ref=e276]:
          - heading "Note" [level=2] [ref=e277]:
            - generic [ref=e278]: Note
          - list [ref=e279]:
            - listitem [ref=e280]:
              - text: "-"
              - strong [ref=e281]: "%CHNG:"
              - text: "% change is calculated with respect to adjusted price on ex-date for Corporate Actions like: Dividend, Bonus, Consolidation, Rights & Face Value Split."
            - listitem [ref=e282]:
              - text: "-"
              - strong [ref=e283]: "52 W H/L:"
              - text: 52 week High & Low prices are adjusted for Bonus, Consolidation, Split & Rights Corporate actions.
            - listitem [ref=e284]: "- The legend for the 52-week H/L indicator is given below:"
            - listitem [ref=e285]:
              - text: "- for Stocks closer to 52-week high:"
              - list [ref=e286]:
                - listitem [ref=e287]:
                  - generic [ref=e288]: "- within 0% and 2%"
                - listitem [ref=e289]:
                  - generic [ref=e290]: "- within 2% and 5%"
                - listitem [ref=e291]:
                  - generic [ref=e292]: "- within 5% and 7%"
            - listitem [ref=e293]:
              - text: "- Symbols for Stocks closer to 52-week low:"
              - list [ref=e294]:
                - listitem [ref=e295]:
                  - generic [ref=e296]: "- within 0% and 2%"
                - listitem [ref=e297]:
                  - generic [ref=e298]: "- within 2% and 5%"
                - listitem [ref=e299]:
                  - generic [ref=e300]: "- within 5% and 7%"
            - listitem [ref=e301]: "- In case, any of the index constituent undergo a scheme of arrangement (e.g. demerger), such stock will not be displayed under 'Market Watch - Equity/ Stock' section during Special Pre-Open session and it will be displayed post resumption of trading of such stock under 'Normal' market."
            - listitem [ref=e302]: "- Data is displayed for securities where orders have been received during the pre-open session."
            - listitem [ref=e303]: "- Trade Timings for T+0 settlement: One continuous trading session from 09:15 AM to 1:30 PM."
            - listitem [ref=e304]: "- Price Band for T+0 settlement: Price band of +/- 1% (100 Basis points) based on close price of corresponding T+1 settled security, which will be re-calibrated throughout the trading hours after +/- 0.5% (50 basis points) movement in the LTP of T+1 settled security in the regular market."
    - contentinfo [ref=e305]:
      - generic [ref=e306]:
        - generic [ref=e307]:
          - generic [ref=e309]:
            - generic [ref=e310]: About NSE
            - list [ref=e311]:
              - listitem [ref=e312]:
                - link "About Us" [ref=e313] [cursor=pointer]:
                  - /url: /national-stock-exchange/about-nse-company
              - listitem [ref=e314]:
                - link "Structure & Key Personnel" [ref=e315] [cursor=pointer]:
                  - /url: /structure-key-personnel/corporate-structure
              - listitem [ref=e316]:
                - link "Awards and Recognitions" [ref=e317] [cursor=pointer]:
                  - /url: /national-stock-exchange/awards-recognition
              - listitem [ref=e318]:
                - link "Regulations" [ref=e319] [cursor=pointer]:
                  - /url: /regulations/exchange-market-regulations-rules-byelaws-nseil
              - listitem [ref=e320]:
                - link "Event Gallery" [ref=e321] [cursor=pointer]:
                  - /url: /event-gallery
              - listitem [ref=e322]:
                - link "Media" [ref=e323] [cursor=pointer]:
                  - /url: /resources/exchange-communication-media-center
              - listitem [ref=e324]:
                - link "Holidays" [ref=e325] [cursor=pointer]:
                  - /url: /resources/exchange-communication-holidays
              - listitem [ref=e326]:
                - link "Careers" [ref=e327] [cursor=pointer]:
                  - /url: /careers-at-nse
              - listitem [ref=e328]:
                - link "Contact Us" [ref=e329] [cursor=pointer]:
                  - /url: /contact/contact-us
              - listitem [ref=e330]:
                - link "Web Information Manager" [ref=e331] [cursor=pointer]:
                  - /url: /static/contact/contact-us
          - generic [ref=e333]:
            - generic [ref=e334]: NSE Group Companies
            - list [ref=e335]:
              - listitem [ref=e336]:
                - link "NAL Academy Limited" [ref=e337] [cursor=pointer]:
                  - /url: /nse-academy/nse-academy-overview
              - listitem [ref=e338]:
                - link "NSE Clearing" [ref=e339] [cursor=pointer]:
                  - /url: /nse-clearing
              - listitem [ref=e340]:
                - link "NSE Data & Analytics" [ref=e341] [cursor=pointer]:
                  - /url: /nse-data-and-analytics
              - listitem [ref=e342]:
                - link "NSE Foundation" [ref=e343] [cursor=pointer]:
                  - /url: /nse-foundation/about-us
              - listitem [ref=e344]:
                - link "NSE Indices" [ref=e345] [cursor=pointer]:
                  - /url: /nse-indices
              - listitem [ref=e346]:
                - link "NSE International Exchange" [ref=e347] [cursor=pointer]:
                  - /url: /nse-international-exchange/about
              - listitem [ref=e348]:
                - link "NSE International Clearing" [ref=e349] [cursor=pointer]:
                  - /url: /nseint_clearing/nse-international-clearing-overview
              - listitem [ref=e350]:
                - link "NSE Investments" [ref=e351] [cursor=pointer]:
                  - /url: /nse-investments
              - listitem [ref=e352]:
                - link "View all" [ref=e353] [cursor=pointer]:
                  - /url: /national-stock-exchange/our-group
          - generic [ref=e355]:
            - generic [ref=e356]: Products & Services
            - list [ref=e357]:
              - listitem [ref=e358]:
                - link "Equity Market" [ref=e359] [cursor=pointer]:
                  - /url: /products-services/about-equity-market
              - listitem [ref=e360]:
                - link "Indices" [ref=e361] [cursor=pointer]:
                  - /url: /products-services/about-indices
              - listitem [ref=e362]:
                - link "Emerge Platform" [ref=e363] [cursor=pointer]:
                  - /url: /products-services/emerge-platform-about-sme
              - listitem [ref=e364]:
                - link "Mutual Funds" [ref=e365] [cursor=pointer]:
                  - /url: /products-services/mf-about-mfss
              - listitem [ref=e366]:
                - link "Equity Derivatives" [ref=e367] [cursor=pointer]:
                  - /url: /products-services/about-equity-derivatives
              - listitem [ref=e368]:
                - link "Currency Derivatives" [ref=e369] [cursor=pointer]:
                  - /url: /products-services/about-currency-derivatives
              - listitem [ref=e370]:
                - link "Commodity Derivatives" [ref=e371] [cursor=pointer]:
                  - /url: /products-services/about-commodity-derivatives
              - listitem [ref=e372]:
                - link "Interest Rate Derivatives" [ref=e373] [cursor=pointer]:
                  - /url: /products-services/about-interest-rate-derivatives
              - listitem [ref=e374]:
                - link "Fixed Income and Debt" [ref=e375] [cursor=pointer]:
                  - /url: /products-services/fixed-income-debt-overview
              - listitem [ref=e376]:
                - link "Public Issues" [ref=e377] [cursor=pointer]:
                  - /url: /products-services/about-initial-public-offerings
          - generic [ref=e379]:
            - list [ref=e381]:
              - listitem [ref=e382]:
                - link "Disclaimer" [ref=e383] [cursor=pointer]:
                  - /url: /nse-disclaimer
              - listitem [ref=e384]:
                - link "Privacy Policy" [ref=e385] [cursor=pointer]:
                  - /url: /privacy-policy
              - listitem [ref=e386]:
                - link "Terms of Use" [ref=e387] [cursor=pointer]:
                  - /url: /nse-terms-of-use
              - listitem [ref=e388]:
                - link "Copyright" [ref=e389] [cursor=pointer]:
                  - /url: /nse-copyright
              - listitem [ref=e390]:
                - link "Feedback" [ref=e391] [cursor=pointer]:
                  - /url: /feedback/new
              - listitem [ref=e392]:
                - link "Site Map" [ref=e393] [cursor=pointer]:
                  - /url: /sitemap
              - listitem [ref=e394]:
                - link "Website Policies" [ref=e395] [cursor=pointer]:
                  - /url: /website-policies
              - listitem [ref=e396]:
                - link "Empanelment of Internal Auditors/System Auditor of Members" [ref=e397] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/auditorRegistration/
                  - text: Empanelment of Internal
                  - text: Auditors/System Auditor of Members
              - listitem [ref=e398]:
                - link "List of Empaneled Audit Firms" [ref=e399] [cursor=pointer]:
                  - /url: https://inspection.nseindia.com/empanelment_auditor/auditor/viewEmpanelledAuditors/
              - listitem [ref=e400]:
                - link "Help" [ref=e401] [cursor=pointer]:
                  - /url: /static/help
            - generic:
              - list
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e405]: Download NSE App
            - generic [ref=e406]:
              - link "appstore" [ref=e407] [cursor=pointer]:
                - /url: https://apps.apple.com/in/app/nseindia/id6736678487
                - img "appstore" [ref=e408]
              - link "playstore" [ref=e409] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.nse.nseindia
                - img "playstore" [ref=e410]
          - generic [ref=e411]:
            - generic [ref=e412]:
              - generic [ref=e413]: Scan QR to
              - generic [ref=e414]: Download App
            - img "qr-code" [ref=e416]
          - generic [ref=e417]:
            - link "NSE GO-BID" [ref=e421] [cursor=pointer]:
              - /url: https://eipo.nseindia.com/eipodc/rest/login
            - generic [ref=e423]:
              - generic [ref=e424]: Login to
              - link "NCFM" [ref=e426] [cursor=pointer]:
                - /url: https://www.ncfm-india.com/ORE/OREloginPage.jsp
    - generic [ref=e430]:
      - generic [ref=e432]:
        - paragraph [ref=e433]:
          - link "Copyright ©" [ref=e434] [cursor=pointer]:
            - /url: /nse-copyright
          - text: National Stock Exchange of India Ltd. All rights reserved. Best viewed in Chrome and 1366 X 768 resolution. Recommended to use latest browser versions.
        - paragraph [ref=e435]:
          - generic [ref=e436]:
            - img "GIGW" [ref=e437]
            - text: GIGW Compliant
      - generic [ref=e439]:
        - list [ref=e440]:
          - listitem [ref=e441]:
            - link "Whatsapp chatbot of National Stock Exchange" [ref=e442] [cursor=pointer]:
              - /url: https://wa.me/918655986573?text=Hi
              - generic [ref=e443]: 
          - listitem [ref=e444]:
            - link "Facebook Page of National Stock Exchange" [ref=e445] [cursor=pointer]:
              - /url: https://www.facebook.com/NationalStockExchange/
              - generic [ref=e446]: 
          - listitem [ref=e447]:
            - link "Twitter Profile of NSEIndia" [ref=e448] [cursor=pointer]:
              - /url: https://twitter.com/NSEIndia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor
              - img [ref=e449]
          - listitem [ref=e451]:
            - link "LinkedIn Profile of NSEIndia" [ref=e452] [cursor=pointer]:
              - /url: https://in.linkedin.com/company/national-stock-exchange-of-india-limited
              - generic [ref=e453]: 
          - listitem [ref=e454]:
            - link "YouTube Channel of NSEIndia" [ref=e455] [cursor=pointer]:
              - /url: https://www.youtube.com/user/NSEIL1india
              - generic [ref=e456]: 
          - listitem [ref=e457]:
            - link "Instagram Profile of NSEIndia" [ref=e458] [cursor=pointer]:
              - /url: https://www.instagram.com/nseindia
              - generic [ref=e459]: 
          - listitem [ref=e460]:
            - link "RSS Feed of NSEIndia" [ref=e461] [cursor=pointer]:
              - /url: https://www.nseindia.com/rss-feed
              - generic [ref=e462]: 
        - text: 18 Jun 2026 | 11:47 (IST)
    - text:  
  - generic "Go to Top" [ref=e463] [cursor=pointer]:
    - img [ref=e464]:
      - generic [ref=e467]: ↑
```

# Test source

```ts
  1  | import { Page, Locator, expect, Download } from '@playwright/test';
  2  | 
  3  | export class DownloadCSV {
  4  |     readonly downloadCsvButton: Locator;
  5  |     page: Page;
  6  | 
  7  |     constructor(page: Page) {
  8  | 
  9  |     this.page = page;
  10 | 
  11 |     this.downloadCsvButton = this.page.locator('//span[@id=\'dwldcsv\']');
  12 | }
  13 | 
  14 | async navigateToPage() {
  15 | 
  16 |         await this.page.goto(
  17 |             'https://www.nseindia.com/market-data/live-equity-market',
  18 |             {
  19 |                 waitUntil: 'domcontentloaded'
  20 |             }
  21 |         );
  22 |     }
  23 | 
  24 |     async downloadCSV(): Promise<Download> {
  25 | 
  26 |         const downloadPromise =
> 27 |             this.page.waitForEvent('download');
     |                       ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  28 | 
  29 |         await this.downloadCsvButton.click();
  30 | 
  31 |         return await downloadPromise;
  32 |     }
  33 | }
```