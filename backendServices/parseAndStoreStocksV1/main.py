import dbFuns as dbF
import parseFuns as parseF
import time


stocksToStore = ('aapl','fb', 'msft')

# for stock in stocksToStore:
#     listToStore = parseF.stockInfoFun(stock)
#     dbF.insertManyFun(listToStore)

for stock in stocksToStore:
    listToStore = parseF.stockInfoEpochFun(stock)
    dbF.insertManyFun(listToStore)
