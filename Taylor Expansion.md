#Math
[Wolfram Article](https://mathworld.wolfram.com/TaylorSeries.html)
## $\displaystyle f(x)=\sum_{n = 0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^{n}=f(a)+f'(a)(x-a)+f''(a)(x-a)^{2}+\ldots$
* $\displaystyle f^{(n)}$ is the $\displaystyle n$th derivative of the function we are trying to approximate
* $\displaystyle a$ is the value we are inputting into $\displaystyle f(x)$
## $\displaystyle f(x_{0}+\Delta x)=\sum_{n = 0}^{\infty}\frac{f^{(n)}(x_{0})}{n!}(\Delta x)^{n}$
* $\displaystyle \Delta x=x-x_{0}$
## Types
* $\displaystyle e^{x}=\sum_{n = 0}^{\infty} \frac{x^{n}}{n!}$
	* Derivation:
		* $\displaystyle e^{x}=\sum_{n = 0}^{\infty} \frac{e^{a}}{n!}(x-a)^{n}$
		* Assume $\displaystyle a=0$
		* $\displaystyle e^{x}=\sum_{n = 0}^{\infty} \frac{e^{0}}{n!}(x-0)^{n}$
		* $\displaystyle e^{x}=\sum_{n = 0}^{\infty} \frac{x^{n}}{n!}$
* $\displaystyle (1+x)^{n}\approx 1+nx, \text{ x small}$
* $\displaystyle \sin x=\sum_{n = 0}^{\infty}\frac{(-1)^{n}}{(2n+1)!}x^{2n+1}$
* $\displaystyle \cos x=\sum_{n = 0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n}$
* $\displaystyle \ln(1-x)=-\sum_{n = 1}^{\infty} \frac{x^{n}}{n}$
* $\displaystyle \ln(1+x)=\sum_{n = 1}^{\infty} (-1)^{n+1} \frac{x^{n}}{n}$
