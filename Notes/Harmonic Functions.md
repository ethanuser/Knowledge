#Math 
Functions that solve [[Laplace's equation]] and also satisfy the [[mean value property]]
# 1D
## $\displaystyle \partial_{x}V=0$
## $\displaystyle V=mx+b$
* General solution
# 2D
Has no local extrema. Intuitively, it's a surface that minimizes surface area while still meeting the boundary conditions much like the line solution in 1D. A ball would also always roll off the edge without finding a spot to rest
![[Pasted image 20240205165128.png]]
## $\displaystyle \partial_{x}V+\partial_{y}V=0$
# 3D
## $\displaystyle V(r,\theta)=\sum_{l = 0}^{\infty}\left( A_{l}r^{l}+\frac{B_{l}}{r^{l+1}} \right)P_{l}(\cos \theta)$
* General solution to [[Laplace's equation]] in [[spherical coordinates]]
* $\displaystyle P_{l}$ is the [[Legendre polynomial]]
## $\displaystyle A_{l}=\frac{1}{2{\varepsilon}_{0}R^{l-1}}\int_{0}^{\pi} {\sigma}_{0}(\theta)P_{l}(\cos \theta) \sin \theta\, \mathrm{d}\theta$
## $\displaystyle V(s,\phi)=a_{0}+b_{0}\ln s+\sum_{k = 1}^{\infty}[s^{k}(a_{k}\cos k\phi+b_{k}\sin k\phi)+s^{-k}(c_{k}\cos k\phi+d_{k}\sin k\phi)]$
* General solution to [[Laplace's equation]] in [[cylindrical coordinates]]