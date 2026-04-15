---
aliases:
  - Sampling Theory
---
#Math 
The main takeaway is that a signal that is discrete in time is periodic in spectrum (and vice versa). 
* This means we can sample a signal, takes its [[Fourier Transform]], apply a [[lowpass filter]], and then apply an [[Fourier Transform|Inverse Fourier Transform]] to recover the original signal.
	* 
## Topics
* [[Nyquist Rate]]
* [[Nyquist Frequency]]
* [[Nyquist Interval]]
* [[Sampling Frequency]]
* [[Whittaker-Shannon Interpolation]]
## $\displaystyle \tilde{f}(t)=f(t)\delta_{T}(T)=\sum_{k = -\infty}^{\infty}f(t-kT)$
* $\displaystyle \delta_{T}(t)$ is the [[impulse train]]
## $\displaystyle \tilde{F}(j\omega)=\mathcal{F}[f(t)\delta_{T}(t)]=\frac{1}{2\pi}F(j\omega)* {\omega}_{0}\delta_{{\omega}_{0}}(\omega)=\frac{1}{T}\sum_{k = -\infty}^{\infty}F(j(\omega-k{\omega}_{0}))$
* [[Fourier transform]] of sampled function
* Essentially a periodic repetition of $\displaystyle F(j\omega)$ spaced every $\displaystyle {\omega}_{0}$