import time
import datetime

def convertDateStringToEpoch(dateStr):
    dateConvert = datetime.datetime.strptime(dateStr, '%Y-%m-%d').strftime('%d/%m/%Y')
    date1 = time.mktime(datetime.datetime.strptime(dateConvert, "%d/%m/%Y").timetuple())
    return date1
