#Math 
## $X \sim \text{Geometric}(p)$
* A geometric random variable represents the number of trials until a first success where each trial is independent and has a probability $p$ of success
* $p_X(x) = (1-p)^{x-1}p, ~ x \in \{ 1, 2, 3, \ldots \}$
* $F_X(x) = 1 - (1 - p)^x$
* $M_X(t) = \frac{pe^t}{1 - (1 - p)e^t},~t < -\ln(1 - p)$
* $\mathbb{E}[X] = \frac{1}{p}$
* $\text{var}(X) = \frac{1 - p}{p^2}$
* A geometric distribution describes the number of trials until a success where each trial has a probability of $p$ of occurring