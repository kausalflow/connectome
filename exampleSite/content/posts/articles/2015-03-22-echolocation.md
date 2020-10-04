---
title: 回声定位
date: 2015-03-22 00:00:00 Z
categories:
- 中文科普
modified: 2015-03-22 00:00:00 Z
author: neuronstar
toc: true
comments: true
summary: 听觉对于动物来说非常重要，在黑暗的深海里和茫茫的暗夜里，有两种动物不约而同地进化出了利用超声波定位的能力：回声定位。他们就是齿鲸和蝙蝠。有趣的是，同样处于黑暗中的盲人，也能掌握这一技能。
---

## 回声定位的原理

回声定位是一种特殊的听觉形式，即动物发出超声波，超声波碰到障碍物后反弹，动物通过分析反弹的超声波的频率、波幅，来判断障碍物的距离、速度、类型、大小。这一技能被动物用于导航、捕食、探索环境。

![]({{site.url}}/images/posts/echo/echo1.png)


$$EL=SL+TS-2TL$$



通常来说，人类能够听到的声音频率范围是 20Hz-20,000Hz，超过 20,000Hz 的声波即超声波，是人类听觉系统（耳蜗）不能感知的刺激。但是，很多动物能听到超声波。其中的典范就是齿鲸（包括喙鲸和海豚）和蝙蝠，它们能利用超声波进行定位，即回声定位。

![]({{site.url}}/images/posts/echo/echo2.png)

![]({{site.url}}/images/posts/echo/echo3.jpg)

## 海豚与蝙蝠

### 海豚的发声器官和接受器官
海豚通过挤压空气快速穿过鼻腔内的两对脂肪片而发出超声波（下图的绿色弧线），声音通过头部的脂肪传播。海豚通过下颌的脂肪接收返回的超声波（下图的红色弧线）。

<figure markdown="1">
<figcaption>
Image Credit: <a href="http://commons.wikimedia.org/wiki/User:Malene" target="_blank">Malene Thyssen</a>
</figcaption>
![](http://upload.wikimedia.org/wikipedia/commons/8/82/Delfinekko.gif)
</figure>


### 蝙蝠的发声器官和接受器官

蝙蝠通过喉头、鼻腔发出超声波，也可以通过翅膀发出微弱的超声波。返回的超声波通过外耳廓进入蝙蝠的听觉系统。




## 海豚和蝙蝠的捕食过程

海豚和蝙蝠的捕食过程可以分为三个阶段：搜索、趋近、捕食。在这三个阶段中，海豚和蝙蝠发出的声音频率不变，而信号间隔逐渐变短，是为了得到更精确的关于猎物的信息，最后阶段当他们非常接近猎物时，信号间隔降低为几毫秒，为“蜂鸣”信号（buzz）。

![]({{site.url}}/images/posts/echo/echo5.png)



## 捕食者-猎物的互动和进化

在齿鲸中，有一对有趣的捕食者-猎物的例子，那就是虎鲸和海豚，他们都能够接受超声波信号，因此，以哺乳动物为食的虎鲸为了避免被海豚“听”到，在接近海豚时会关闭回声定位系统；而海豚在捕食鱼类时，为了避免被虎鲸“听”到而暴露自己，进化出了高于虎鲸听力上限的超声波范围。这就是 predator 和 prey 斗智斗勇的生存游戏。

![]({{site.url}}/images/posts/echo/echo6.jpg)


## 人类的回声定位

有趣的是，最近的研究发现，回声定位不止存在于齿鲸和蝙蝠中，有的盲人也可以利用回声判断行进过程中的障碍物。


<iframe width="960" height="720" src="https://www.youtube.com/embed/r9mvRRwu5Gw" frameborder="0" allowfullscreen></iframe>




## 回声定位的物理

海豚捕食小鱼的时候，需要定位精度**至少**达到鱼的大小，这也就意味着海豚发出的声波的波长要小于小鱼的大小，例如 10 厘米。而蝙蝠需要捕食很小的昆虫，如果定位精度只有 10 厘米，显然是没法捕捉到昆虫的，因为它只能知道在昆虫在一个 10 厘米的范围内，却不知道昆虫具体在什么位置，因此它的超声波的波长**至少**要达到小昆虫的大小，例如 1 厘米的飞蛾。

比较巧合的是，海豚和蝙蝠的超声定位工作在相似的频率上。这背后的原因是声波波长和声速成正相关，即

$$v_s = \lambda f,$$

其中 $v_s$ 是声速，$\lambda$ 是波长，$\lambda$ 是声波波长，$f$ 声波频率。

由于海水中声速接近空气中声速的五倍，同样频率的声波，在海水中的波长大约是空气中波长的五倍。上面提到的海豚和蝙蝠超声定位虽然工作在相似的频率上，但是在空气中的蝙蝠可以探测到的猎物的尺度大约是海水中海豚探测精度的五倍。也就是说，虽然他们需要的精度不同，但是由于声速在两个环境中的差异，蝙蝠并不需要发出比海豚频率更高很多的声波。

<figure markdown="1">
<figcaption>
图中横轴是声波频率，左边的纵轴是探测猎物的大小。同样的频率下，蝙蝠可以探测更小。Madsen PT, Surlykke A. 2013 Vol. 28 no. 5, 276-283. <a href="http://physiologyonline.physiology.org/content/28/5/276.long" target="_blank">Functional convergence in bat and toothed whale biosonars</a>.
</figcaption>
![]({{site.url}}/images/posts/echo/echo7.png)
</figure>
