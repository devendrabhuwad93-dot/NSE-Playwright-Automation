import { Page, Locator, expect } from '@playwright/test';

export class Search {
    clickPriceGraph() {
        throw new Error('Method not implemented.');
    }
    verifyHdfcQuotePage() {
        throw new Error('Method not implemented.');
    }
    clickHdfcBankSymbol() {
        throw new Error('Method not implemented.');
    }

    readonly page: Page;

    // Locators
    readonly searchBox: Locator;
    readonly hdfcBankOption: Locator;

    constructor(page: Page) {
        this.page = page;

        // Update these locators based on actual DOM inspection
        this.searchBox = page.locator('#header-search-input');

        this.hdfcBankOption = page.locator(
            "//p[contains(normalize-space(),'HDFC BANK')]"
        );
    }

    /**Action Methods
     * Navigate to Homepage
     */
    async navigateToPage() {
        await this.page.goto(
            'https://www.nseindia.com/market-data/live-equity-market',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async searchStock(stockName: string) {

        await this.searchBox.waitFor({
            state: 'visible'
        });

        await this.searchBox.click();

        await this.searchBox.fill(stockName);

        const stockOption = this.page.locator(
            'div.autocompleteList.tt-suggestion.tt-selectable.active'
        );

        await stockOption.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await stockOption.click();

        // Wait for navigation to complete
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyHdfcBankPage() {

        await expect(this.page).toHaveURL(
            'https://www.nseindia.com/get-quote/equity/HDFCBANK/HDFC-Bank-Limited',
            {
                timeout: 15000
            }
        );
    }
}