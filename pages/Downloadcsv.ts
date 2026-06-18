import { Page, Locator, expect } from '@playwright/test';

export class DownloadCSV {

    readonly page: Page;
    readonly downloadCsvButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.downloadCsvButton = page.getByRole('link', {
            name: /Download \(\.csv\)/i
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

    async clickDownloadCSV() {

        await expect(this.downloadCsvButton).toBeVisible();

        await this.downloadCsvButton.click();
    }
}