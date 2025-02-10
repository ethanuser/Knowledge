---
aliases:
  - Boost Transformation
---
#Physics
[Blog explaining hyperbolic trig functions](https://www.physicslog.com/blog/2019/03/lorentz-hyperbolic-rotation/)
## $x'=\gamma(x-ut)$
* The Lorentz-transformed $x$-coordinate $x'$ in $S'$ of $x$ in $S$
* $u$ is the velocity of $S'$ relative to $S$
## $t'=\gamma(t-\frac{ux}{c^2})$
* The Lorentz-transformed time $t'$ in $S'$ of $t$ in $S$
* $t$ and $x$ are native to $S$
## $v'_x=\frac{v_x-u}{1-\frac{uv_x}{c^2}}$
## $\displaystyle v_{AC}=\frac{v_{AB}+v_{BC}}{1+\left( \frac{v_{AB}v_{BC}}{c^{2}} \right)}$
* Einstein's velocity addition rule
* $\displaystyle v_{AB}$ is the speed of object $\displaystyle A$ relative object $\displaystyle B$
## $$\begin{bmatrix}
t'\\
x'\\
y'\\
z'
\end{bmatrix} =
\begin{bmatrix}
\gamma & -\gamma\beta & 0 & 0\\
-\gamma\beta & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
t\\
x\\
y\\
z
\end{bmatrix} = 
\begin{bmatrix}
\cosh \theta & -\sinh \theta & 0 & 0\\
-\sinh \theta & \cosh \theta & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
t\\
x\\
y\\
z
\end{bmatrix}$$
* $\beta = \frac{v}{c}$
* $\gamma = \frac{1}{\sqrt{1 - \beta^2}} = \cosh \theta$
* $\gamma\beta = \sinh \theta$
* The matrix may be called $\displaystyle \Lambda$
## $\displaystyle \bar{x}=\Lambda^{\mu}_{\nu}x^{\nu}$
* Concise [[Einstein notation]] form of the above equation
* The superscript represents row, subscript represents column
## $s^2 = (ct)^2 - \vec r^2$
* $s$ is the preserved interval for Lorentz Transformations
## $\vec r = (x, y, z)$
## $$g_\text{Euclidean} = \begin{bmatrix}
		1 & 0 & 0\\
		0 & 1 & 0\\
		0 & 0 & 1
		\end{bmatrix}$$
* 
## $$g_\text{hyperbolic} = \begin{bmatrix}
		1 & 0 & 0 & 0\\
		0 & -1 & 0 & 0\\
		0 & 0 & -1 & 0\\
		0 & 0 & 0 & -1
		\end{bmatrix}$$
## $$g_\text{minkowski} = \begin{bmatrix}
		-1 & 0 & 0 & 0\\
		0 & 1 & 0 & 0\\
		0 & 0 & 1 & 0\\
		0 & 0 & 0 & 1
		\end{bmatrix}$$
## $$s^2 = \begin{bmatrix}
		ct & x & y & z
		\end{bmatrix} g_\text{hyperbolic}
		\begin{bmatrix}
		ct\\
		x\\
		y\\
		z
		\end{bmatrix} = (ct)^2 - (x^2 + y^2 + z^2)$$
* 
## $$\phi = \begin{bmatrix}
		\omega / c & k_x & k_y & k_z
		\end{bmatrix} g_\text{hyperbolic}
		\begin{bmatrix}
		ct\\
		x\\
		y\\
		z
		\end{bmatrix} = \omega t - \vec k \cdot \vec r$$
* 
## $$k = \begin{bmatrix}
			\omega / c, k_x, k_y, k_z
			\end{bmatrix}$$
* 