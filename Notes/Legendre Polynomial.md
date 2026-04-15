#Math 
The orthogonal basis set for [[spherical coordinates]]
## $\displaystyle P_{l}(x)\equiv  \frac{1}{2^{l}l!}\left( \frac{\mathrm{d} }{ \mathrm{d}x} \right)^{l}(x^{2}-1)^{l}$
* One use it to calculate the [[associated Legendre polynomial]]
## $\displaystyle \int_{-1}^{1} P_{n}(x)P_{m}(x) \, \mathrm{d}x=\frac{2}{2n+1}\delta_{nm}(x)$
* Orthogonality condition of Legendre polynomials
* $\displaystyle \delta_{nm}$ is the [[Kronecker Delta]]
## $\displaystyle P_{l}(-x)=(-1)^{l}P_{l}(x)$
* Even $\displaystyle l$ corresponds to even functions, odd $\displaystyle l$ corresponds to odd functions
## $\displaystyle \text{d}_{\theta}(\sin \theta \text{d}_{_{\theta}}\Theta)=-l(l+1)\sin (\theta) \Theta$
* Differential equation that the Legendre polynomial solves for
## $\displaystyle \Theta(\theta)=P_{l}(\cos \theta)$
## Example Values
```mathematica
TableForm[Simplify[Table[D[(x^2 - 1)^l, {x, l}]/(2^l*l!), {l, 0, 4}]]]
TableForm[Simplify[Table[LegendreP[l,x],{l,0,4}]]] (*Same but compact*)
```

| Legendre Polynomial | Value |
| ---- | ---- |
| $\displaystyle P_{l}(x)$ | $\displaystyle 1$ |
| $\displaystyle P_{1}(x)$ | $\displaystyle x$ |
| $\displaystyle P_{2}(x)$ | $\displaystyle \frac{1}{2}(3x^{2}-1)$ |
| $\displaystyle P_{3}(x)$ | $\displaystyle \frac{1}{2}x(5x^{2}-3)$ |
| $\displaystyle P_{4}(x)$ | $\displaystyle \frac{1}{8}(35x^{4}-30x^{2}+3)$ |

