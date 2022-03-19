---
type: project
title: "Command Palette"
date: 2021-05-01
tags:
  - Tutorial
authors:
  - KausalFlow
links:
  - tutorials/_index.md
weight: 8
---

To use the command palette, press <kbd>Command</kbd> + <kbd>k</kbd> (on Mac) or <kbd>Windows</kbd> + <kbd>k</kbd> (on Windows).

{{< figure src="../assets/command-palette/command-palette-demo.png" >}}

There are some generic commands we can use on every page, e.g.,

- `Home`: navigate back to home page,
- `View Graph`: navigate to the graph page,
- `All Notebooks`: navigate to the notebook list,
- `Search`: search notes by title, which is less powerful than the search bar on the home page.

On note pages, we can use note specific commands, e.g.,

- `Current Note ID`: copy the current note id to the clipboard,
- `Backlinks`: show backlinks and go to backlinks,
- `Links`: show all the notes that the current note linked to,
- `References`: list all the references and go to the links if there is a url.

{{< figure src="../assets/command-palette/command-palette-note-commands-demo.png" caption="Depending on the note, not every command is available." >}}

The command palette is enabled by default. If one would like to disable it,

```yaml
params:
  # some other configs
  # ...
  command: false
```

