/* ValidCryptoAddress
 * Check for a valid crypto currency address
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.ValidCryptoAddress = factory();
  }
}(this, function() {
    var ValidCryptoAddress,
        sjcl = require('sjcl'),
        decode = require('bs58').decode,
        allow = require('switch-factory').allow,
        convert = require('bit-array-tools').convert,
        filter = allow('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'); //base58
    
    ValidCryptoAddress = function(a) {
        var bytes, data, tail, checksum;

        if(filter(a) === a) {
            bytes = decode(a);

            if(bytes.length === 25) {
                data = convert(bytes.splice(0, 21));
                tail = bytes;
                checksum = convert(sjcl.hash.sha256.hash(sjcl.hash.sha256.hash(data)), 'utf8');

                return tail.map(function(v, i, a) {
                    return v === checksum[i];
                }).reduce(function(p, c) {
                    return (p === true) && (c === true);
                });
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    return ValidCryptoAddress;
}));
