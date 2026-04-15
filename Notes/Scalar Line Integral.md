#Math 
## $\displaystyle \int_\mathscr{C}f(x,y,z)\space ds=\int^{t_f}_{t_0}f(\vec r(t))||\vec r'(t)||\space dt$
* If $f$ represents mass density and $ds$ represents some infinitesimal length of the curve, the scalar line integral would represent the mass of the curve segment
* Might involve finding a parameterization of $f$ in terms of $t$
* Ex: What is the mass of a wire represented by the curve $y=x^3,\{0\le x\le 1\}\text{ (cm)}$ if its mass density is represented by $f(x,y)=\sqrt{1+9xy}\text{ (g/cm)}$
	* $r(t)=\left\langle t,t^3\right\rangle$
	* $M\\=\int_C\sqrt{1+9xy}ds\\=\int_0^1\sqrt{1+9t^4}||\left\langle1,3t^2\right\rangle||dt\\=\frac{14}{5}g$