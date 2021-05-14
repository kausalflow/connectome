---
type: project
title: "Link to Other Page Using Card"
date: 2021-05-08
authors:
  - KausalFlow
tags:
  - Tutorial
links:
  - snm/single-neuron-model.md
  - snm/limitations-srm-contd-and-coding.md
  - tags/gauss-markov-theorem
weight: 5
---

Apart from the normal markdown links, e.g.,

```markdown
[this link](snm/single-neuron-model)
```

we can also link to other page using the following code.

```go
{{</* c "snm/single-neuron-model.md" */>}}
```

The result will be this: {{< c "snm/single-neuron-model.md" >}}. By hovering on this link, a preview of the summary of the target post.

