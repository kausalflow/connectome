---
type: project
title: "Comments"
date: 2021-05-01
tags:
  - Tutorial
authors:
  - KausalFlow
links:
  - tutorials/_index.md
weight: 2
---

Hugo connectome supports two comment systems:

- utteranc.es, and
- giscus.

{{< message class="warning" title="Optional" >}}
This step is optional. It is up to the user to decide whether to configure a comment system or not.
{{< /message >}}

Here is a demo config. We put both giscus and utterances here but we only `use: "giscus"`.


```yaml
comments:
    use: "giscus"
    giscus:
      repo: "datumorphism/comments"
      repo_id: "MDEwOlJlcG9zaXRvcnkxNjU5MDkyNDI="
      category: "Comments"
      category_id: "DIC_kwDOCeOS-s4B-Zxx"
    utterances: # comment system: utterances (https://utteranc.es/) parameters
      repo: "datumorphism/comments"  # repo="[ENTER REPO HERE]", the comments will appear as issues in this repository on github.
      term: pathname               # issue-term="pathname"
      theme: github-light          # theme="github-light"
```

## utteranc.es

The comment box is using [utteranc.es](https://utteranc.es/). This is a demo configuration in the `config.yaml` file.

```yaml
comments:
    use: "utterances"
    utterances: # comment system: utterances (https://utteranc.es/) parameters
        repo: "kausalflow/hugo-connectome-theme-demo"  # repo="[ENTER REPO HERE]", the comments will appear as issues in this repository on github.
        term: pathname               # issue-term="pathname"
        theme: github-light          # theme="github-light"
```

## giscus

See official docs: [giscus.app](https://giscus.app/)

```yaml
comments:
    use: "giscus"
    giscus:
      repo: "kausalflow/hugo-connectome-theme-demo"
      repo_id: "just put your id here"
      category: "Your category"
      category_id: "bla bla bla"
```