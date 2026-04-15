#Physics 
Has no definite energy. Because $\displaystyle p=\hbar k$, you can replace the below equations of $\displaystyle k$ with $\displaystyle \frac{p}{\hbar}$
## Topics
* [[Phase Velocity]]
* [[Group Velocity]]
## $\displaystyle \Psi(x,t)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \tilde{\Psi}(k)e^{i(kx-\omega t)} \, \mathrm{d}k$
* Wave function for free particle
* $\displaystyle \omega= \frac{\hbar k^{2}}{2m}$
* $\displaystyle e^{i(kx-\omega t)}$ can be rewritten as $\displaystyle e^{ikx}e^{-iEt/\hbar}=e^{ikx}e^{-i\hbar k^{2}t/2m}$ because $\displaystyle E=\frac{\hbar ^{2}k^{2}}{2m}$
* Analogous to $\displaystyle \Psi(\vec{r},t)=\sum_{n = 1}^{\infty}c_{n}\psi_{n}(\vec{r})e^{-iE_{n}t/\hbar}$, where $\displaystyle c_{n}$ is something like $\displaystyle \tilde{\Psi}(k)$
## $\displaystyle \tilde{\Psi}(k)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \Psi(x,0)e^{-ikx} \, \mathrm{d}x$
* Analogous to $\displaystyle c_{n}=\int \psi_{n}^{*}(x)\Psi(x,0) \, \mathrm{d}x$, or the [[wave function weighting coefficient]]
* $\displaystyle \tilde{\Psi}(k)$ is the [[Fourier transform]] of $\displaystyle \Psi(x,t)$
* Solved by [[Plancherel's Theorem]]
## $\displaystyle \Psi(x,0)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \tilde{\Psi}(k)e^{ikx} \, \mathrm{d}k$
## $\displaystyle \frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ikx}e^{-ik'x} \, \mathrm{d}x=\delta(k-k')$
* Dirac orthonormality condition
* $\displaystyle \delta$ is the [[Dirac Delta|delta function]]