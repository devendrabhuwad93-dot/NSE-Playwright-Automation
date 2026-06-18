import { test } from '@playwright/test';
import { Sortverify } from '../pages/Sortverify';

test('Verify LTP Descending Sorting', async ({ page }) => {

    const stockPage = new Sortverify(page);

    await stockPage.navigateToPage();

    await stockPage.clickLTPHeader();

    await stockPage.verifyLTPDescendingSort();
});