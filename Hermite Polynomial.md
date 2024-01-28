---
aliases:
  - Hermite Polynomials
---
#Math 
Hermite polynomials are used for solution of the [[QHO]]
## $\displaystyle H_{n}(\xi)=(-1)^{n}e^{\xi^{2}}\left( \frac{ \mathrm{d} }{ \mathrm{d}\xi } \right)^{n}e^{-\xi^{2}}$
* This formula is the Rodrigues formula
* Expands to $\displaystyle n$th order polynomials due to cancellations of $\displaystyle e^{\xi^{2}}$ with $\displaystyle e^{-\xi^{2}}$
* Example:
* $\displaystyle H_{1}(\xi)=(-1)^{1}e^{\xi^{2}}\frac{ \partial  }{ \partial \xi }e^{-\xi^{2}}=-1\cdot e^{\xi^{2}}(-2\xi e^{-\xi^{2}})=2\xi$
## $\displaystyle H_{n}(\xi)=\sum_{j = 0}^{\infty}a_{j}X^{j},a_{j+2}=\frac{2j-k+1}{(j+1)(j+2)}a_{j}$
* Power series/recurrence relation representation of the above equation
## $\displaystyle H_{n}(z)=\frac{n!}{2\pi i}\oint e^{-t^{2}+2tz}t^{-n-1}\mathrm{d}t$
* Contour integral definition
* [Wolfram article](https://mathworld.wolfram.com/HermitePolynomial.html)
## Example Values
```Mathematica
TableForm[Table[Simplify[(-1)^n*E^\[Xi]^2*D[E^(-\[Xi]^2), {\[Xi], n}]], {n, 4}]] (* 1st Version*)
TableForm[Table[Simplify[HermiteH[n,\[Xi]]],{n,4}]] (* Mathematica version*)
```

| Hermite Polynomial         | Value                             |
| -------------------------- | --------------------------------- |
| $\displaystyle H_{0}(\xi)$ | $\displaystyle 1$                 |
| $\displaystyle H_{1}(\xi)$ | $\displaystyle 2\xi$              |
| $\displaystyle H_{2}(\xi)$ | $\displaystyle 4\xi ^{2}-2$       |
| $\displaystyle H_{3}(\xi)$ | $\displaystyle 4\xi(2\xi ^{2}-3)$ |
| $\displaystyle H_{4}(\xi)$ | $\displaystyle 4(4\xi^{4}-12\xi ^{2}+3)$                                  |

