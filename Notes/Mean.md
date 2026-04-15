---
aliases:
  - Average
  - Expected Value
  - Expectation
---
#Math 
[[Central tendency]] measure that minimizes the sum of [[Euclidean Distance|L2 norm]]s between it and other data points
## $\displaystyle \mu=\mathbb{E}[X]={\left\langle{x}\right\rangle}=\bar{x}$

## $\displaystyle \mathbb{E}[X]=\sum_{x \in S}xp_{X}(x)$
* Discrete version
* $\displaystyle \mathbb{E}[X]$ is the expected value of random variable $\displaystyle X$
* $\displaystyle p_{X}(x)$ is the [[PMF]] of  random variable $\displaystyle X$ for a value $\displaystyle x$
* $\displaystyle S$ is the set of values of our random variable $\displaystyle X$
#### $\displaystyle \mathbb{E}[g(X)]=\displaystyle\sum_{x\in S}g(x)p_X(x),~g:S\mapsto \mathbb{R}$
* Expected value of a function of a random variable
## $\displaystyle \mathbb{E}[X]=\int_{-\infty}^{\infty} f_{X}(x) \, \mathrm{d}x$
* Continuous version
* $\displaystyle f_{X}(x)$ is the [[PDF]]

## $\displaystyle \mathbb{E}[ag(X)+bh(X)]=a\mathbb{E}[g(X)]+b\mathbb{E}[h(X)]$
* Linearity of Expectation
# L2 Norm Proof
![[Pasted image 20240525110610.png|600]]