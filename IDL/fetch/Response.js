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
