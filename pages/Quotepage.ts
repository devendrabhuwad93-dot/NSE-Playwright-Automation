import { Page, Locator, expect } from '@playwright/test';

export class QuotePage {

    readonly page: Page;
    readonly hdfcBankSymbol: Locator;

    constructor(page: Page) {

        this.page = page;

        this.hdfcBankSymbol = page.getByRole('link', {
            name: 'HDFCBANK'
        });
    }

    async navigateToPage() {

        await this.page.goto(
            'https://www.nseindia.com/market-data/live-equity-market',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async clickHdfcBankSymbol() {

    await expect(this.hdfcBankSymbol).toBeVisible();

    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.hdfcBankSymbol.click()
    ]);

    return newPage;
}
}