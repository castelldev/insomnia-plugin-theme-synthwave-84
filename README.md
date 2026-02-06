# Synthwave '84 Theme for Insomnia

A Synthwave-inspired color theme for [Insomnia](https://insomnia.rest)—neon accents, dark backgrounds, and retro vibes. Based on Robb Owen's [Synthwave '84](https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode) theme for VS Code.

## Installation

### From Insomnia

1. Open **Application** → **Preferences** → **Plugins**.
2. Search for **Synthwave '84** or `insomnia-plugin-theme-synthwave-84`.
3. Click **Install** and restart Insomnia if prompted.

### From npm

```bash
npm install insomnia-plugin-theme-synthwave-84
```

Then enable the plugin in Insomnia (**Application** → **Preferences** → **Plugins**).

## Usage

After installing, go to **Application** → **Preferences** → **Themes** and select **Synthwave '84**.

## Development

```bash
git clone https://github.com/castelldev/insomnia-plugin-theme-synthwave-84.git
cd insomnia-plugin-theme-synthwave-84
npm install
```

To try it locally, link the package and ensure Insomnia is using the plugin from the link path, or copy the plugin folder into Insomnia’s plugins directory.

## Publishing

Releases are published to npm via GitHub Actions when a new [GitHub Release](https://github.com/castelldev/insomnia-plugin-theme-synthwave-84/releases) is created.

**Setup (once per repo):**

1. Create an [npm access token](https://www.npmjs.com/settings/~/tokens) (Automation type is fine).
2. In the repo: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
3. Name: `NPM_TOKEN`, Value: your npm token.

**To release:**

1. Bump the version in `package.json` (e.g. `0.0.2`).
2. Commit, push, then create a new release (tag e.g. `v0.0.2`).
3. The [Publish to npm](.github/workflows/publish.yml) workflow runs and publishes the package.

## License

MIT © Franklin Castellanos
