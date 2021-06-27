import glob from "glob";
import path from "path"; // eslint-disable-line unicorn/prefer-node-protocol
import mixins from "postcss-mixins";

// https://github.com/postcss/postcss-mixins
export default mixins({
	mixinsFiles: glob.sync(path.join(process.cwd(), "./**/mixins.css")),
});
