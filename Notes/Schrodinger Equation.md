#Physics #Chemistry
[Universal Danker Video](https://www.youtube.com/watch?v=WcNiA06WNvI)
Non-relativistic and doesn't account for electron spin. The [[Dirac Equation]] accounts for these issues
## Topics
* [[TISE]]
* [[TDSE]]
* [[Wave Function]]
# Solution
## $\displaystyle \Psi(\vec{r},t)=\psi(\vec{r})\phi(t),\phi (t)=e^{-iEt/\hbar}$
* Solved by [[separation of variables]]
* Must be [[square integrable]]
## $\displaystyle \Psi(\vec{r},t)=\sum_{n = 1}^{\infty}c_{n}\psi_{n}(\vec{r})e^{-iE_{n}t/\hbar}$
* A wave function can be the linear combination of a bunch of wave functions, which by [[Fourier's Theorem]], can represent any type of wave function that satisfies the Schrodinger equation
* $\displaystyle \psi_{n}(\vec{r})$ is the time-independent solution for the $\displaystyle n$th wave function
* $\displaystyle c_{n}$ is the [[wave function weighting coefficient]]
* $\displaystyle E_{n}$ is the energy of the $\displaystyle n$th wave function
* Each $\displaystyle \psi_{n}$ is [[orthogonality]] to each other
# How to Solve
Given $\displaystyle V(x)$ and $\displaystyle \Psi(x,0)$, solve $\displaystyle \Psi(x,t)$
1. Solve the [[TISE]] $\displaystyle \hat{H}\psi=E\psi$
	1. $\displaystyle \psi(x)=\sum_{n}c_{n}\psi_{n}(x)$
	2. $\displaystyle c_{n}=\int \psi_{n}^{*}(x)\Psi_{(x,0)} \, \mathrm{d}x$
2. Use $\displaystyle \Psi(x,t)=\sum_{n}c_{n}\psi_{n}(x)e^{-iE_{n}t/\hbar}=\sum_{n = 1}^{\infty}c_{n}\Psi_{n}(x,t)$