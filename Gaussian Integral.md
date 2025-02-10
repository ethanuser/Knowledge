#Math
## $\displaystyle \int_{-\infty}^{\infty} f_{X}(x) \, \mathrm{d}x=1,\,f_{X}(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left( \frac{x-\mu}{\sigma} \right)^{2}}$
* $\displaystyle X$ is a random variable identically distributed to the [[Normal Distribution]]
## $\displaystyle \int_{-\infty}^{\infty} e^{-ax^{2}} \, \mathrm{d}x=\sqrt{ \frac{\pi}{a} }$
# Spicy Integrals

## $\displaystyle \int_{0}^{\infty} x^{2n}e^{-x^{2}/a^{2}} \, \mathrm{d}x=\sqrt{ \pi } \frac{(2n)!}{n!}\left( \frac{a}{2} \right)^{2n+1}$
* Derived by using [[Gamma Function]]
## $\displaystyle \int_{0}^{\infty} x^{2n+1}e^{-x^{2}/a^{2}} \, \mathrm{d}x=\frac{n!}{2}a^{2n+2}$
* Derived by using [[Gamma Function]]
## $\displaystyle \int_{0}^{\infty} x^{2n}e^{-ax^{2}} \, \mathrm{d}x=\frac{\Gamma\left( \frac{n+1}{2} \right)}{2a^{\left( \frac{n+1}{2} \right)}}$
* Derived by using [[Gamma Function]]
## $\displaystyle \int_{0}^{\infty} \frac{x^{n}}{e^{x}-1} \, \mathrm{d}x=n!\zeta(n+1)$
* $\displaystyle \zeta$ is the [[Riemann Zeta function]]
# Proof
$$
\begin{align}
I&\equiv \int_{-\infty}^{\infty} e^{-x^{2}} \, \mathrm{d}x \\
\int_{-\infty}^{\infty} e^{-x^{2}}\mathrm{d}x \,\int_{-\infty}^{\infty} e^{-y^{2}} \, \mathrm{d}y &=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-x^{2}}e^{-y^{2}} \, \mathrm{d}x \, \mathrm{d}y  \\
&=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^{2}+y^{2})} \, \mathrm{d}x \, \mathrm{d}y \\
&= \int_{0}^{2\pi} \int_{0}^{\infty} e^{-r^{2}}r \, \mathrm{d}r\, \mathrm{d}\theta,\,u\equiv r^{2} \\
&=2\pi\int_{0}^{\infty} \frac{e^{-u}}{2} \, \mathrm{d}u \\
&=\pi(-e^{-u})^{\infty}_{0} \\
&=\pi \\
&=I^{2} \\
\therefore I&=\sqrt{ \pi }
\end{align}
$$
