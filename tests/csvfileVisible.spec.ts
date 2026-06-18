import { test, expect } from '@playwright/test';
import { DownloadCSV } from '../pages/Downloadcsv';

test('Verify CSV button is visible and clickable', async ({ page }) => {

    const downloadPage = new DownloadCSV(page);

    await downloadPage.navigateToPage();

    await downloadPage.clickDownloadCSV();

    await expect(
        downloadPage.downloadCsvButton
    ).toBeVisible();

});