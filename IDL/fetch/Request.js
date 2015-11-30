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
