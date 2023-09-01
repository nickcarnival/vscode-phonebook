# Phonebook Theme for VSCode

> A theme for VSCode inspired by [Primary Theme for Obsidian](https://github.com/ceciliamay/obsidianmd-theme-primary) without the fancy icons or polish.

![](https://vscode-themes.nyc3.cdn.digitaloceanspaces.com/profiles/f8egwJh7BkYm7oyptKjb70jFNB53/3FuLHTAt-default.jpeg)

![](https://vscode-themes.nyc3.cdn.digitaloceanspaces.com/profiles/f8egwJh7BkYm7oyptKjb70jFNB53/esE8uUrS-commandPalette.jpeg)

# Installation

```sh
vsce package
```

## Roadmap

- [ ] hover color is too bright
- [ ] create a release [docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [ ] toasts are a bit off

## Manual JSON Additions:

> These are colors that I manually change after generating the json from [themes.vscode.one](https://themes.vscode.one).

```json
"settings.sashBorder": "#b69d7c",
"sash.hoverBorder": "#b69d7c"
```

## Recommendations

- Turn whitespace rendering off by opening the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) with `Ctrl+Shift+P` and search for `Toggle Render Whitespace`.
