/**
 *  原生ArrayBuffer与node中的Buffer
 *
 */
const s = new ArrayBuffer(32);
const t = new DataView(s);
console.log(t);

// const Buffer = require("buffer").Buffer;
const t1 = Buffer.alloc(32);
console.log(t1);
