// Within Node applications, streams can be piped together using the pipe() method, 
// which takes two arguments:

// A Required writable stream that acts as the destination for the data and
// An optional object used to pass in options.

const fs = require('fs');
//zlib is a module for compressing files
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed.txt.gz');
readStream.pipe(gunzip).pipe(writeStream);

// in order to create a pipe, you need two streams, a source stream and destination stream



