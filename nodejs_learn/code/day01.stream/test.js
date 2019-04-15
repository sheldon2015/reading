const fs = require("fs");
const path = require("path");
const block = fs.readFileSync(path.resolve(__filename));
fs.writeFileSync(path.resolve(__dirname, "test.js"), block);
