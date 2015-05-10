/* ValidCryptoAddress / cli.js
 * command line interface for ValidCryptoAddress
 * (c) 2015 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var ValidCryptoAddress = require('./valid-crypto-address.min.js');

console.log(ValidCryptoAddress(process.argv[2]));