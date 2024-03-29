/* eslint-disable unicorn/prefer-module */
import autoprefixer from "./plugins/autoprefixer";
import mixins from "./plugins/mixins";
import normalize from "./plugins/normalize";
import presetEnv from "./plugins/preset-env"; // eslint-disable-line unicorn/prevent-abbreviations
import reporter from "./plugins/reporter";
import size from "./plugins/size";

// https://github.com/postcss/postcss
const config = {
	plugins: [
		mixins,
		size,
		presetEnv,
		normalize,
		autoprefixer,
		reporter,
	],
};

module.exports = config;
