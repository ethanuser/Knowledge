#Physics 
## $\displaystyle \zeta(2)=\sum_{n = 0}^{\infty} \frac{1}{n^{2}}=\frac{1}{1^{2}}+\frac{1}{2^{2}}+\frac{1}{3^{2}}+\ldots=\frac{\pi ^{2}}{6}$
* This can be proved by applying [[Weierstrass factorization theorem]] to the Taylor expansion of $\displaystyle \text{sinc}(x)$ to obtain:
$$
\begin{align}
\frac{\sin x}{x}&=1-\frac{x^{2}}{3!}+\frac{x^{4}}{5!}+\ldots\\
&=\left( 1-\frac{x}{\pi} \right)\left( 1+\frac{x}{\pi} \right)\left( 1-\frac{x}{2\pi} \right)\left( 1+\frac{x}{2\pi} \right)\left( 1-\frac{x}{3\pi} \right)\left( 1+\frac{x}{3\pi} \right)\ldots \\
&= \ldots -\frac{x^{2}}{\pi ^{2}}\left(\frac{1}{1^{2}}+\frac{1}{2^{2}}+\frac{1}{3^{2}}+\ldots \right)+\ldots  \\
& \rightarrow  -\frac{1}{3!}=-\frac{1}{\pi ^{2}}\sum_{n = 1}^{\infty} \frac{1}{n^{2}} \\
& \rightarrow  \sum_{n = 1}^{\infty} \frac{1}{n^{2}}=\frac{\pi ^{2}}{6}
\end{align}
$$

* Alternatively you can find an elegant solution using infinite light towers and the [[Inverse Pythagorean Theorem]] as seen in this [3b1b video](https://www.youtube.com/watch?v=d-o3eB9sfls)
* More intuitively, you can tell that $\displaystyle \sin(x)$ is $\displaystyle x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!}-\ldots$ and it's also equal by rules of zeroes to be $\displaystyle a(x-\pi)(x+\pi)(x-2\pi)(x+2\pi)\ldots$ where $\displaystyle a=$...