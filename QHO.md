---
aliases:
  - Quantum Harmonic Oscillator
---
#Physics 
[Professor Dave Explains Video](https://www.youtube.com/watch?v=l29vbExLSak)
# Quantum Physics
## Topics
* [[Classical Harmonic Oscillator]]
## $\displaystyle U(x)=\frac{1}{2}kx^{2}$
* This is the potential of a quantum harmonic oscillator, and it applies to all the equations below
## $\displaystyle \psi_{n}(x)=\left( \frac{m\omega}{\pi \hbar} \right)^{\frac{1}{4}}\frac{1}{\sqrt{ 2^{n}n! }} H_{n}(\xi)e^{-\frac{1}{2} \xi^{2}}$
* When the potential is that of a harmonic oscillator, the wave eigenfunctions of energy $\displaystyle E_{n}$ takes the above form
* You may also substitute $\displaystyle k=m\omega  ^{2}$ to get $\displaystyle U(x)=\frac{1}{2}m\omega ^{2}x^{2}$
* $\displaystyle \xi\equiv \sqrt{ \frac{m\omega}{\hbar} }x$ for substitution
* $\displaystyle \left( \frac{m\omega}{\pi \hbar} \right)^{\frac{1}{4}}\frac{1}{\sqrt{ 2^{n}n! }}$ is the normalization factor
* $\displaystyle H_{n}(\xi)$ is a [[Hermite Polynomial|Hermite polynomial]]
* [Desmos Demo of Different Standing Waves](https://www.desmos.com/calculator/ammn1os6w4)
## $\displaystyle \psi_{n}(x)=\frac{1}{\sqrt{ n }}(\hat{a}_{+})^{n}\psi_{0}(x)$
* $\displaystyle \hat{a}_{+}$ is the [[raising operator]]
* $\displaystyle {\psi}_{0}(x)$ is the ground state and is equal to $\displaystyle\left( \frac{m\omega}{\pi \hbar} \right)^{1/4}e^{-\frac{m\omega}{2\hbar}x^{2}}$
## $\displaystyle \psi(\xi)=h(\xi)e^{-\xi ^{2}/2}$
* General wave function of a harmonic oscillator
* $\displaystyle h(\xi)=a_{0}+a_{1}\xi+a_{2}\xi ^{2}+\ldots=\sum_{j = 0}^{\infty}a_{n}\xi^{n},a_{n+2}=\frac{2n-k+1}{(n+1)(n+2)}a_{n}$
## $\displaystyle E_{n}=\left( n+\frac{1}{2} \right)\hbar \omega=\frac{1}{2}{\left\langle{K}\right\rangle}=\frac{1}{2}{\left\langle{U}\right\rangle}$
* Shows how energy is quantized in a harmonic oscillator
* $\displaystyle E_{n}$ is the energy of $\displaystyle n$th energy state
* $\displaystyle \hbar$ is the [[reduced planck constant]]
* $\displaystyle \omega$ is the angular frequency of oscillation
* $\displaystyle {\left\langle{K}\right\rangle}$ is the average kinetic energy of the particle
* $\displaystyle {\left\langle{U}\right\rangle}$ is the average potential energy of the particle
# Statistical Mechanics
## Topics
* [[Planck Distribution Function]]
* [[Stefan-Boltzmann Law]]
* [[Planck's Law]]
## $\displaystyle H=\frac{1}{8\pi}\int \left( \epsilon E^{2}+\frac{B^{2}}{\mu} \right) \, \mathrm{d}V\rightarrow \varepsilon=\hbar {\omega}_{0}\left( n+\frac{1}{2} \right)$

* Delocalized harmonic oscillator

$\displaystyle \frac{ \mathrm{d}^2 \psi}{ \mathrm{d} x^{2}}=\frac{2m}{\hbar}[V(x)-E]\psi$
