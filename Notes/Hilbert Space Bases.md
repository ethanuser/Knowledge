#Physics 
## $\displaystyle \Psi (x,t)=\braket{ x | \mathcal{S}(t) }$
* The wave function is the $\displaystyle x$ component of $\displaystyle \ket{\mathcal{S}(t)}$ in the basis of position eigenfunctions
* Analogous to $\displaystyle v_{1}=e_{1}\vec{v}$
## $\displaystyle \Phi(p,t)=\braket{ p | \mathcal{S}(t) }$
## $\displaystyle c_{n}(t)(t)=\braket{ n | \mathcal{S}(t) }$
## $\displaystyle \ket{\mathcal{S}(t)}\rightarrow\int \Psi(y,t)\delta(x-y) \, \mathrm{d}y=\frac{1}{\sqrt{ 2\pi \hbar }}\int \Phi(p,t)e^{ipx/\hbar} \, \mathrm{d}p=\sum c_{n}\psi_{n}(x)e^{-iE_{n}t/\hbar}$
* Different representations of $\displaystyle \ket{\mathcal{S(t)}}$ in different bases
## $$
\begin{align}
\ket{S(t)} &= \int \ket{x} \braket{ x | \mathcal{S}(t) }  \, \mathrm{d}x\equiv \int \Psi(x,t)\ket{x}  \, \mathrm{d}x \\
&=\int \ket{p} \braket{ p | \mathcal{S}(t) }  \, \mathrm{d}p\,\equiv    \int \Phi(p,t)\ket{p}  \, \mathrm{d}p \\
&=\sum_{n}\ket{n} \braket{ n | \mathcal{S(t)} }\,\,\,\equiv \sum c_{n}(t)\ket{n} 
\end{align}
$$
* State vector in position, momentum, and energy bases