# PostCSS configuration

**Extendable** [PostCSS] configuration.

## Usage

1. Install it firstly with the Node.JS package manager of your choice.\
   Example:

```sh
pnpm install --save-dev postcss @xeho91/postcss-config
```

2. Create a **[PostCSS configuration file]**.
   Example:

```js
// postcss.config.(c)js

const config = require("@xeho91/postcss-config");

module.exports = config;
```

[PostCSS]: https://github.com/postcss/postcss
[PostCSS configuration file]: https://github.com/postcss/postcss-load-config
