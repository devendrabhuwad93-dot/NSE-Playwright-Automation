# Playwright Automation Project - National Stock Exchange (NSE) India

This repository contains an end-to-end (E2E) test automation suite for the **National Stock Exchange of India (NSE)** website using **Playwright** and **TypeScript**. It follows the **Page Object Model (POM)** pattern.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Running the Tests](#running-the-tests)
6. [Reporters & Reports](#reporters--reports)
7. [Configuration](#configuration)
8. [Page Objects & Test Coverage](#page-objects--test-coverage)
9. [Utilities & Test Data](#utilities--test-data)

---

## Project Overview
The automation suite verifies various aspects of the NSE India Live Equity Market page, including:
- Searching for stocks (e.g., HDFC Bank) and validating navigation to the specific stock quote page.
- Opening stock quote links in new browser tabs.
- Verifying the visibility and clickability of the market data CSV download.
- Verifying stock details (e.g., checking that HDFC Bank exists and retrieving its Last Traded Price (LTP)).
- Validating table sorting behavior for stock symbols (ascending) and Last Traded Prices (LTP) (descending).

---

## Project Structure
The repository is organized as follows:
```
├── pages/                   # Page Object Model (POM) classes
│   ├── Downloadcsv.ts       # Locators & actions for downloading reports
│   ├── Quotepage.ts         # Locators & actions for handling the stock quote redirect
│   ├── Search.ts            # Locators & actions for searching stocks
│   ├── Sortverify.ts        # Locators & actions for sorting tables (Symbol, LTP)
│   └── Stockverify.ts        # Locators & actions for validating stock details & LTP
├── tests/                   # Playwright test specifications
│   ├── csvfileVisible.spec.ts # Verifies the CSV download button visibility
│   ├── ltpSort.spec.ts      # Tests Last Traded Price (LTP) sorting
│   ├── quotePage.spec.ts    # Tests redirection of stock links to new tabs
│   ├── searchStock.spec.ts  # Tests stock autocomplete and navigation
│   ├── stock.spec.ts        # Verifies stock listing details and screenshots
│   └── symbolSort.spec.ts   # Tests stock symbol sorting
├── utils/                   # Shared utility classes
│   └── dataProvider.ts      # Data helper to read from CSV/JSON formats
├── testdata/                # Mock/test data folder (e.g. CSV/JSON inputs)
├── playwright.config.ts     # Playwright framework configuration
├── package.json             # NPM dependencies & scripts
└── README.md                # Project documentation
```

---

## Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18 or above recommended)
- **NPM** (normally bundled with Node.js)

---

## Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd /Users/devendrabhuwad/Documents/NSE.Playwright.Project
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

---

## Running the Tests
You can run all tests or execute specific specs.

- **Run all tests in headless mode**:
  ```bash
  npx playwright test
  ```
- **Run all tests in headed mode**:
  ```bash
  npx playwright test --headed
  ```
- **Run a specific test file** (e.g., stock verification):
  ```bash
  npx playwright test tests/stock.spec.ts
  ```
- **Run tests and open the interactive UI mode**:
  ```bash
  npx playwright test --ui
  ```
- **Debug tests**:
  ```bash
  npx playwright test --debug
  ```

---

## Reporters & Reports
The framework is configured to output test results using multiple reporters:
1. **HTML Reporter**: Generates a web-based interactive report.
   - To open the last report:
     ```bash
     npx playwright show-report
     ```
2. **Allure Reporter**: Integrated with `allure-playwright` for detailed test reporting.
   - To generate and serve the Allure report:
     ```bash
     npx allure serve allure-results
     ```
3. **List & Dot Reporters**: Printed to the terminal during execution.

---

## Configuration
The Playwright configuration is located in [playwright.config.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/playwright.config.ts). Notable settings include:
- **Timeout**: Set to 30 seconds (`30 * 1000` ms) per test.
- **Workers**: Tests run sequentially with 1 worker (`workers: 1`).
- **Retries**: Configured to retry once on failure (`retries: 1`).
- **Viewport**: Default viewport set to `1280x720` for consistency.
- **SSL/HTTPS**: Configured to ignore HTTPS/SSL errors.
- **Permissions**: Geolocation permissions enabled.
- **Artifacts**: Screenshots are captured `only-on-failure` and videos are retained `retain-on-failure`.

---

## Page Objects & Test Coverage

### 1. Stock Search
- **Page Class**: [Search.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/pages/Search.ts)
- **Test Spec**: [searchStock.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/searchStock.spec.ts)
- **Details**: Navigates to the live market page, types into the autocomplete search bar, selects the matched suggestion, and verifies URL redirect.

### 2. Stock Verification
- **Page Class**: [Stockverify.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/pages/Stockverify.ts)
- **Test Spec**: [stock.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/stock.spec.ts)
- **Details**: Verifies if HDFC Bank stock listing exists in the market table, fetches its Last Traded Price (LTP), asserts it is greater than 0, and saves a full page screenshot to `screenshots/HDFCBANK.png`.

### 3. Quote Redirection (New Tab)
- **Page Class**: [Quotepage.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/pages/Quotepage.ts)
- **Test Spec**: [quotePage.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/quotePage.spec.ts)
- **Details**: Clicks on the HDFC Bank stock symbol and validates that the quote details open in a new tab.

### 4. Sort Verification
- **Page Class**: [Sortverify.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/pages/Sortverify.ts)
- **Test Specs**: [symbolSort.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/symbolSort.spec.ts), [ltpSort.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/ltpSort.spec.ts)
- **Details**: Clicks column headers (Symbol/LTP) and asserts that the table contents are sorted correctly in ascending/descending order.

### 5. CSV Download
- **Page Class**: [Downloadcsv.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/pages/Downloadcsv.ts)
- **Test Spec**: [csvfileVisible.spec.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/tests/csvfileVisible.spec.ts)
- **Details**: Checks that the "Download (.csv)" link is visible and clickable on the live market view.

---

## Utilities & Test Data
- **Data Provider**: [dataProvider.ts](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/utils/dataProvider.ts) provides static helpers `getTestDatafromjsone` and `getTestDatafromcsv` using the `csv-parse` library to feed data to tests dynamically.
- **Data Folder**: [testdata/](file:///Users/devendrabhuwad/Documents/NSE.Playwright.Project/testdata) is designated for external files.
