#Math
## Topics
* [[Multivariable Derivatives]]
* [[Jacobians]]
* [[Vector Integrals]]
* [[Fundamental Theorems of Vector Calculus]]
* [[Harmonic Functions]]


- Multivariable Calculus $\iiint$
	- Derivatives
		$\exists f(x,y)\rightarrow f_x=\frac{\partial f}{\partial x},\space f_y=\frac{\partial f}{\partial y}$
		- $\frac{df}{ds} = \nabla_{\vec u}f=\nabla f\cdot\frac{\vec u}{\Vert\vec u\Vert} = \nabla f \cdot \hat u = |\nabla f|\cos \theta$
			This is the directional derivative of $f$ in the direction of $\vec u$
	- Jacobians
		$$J=\left|\frac{\partial(x, y)}{\partial(u,v)}\right|=
		\begin{vmatrix}
		\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
		\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
		\end{vmatrix}$$
		$\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\left|\frac{\partial(u,v)}{\partial(x,y)}\right|^{-1}$
		$$J=\left|\frac{\partial(x, y, z)}{\partial(u,v,w)}\right|=
		\begin{vmatrix}
		\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\
		\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\
		\frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} 
		\end{vmatrix}$$
		$\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|=\left|\frac{\partial(u,v,w)}{\partial(x,y,z)}\right|^{-1}$
		$J_{\text{polar}}=J_{\text{cylindrical}}=r$
		$x=r\cos \theta, \space y=r\sin \theta, \space z=z$
		$r=\sqrt{x^2+y^2},\space \theta=\tan^{-1}(\frac{y}{x}), \space z=z$
		$J_{\text{spherical}}=\rho^2\sin(\phi)$
		$x=\rho\sin\phi\cos\theta,\space y=\rho\sin\phi\sin\theta,\space z=\rho\cos\phi$
		$\rho=\sqrt{x^2+y^2+z^2},\space \theta=\tan^{-1}(\frac{y}{x}),\space \phi=\cos^{-1}(\frac{z}{\rho})$
	- Mass and Probability
		$M=\text{mass},\space\delta(x,y)=\text{mass density},\space$ 
		$M=\iint_\mathscr{D}\delta(x,y)\space dA$
		$M_y=\iint_\mathscr{D}x\delta(x,y)\space dA\text{ (y-moment)}$
		$M_x=\iint_\mathscr{D}y\delta(x,y)\space dA\text{ (x-moment)}$
		$(\bar x,\bar y)=(\frac{M_y}{M},\frac{M_x}{M})$
		$I_x=\iint_\mathscr{D}x^2\delta(x,y)\space dA\text{ (moment of inertia about x-axis)}$
		$I_y=\iint_\mathscr{D}y^2\delta(x,y)\space dA\text{ (moment of inertia about y-axis)}$
		$I_O=\iint_\mathscr{D}(x^2+y^2)\delta(x,y)\space dA$
		$M=\text{mass},\space\delta(x,y,z)=\text{mass density},\space$ 
		$M=\iiint_\mathscr{W}\delta(x,y,z)\space dV$
		$M_{yz}=\iiint_\mathscr{W}x\delta(x,y,z)\space dV\text{ (yz-moment)}$
		$M_{xz}=\iiint_\mathscr{W}y\delta(x,y,z)\space dV\text{ (xz-moment)}$
		$M_{xy}=\iiint_\mathscr{W}z\delta(x,y,z)\space dV\text{ (xy-moment)}$
		$(\bar x,\bar y,\bar z)=(\frac{M_\text{yz}}{M},\frac{M_\text{xz}}{M},\frac{M_\text{xy}}{M})$
		$I_x=\iiint_\mathscr{W}(y^2+z^2)\delta(x,y,z)\space dV\text{ (moment of inertia about x-axis)}$
		$I_y=\iiint_\mathscr{W}(x^2+z^2)\delta(x,y,z)\space dV\text{ (moment of inertia about y-axis)}$
		$I_z=\iiint_\mathscr{W}(x^2+y^2)\delta(x,y,z)\space dV\text{ (moment of inertia about z-axis)}$
		$I_O=\iiint_\mathscr{W}(x^2+y^2+z^2)\delta(x,y,z)\space dV$
		$P=\text{total probability},\space p_X(x)=\text{probability density function for continuous random variable X}$
		$P=\int_{-\infty}^\infty p_X(x)\space dx=1$
		- $\mathbb{P}[a<X\le b]=\int_a^bp_X(x)\space dx$
			This is the probability that $a<X\le b$
		- $\mathbb{E}[f(X)]=\int_{-\infty}^\infty f(x)p_X(x)\space dx$
			This is the expected value of $f(X)$
			Only applies if $f:\mathbb{R}\rightarrow\mathbb{R}$
		$P=\text{total probability},\space p_{X,Y}(x,y)=\text{probability density function for continuous random variables X and Y}$
		$P=\iint_{-\infty}^\infty p_{X,Y}(x,y)dxdy=1$
		- $\mathbb{P}[(X,Y)\in D]=\iint_Dp_{X,Y}(x,y)dA$
			This is the probability that $(X,Y)\in D$
		- $\mathbb{E}[f(X,Y)]=\iint_{-\infty}^\infty f(x,y)p_{X,Y}(x,y)dxdy$
			This is the expected value of $f(X,Y)$
			Only applies if $f:\mathbb{R}^2\rightarrow\mathbb{R}$
		$p_X(x)=\int_{-\infty}^\infty p_{X,Y}(x,y)dy$
		$p_Y(y)=\int_{-\infty}^\infty p_{X,Y}(x,y)dx$
	- Operations on Vector Fields
		$\nabla=\left\langle \frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right\rangle\text{ (Del operator)}$
		- $\Delta=\nabla^2=\nabla\cdot\nabla=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}\text{ (Laplace operator)}$
			The Laplacian of a function is akin to the second derivative of a function in 1D calculus. However, there is now more than one input. So $\Delta f=\nabla\cdot(\nabla f)$, which is the divergence of the gradient of $f$. So more positive $\Delta f$ corresponds to minima while more negative $\Delta f$ corresponds to maxima.
			3Blue1Brown video that explains the intuition of the Laplacian:
			https://www.youtube.com/watch?v=EW08rD-GFh0
		- $$\nabla f(x,y,z)=\begin{bmatrix}
		\frac{\partial f}{\partial x}\\
		\frac{\partial f}{\partial y}\\
		\frac{\partial f}{\partial z}
		\end{bmatrix}=\vec F,\text{ which is a vector field (not the same as a vector)}$$
			The gradient of a scalar field evaluated at a point gives a vector that points toward greatest increase of the scalar field
		$$\text{div}(\vec F)=\nabla\cdot\vec F=\frac{\partial f}{\partial x}+
		\frac{\partial f}{\partial y}+
		\frac{\partial f}{\partial z}$$
		$$\text{curl}(\vec F)=\nabla\times\vec F=\begin{vmatrix}
		\hat i&\hat j&\hat k\\
		\frac{\partial f}{\partial x}&\frac{\partial f}{\partial y}&\frac{\partial f}{\partial z}\\
		F_1&F_2&F_3
		\end{vmatrix}\\=(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z})\hat i+(\frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x})\hat j+(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y})\hat k$$
		- $\vec F\text{ is conservative in 2D }\rightarrow \frac{\partial F_1}{\partial y}=\frac{\partial F_2}{\partial x}$
			This statement is biconditional if $F$ is on a simply connected domain (no holes)
		- $\vec F\text{ is conservative in 3D}\rightarrow\nabla\times F=0$
			This statement is biconditional if $\vec F$ is on a simply connected domain (no holes that prevent any choice of a closed curve from being stretched and deformed to a point without leaving the domain)
	- Fundamental Theorems of Vector Analysis
		Intuition: https://www.youtube.com/watch?v=hJD8ywGrXks
		- $\text{Green's Theorem:}\iint_\mathscr{D}\text{curl}_z(\vec F)\space dA=\oint_\mathscr{C}\vec F\cdot d\vec r$
			$\text{curl}_z(\vec F(x,y))=\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}$. It is the z-component of the curl of $F$ 
			$\mathscr{C}$ is the boundary of $\mathscr{D}$ oriented positively, or “going counter clockwise”
			The intuition is that $\mathscr{C}$ is a closed curve going counter clockwise, and $\text{curl}_z(\vec F)$ represents the amount of counter clockwise rotation around a point. The total “alignment” between the vector field $\vec F$ and the counter clockwise boundary $\mathscr{C}$ can be obtained by summing up the curls of all the points within our boundary. This idea is explained in this video:
			https://www.youtube.com/watch?v=8SwKD5_VL5o
		- $\text{Green's Theorem (flux form): }\iint_D\text{div}(\vec F)\space dA=\oint_{\partial D}\vec F\cdot\hat n\space ds=\displaystyle\sum_{n=1}^N\oint_{\mathscr{C}_n}\vec F\cdot\hat n\space ds$
			The intuition is that the amount of stuff (e.g. fluid) represented by $\vec F$ leaving a point is represented by $\text{div}(F)$. The total amount of fluid leaving an entire domain would thus be the sum of divergences of all points within the domain and also the flux integral about the path of the domain’s boundary.
		- $\text{Mean value property: }f(x,y)\text{ is harmonic}\rightarrow\forall(x,y)\in \mathscr{D},f(x,y)=\frac{1}{\text{perimeter}}\oint_{\partial \mathscr{D}}f(x,y)\space ds$
			A function is harmonic iff $\Delta f=0$
			This essentially states that if a function is harmonic, the value of the function within any domain is equal to the average value of the domain’s perimeter.
		- $\iint_\mathscr{D}f\text{ div}(\vec F)\space dA=\oint_{\partial\mathscr{D}}f\space \vec F\cdot\hat n\space ds-\iint_\mathscr{D}\nabla f\cdot \vec F\space dA$
			Analagous to integration by parts in 1D, but for 2D vectors
			$\int_a^bf(x)g'(x)\space dx=[f(x)g(x)]_{x=a}^{x=b}-\int_a^bf'(x)g(x)\space dx$
		- $\iint_\mathscr{D}f\space \Delta g\space dA=\oint_{\partial \mathscr{D}}f\space\nabla g\cdot\hat n\space ds-\iint_\mathscr{D}\nabla f\cdot\nabla g\space dA$
			Also called Green’s Formula
			Another form of integration by parts in 2D.
			Proof: Take $\vec F=\nabla g$ and apply integration by parts in 2D
		- $\text{Stoke's Theorem: }\iint_S\text{curl}(\vec F)\cdot d\vec S=\oint_{\partial S}\vec F\cdot  d\vec r=\int_{u_0}^{u_f}\int_{v_0}^{v_f}\text{curl}(\vec F(\vec G(u,v)))\cdot \vec N(u,v)\space dvdu$
			Is like Green’s Theorem, but for 2D surfaces in 3D space.
			$\partial S$ is the positively oriented boundary of $S$, meaning you apply the right hand rule such that if the normal points out of the surface, the thumb points toward the surface while the curled fingers dictate the positive orientation of $\partial S$. Another way of viewing this is to imaging you are on the boundary with your body pointing upright in the same direction as the normal. If you follow the direction of $\partial S$, then your right foot should be closer to off the edge of the boundary
		- $\oint_S\text{curl}(\vec F)\cdot\vec{dS}=0$
			States that the curl of a function over a closed surface is $0$.
		$\vec F\text{ has a vector potential  }\leftarrow\vec F=\text{curl}(A)\rightarrow\text{div}(A)=0$
		$\text{curl}(\nabla f)=0,\space \text{div(curl }\vec F))=0$
		- $\text{Divergence Theorem: }\iiint_\mathscr{W}\text{div}(\vec F)\space dV=\oint_S\vec F\cdot d\vec S$
			Also called Gauss’s Theorem
			Like 3D version of Stoke’s Theorem, where $S$ is a positively oriented boundary of $W$. That essentially means the normal of $S$ points outward.
		- $\iiint_\mathscr{W}f\space \text{div}(\vec F)\space dV=\oint_{\partial \mathscr{W}}f\space\vec F\cdot d\vec S-\iiint_\mathscr{W}\nabla f\cdot \vec F\space dV$
			Integration by parts in 3D
			Proof: apply product rule to $\iiint_\mathscr{W}\text{div}(f\textbf{F})\space dV=\oint_{\partial\mathscr{W}}f\textbf{F}\cdot dS$
		- $\iiint_\mathscr{W}f\Delta g\space dV=\oint_{\partial\mathscr{W}}f\space\nabla g\cdot dS-\iiint_\mathscr{W}\nabla f\cdot\nabla g\space dV$
			Take $\textbf{F}=\nabla g$
