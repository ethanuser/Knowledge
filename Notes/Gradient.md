#Math 
## $\displaystyle \nabla f:\text{scalar}\rightarrow \text{vector}=\partial_{i}f_{i}e_{i}$
* Can be thought of as the vector pointing to the direction which would lead to fastest ascent/increase of $\displaystyle f$
* If $\displaystyle f$ takes in any input and outputs a scalar output, then $\displaystyle \nabla f$'s codomain is in $\displaystyle \mathbb{R}^{n}$
* $\displaystyle \lvert \nabla f\rvert$  is the magnitude of the slope along the direction of fastest ascent
* $\displaystyle \nabla$ is the [[del]] operator
## $\displaystyle \nabla \vec{F}:\text{vector}\rightarrow \text{tensor}=\partial_{i}F_{j}$
* Decompose into
	* [[Trace]] of matrix is divergence/how volume changes
	* Anti-symmetric tensor is curl/how rotation changes without volume or shape change
	* Traceless symmetric tensor is shear/how deformation occurs without volume change
## $\displaystyle (\nabla _{A}f(A))_{ij}=\partial_{A_{ij}}f(A)$
* Gradient of a function $\displaystyle f:\mathbb{R}^{n\times m}\rightarrow \mathbb{R}$ with respect to the input $\displaystyle A$
## $\displaystyle f(x,y)_{\perp}=\nabla (f(x,y)-z)$
* The normal vector to a multivariable function which may represent a surface can be found by taking the gradient of (the function - an extra dimensional variable)
* [Desmos Demo](https://www.desmos.com/3d/934794e269)
# Properties
## $\displaystyle \nabla(kf)=k\nabla f$
* $\displaystyle k$ is a scalar
* $\displaystyle f$ is a function
## $\displaystyle \nabla(fg)=f\nabla g+g\nabla f$