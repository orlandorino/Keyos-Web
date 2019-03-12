from keras.layers.core import Dense, Activation, Dropout
from keras.layers.recurrent import LSTM
from keras.models import Sequential
import requests
import lstm, time, argparse, sys, yaml

FLAGS = None
DATA_WINDOW = 50

stocks = {}
yahoo_finance = r'https://query1.finance.yahoo.com/v7/finance/download/'
crumb = ''

X_train = None
y_train = None
X_test = None
y_test = None


def get_crumb(session):
	global crumb
	
	url = r'https://finance.yahoo.com/quote/GOOG?p=GOOG'
	response = session.get(url)
	content = response.content.decode('utf8')
	trimmed = content[content.find('CrumbStore'):].split(':')
	crumb = trimmed[2][:trimmed[2].find('}')].strip('"')
	if FLAGS.debug:
		print('crumb={crumb}'.format(crumb=crumb))


def get_stocks(path):
	global stocks, crumb
	with open(path) as file:
		stocks = yaml.load(file.read())


def create_url(stocks, symbol):
	period2 = int(time.time())
	period1 = period2 - 473040000
	interval = stocks['interval']
	events = 'history'
	
	url = '{finance_url}{symbol}?period1={period1}&period2={period2}&interval={interval}&events={events}&crumb={crumb}'.format(
		finance_url=yahoo_finance,
		symbol=symbol,
		period1=period1,
		period2=period2,
		interval=interval,
		events=events,
		crumb=crumb
	)
	
	if FLAGS.debug:
		print('url={url}'.format(url=url))
	return url


def download_csv(url, symbol, session):
	response = session.get(url, allow_redirects=True)
	with open(symbol + '.csv', 'wb') as file:
		file.write(response.content)
	
	if FLAGS.debug:
		print('File {path} downloaded from {url}'.format(path=symbol + '.csv', url=url))


def download_stock_data():
	with requests.Session() as session:
		get_crumb(session)
		get_stocks('stocks.yaml')
		
		for symbol in stocks['stocks']:
			url = create_url(stocks, symbol.upper())
			download_csv(url, symbol, session)


def create_model():
	model = Sequential()
	model.add(LSTM(
		input_dim=1,
		output_dim=50,
		return_sequences=True
	))
	model.add(Dropout(0.2))
	
	model.add(LSTM(
		100,
		return_sequences=True
	))
	model.add(Dropout(0.2))
	
	model.add(LSTM(
		100,
		return_sequences=True
	))
	model.add(Dropout(0.2))
	
	model.add(LSTM(
		100,
		return_sequences=False
	))
	model.add(Dropout(0.2))
	
	model.add(Dense(
		output_dim=1
	))
	model.add(Activation('linear'))
	
	return model


def main(argv):
	global X_train, y_train, X_test, y_test
	
	if FLAGS.debug:
		print('DEBUG mode\nargv={argv}'.format(argv=argv))
	
	download_stock_data()
	if FLAGS.debug:
		print('stocks={yaml}'.format(yaml=yaml.dump(stocks, default_flow_style=True)))

	model = create_model()
	model.compile(loss='mse', optimizer='rmsprop')
	
	for symbol in stocks['stocks']:
		X_train, y_train, X_test, y_test = lstm.load_data('{symbol}.csv'.format(symbol=symbol), DATA_WINDOW, True)
		model.fit(
			X_train,
			y_train,
			batch_size=512,
			nb_epoch=1,
			validation_split=0.05
		)
	
		predictions = lstm.predict_sequences_multiple(model, X_test, DATA_WINDOW, DATA_WINDOW)
		lstm.plot_results_multiple(predictions, y_test, DATA_WINDOW)


if __name__ == '__main__':
	parser = argparse.ArgumentParser()
	parser.add_argument(
		'-d', '--debug',
		default=False,
		help='Enables debug mode',
		action='store_true'
	)
	FLAGS, argv = parser.parse_known_args()
	main([sys.argv[0]] + argv)

# https://query1.finance.yahoo.com/v7/finance/download/GOOG?period1=1532229238&period2=1534907638&interval=1d&events=history&crumb=Ax7SLIIq562
