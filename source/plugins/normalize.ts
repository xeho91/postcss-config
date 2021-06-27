/* eslint-disable
  unicorn/prefer-module,
  unicorn/prefer-node-protocol,
  @typescript-eslint/no-var-requires,
*/
import { readFileSync } from "fs";
import path from "path";

// FIXME: Can't use import, because TS complains it cannot find the module?
const normalize = require("postcss-normalize");
const browsers = readFileSync(path.join(process.cwd(), ".browserslistrc"), {
	encoding: "utf-8",
});

// https://github.com/csstools/postcss-normalize
export default normalize({
	allowDuplicates: false,
	browsers,
});
