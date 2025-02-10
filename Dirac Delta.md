---
aliases:
  - Delta Function
  - Dirac Delta Function
---
#Physics
## [Universal Danker Video](https://www.youtube.com/watch?v=Y8y965ZAmQE)
## Topics
* [[3D Dirac Delta]]
# Definition
1. $\displaystyle \int_{-\infty}^{\infty} \delta(x) \, \mathrm{d}x=1$
2. $$
\delta(x)=
\begin{cases}
0, & x\neq 0 \\
\infty  & x=0
\end{cases}
$$
# Properties
## $\displaystyle \int_{-\infty}^{\infty}f(x)\delta(x)  \, \mathrm{d}x=\int_{-\infty}^{\infty}f(x)\delta(-x)  \, \mathrm{d}x=f(0)$
* The delta function is symmetric and has the effect of sending an integral of $\displaystyle f(x)$ to $\displaystyle f(0)$
## $\displaystyle \int_{a}^{b} f(x)\delta(x-x_{0}) \, \mathrm{d}x=0 \text{ for } x_{0} \notin [a,b]$
* The delta function in an integral evaluates to 0 if $\displaystyle x_{0}$ is not in the bounds of integration
## $\displaystyle \int_{-\infty}^{\infty} f(x)\delta(x-x_{0}) \, \mathrm{d}x=f(x_{0})$
## $\displaystyle \int_{-\infty}^{\infty} f(x)\delta(k x) \, \mathrm{d}x=\frac{1}{\lvert k\rvert}f(0)$
* This is shown by a u-substitution of $\displaystyle u=kx$
* The absolute value sign occurs because the delta function is symmetric because $\displaystyle \delta(x)=\delta(-x)$
## $\displaystyle \delta(x-x_{0})=\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ik(x-x_{0})} \, \mathrm{d}k$
* Need to check this later
## $\displaystyle $