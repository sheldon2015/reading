/*
 * 全局对象：
 * process
 * buffer
 */

/*
 *可以利用require.resolve来获得加载模块的路径
 */

console.log(require.resolve("./export"));
console.log(require.resolve("./export"));
console.log(require.resolve("./export"));
//*卸载模块
console.log(delete require.cache[require.resolve("./export")]);
console.log(require.resolve("fs"));
console.log(require.extensions);
