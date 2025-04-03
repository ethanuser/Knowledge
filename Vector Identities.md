---
aliases:
  - Products with Vectors
---
#Math 
## Topics
* [[Dot Product]]
* [[Cross Product]]
* [[Outer Product]]
* [[Double Product]]
* [[Hadamard Product]]
* [[Vector Triple Product]]
* [[Kronecker Product]]
* [[Triple Product]]
* [[Poisson's Equation]]
# Geometric Algebra
| Product Type | Notation     | Returns           | Example                     | $=$                          | Priority in Order of Operations |
| ------------ | ------------ | ----------------- | --------------------------- | ---------------------------- | ------------------------------- |
| Dot          | $a \cdot b$  | Scalar            | $(1,2) \cdot (2,3)$         | $8$                          | 1                               |
| Cross        | $a \times b$ | Vector            | $(1,2, 3) \times (4, 5, 6)$ | $(-3,6,-3)$                  | 2                               |
| Complex      | $Z * W$      | Complex           | $(1-2i)(3+4i)$              | $11-2i$                      | N/A                             |
| Wedge        | $a \wedge b$ | Bivector          | $e_1 \wedge e_2$            | $-e_2 \wedge e_1 = e_1e_2$   | 2                               |
| Geometric    | $ab$         | Scalar + Bivector | $(e_1+e_2)e_2$              | $e_1e_2+e_2e_2 = e_1e_2 + 1$ | 3                               |
# Formulas
## $\displaystyle \nabla (fg)=f\nabla g+g\nabla f$
* $\displaystyle f$ and $\displaystyle g$ are scalar fields
## $\displaystyle \nabla (\vec{A}\cdot \vec{B})=\vec{A}\times (\nabla \times \vec{B})+\vec{B}\times (\nabla \times \vec{A})+(\vec{A}\cdot \nabla )\vec{B}+(\vec{B}\cdot \nabla )\vec{A}$
* $\displaystyle \vec{A}$ and $\displaystyle \vec{B}$ are vector fields
## $\displaystyle \nabla \cdot f\vec{A}=f(\nabla \cdot \vec{A})+\vec{A}\cdot \nabla f$
## $\displaystyle \nabla \cdot (\vec{A}\times \vec{B})=\vec{B}\cdot (\nabla \times \vec{A})-\vec{A}\cdot (\nabla \times \vec{B})$
## $\displaystyle \nabla \times f\vec{A}=f(\nabla \times \vec{A})-\vec{A}\times \nabla f$
## $\displaystyle \nabla \times(\nabla V)=0$
* $\displaystyle V$ is a scalar field
* Curl of the gradient of a scalar field is 0
* Given by equality of mixed partials (e.g. $\displaystyle \partial_{x}\partial_{y}V-\partial_{y}\partial_{x}V=0$)
## $\displaystyle \nabla \times (\nabla \times \vec{A})=\nabla (\nabla \cdot \vec{A})-\nabla ^{2} \vec{A}$
* Gradient of divergence - divergence of gradient
* GDDG, gold diggers dig gold
## $\displaystyle \vec{A}\cdot (\vec{B}\times \vec{C})=\vec{B}\cdot (\vec{C}\times  \vec{A})=\vec{C}\cdot (\vec{A}\times \vec{B})$
