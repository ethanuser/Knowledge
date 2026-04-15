#Physics 
## $$
U(x)=\begin{cases}
-U_{0}, & -a\leq x\leq a \\
0, & |x|>a
\end{cases}
$$
* $\displaystyle U_{0}>0$
# Bounded: $\displaystyle U_{0}<E<0$
## $$
\psi(x)=\begin{cases}
Ae^{kx}, & x\leq a \\
C\sin(lx)+D\cos(lx), & \lvert x\rvert \leq a\\

Be^{-kx}, & x\geq a
\end{cases}
$$
* For even solutions, $\displaystyle A=B$ and $\displaystyle C=0$
* For odd solutions, $\displaystyle A=-B$ and $\displaystyle D=0$
* $\displaystyle k=\frac{\sqrt{ -2mE }}{\hbar}$
* $\displaystyle l=\frac{\sqrt{ 2m(E+U_{0}) }}{\hbar}$
## $\displaystyle \tan z=\sqrt{ \left( \frac{z_{0}}{z} \right)^{2}-1 }$
* Even solutions to finite square well
* $\displaystyle z=la$
* $\displaystyle z_{0}=\frac{\sqrt{ 2mU_{0} }}{\hbar}a$
	* As $\displaystyle z_{0}\rightarrow \infty$ ($\displaystyle U_{0}\lor a\rightarrow \infty$, so deep wide well), the number of energy states $\displaystyle \rightarrow\infty$
	* As $\displaystyle z_{0}\rightarrow0$, the number of energy states $\displaystyle \rightarrow 1$
* [Desmos Demo](https://www.desmos.com/calculator/gx1vk940sn)
## $\displaystyle -\cot z=\sqrt{ \left( \frac{z_{0}}{z} \right)^{2}-1 }$
* Odd solutions to finite square well
## $\displaystyle E_{n}=\frac{n^{2}\pi ^{2}\hbar ^{2}}{8ma^{2}}-U_{0}$
# Scattering: $\displaystyle E>0$
## $$
\psi(x)=\begin{cases}
Ae^{ikx}+Be^{-ikx}, & x<-a \\
C\sin(lx)+D\cos(lx), & \lvert x\rvert <a\\
Fe^{ikx}+G^{-ikx}, & x>a
\end{cases}
$$
* $\displaystyle k=\frac{\sqrt{ 2mE }}{\hbar}$
* $\displaystyle l=\frac{\sqrt{ 2m(E+U_{0}) }}{\hbar}$
* For wave traveling rightward:
	* $\displaystyle G=0$
	* $\displaystyle T=\frac{\lvert F\rvert^{2}}{\lvert A\rvert^{2}}=\left[ 1+\frac{U_{0}^{2}}{4E(E+U_{0})} \sin^{2}\left( \frac{2a}{\hbar}\sqrt{ 2m(E+U_{0}) } \right)\right]^{-1}$
		* $\displaystyle T$ here is the [[transmission coefficient]]
		* When $\displaystyle E=\frac{n^{2}\pi ^{2}\hbar ^{2}}{8ma^{2}}-U_{0}$, $\displaystyle T=1$. I.e., when the energy matches that of an infinite square well, transmission probability is 100%