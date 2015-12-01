About
==

The definitions for [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in JavaScript using JSDoc for Code Completion and Type Hinting in your editor of choice, taken from the [Web IDL](http://www.w3.org/TR/WebIDL/) definitions in [the spec](https://fetch.spec.whatwg.org/) (as of Nov 26, 2015).

Usage
==

Clone / download this repository, or just download the `FetchAPI.js` file. Then tell your editor / IDE to treat the `FetchAPI.js` file as a library.

A detailed instruction can be found [in this post](http://jensarps.de/).

Issues/Questions/ToDos
==

String Types
--

It might be a good idea to replace usages of `USVString` and `ByteString` with `string` to avoid confusion.

Read-Only Members
--

The only way in JSDoc to document read-only members that I know of is the `@const` tag, but that feels off to do that in many cases.

The Body Mixin
--

Well, the Body mixin is not exposed. I have no clue how to document something like this in JSDoc.

Do this work automatically
--

Really, it would be great if there was a tool that would automatically generate JavaScript files from IDL definitions.

Notes
==

1. To document what Promises will resolve to, I use this notation: `{Promise<Type>}`.
2. To document what Iterators will iterate, I use this notation: `{Iterator.<Type>}`.

The WebStorm IDE works well with those, but I don't know if others will understand it correctly.
