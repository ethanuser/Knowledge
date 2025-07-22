#Math 
## $\displaystyle \mathcal{L}[af_{1}(t)+bf_{2}(t)]=aF_{1}(s)+bF_{2}(s)$
* Linearity
## $\displaystyle \mathcal{L}[f(at)]=\frac{1}{a}F\left( \frac{s}{a} \right)$
* Time scaling
## $\displaystyle \mathcal{L}[f(t-T)]=e^{-sT}F(s)$
* Time shift
## $\displaystyle \mathcal{L}[f(t)e^{s_{0}t}]=F(s-s_{0})$
* Frequency shift
## $\displaystyle \mathcal{L}[f_{1}(t)]*f_{2}(t)]=F_{1}(s)F_{2}(s)$
* Convolution
## $\displaystyle \mathcal{L}\left[ \int_{0}^{t} f(\tau) \, \mathrm{d}\tau \right]=\frac{1}{s}F(s)$
* Integration
## $\displaystyle \mathcal{L}[f'(t)]=sF(s)-f(0)$
* Derivative
## $\displaystyle \mathcal{L}\left[ \frac{\mathrm{d}^{n}f(t) }{ \mathrm{d}t^{n}} \right]=s^{n}F(s)-\sum_{k=0}^{n-1}s^{n-1-k}f^{(k)}(0)$
* $\displaystyle n$th derivative
* $\displaystyle n=1$: $\displaystyle sF(s)-f(0)$
* $\displaystyle n=2$: $\displaystyle s^{2}F(s)-sf(0)-f'(0)$
* $\displaystyle n=3$: $\displaystyle s^{3}F(s)-s^{2}f(0)-sf'(0)-f''(0)$
## $\displaystyle \mathcal{L}[tf(t)]=-F'(s)$
* Multiplication by $\displaystyle t$
## $\displaystyle \mathcal{L}[f_{1}(t)f_{2}(t)]=\frac{1}{2\pi j}\int_{\gamma-j\infty}^{\gamma+j\infty} F_{1}(p)F_{2}(s-p) \, \mathrm{d}p$
* Multiplication