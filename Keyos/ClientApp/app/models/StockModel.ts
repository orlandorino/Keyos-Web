export interface StockModel {
    id:               string;
    symbol:           Symbol;
    date:             Date;
    open:             number;
    high:             number;
    low:              number;
    close:            number;
    unadjustedVolume: number;
    change:           number;
    changePercent:    number;
    vwap:             number;
    label:            string;
    changeOverTime:   number;
}

export enum Symbol {
    Aapl = "aapl",
    Fb = "fb",
    Msft = "msft",
}
export interface DowJones {
    "Meta Data"?:           MetaData;
    "Time Series (Daily)"?: { [key: string]: TimeSeriesDaily };
}

export interface MetaData {
    "1. Information"?:    string;
    "2. Symbol"?:         string;
    "3. Last Refreshed"?: Date;
    "4. Output Size"?:    string;
    "5. Time Zone"?:      string;
}

export interface TimeSeriesDaily {
    "1. open"?:   string;
    "2. high"?:   string;
    "3. low"?:    string;
    "4. close"?:  string;
    "5. volume"?: string;
}

//  temporary
export interface StockTable {
    date?:             Date;
    open?:             number;
    high?:             number;
    low?:              number;
    close?:            number;
    volume?:           number;
    unadjustedVolume?: number;
    change?:           number;
    changePercent?:    number;
    vwap?:             number;
    label?:            string;
    changeOverTime?:   number;
}
export interface Portfolio {
    id?:            number;
    symbol?:        string;
    year?:          number;
    buyHoldResult?: number;
    mlResult?:      number;
}
