const EE = require("events");

const util = require("util");

function Music() {
	EE.EventEmitter.call(this);
	this.name = "music player";
}

util.inherits(Music, EE.EventEmitter);

const music = new Music();

console.log(music.constructor); //值得是构造函数
console.log(music.__proto__);
console.log(Music.prototype);
console.log(Music.prototype.__proto__.__proto__.__proto__);
