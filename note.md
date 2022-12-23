# npx create-react-app

## Base

### package:

1. customize-cra
2. react-app-rewired

-   1 & 2 customize webpack

3. babel-plugin-module-resolver

-   sort link import

4. sass
5. normalize.css
6. classnames
7. tippy

### config-format

1. .babelrc
   file config-overrides.json

-   const { override, useBabelRc } = require("customize-cra");

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());

2. .jsconfig.json
3. .prettierrc
   .vscode/settings.json -> tao file

## Git

git checkout (code commit)->backcommit
