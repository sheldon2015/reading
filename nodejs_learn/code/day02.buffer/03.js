const name = "abc";
const password = "123";

const s = name + ":" + password;
// *将utf8编码的字符串转换为buffer

const b = Buffer.from(s);
// *将buffer转换为base64
console.log(b.toString("base64"));

/**
 * web中的行内编码 data URIs
 * data URIs格式
 * 'data:[MIME-type][;charset=<encoding>[;base64],<data>'
 */
