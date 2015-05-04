/* ValidCryptoAddress / test / basic.js
 * basic test
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    ValidCryptoAddress = require('../valid-crypto-address.min.js');

vows.describe('basic').addBatch({
    'ValidCryptoAddress': {
        topic: ValidCryptoAddress,
        'is undefined': function(topic) {
            assert.equal(topic, undefined);
        },
    }
}).export(module);