
#OPTIMIZE=--optimize lto,no-assert,no-log,fold-const,return-if,inline,unbox,fold-const,lcse,fold-const,array-length,unclassify

all:
	jsx --release --executable web --output game.jsx.js game.jsx

debug:
	jsx --executable web --output game.jsx.js game.jsx

debug-with-source-map:
	jsx --enable-source-map --executable web --output game.jsx.js game.jsx
