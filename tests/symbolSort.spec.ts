import { test } from '@playwright/test';
import { Sortverify } from '../pages/Sortverify';

test('Verify Symbol Ascending Sorting', async ({ page }) => {

    const stockPage =
        new Sortverify(page);

    await stockPage.navigateToPage();

    await stockPage.clickSymbolHeader();

    await stockPage.verifySymbolAscendingSort();



    
});