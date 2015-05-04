/* ValidCryptoAddress / make.js
 * echo 'make script for ValidCryptoAddress' && node make
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built ValidCryptoAddress in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('valid-crypto-address.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "valid-crypto-address.min.js": ["header", function(cb) {
            fs.writeFileSync('valid-crypto-address.min.js', header + UglifyJS.minify('valid-crypto-address.js').code);
            cb();
        }],
        "cli.min.js": ["header", function(cb) {
            fs.writeFileSync('cli.min.js', header + UglifyJS.minify('cli.js').code);
            cb();
        }]
    }
});