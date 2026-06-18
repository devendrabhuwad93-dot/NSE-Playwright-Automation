import { test } from '@playwright/test';
import { Search } from '../pages/Search';

test.describe('NSE Live Equity Market', () => {

    test('Verify user is redirected to HDFC Bank quote page', async ({ page }) => {

        const searchPage = new Search(page);

        // Navigate to NSE Live Equity Market page
        await searchPage.navigateToPage();

        // Search HDFC and select from dropdown
        await searchPage.searchStock('HDFC Bank');

        // Verify navigation to HDFC Bank page
        await searchPage.verifyHdfcBankPage();

    });

});