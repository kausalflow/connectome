---
type: project
title: "Embed Articles"
summary: "Embed an article using the shortcode"
date: 2021-05-08
authors:
  - KausalFlow
tags:
  - Tutorial
links:
  - tutorials/_index.md
  - tutorials/link-articles.md
  - tutorials/graph-of-connected-articles.md
weight: 6
---

Embed an article using the shortcode


```go
{{</* e "tutorials/graph-of-connected-articles.md" */>}}
```

Here is the result:


{{< e "tutorials/graph-of-connected-articles.md" >}}

The shortcode can take two arguments:


```go
{{</* e "tutorials/graph-of-connected-articles.md" "This is a custom title" */>}}
```


{{< e "tutorials/graph-of-connected-articles.md" "This is a custom title" >}}