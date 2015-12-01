#
# make targets:
#

default: fetch

fetch:
	cat IDL/fetch/* > FetchAPI.js
