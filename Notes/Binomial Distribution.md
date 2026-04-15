#Math #Physics 
## $X\sim\text{Binomial}(n,p)$
A binomial random variable represents the number of successes out of $n$ independent trials that each have a probability $p$ of success
* $p_X(x)={n\choose x}p^x(1-p)^{n-x},~x\in\{0,1,\ldots,n\}$
* $F_X(x) =$ 
- $M_X(t)=(1-p+pe^t)^n$
	This occurs because:
	1. $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p_X(x)$
	2. $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p^x(1-p)^{n-x}$
	3. $M_X(t)=\displaystyle\sum_{x=0}^n(e^tp)^x(1-p)^{n-x}$
	4. By Binomial theorem: $M_X(t)=(1-p+pe^t)^n$
* $\mathbb{E}[X]=np$
* $\text{var}(X) = np(1 - p)$
* $\displaystyle {\left\langle{x^{2}}\right\rangle}=\sigma ^{2}+\mu ^{2}$
* A binomial distribution describes the number of successes when running $n$ independent trials where the probability of a success for each trial is $p$
## Applications
* [[Spin Magnet System]]