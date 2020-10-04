---
title: "The Elements of Statistical Learning"
date: 2016-03-18
author: OctoMiao
summary: Introduction to the reading club of The Elements of Statistical Learning, schedule, and notice
type: project
weight: 1
---


## What books are we reading?

1. [The Elements of Statistical Learning](https://statweb.stanford.edu/~tibs/ElemStatLearn/printings/ESLII_print10.pdf) by Trevor Hastie, Robert Tibshirani, and Jerome Friedman.


## When and How

The discussion is online through Skype/Wechat. It is usually held during the weekend.

This is the so called Russian style seminar.

1. Everyone will get their chance to lead the discussion.
2. Interrupt and ask for any questions.
3. Do not be carried away by the time schedule. The next host will pick up whatever has not yet been finished.

At this point, we have five different time zones.


![](../assets/misc/timezones-1.jpg)

![](../assets/misc/timezones-2.jpg)
> Time



## More

Please watch the GitHub repo: [neuronstar/elements-of-statistical-learning](https://github.com/neuronstar/elements-of-statistical-learning) for updates.


## About typesetting

Basically markdown.

The easiest way of creating notes is to duplicate one of the previous .md files and make changes to it.

Code of conduct:

* Create a markdown file with extension `.md`;
* Any file name works, however, file names begins with two-digit number would be a nice convention.
* The markdown file has to include a header session that specifies the meta data. Here is an example.

   ```
   ---
   title: "01.Introductions"
   date: 2016-06-30
   author: OctoMiao
   summary: Some basics of statistical learning
   ---
   ```

   The `---` is used to enclose the meta data. The four fields in the example is required.
* The contents of the notes should be written in markdown (kramdown).
* Figures can be included simply using the markdown syntax `![](../assets/yourfolder/your-image.png)`. We suggest creating a folder with the same name of your markdown file in the `assets` folder. Pay attention to the path of the image. Eventhough the `assets` folder is under the same path as the file, we have to add `../` to the path because jekyll will generate a folder out of this markdown file.
* For images, markdown syntax is what really works. However, an image with caption is best formatted by the following code.
   ```
   <figure markdown="1">
   ![](../assets/misc/timezones-1.jpg)
   <figcaption markdown="1">
   Timezones
   </figcaption>
   </figure>
   ```
* For other syntax, refer to [typography of neuronstar](http://neuronstar.cc/typography/).
