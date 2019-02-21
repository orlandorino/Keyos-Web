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

export interface GlobalQuote {
    "01. symbol"?:             string;
    "02. open"?:               string;
    "03. high"?:               string;
    "04. low"?:                string;
    "05. price"?:              string;
    "06. volume"?:             string;
    "07. latest trading day"?: Date;
    "08. previous close"?:     string;
    "09. change"?:             string;
    "10. change percent"?:     string;
}

export interface Dataset {
    id?:                    number;
    dataset_code?:          string;
    database_code?:         string;
    name?:                  string;
    description?:           string;
    refreshed_at?:          Date;
    newest_available_date?: Date;
    oldest_available_date?: Date;
    column_names?:          string[];
    frequency?:             string;
    type?:                  string;
    premium?:               boolean;
    limit?:                 null;
    transform?:             null;
    column_index?:          number;
    start_date?:            Date;
    end_date?:              Date;
    data?:                  Array<Array<Date | number>>;
    collapse?:              null;
    order?:                 null;
    database_id?:           number;
}
