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
