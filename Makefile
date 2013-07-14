
JSX:=jsx

all:
	$(JSX) --release --executable web --output game.jsx.js ./game.jsx

debug:
	$(JSX) --executable web --output game.jsx.js ./game.jsx

debug-with-source-map:
	$(JSX) --enable-source-map --executable web --output game.jsx.js ./game.jsx

update-mvq:
	curl -LO https://raw.github.com/thaga/mvq.jsx/master/lib/mvq.jsx
	chmod -w mvq.jsx # make read only
