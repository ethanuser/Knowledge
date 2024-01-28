---
aliases:
  - Shannon Entropy
---
#Math 
## $\displaystyle H(X)\equiv -\mathbb{E}[-\log p(X)]$
* $\displaystyle H(X)$ is the entropy of a random variable $\displaystyle X$ and heuristically gives the average level of information/surprise/uncertainty of the variable's outcomes
* E.g. entropy of a [[Discrete Uniform Distribution|discrete uniform random variable]] $\displaystyle X\sim \text{Uniform(\{1,2,...,m\}})$:
	* $\displaystyle H(X)= -\sum_{x \in X}p(x)\log(p(x))=-\sum_{x = 1}^{m} \frac{1}{x}\log\left( \frac{1}{x} \right)$
	* Increasing with respect to $\displaystyle m$
	* There is more uncertainty when there are more choices
## Topics
* [[Deciscion Tree Classification]]