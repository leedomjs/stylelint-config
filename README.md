# @leedomjs/stylelint-config

[![npm](https://img.shields.io/npm/v/@leedomjs/stylelint-config?color=333&label=)](https://www.npmjs.com/package/@leedomjs/stylelint-config)

- css, sass, scss, Vue out-of-box
- Single quotes
- Also lint for acss, wxss (`css of mini-program`)
- Auto fix for formatting
- Only one-line of config

## Usage

### Install

```bash
pnpm add -D stylelint @leedomjs/stylelint-config
```

### Config `.stylelintrc`

```json
{
  "extends": "@leedomjs/stylelint-config"
}
````

### Add scripts for `package.json`

For example:

```json
{
  "scripts": {
    "lint:style": "stylelint **/*.{css,scss,sass,acss,wxss,vue}",
    "lint:style-fix": "stylelint **/*.{css,scss,sass,acss,wxss,vue} --fix"
  }
}
```

### VS Code support (auto fix)

Install [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Add the following settings to your `settings.json`:

```jsonc
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
  },

  // The following is optional.
  // It's better to put under project setting `.vscode/settings.json`
  // to avoid conflicts with working with different stylelint configs.
  "stylelint.validate": [
    "css",
    "sass",
    "scss",
    "acss",
    "wxss",
    "vue",
  ]
}
```

### Lint and auto-fix before every commit

If you want to apply lint and auto-fix before every commit, you could do this:

#### 1. [husky](https://github.com/typicode/husky) + [`lint-staged`](https://github.com/okonet/lint-staged)

```bash
pnpm dlx husky-init && pnpm install -D husky lint-staged
```

and add the following to your `package.json`:

```jsonc
{
  "scripts": {
    // This script will be added automatically when husky is installed successfully.
    "prepare": "husky install"
  },
  "lint-staged": {
    "**/*.{css,scss,sass,acss,wxss,vue}": "stylelint --fix"
  }
}
```

then add the following to your `pre-commit`:

> .husky/pre-commit

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# remove the default script
# npx test

# add this script
npx lint-staged
```

#### 2. [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) + [`lint-staged`](https://github.com/okonet/lint-staged)

If your project is small-sized, and you need quickly set up hooks and forget about it, `simple-git-hook` will be a good choice.

```bash
pnpm install -D simple-git-hooks lint-staged
```

and add the following to your `package.json`:

```jsonc
{
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "**/*.{css,scss,sass,acss,wxss,vue}": "stylelint --fix"
  }
}
```

then run the CLI script to update the git hooks with the commands from the config:

```bash
# [Optional] These 2 steps can be skipped for non-husky users
git config core.hooksPath .git/hooks/
rm -rf .git/hooks

# Update ./git/hooks
npx simple-git-hooks
```

## Tips

You can override the rules in your `.stylelintrc` file.

  ```jsonc
  {
    "extends": "@leedomjs/stylelint-config",
    "rules": {
      // your rules...
    }
  }
  ```

## License
[MIT](https://github.com/leedomjs/stylelint-config/blob/main/LICENSE) License © 2024-present [Leedom](https://github.com/leedom92)