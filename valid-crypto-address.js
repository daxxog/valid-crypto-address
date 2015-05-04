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
        if(filter(a) === a) {
            return convert(decode(a));
        } else {
            return false;
        }
    };

    return ValidCryptoAddress;
}));
