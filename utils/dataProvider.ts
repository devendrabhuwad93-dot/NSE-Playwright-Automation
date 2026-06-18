import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider {

static getTestDatafromjsone(filePath: string)
{
    let data:string = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

static getTestDatafromcsv(filePath: string): any
{
    let data:string = fs.readFileSync(filePath, 'utf-8');
    return parse(data, {
        columns: true,
        skip_empty_lines: true
    });
}
}