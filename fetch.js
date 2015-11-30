/*
[NoInterfaceObject,
    Exposed=(Window,Worker)]
interface Body {
    readonly attribute boolean bodyUsed;
    [NewObject] Promise<ArrayBuffer> arrayBuffer();
    [NewObject] Promise<Blob> blob();
    [NewObject] Promise<FormData> formData();
    [NewObject] Promise<JSON> json();
    [NewObject] Promise<USVString> text();
};

typedef (Blob or BufferSource or FormData or URLSearchParams or USVString) BodyInit;
*/

/**
 * @typedef {Blob|BufferSource|FormData|URLSearchParams|USVString} BodyInit
 */

// TODO: The Body mixin is not exposed

/**
 * @mixin
 */
Body = function () {};

/**
 * @type {Boolean}
 */
Body.prototype.bodyUsed = null;

/**
 * @returns {Promise<ArrayBuffer>}
 */
Body.prototype.arrayBuffer = function () {};

/**
 * @returns {Promise<Blob>}
 */
Body.prototype.blob = function () {};

/**
 * @returns {Promise<FormData>}
 */
Body.prototype.formData = function () {};

/**
 * @returns {Promise<JSON>}
 */
Body.prototype.json = function () {};

/**
 * @returns {Promise<USVString>}
 */
Body.prototype.text = function () {};
/*
 [NoInterfaceObject,
 Exposed=(Window,Worker)]
 interface GlobalFetch {
 [NewObject] Promise<Response> fetch(RequestInfo input, optional RequestInit init);
 };
 Window implements GlobalFetch;
 WorkerGlobalScope implements GlobalFetch;
 */

/**
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 */
fetch = function (input, init) {};

/**
 * @typedef {string} USVString
 */

/**
 * @typedef {string} ByteString
 */

/**
 * @typedef {string} DOMString
 */
/*
typedef (Headers or sequence<sequence<ByteString>> or OpenEndedDictionary<ByteString>) HeadersInit;

[Constructor(optional HeadersInit init),
Exposed=(Window,Worker)]
interface Headers {
    void append(ByteString name, ByteString value);
    void delete(ByteString name);
    ByteString? get(ByteString name);
    sequence<ByteString> getAll(ByteString name);
    boolean has(ByteString name);
    void set(ByteString name, ByteString value);
    iterable<ByteString, ByteString>;
};
*/

/**
 * @typedef {Headers|Object} HeadersInit
 */

/**
 * @constructor
 * @param {HeadersInit} [init]
 */
Headers = function (init) {};

/**
 * @param {ByteString} name
 * @param {ByteString} value
 * @returns {void}
 */
Headers.prototype.append = function (name, value) {};

/**
 * @param {ByteString} name
 * @returns {void}
 */
Headers.prototype.delete = function (name) {};

/**
 * @param {ByteString} name
 * @returns {ByteString|null}
 */
Headers.prototype.get = function (name) {};

/**
 * @param {ByteString} name
 * @returns {Array}
 */
Headers.prototype.getAll = function (name) {};

/**
 * @param {ByteString} name
 * @returns {Boolean}
 */
Headers.prototype.has = function (name) {};

/**
 * @param {ByteString} name
 * @param {ByteString} value
 * @returns {void}
 */
Headers.prototype.set = function (name, value) {};

/**
 * @returns {Iterator.<ByteString, ByteString>}
 */
Headers.prototype.entries = function () {};

/**
 * @returns {Iterator.<ByteString, ByteString>}
 */
Headers.prototype.values = function () {};
/*
typedef (Request or USVString) RequestInfo;

[Constructor(RequestInfo input, optional RequestInit init),
Exposed=(Window,Worker)]
interface Request {
    readonly attribute ByteString method;
    readonly attribute USVString url;
    [SameObject] readonly attribute Headers headers;

    readonly attribute RequestType type;
    readonly attribute RequestDestination destination;
    readonly attribute USVString referrer;
    readonly attribute ReferrerPolicy referrerPolicy;
    readonly attribute RequestMode mode;
    readonly attribute RequestCredentials credentials;
    readonly attribute RequestCache cache;
    readonly attribute RequestRedirect redirect;
    readonly attribute DOMString integrity;

    [NewObject] Request clone();
};
Request implements Body;

dictionary RequestInit {
    ByteString method;
    HeadersInit headers;
    BodyInit body;
    USVString referrer;
    ReferrerPolicy referrerPolicy;
    RequestMode mode;
    RequestCredentials credentials;
    RequestCache cache;
    RequestRedirect redirect;
    DOMString integrity;
    any window; // can only be set to null
};

enum RequestType { "", "audio", "font", "image", "script", "style", "track", "video" };
enum RequestDestination { "", "document", "sharedworker", "subresource", "unknown", "worker" };
enum RequestMode { "navigate", "same-origin", "no-cors", "cors" };
enum RequestCredentials { "omit", "same-origin", "include" };
enum RequestCache { "default", "no-store", "reload", "no-cache", "force-cache" };
enum RequestRedirect { "follow", "error", "manual" };

enum ReferrerPolicy { "", "no-referrer", "no-referrer-when-downgrade", "origin-only", "origin-when-cross-origin", "unsafe-url" };

*/

