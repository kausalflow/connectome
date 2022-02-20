---
type: project
title: "Adding References"
date: 2021-05-08
authors:
  - KausalFlow
tags:
  - Tutorial
links:
  - tutorials/_index.md
references:
  - name: "Hugo (This is a demo reference)"
    link: "https://gohugo.com"
    key: "hugo"
weight: 7
---

One could also add references to the post. Just add the following to the meta data of the post.

```yaml
references:
  - name: "Hugo (This is a demo reference)"
    link: "https://gohugo.com"
```

The result is shown on the right.


Inline citation of a reference is also possible if we give the reference a key.

```yaml
references:
  - name: "Hugo (This is a demo reference)"
    link: "https://gohugo.com"
    key: "hugo"
```

And in text, do the following

```go
This is some description of hugo[^hugo].

[^hugo]: {{</* cite key="hugo" */>}}
```

The following paragraph is the rendered result of the above text.

This is some description of hugo[^hugo].

[^hugo]: {{< cite key="hugo" >}}