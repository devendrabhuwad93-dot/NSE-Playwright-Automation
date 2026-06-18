import { test, expect } from '@playwright/test';
import { QuotePage } from '../pages/Quotepage';

 test('Verify HDFCBANK link opens a new tab', async ({ page }) => {

    const quotePage = new QuotePage(page);

    await quotePage.navigateToPage();

    const newPage =
        await quotePage.clickHdfcBankSymbol();

    expect(newPage).toBeDefined();

    console.log(
        'New Page URL:',
        newPage.url()
    );
}); 

/*test('Open HDFC quote page directly', async ({ page }) => {

    await page.goto(
        'https://www.nseindia.com/get-quotes/equity?symbol=HDFCBANK',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );

    console.log(page.url()); */