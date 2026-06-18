import { Page, Locator, expect } from '@playwright/test';

export class Stockverify {

    readonly page: Page;
    
    //Locators
    readonly hdfcBankSymbol: Locator;
    readonly hdfcBankLtp: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.hdfcBankSymbol = page.getByRole('link', { name: 'HDFCBANK' });
        this.hdfcBankLtp = page.locator("//a[text()='HDFCBANK']/ancestor::tr/td[6]");
    }

    //Action Methods
    //verify symbol exists
    async navigateToPage() {
        await this.page.goto(
            'https://www.nseindia.com/market-data/live-equity-market',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async verifyHdfcBankExists() {
    await expect(this.hdfcBankSymbol).toBeVisible();
    }
    
    //Get LTP
    async getHdfcLtp() {

    const ltp =
        await this.hdfcBankLtp.textContent();

    return Number(
        ltp?.replace(',', '').trim()
    );
    }
}
