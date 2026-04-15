---
aliases:
  - Boxcar Window
  - Dirichlet Window
  - Unit Box
---
#Math 
## $$
\text{rect}(t)=\begin{cases}
1, & \lvert t\rvert\leq \frac{1}{2} \\
0, & \text{else}
\end{cases}
$$
## $$
\text{rect}_{\Delta}(t)=\begin{cases}
\frac{1}{\Delta}, & \lvert t\rvert\leq \frac{\Delta}{2} \\
0, & \text{otherwise}
\end{cases}
$$
* $\displaystyle \Delta$ is the rectangle width
## $\displaystyle \mathcal{F}[\text{rect}(t/T)]=T\text{ sinc}(\omega T /2\omega)$
* [[Fourier Transform]] of rect function is [[Sinc Function]]
* 