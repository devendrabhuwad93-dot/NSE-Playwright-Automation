import { Page, Locator, expect } from '@playwright/test';

export class Sortverify {

    readonly page: Page;
    //Locators
    readonly symbolHeader: Locator;
    readonly ltpHeader: Locator;
    readonly symbolValues: Locator;
    readonly ltpValues: Locator;

    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.symbolHeader = page.getByRole('link', { name: 'Symbol' });
        this.ltpHeader = page.getByText('LTP', { exact: true });
        this.symbolValues = page.getByRole('link', { name: 'ADANIENT' });
        this.ltpValues = page.getByText('2,949.00', { exact: true });
    }

    //Action Methods
    async navigateToPage() {
        await this.page.goto(
            'https://www.nseindia.com/market-data/live-equity-market',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }
    //Sort by Symbol
    async clickSymbolHeader() {

        await this.symbolHeader.waitFor({
            state: 'visible'
        });

        await this.symbolHeader.click();
    }

    async getAllSymbols(): Promise<string[]> {

        const symbols =
            await this.symbolValues.allTextContents();

        return symbols.map(symbol =>
            symbol.trim()
        );
    }

    async verifySymbolAscendingSort() {

        const actualSymbols = await this.getAllSymbols();

        const expectedSymbols = [...actualSymbols].sort();

        expect(actualSymbols) . toEqual(expectedSymbols);
    }

    async verifySymbolDescendingSort() {

        const actualSymbols = await this.getAllSymbols();

        const expectedSymbols = [...actualSymbols] . sort() . reverse();

        expect(actualSymbols) . toEqual(expectedSymbols);
    }

     // LTP Sorting
    
    async clickLTPHeader() {

        await this.ltpHeader.waitFor({ state: 'visible'});

        await this.ltpHeader.click();
    }

    async getAllLTPValues(): Promise<number[]> {

        const values = await this.ltpValues.allTextContents();

        return values.map(value => Number(value.replace(/,/g, '').trim()));
    }

    async verifyLTPAscendingSort() {

        const actualValues = await this.getAllLTPValues();

        const expectedValues =[...actualValues].sort((a, b) => a - b);

        expect(actualValues).toEqual(expectedValues);
    }

    async verifyLTPDescendingSort() {

        const actualValues = await this.getAllLTPValues();

        const expectedValues =[...actualValues].sort((a, b) => b - a);

        expect(actualValues).toEqual(expectedValues);
    }
}