/**
 * @typedef {Request|USVString} RequestInfo
 */

/**
 * @typedef {{method, headers, body, referrer, referrerPolicy, mode, credentials, cache, redirect, integrity, window}} RequestInit
 */

/**
 * @typedef {''|'audio'|'font'|'image'|'script'|'style'|'track'|'video'} RequestType
 */

/**
 * @typedef {''|'document'|'sharedworker'|'subresource'|'unknown'|'worker'} RequestDestination
 */

/**
 * @typedef {'navigate'|'same-origin'|'no-cors'|'cors'} RequestMode
 */

/**
 * @typedef {'omit'|'same-origin'|'include'} RequestCredentials
 */

/**
 * @typedef {'default'|'no-store'|'reload'|'no-cache'|'force-cache'} RequestCache
 */

/**
 * @typedef {'follow'|'error'|'manual'} RequestRedirect
 */

/**
 * @typedef {''|'no-referrer'|'no-referrer-when-downgrade'|'origin-only'|'origin-when-cross-origin'|'unsafe-url'} ReferrerPolicy
 */

/**
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @constructor
 */
Request = function (input, init) {};

Request.prototype = new Body();

/**
 * @type {string}
 */
Request.prototype.method = '';

/**
 * @type {string}
 */
Request.prototype.url = '';

/**
 * @type {Headers}
 */
Request.prototype.headers = new Headers();

/**
 * @type {RequestType}
 */
Request.prototype.type = '';

/**
 * @type {RequestDestination}
 */
Request.prototype.destination = '';

/**
 * @type {USVString}
 */
Request.prototype.referrer = '';

/**
 * @type {ReferrerPolicy}
 */
Request.prototype.referrerPolicy = '';

/**
 * @type {RequestMode}
 */
Request.prototype.mode = '';

/**
 * @type {RequestCredentials}
 */
Request.prototype.credentials = '';

/**
 * @type {RequestCache}
 */
Request.prototype.cache = '';

/**
 * @type {RequestRedirect}
 */
Request.prototype.redirect = '';

/**
 * @type {DOMString}
 */
Request.prototype.integrity = '';

/**
 * @returns {Request}
 */
Request.prototype.clone = function () {};
/*
[Constructor(optional BodyInit body, optional ResponseInit init),
Exposed=(Window,Worker)]
interface Response {
    [NewObject] static Response error();
    [NewObject] static Response redirect(USVString url, optional unsigned short status = 302);

    readonly attribute ResponseType type;

    readonly attribute USVString url;
    readonly attribute unsigned short status;
    readonly attribute boolean ok;
    readonly attribute ByteString statusText;
    [SameObject] readonly attribute Headers headers;
    [SameObject] readonly attribute ReadableStream body;

    [NewObject] Response clone();
};
Response implements Body;

dictionary ResponseInit {
    unsigned short status = 200;
    ByteString statusText = "OK";
    HeadersInit headers;
};

enum ResponseType { "basic", "cors", "default", "error", "opaque", "opaqueredirect" };
*/

/**
 * @typedef {status,statusText,headers} ResponseInit
 */

/**
 * @typedef {'basic'|'cors'|'default'|'error'|'opaque'|'opaqueredirect'} ResponseType
 */

/**
 *
 * @param {BodyInit} [body]
 * @param {ResponseInit} [init]
 * @constructor
 */
Response = function (body, init) {};

Response.prototype = new Body();

/**
 * @returns {Response}
 */
Response.prototype.error = function () {};

/**
 *
 * @param {USVString} url
 * @param {number=302} [status]
 * @returns {Response}
 */
Response.prototype.redirect = function (url, status) {};

/**
 * @type {ResponseType}
 */
Response.prototype.type = '';

/**
 * @type {USVString}
 */
Response.prototype.url = '';

/**
 * @type {number}
 */
Response.prototype.status = 0;

/**
 * @type {boolean}
 */
Response.prototype.ok = false;

/**
 * @type {ByteString}
 */
Response.prototype.statusText = '';

/**
 * @type {Headers}
 */
Response.prototype.headers = new Headers();

/**
 * @type {ReadableStream}
 */
Response.prototype.body = new ReadableStream();

/**
 * @returns {Response}
 */
Response.prototype.clone = function () {};
