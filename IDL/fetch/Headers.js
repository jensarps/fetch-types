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
