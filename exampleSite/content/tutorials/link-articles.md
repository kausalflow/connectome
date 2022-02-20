---
type: project
title: "Link Articles"
date: 2021-05-01
tags:
  - Tutorial
authors:
  - KausalFlow
links:
  - tutorials/_index.md
weight: 4
---

There are three different ways to link notes:

- use `links` in the note metadata, this will be covered in the current note,
- use shortcode `c` to add a hyperlink in the texts, see {{< c "tutorials/link-to-other-page.md" >}},
- use shortcode `e` to embed another note in the current note, see {{< c "tutorials/embed-articles.md" >}}.

All three methods will generate backlinks for the notes linked to.

Articles can be linked by adding a the reference of the target post to the meta data of the current post, e.g.,

```yaml
links:
  - snm/single-neuron-model.md
  - tags/gauss-markov-theorem
```

The ref of the target post can be

- the path to the markdown file inside the `content` folder, such as `snm/single-neuron-model.md`,
- the path to the tag page, such as `tags/gauss-markov-theorem`.

If one needs to find the ref of a post, it is found on the right of the content. For example, the following screenshot shows the ref of this article.

{{< figure src="../assets/link-articles/current-ref.png" title="Current Ref" caption="Current ref of the post is shown on the right of the articles." >}}


