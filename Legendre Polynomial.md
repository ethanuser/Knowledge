#Math 
## $\displaystyle P_{l}(x)\equiv  \frac{1}{2^{l}l!}\left( \frac{\mathrm{d} }{ \mathrm{d}x} \right)^{l}(x^{2}-1)^{l}$
* One use it to calculate the [[associated Legendre polynomial]]
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

