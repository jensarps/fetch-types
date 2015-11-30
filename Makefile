#
# make targets:
#

default: fetch

fetch:
	cat IDL/fetch/* > fetch.js

all:
	cat IDL/**/* > all.js
