# [Prettier](https://prettier.io/) Plugin for [Astro](https://astro.build/)

Official Prettier plugin adding support for formatting `.astro` files

## Installation

```shell
npm i --save-dev prettier-plugin-astro prettier
```

To customize formatting behavior, see the [Configuration](#configuration) section below

## Using with the Prettier CLI

When using the CLI, Prettier will automatically pick up the plugin

```shell
prettier -w .
```

### pnpm support

Due to [an upstream issue in Prettier](https://github.com/prettier/prettier/issues/8056), the `plugin-search-dir` parameter should be set to the current directory when using pnpm or Prettier won't be able to find the plugin automatically

```shell
prettier -w --plugin-search-dir=. .
```

## Using in VS Code

First install the [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and add the following settings to your VS Code configuration so VS Code is aware that Prettier can be used for Astro files:

```json
{
  "prettier.documentSelectors": "**/*.astro"
}
```

Additionally, you should set Prettier as the default formatter for Astro files or VS Code will ask you to choose a formatter everytime you format since the Astro VS Code extension also includes a formatter for Astro files:

```json
{
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

When submitting issues about formatting in VS Code, first make sure you're actually using Prettier to format your files and not the Astro VS Code extension included formatter

### pnpm support

Due to an upstream issue, Prettier inside VS Code isn't able to automatically infer the right parser to use for Astro files when using pnpm

As such, add the following settings to your `.prettierc.js` config file:

```js
module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
```

The `require.resolve` call can alternatively be changed to a direct path, like such: `plugins: ["./node_modules/prettier-plugin-astro"]` for usage inside a non-JS config file

## Configuration

Most [options from Prettier](https://prettier.io/docs/en/options.html) will work with the plugin and can be set in a [configuration file](https://prettier.io/docs/en/configuration.html) or through [CLI flags](https://prettier.io/docs/en/cli.html).

### Astro Sort Order

Sort order for the markup and styles. Depending on the order, top-level `style` tags will be sorted below or on top of the rest of the template

The format is a string with the words `markup` and `styles` separated by a pipe (`|`)

| Default            | CLI Override                  | API Override               |
| ------------------ | ----------------------------- | -------------------------- |
| `markup \| styles` | `--astro-sort-order <string>` | `astroSortOrder: <string>` |

### Astro Allow Shorthand

Set if attributes with the same name as their expression should be formatted to the short form automatically (for example, if enabled `<element name={name} />` will become simply `<element {name} />`)

> Please note that at the time of writing, [the shorthand form is not currently supported inside the Astro VS Code extension](https://github.com/withastro/language-tools/issues/225)

| Default | CLI Override                     | API Override                  |
| ------- | -------------------------------- | ----------------------------- |
| `false` | `--astro-allow-shorthand <bool>` | `astroAllowShorthand: <bool>` |

### Example `.prettierrc.js`

```js
{
  astroSortOrder: "markup | styles",
  astroAllowShorthand: false
}
```

## Contributing

Pull requests of any size and any skill level are welcome, no contribution is too small. Changes to the Astro Prettier Plugin are subject to [Astro Governance](https://github.com/withastro/astro/blob/main/GOVERNANCE.md) and should adhere to the [Astro Style Guide](https://github.com/withastro/astro/blob/main/STYLE_GUIDE.md)

See [CONTRIBUTING.md](./CONTRIBUTING.md) for instructions on how to setup your development environnement

## Sponsors

Astro is generously supported by Netlify, Vercel, and several other amazing organizations.

[❤️ Sponsor Astro! ❤️](https://github.com/withastro/astro/blob/main/FUNDING.md)

### Platinum Sponsors

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://www.netlify.com/#gh-light-mode-only" target="_blank"><img width="147" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/netlify.svg#gh-light-mode-only" alt="Netlify" /></a><a href="https://www.netlify.com/#gh-dark-mode-only" target="_blank"><img width="147" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/netlify-dark.svg#gh-dark-mode-only" alt="Netlify" />
      </a></td>
      <td align="center"><a href="https://www.vercel.com/#gh-light-mode-only" target="_blank"><img width="150" height="34" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/vercel.svg#gh-light-mode-only" alt="Vercel" /></a><a href="https://www.vercel.com/#gh-dark-mode-only"><img width="150" height="34" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/vercel-dark.svg#gh-dark-mode-only" alt="Vercel" />
      </a></td>
    </tr>
  </tbody>
</table>

### Gold Sponsors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://divRIOTS.com#gh-light-mode-only" target="_blank">
        <img width="150" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/divriots.svg#gh-light-mode-only" alt="‹div›RIOTS" />
        </a>
        <a href="https://divRIOTS.com#gh-dark-mode-only" target="_blank">
        <img width="150" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/divriots-dark.svg#gh-dark-mode-only" alt="‹div›RIOTS" />
        </a>
      </td>
      <td align="center">
        <a href="https://stackupdigital.co.uk/#gh-light-mode-only" target="_blank">
        <img width="162" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/stackup.svg#gh-light-mode-only" alt="StackUp Digital" />
        </a>
        <a href="https://stackupdigital.co.uk/#gh-dark-mode-only" target="_blank">
        <img width="130" height="32" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/stackup-dark.svg#gh-dark-mode-only" alt="StackUp Digital" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Sponsors

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://sentry.io" target="_blank"><img width="147" height="40" src="https://raw.githubusercontent.com/withastro/astro/main/.github/assets/sentry.svg" alt="Sentry" /></a></td><td align="center"><a href="https://qoddi.com" target="_blank"><img width="147" height="40" src="https://devcenter.qoddi.com/wp-content/uploads/2021/11/blog-transparent-logo-1.png" alt="Qoddi App Platform" /></a></td>
    </tr>
  </tbody>
</table>
