---
aliases:
  - Delta-Function Potential
---
#Physics 
## $\displaystyle U(x)=-\alpha \delta(x)$
* $\displaystyle \alpha$ has units of energy times length
* $\displaystyle \delta(x)$ has units of $\displaystyle \frac{1}{L}$
# Bounded: $\displaystyle E<0$
## $$
\psi(x)=\begin{cases}
Be^{kx}, & x\leq 0 \\
Be^{-kx}, & x\geq 0
\end{cases}
$$
* $\displaystyle B=\sqrt{ k }=\frac{\sqrt{ m\alpha }}{\hbar}$
	* Obtained by normalization
* $\displaystyle k\equiv \frac{\sqrt{ -2mE}}{\hbar}=\frac{m\alpha}{\hbar ^{2}}$
	* Unrelated to wavenumber
	* Second equation is obtained by integrating the TISE over a small area around $\displaystyle x=0$
## $\displaystyle E=-\frac{m\alpha ^{2}}{2\hbar ^{2}}$
* Based on unit analysis and normalization
* [Video Explanation](https://youtu.be/vcuY46RwoV0?t=370)

# Scattering: $\displaystyle E>0$
## $$
\psi(x)=\begin{cases}
Ae^{ikx}+Be^{-ikx}, & x<0 \\
Fe^{ikx}+G^{-ikx}, & x>0
\end{cases}
$$
* $\displaystyle \frac{k\equiv\sqrt{ 2mE }}{\hbar}$
* For wave traveling rightward:
	* $\displaystyle G=0$ if the wave travels rightward since there would be no incident wave on the right of the delta potential traveling leftward
	* $\displaystyle F=A(1+2i\beta)-B(1-2i\beta)$
	* $\beta\equiv \frac{m\alpha}{\hbar ^{2}k}=\frac{m\alpha}{\hbar\sqrt{ 2mE }}$
	* $\displaystyle B=\frac{i\beta}{1-i\beta}A$
	* $\displaystyle F=\frac{1}{1-i\beta}A$
	* $\displaystyle R=\frac{\lvert B\rvert^{2}}{\lvert A\rvert^{2}}=\frac{\beta ^{2}}{1+\beta ^{2}}=\frac{1}{1+ \frac{2\hbar ^{2}E}{m\alpha ^{2}}}$
	* $\displaystyle T=\frac{\lvert F\rvert^{2}}{\lvert A\rvert^{2}}=\frac{1}{1+\beta ^{2}}=\frac{1}{1+ \frac{m\alpha ^{2}}{2\hbar ^{2}E}}$
	* Changing delta well to delta barrier doesn't change $\displaystyle R$ and $\displaystyle T$