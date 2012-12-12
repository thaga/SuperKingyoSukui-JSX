
OPTIMIZE=--optimize lto,no-assert,no-log,fold-const,return-if,inline,unbox,fold-const,lcse,fold-const,array-length,unclassify

all:
	jsx $(OPTIMIZE) --output game.js game.jsx
