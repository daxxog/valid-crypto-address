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
    'typeof ValidCryptoAddress': {
        topic: function() {
        	return typeof ValidCryptoAddress;
        },
        'is a function': function(topic) {
            assert.equal(topic, 'function');
        },
    },
    'ValidCryptoAddress will not': {
    	topic: function() {
    		return ValidCryptoAddress;
    	},
    	'parse an address containing invalid characters': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62;'), false);
    	},
    	'parse an address with an invalid length': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62'), false);
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62ix'), false);
    	},
    	'parse an address with an invalid checksum': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62x'), false);
    		assert.equal(topic('1AGNa15ZQXAZUgxiqJ2i7Z2DPU2J6hW62i'), false);
    	}
    },
    'ValidCryptoAddress will': {
    	topic: function() {
    		return ValidCryptoAddress;
    	},
    	'parse a valid address': function(topic) {
    		assert.equal(topic('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i'), true);
    	},
    	'parse a valid multisig address': function(topic) {
    		assert.equal(topic('38ccq12hPFoiSksxUdr6SQ5VosyjY7s9AU'), true); //Sean's Outpost
    	},
    	'parse a valid altcoin address': function(topic) {
    		assert.equal(topic('xGfpKAm23iH13jmGgy35um44jt8ceXb6MV'), true); //daXXog's CLAM address
    	}
    }
}).export(module);