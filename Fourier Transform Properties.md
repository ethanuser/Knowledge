#Math

## $\displaystyle \mathcal{F}[(f(t))]\equiv \tilde{f}(\omega)\equiv F(\omega)$
* Generally, the Fourier transform a function is denoted by the uppercase letter version
## $\displaystyle \mathcal{F}[af_{1}(t)+bf_{2}(t)]=aF_{1}(\omega)+bF_{2}(\omega)$
* Linearity
## $\displaystyle \mathcal{F}[f(at)]=\frac{1}{\lvert a\rvert}F\left( j \frac{\omega}{a} \right)$
* Time scaling
## $\displaystyle \mathcal{F}[f(-t)]=F(-j\omega)$
* Time reversal
## $\displaystyle \mathcal{F}[f^{*}(t)]=F^{*}(-j\omega)$
* Complex conjugate
## $\displaystyle \mathcal{F}[F(t)]=2\pi f(-j\omega)$
* Duality
* Shown by taking $\displaystyle f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty} F(j\omega)e^{j\omega t} \, \mathrm{d}\omega$
* then rearranging to $\displaystyle 2\pi f(-t)=\int_{-\infty}^{\infty} F(j\omega)e^{-j\omega t} \, \mathrm{d}\omega=\mathcal{F}[F(t)]$
## $\displaystyle \mathcal{F}[f(t-\tau)]=e^{-j\omega \tau}F(j\omega)$
* Time-shifting
## $\displaystyle \mathcal{F}[f'(t)]=j\omega F(j\omega)$
* Derivative
## $\displaystyle \mathcal{F}[(f_{1}*f_{2})(t)]=F_{1}(j\omega)F_{2}(j\omega)$
* Convolution property
## $\displaystyle \int_{-\infty}^{\infty} \lvert f(t)\rvert^{2} \, \mathrm{d}t=\frac{1}{2\pi}\int_{-\infty}^{\infty} \lvert F(j\omega)\rvert^{2} \, \mathrm{d}\omega$
* Parseval's Theorem
## $\displaystyle \mathcal{F}[f_{1}(t)f_{2}(t))]=\frac{1}{2\pi}(F_{1}*F_{2})(j\omega)$
* Multiplication
* Can be proved by using duality + convolution
## $\displaystyle \mathcal{F}[f(t)e^{j{\omega}_{0}t}]=F(j(\omega-{\omega}_{0}))$
* Modulation
## $\displaystyle \int_{-\infty}^{t} f(\tau) \, \mathrm{d}\tau <\Rightarrow \pi F(0)\delta(\omega)+\frac{F(j\omega)}{j\omega}$
* Integral
