#Math 
## Topics
* [[Scalar Line Integral]]
* [[Vector Line Integral]]
* [[Flux Integral]]

Scalar, Vector, and Flux Integrals
		- $\text{2D Flux:}\int_\mathscr{C}\vec F\cdot\hat n\space ds=\int_{t_0}^{t_f}\vec F(\vec r(t))\cdot \vec N(t)\space dt$
			$\hat n$ is obtained by rotating $\hat t$ by $\frac{\pi}{2}$ clockwise
			$\vec t$ can be simplified to just $\vec r'(t)$
		- $\text{Vortex Field}$
			$\vec F(x,y)=\left\langle-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}\right\rangle \text{ if } (x,y)\ne (0,0)$
			Satisfies the cross-partials condition
			Not conservative on paths encircling the origin
		$\vec G(u,v)=(x(u,v),y(u,v),z(u,v))$
		- $\vec T_u(P)=\frac{\partial \vec G(u,v)}{\partial u},\space \vec T_v(P)=\frac{\partial \vec G(u,v)}{\partial v}$
			$\vec T_u$ points toward increasing $u$, 
			$\vec T_v$ points toward increasing $v$, 
		$\vec N(P)=\vec T_u(P)\times \vec T_v(P)$
		$\vec N_\text{sphere}(\theta,\phi)=\left\langle-\cos\theta\sin^2\phi,-\sin\theta\sin^2\phi,-\cos\phi\sin\phi\right\rangle$
		$(\left\langle x,y,z\right\rangle-\vec G(u,v))\cdot \vec N=0\text{ (Equation for tangent plane)}$
		- $\text{Area}(S)=\int_{v_0}^{v_f}\int_{u_0}^{u_f}||\vec N(u,v)||dudv$
			$\vec N(u,v)$ is the same as $||\vec T_u\times\vec T_v||$, which represents the area of a small paralleleogram on the surface $S$. This representation happens because $||\vec T_u\times\vec T_v||$ is $||\vec T_u||\space||\vec T_v||\sin(\theta)$, where $\theta$ is the angle between the two vectors that make up the parallelogram. $\vec T_u$ for example, is $\frac{\partial \vec G}{\partial u}\Delta u=\vec G(u+\Delta u, v)-\vec G(u,v)=\vec u$
		- $\text{Scalar surface integral:}\iint_Sf(x,y,z)\space dS=\int_{v_0}^{v_f}\int_{u_0}^{u_f}f(\vec G(u,v))||\vec N(u,v)||\space dudv$
			$\iint_CdS=\text{Area}(s)$
			Is akin to scalar line integral in that it is the mass of the surface if $f$ is mass density
		- $\text{Vector surface integral/3D Flux: }\iint_S\vec F\cdot \hat n\space dS=\iint_S\vec F\cdot d\vec S=\int_{v_0}^{v_f}\int_{u_0}^{u_f}\vec F(\vec G(u,v))\cdot \vec N(u,v)\space dudv$
			Physically measures the amount of “stuff” (say electric field or water current) that passes through a surface
			Is akin to the vector line integral and 2D flux, but for surfaces.
			Heuristically, $d\vec S=\vec Ndudv,\space dS=||\vec N||dudv$