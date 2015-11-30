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
