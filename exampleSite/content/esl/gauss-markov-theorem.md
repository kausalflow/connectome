---
title: "Guass-Markov Theorem and Multiple Regression"
date: 2016-09-01
author: OctoMiao
summary: Gauss-Markov Theorem
type: project
tags:
  - Statistics
  - "Gauss-Markov Theorem"
links:
  - snm/limitations-srm-contd-and-coding.md
  - snm/single-neuron-model.md
weight: 3
---


## Gauss-Markov

1. "**Least squares** estimates the parameters $\beta$ have the smallest variance among all linear unbiased estimates."
2. **Unbiased estimation** is not always good.
3. ridge regression

### Proof of 1

1. Model: $\theta = a^T \beta$
2. Least square estimate of $\theta$: $\hat\theta = a^T \hat \beta = a^T ( \mathbf X^T \mathbf X )^{-1} \mathbf X^T \mathbf y = \mathbf c_0^T \mathbf y$
3. This is unbiased: $E(a^T\hat\beta) = a^T\beta$
4. Gauss-Markov theorem: If we have any other linear estimator $\tilde \theta = \mathbf c^T \mathbf y$ and $E(\mathbf c^T \mathbf y)=a^T \beta$, then $Var(a^T\hat \beta)\leq Var(\mathbf c^T \mathbf y)$.
5. To prove it we first write down the general form of a linear estimator. **Question:** is the general form of a linear estimator $\alpha (X^T X)^{-1} X^T + D$?



Useful functions for the proof:

1. Variance: $Var(X) = E[ (X - \mu)^2 ]$.
2. [On wikipedia](https://en.wikipedia.org/wiki/Gauss%E2%80%93Markov_theorem#Proof)


1. MSE: $MSE(\tilde\theta) = E( (\tilde\theta -\theta)^2 ) = E( (\tilde \theta - E(\theta) + E(\theta) - \theta)^2 ) = E( (\tilde\theta - E(\theta))^2 ) + \cdots$
2. MSE is $MSE(\tilde \theta) = Var(\tilde theta) + (E(\theta) -\theta)^2$ the second term is bias.
3. Least square is good but we can trade some bias to get a smaller variance sometimes.
4. Choices are variable subset selection, ridge regression.



1. Suppose new data is biased from the original data by a value $\epsilon_0$, the MSE using the original estimator is only the original MSE differed by a constant. Eq. 3.22
2. We always have a larger MSE????? I don't get this.


## Multiple Regression

1. Model: $f(X) = \beta_0 + \sum_{j=1}^p X_j \beta$
2. For multiple dimensional inputs, the estimator has no correlations for different features.
