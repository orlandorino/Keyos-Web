export interface StockSummary {
    quote?: Quote;
}

export interface Quote {
    symbol?:                string;
    companyName?:           string;
    //primaryExchange?:       PrimaryExchange;
    sector?:                string;
    //calculationPrice?:      CalculationPrice;
    open?:                  number;
    openTime?:              number;
    close?:                 number;
    closeTime?:             number;
    high?:                  number;
    low?:                   number;
    latestPrice?:           number;
  //  latestSource?:          LatestSource;
    //latestTime?:            LatestTime;
    latestUpdate?:          number;
    latestVolume?:          number;
    iexRealtimePrice?:      null;
    iexRealtimeSize?:       null;
    iexLastUpdated?:        null;
    delayedPrice?:          number;
    delayedPriceTime?:      number;
    extendedPrice?:         number;
    extendedChange?:        number;
    extendedChangePercent?: number;
    extendedPriceTime?:     number;
    previousClose?:         number;
    change?:                number;
    changePercent?:         number;
    iexMarketPercent?:      null;
    iexVolume?:             null;
    avgTotalVolume?:        number;
    iexBidPrice?:           null;
    iexBidSize?:            null;
    iexAskPrice?:           null;
    iexAskSize?:            null;
    marketCap?:             number;
    peRatio?:               number | null;
    week52High?:            number;
    week52Low?:             number;
    ytdChange?:             number;
}
export enum CalculationPrice {
    Close = "close",
}

export enum LatestSource {
    Close = "Close",
}

export enum LatestTime {
    February82019 = "February 8, 2019",
    January292019 = "January 29, 2019",
}

export enum PrimaryExchange {
    NASDAQGlobalMarket = "NASDAQ Global Market",
    NYSEArca = "NYSE Arca",
    NasdaqGlobalSelect = "Nasdaq Global Select",
    NewYorkStockExchange = "New York Stock Exchange",
}
