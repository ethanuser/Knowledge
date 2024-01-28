---
aliases:
  - Associated Legendre Function
---
#Math 
## $\displaystyle P_{l}^{m}(x)\equiv (-1)^{m}(1-x^{2})^{\frac{m}{2}}\left( \frac{\mathrm{d}  }{\mathrm{d} x}  \right)^{m}P_{l}(x)$
* $\displaystyle P_{l}(x)$ is the $\displaystyle l$th [[Legendre polynomial]]
## $\displaystyle P_{l}^{m}(x)=\frac{(-1)^{m}}{2^{l}l!}(1-x^{2})^{\frac{m}{2}}\left( \frac{\mathrm{d} }{ \mathrm{d}x} \right)^{l+m}(x^{2}-1)^{l}$
* Full form
## $\displaystyle P^{-m}_{l}(x)=(-1)^{m} \frac{(l-m)!}{(l+m)!}P^{m}_{l}(x)$
* For $\displaystyle m\leq 0$, use this rule
## $\displaystyle $
## Example Values
```mathematica
(* Set the maximum values for l and m *)
lMax = 5; (* For example, up to l = 5 *)
mMax = 5; (* For example, up to m = 5 *)

(* Create a list of headers for l and m *)
lHeaders = Prepend[Table[l, {l, 0, lMax}], "l\m"];
mHeaders = Table[m, {m, 0, mMax}];

(* Create the 2D table with associated Legendre polynomials, including the m header *)
assocLegendreTable = Simplify[Table[LegendreP[l, m, x], {l, 0, lMax}, {m, 0, Min[l, mMax]}]];
assocLegendreTableWithHeaders = Prepend[assocLegendreTable, mHeaders];

(* Insert the l headers *)
assocLegendreTableWithHeaders = MapThread[Prepend, {assocLegendreTableWithHeaders, lHeaders}];

(* Use Grid to display the table with headers and grid lines *)
Grid[assocLegendreTableWithHeaders, Frame -> All]
```
![[Pasted image 20240119142832.png]]
