all: controllers.js

controllers.js: controllers.xjst
	xjst -i $< -o $@

clean:
	rm -f controllers.js
