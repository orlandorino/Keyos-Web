import convertDateToEpoch as convertToEpoch
import json
import requests



def stockInfoFun(stockSymbol):
    response = requests.get("https://api.iextrading.com/1.0/stock/" + stockSymbol +  "/chart/")
    stockInfos = json.loads(response.text)

    a_list = []
    tempTuple = ()
    for stockInfo in stockInfos:
        tempTuple = stockSymbol, stockInfo["date"], stockInfo["open"], stockInfo["high"], stockInfo["low"], stockInfo["close"], stockInfo["volume"], stockInfo["unadjustedVolume"], stockInfo["change"], stockInfo["changePercent"], stockInfo["vwap"], stockInfo["label"], stockInfo["changeOverTime"]      
        a_list.append(tempTuple)
        tempTuple = ()

    return a_list


def stockInfoEpochFun(stockSymbol):
    response = requests.get("https://api.iextrading.com/1.0/stock/" + stockSymbol +  "/chart/")
    stockInfos = json.loads(response.text)

    a_list = []
    tempTuple = ()
    for stockInfo in stockInfos:
        
        date = convertToEpoch.convertDateStringToEpoch(stockInfo["date"])

        tempTuple = stockSymbol, date , stockInfo["open"], stockInfo["high"], stockInfo["low"], stockInfo["close"], stockInfo["volume"], stockInfo["unadjustedVolume"], stockInfo["change"], stockInfo["changePercent"], stockInfo["vwap"], stockInfo["label"], stockInfo["changeOverTime"]      
        a_list.append(tempTuple)
        tempTuple = ()

    return a_list
