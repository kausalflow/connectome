---
title: "Linear Methods for Regression"
date: 2016-08-18
author: OctoMiao
summary: Linear regression, least squares
type: project
weight: 2
---


## Some Interesting Points


1. Geometrically speaking, linear regression methods finds the closest path from the true data to a hypersuface spanned by the data vectors. By definition, each set of data is viewed as a basis vector. The so called closed path to the hypersuface is basically the path that is perpendicular to the surface. Thus we know the prediction we are looking for is a projection of true data onto the hypersuface.
2. The argument above also indicates that degenerate data set, which contains data of the same direction, could cause problems since we have a redundant basis.
3. Distribution of the parameters can be obtained for some categories of data. It might be a normal distribution.
4. t-distribution, aka [student's t-distribution](https://en.wikipedia.org/wiki/Student%27s_t-distribution), is a category of distributions describing the deviation of estimated mean in a normal distribution from the true mean.
5. The tail of the estimated distribution approaches the actual tail distribution as the sample size increases.
6. Z score can be used to test the significance of the statistics.
   > "Roughly a Z score larger than two in absolute value is significantly nonzero at the p=0.05 level."
   > The author said in the caption of Table 3.2
7. [F statistic](https://en.wikipedia.org/wiki/F-statistic)


Confusion:

1. Eqn 3.14: plug in the definition of z and read again.
