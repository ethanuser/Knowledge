---
aliases:
  - Dirac Notation
---
#Physics 
[Universal Danker](https://www.youtube.com/watch?v=mAZSmzv_asU)

## $$
\ket{\Psi} =
\begin{bmatrix}
\Psi(x_{1}) \\
\Psi(x_{2}) \\
\Psi(x_{3}) \\
\vdots 
\end{bmatrix}
$$
* Called "ket"
* Basically a regular vector
## $$
\bra{\Psi} =(\ket{\Psi} ^{\top})^{*}=
\begin{bmatrix}
\Psi(x_{1})^{*} & \Psi(x_{2})^{*} & \Psi(x_{3})^{*} & \ldots & 
\end{bmatrix}
$$
* The bra of a wave function is the complex conjugate of the transpose of the ket of the wave function. Transposing and complex conjugating are commutative operations
## $\displaystyle \braket{ \Phi | \Psi }=\phi^{*}_{i}\Psi_{i}=\int \Phi^{*}(x)\Psi(x) \, \mathrm{d}x$
* [[Dot Product]]
* Measures how much two [[Wave Function|wave functions]] overlap
* "Bra" can be thought of as a linear operator on ket, or $\displaystyle \bra{f}(\ket{g})=\int f^{*}g \, \mathrm{d}x$ when taking the dot product
* The set of all bras is a [[dual space]]
## $$
\ket{\Phi}\bra{\Psi}= \ket{\Phi}\otimes\bra{\Psi}=
\begin{bmatrix}
{\Phi}_{1}{\Psi}_{1}^{*} & {\Phi}_{1}{\Psi}_{2}^{*} & {\Phi}_{1}{\Psi}_{3}^{*}  & \ldots  \\
{\Phi}_{2}{\Psi}_{1}^{*} & {\Phi}_{2}{\Psi}_{2}^{*} & {\Phi}_{2}{\Psi}_{3}^{*}  & \ddots  \\
{\Phi}_{3}{\Psi}_{1}^{*} & {\Phi}_{3}{\Psi}_{2}^{*} & {\Phi}_{3}{\Psi}_{3}^{*} & \ddots  \\
\vdots  & \ddots  & \ddots  & \ddots 
\end{bmatrix}
$$
* [[Outer product]] of two wave functions
## $\displaystyle \ket{\Psi}\braket{ \Psi | \Phi }=\text{proj}_{\Psi}\Phi$
* For normalized wave functions, the outer product of a wave function $\displaystyle \Psi$ with itself enacted on another wave function $\displaystyle \Phi$ gives the projection of $\displaystyle \Phi$ onto $\displaystyle \Psi$
# Discrete
## $\displaystyle \sum_{i}\ket{e_{n}}\bra{e_{n}}=I$
* The sum of projection matrices for each dimension $\displaystyle n$ is the identity matrix

## $\displaystyle \ket{\Phi}=\sum_{i}\ket{\Psi_{i}}\braket{ \Psi_{i} | \Phi }$
* Change of basis of $\displaystyle \Phi$ in $\displaystyle \left\{ \ket{\Phi_{i}} \right\}$ to $\displaystyle \left\{ \ket{\Psi_{i}} \right\}$ is the sum of projections of $\displaystyle \Phi$ onto $\displaystyle \Psi_{i}$ for finitely many components
# Continuous
## $\displaystyle \int \ket{e_{z}}\bra{e_{z}} \, \mathrm{d}x=1$
## $\displaystyle \ket{\Phi}=\int \ket{\Psi}\braket{ \Psi | \Phi } \, \mathrm{d}x$
* Change of basis for infinitely-many components