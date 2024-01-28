#Math 
## Topics
* [[Dot Product]]
* [[Cross Product]]
* [[Triple Product]]
# Geometric Algebra
| Product Type | Notation     | Returns           | Example                     | $=$                          | Priority in Order of Operations |
| ------------ | ------------ | ----------------- | --------------------------- | ---------------------------- | ------------------------------- |
| Dot          | $a \cdot b$  | Scalar            | $(1,2) \cdot (2,3)$         | $8$                          | 1                               |
| Cross        | $a \times b$ | Vector            | $(1,2, 3) \times (4, 5, 6)$ | $(-3,6,-3)$                  | 2                               |
| Complex      | $Z * W$      | Complex           | $(1-2i)(3+4i)$              | $11-2i$                      | N/A                             |
| Wedge        | $a \wedge b$ | Bivector          | $e_1 \wedge e_2$            | $-e_2 \wedge e_1 = e_1e_2$   | 2                               |
| Geometric    | $ab$         | Scalar + Bivector | $(e_1+e_2)e_2$              | $e_1e_2+e_2e_2 = e_1e_2 + 1$ | 3                               |
# Formulas
## $\displaystyle \nabla \times f\vec{A}=f(\nabla \times \vec{A})-(\vec{A}\times \nabla f)$
* $\displaystyle f$ is a scalar field
* $\displaystyle \vec{A}$ is a vector field
## $\displaystyle \nabla \times(\nabla V)=0$
* $\displaystyle V$ is a scalar field
* Curl of the gradient of a scalar field is 0