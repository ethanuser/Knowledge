---
aliases:
  - Gaussian Distribution
  - Normal Distributions
  - Gaussian Distributions
---
#Math
## $X \sim \mathcal{N}(\mu, \sigma^2)$
* $\mu \in R, ~ \sigma^2 > 0$
* $f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left( \frac{x - \mu}{\sigma} \right)^{2}}, ~ x \in \mathbb{R}$
* $F_X(x) = \int_{-\infty}^x f_X(t)dt$
* $M_X(t) = e^{\mu t + \frac{1}{2}\sigma^2t^2}, ~ t \in \mathbb{R}$
* $\mathbb{E}[X] = \mu$
* $\text{var}(X) = \sigma^2$
For the standard normal distribution $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$
* $f_Z(z) = \frac{1}{\sqrt{2\pi}}e^{-\frac{z^2}{2}}$
* $F_Z(z) = \Phi(z) = \int_{-\infty}^z f_Z(t)dt$
* $M_Z(t) = e^{\frac{1}{2}t^2}$
* $\mathbb{E}[Z] = 0$
* $\text{var}(Z) = \sigma_Z = 1$
* $\Phi(-x) = 1 - \Phi(x)$
Table for $\phi(x)$