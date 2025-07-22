#Math 
## Number elements in tensor $\displaystyle =\mathrm{dimension^{rank}}$
* E.g. the 3D stress tensor is a rank $2$ tensor and has $3^2$ components. Likewise, vectors in 3D are rank $1$ tensors and have $3^1$ components
* Tensor rank is the number of subscripts needed to specify an element (need to check this)
* A tensor's dimension is the space the tensor lives in (need to check this)
## $T_{ij}'=R_{ik}R_{jk}T_{kl}$
* Describes how a rank 2 tensor transforms under two rotations
* Symmetric:
	* $T_{ij}=T_{ji}$
* Antisymmetric:
	* $T_{ij}=-T_{ji}$
## Tensor Definition
* [Best overview video explanation](https://www.youtube.com/watch?v=bpG3gqDM80w)
* Best contravariant/covariant explanation: https://www.youtube.com/watch?v=CliW7kSxxWU
* Tensor explanation 1: https://www.youtube.com/watch?v=7c8Agf9qtfI
* Tensor explanation 2: https://www.youtube.com/watch?v=ztUHlZftPlo
* Tensor explanation 3: https://www.youtube.com/watch?v=nNMY02udkHw
* A rank $n$ tensor in $m$ dimensional space has $n$ indicies (or coordinates), $m^n$ components, and transforms as described by a generalized version of the above transformation rule
* E.g. the 3D stress tensor is a rank $2$ tensor and has $3^2$ components. Likewise, vectors in 3D are rank $1$ tensors and have $3^1$ components
* Superscript represents column vectors:
$$T^i = (T^i)_{i = 1, 2, 3} = 
\begin{bmatrix}
T^1\\
T^2\\
T^3
\end{bmatrix}$$
Subscript represents row vectors:
$$T_{i} = (T_i)_{i = 1, 2, 3} = \begin{bmatrix}
T_1 & T_2 & T_3
\end{bmatrix}$$

|                                  | Contravariant Components                                                                                  | Covariant Components                                                                                                                                                                                                      |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                  |                                                                                                           |                                                                                                                                                                                                                           |
| As basis vector length increases | Tensor components decrease                                                                                | Tensor components increase                                                                                                                                                                                                |
| Script                           | Superscript                                                                                               | Subscript                                                                                                                                                                                                                 |
| Assuming:                        | $\vec v = \left(\frac{\partial x^1}{dt}, \frac{\partial x^2}{dt}, \ldots, \frac{\partial x^n}{dt}\right)$ | $\vec \nabla F = (u_1, u_2, \ldots, u_n), u_i = \frac{\partial F}{\partial x^i}$                                                                                                                                          |
| Transformation                   | $\bar v^i = v^r\frac{\partial \bar x^i}{\partial x^r}$                                                    | $\bar u_i = u_r\frac{\partial x^r}{\partial\bar x^i}$, where $u$ is a covariant first rank tensor in the that transforms from $u_i$ in the $(x^i)$ coordinate system  to $\bar u_i$ in the $(\bar x^i)$ coordinate system |
| Projection                       | Parallel Projection                                                                                       | Perpendicular Projection                                                                                                                                                                                                  |
| Coordinates                      | $\vec a = a^1\hat e_1 + a^2 \hat e_2$                                                                     | $\vec a = a_1\hat e_1 + a_2 \hat e_2$                                                                                                                                                                                     |
| Examples                         | Position, velocity, acceleration, etc.                                                                    | Gradient of scalar function                                                                                                                                                                                               |
