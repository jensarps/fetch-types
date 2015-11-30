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
 * @param {RequestInit} init
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
