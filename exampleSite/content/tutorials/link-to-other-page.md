---
type: project
title: "Link to Another Page and Show Hovercard"
date: 2021-05-08
authors:
  - KausalFlow
tags:
  - Tutorial
links:
  - tutorials/_index.md
weight: 5
---

Apart from the normal markdown links, e.g.,

```markdown
[this link](snm/single-neuron-model)
```

we can also link to other page using the following code.

```go
{{</* c "tutorials/embed-articles.md" */>}}
```

The result will be this: {{< c "tutorials/embed-articles.md" >}}. By hovering on this link, a preview of the summary of the target post.


{{< message class="danger" title="Do not Ignore the Spaces" >}}

Please make sure the is at least one space between the different components of the shortcode. The following shortcode will show the link just fine but will fail in creating backlinks.

```go
{{</*c "tutorials/embed-articles.md"*/>}}
```

{{< /message >}}

## Specify Title

One can also specify a custom title for the link text.

```go
{{</* c "tutorials/embed-articles.md" title="Blabla Title" */>}}
```


Demo: {{< c "tutorials/embed-articles.md" "Blabla Title" >}}