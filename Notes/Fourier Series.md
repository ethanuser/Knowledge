---
aliases:
  - Fourier's Trick
---
#Math
The orthogonal basis set for [[cartesian coordinates]]
## $f(x) = \frac{a_0}{2} + \displaystyle\sum_{n = 1}^\infty\left[a_n\cos\left(\frac{n\pi}{L}x\right) + b_n\sin\left(\frac{n\pi}{L}x\right)\right]$
* States that any [[Continuity|continuous]], periodic function on the interval $\displaystyle [-L,L]$ can be expanded as the above
## $a_0 = \frac{1}{L}\int_{x_{0}}^{2L+x_{0}}f(x)dx$
## $a_n = \frac{1}{L}\int_{x_{0}}^{2L+x_{0}} f(x) \cos\left( \frac{n\pi}{L}x \right)dx=\frac{2}{L}\int _{x_{0}}^{L+x_{0}}f(x)\cos\left( \frac{n\pi}{L}x \right) \, \mathrm{d}x$
* Called Fourier's trick
* Obtained by multiplying $f(x) = \frac{a_0}{2} + \displaystyle\sum_{n = 1}^\infty\left[a_n\cos\left(\frac{n\pi}{L}x\right) + b_n\sin\left(\frac{n\pi}{L}\right)\right]$ on both sides by $\displaystyle \cos\left( \frac{n'\pi}{L}x \right)$ and integrating from $\displaystyle x_{0}$ to  $\displaystyle 2L+x_{0}$ and noticing that the only contributing terms on the RHS are of the form $\displaystyle \int_{x_{0}}^{2L+x_{0}}  a_{n}\cos\left( \frac{n\pi}{L}x \right)\cos\left( \frac{n'\pi}{L}x \right)\, \mathrm{d}x$ for when $\displaystyle n=n'$, which evaluates to $\displaystyle \frac{2L}{2}a_{n}$
## $b_n = \frac{1}{L}\int_{x_{0}}^{2L+x_{0}} f(x) \sin(\frac{n\pi}{L}x)dx=\frac{2}{L}\int _{x_{0}}^{L+x_{0}}f(x)\sin\left( \frac{n\pi}{L}x \right) \, \mathrm{d}x$
# Signal Processing
## Topics
* [[Fourier Series Coefficients]]
* [[Parsavel's Theorem]]
## $\displaystyle x(t)=\sum_{k = -\infty}^{\infty}c_{k}e^{jk{\omega}_{0}t}\text{ if }x(t)\text{ is periodic}$
* A signal can be decomposed into a series of complex exponentials