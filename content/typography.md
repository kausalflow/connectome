---
layout: page
excerpt: Typography
search_omit: false
---


* ToC
{:toc}

## We use kramdown

This website uses [`kramdown`](http://kramdown.gettalong.org) as the basic syntax. However, a lot of html/css/js has been applied to generate some certain contents or styles.

Math also follows the [`kramdown` syntax](http://kramdown.gettalong.org/syntax.html#math-blocks).

## Footnote

[Syntax for footnotes is elaborated more on the website of kramdown.](http://kramdown.gettalong.org/syntax.html#footnotes)

{% highlight text %}
Some text here some other text here.[^1]

[^1]: Footnote here
{% endhighlight %}


## Table of Contents


{% highlight text %}
* ToC
{:toc}
{% endhighlight %}

is used to generate table of contents.

## Figure with Caption

{% highlight html %}
<figure markdown="1">
![](../assets/path-to-file.png)
<figcaption markdown="1">
Caption here. Please note that Jekyll generate any fild `file.md` to path `file/index.html`. So the path to the image should be refered to as one level higher.
</figcaption>
</figure>
{% endhighlight %}


<div class="notes--info" markdown="1">
Please determine the path of the image according to the path of the post itself. Otherwise, an absolute path can be specified,

```
![]({{ site.url }}/assets/programming/chrome-dev-tools-inspect.png)
```

where `{{ site.url }}` is the configured url of the site.
</div>


## Notes div

{% highlight html %}
<div class="notes--info" markdown="1">
Some notes here, with markdown support. markdown="0" will disable markdown support.
</div>

<div class="notes--success" markdown="1">
This is success text
</div>

<div class="notes--warning" markdown="1">
This is warning text
</div>

<div class="notes--error" markdown="1">
This is error text
</div>
{% endhighlight %}

<div class="notes--info" markdown="1">
Please beware that with `markdown="1"` the content and div tags have to be on different lines.
</div>

Alternatively, we can use the set attributes syntax in kramdown.

{% highlight md %}
This is a paragraph with some class. The class is specified in the end of the paragraph.
{: .notes--warning}
{% endhighlight %}

The results shows as a paragraph with the corresponding class. Notice that this only works for one paragraph.

This is a paragraph with some class. The class is specified in the end of the paragraph.
{: .notes--warning}
