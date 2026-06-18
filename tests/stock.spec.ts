import { test, expect } from '@playwright/test';
import { Stockverify } from '../pages/Stockverify';

test('Verify HDFCBANK stock data', async ({ page }) => {

    const stockPage = new Stockverify(page);

    await stockPage.navigateToPage();

    await stockPage.verifyHdfcBankExists();

    const ltp = await stockPage.getHdfcLtp();

    console.log('HDFC LTP:', ltp);

    expect(ltp).toBeGreaterThan(0);

    await page.screenshot({
        path: 'screenshots/HDFCBANK.png',
        fullPage: true
    });
});