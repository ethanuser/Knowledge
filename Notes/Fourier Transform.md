---
aliases:
  - Inverse Fourier Transform
---
#Math
## $\displaystyle f(x)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \tilde{f}(k)e^{ikx} \, \mathrm{d}k$
* The Fourier transform of a [[reciprocal Space]] function
## $\displaystyle \mathcal{F}[f(x)]=\tilde{f}(k)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f(x)e^{-ikx} \, \mathrm{d}x$
* This is the Fourier transform of $\displaystyle f(x)$ that takes inputs from $\displaystyle k$ space
## $\displaystyle \int_{-\infty}^{\infty} f(t) \, \mathrm{d}t=\tilde{f}(0)$
* [3b1b video](https://www.youtube.com/watch?v=851U557j6HE)
## $\displaystyle \mathcal{F}[f(t)\cdot g(t)]=\mathcal{F}[f(t)]*\mathcal{F}[g(t)]$
# Quantum Physics
## Topics
* [[Momentum Basis]]
* [[Borwein Integrals]]
## $\displaystyle \Psi(x)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \tilde{\Psi}(k)e^{ikx} \, \mathrm{d}k$
## $\displaystyle \tilde{\Psi}(k)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \Psi(x)e^{-ikx} \, \mathrm{d}x$
# Signal Processing
## $\displaystyle F(j\omega)=\int_{-\infty}^{\infty} f(t)e^{-j\omega t} \, \mathrm{d}t$
* The $\displaystyle F(j\omega)$ is effectively the same as $\displaystyle F(\omega)$
## $\displaystyle f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty} F(j\omega)e^{j\omega t} \, \mathrm{d}\omega$
## Topics
* [[Fourier Transform Properties]]
* [[Fourier Transform Symmetries]]
* [[Fourier Transform Catalog]]