---
aliases: []
---
#Physics 
## Topics
* [[Linear Operators]]
* [[Commutators]]
* [[Generalized Ehrenfest Theorem]]
## Types
* [[Position Operator]]
* [[Momentum Operator]]
* [[Ladder Operators]]
* [[Kinetic Energy Operator]]
* [[Potential Energy Operator]]
* [[Spin Operator]]
* [[Angular Momentum Operator]]
# Properties
* Some operators are non-commutative
## $\displaystyle {\left\langle{A}\right\rangle}=\int \Psi^{*}\hat{A}\Psi \, \mathrm{d}x=\bra{\Psi}\hat{A}\ket{\Psi}$
## $\displaystyle {\left\langle{Q}\right\rangle}=\sum_{n}q_{n}\lvert c_{n}\rvert^{2}=\sum c_{m}^{*}c_{n}\braket{ m |\hat{Q}|n  }$
* Average of a quantum operator equals the weighted sum of all possible eigenvalues
* $\displaystyle \lvert c_{n}\rvert^{2}$ is the probability of measuring $\displaystyle q_{n}$ as an eigenvalue
## $$
{\left\langle{Q(x,p,t)}\right\rangle}=\begin{cases}
\int \Psi^{*}\hat{Q}\left( x,-i\hbar \frac{ \partial  }{ \partial x } ,t \right)\Psi \, \mathrm{d}x, & \text{in position space;}  \\
\int \Phi^{*}\hat{Q}\left( i\hbar \frac{ \partial  }{ \partial p } ,p,t \right)\Phi \, \mathrm{d}p, & \text{in momentum space}
\end{cases}
$$