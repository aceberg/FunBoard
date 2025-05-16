PKG_NAME=WatchYourLAN
USR_NAME=aceberg

build:
	npm run build && \
	rm ../backend/internal/web/public/assets/* && \
	cp -r dist/assets ../backend/internal/web/public

replace:
	cd ../backend/internal/web/public/assets/ && \
	cat index.js | sed 's/http:\/\/0.0.0.0:8857//' > tmp && \
	mv tmp index.js

all: build replace