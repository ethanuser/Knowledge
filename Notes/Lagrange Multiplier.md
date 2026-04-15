 #Math 
A way to find extrema when constraints are applied
[Geometric Intuition](https://www.youtube.com/watch?v=8mjcnxGMwFo)

## $$\begin{cases}
\nabla f=\lambda \nabla g \\
g=0
\end{cases}$$
* Solve this system of equations to find the extrema of $\displaystyle f$
* $\displaystyle f$ is the function we are trying to optimize for
* $\displaystyle g$ is the constraint function
* $\displaystyle \lambda$ is our lagrange
## $\displaystyle \mathcal{L}(x_{1},x_{2},\ldots ,{\lambda}_{1},{\lambda}_{2},\ldots )=f(x_{1},x_{2},\ldots )-{\lambda}_{1} g_{1}(x_{1},x_{2},\ldots )-{\lambda}_{2}g_{2}(x_{1},x_{2},\ldots )-\ldots$
* $\displaystyle \mathcal{L}$ is the Lagrangian
* $\displaystyle \lambda_{i}$ is the Lagrange multiplier for the $\displaystyle i$th constraint
* $\displaystyle f(x_{1},x_{2},\ldots )$ is the function of interest for when there are more than two variables
* $\displaystyle g_{i}(x_{1},x_{2},\ldots )$ is the equality constraint
# Example
* Maximize $\displaystyle xy$ subject to $\displaystyle x^{2}+y^{2}=1$
* Solution
	* $\displaystyle f(x,y)=xy$, $\displaystyle g=x^{2}+y^{2}-1=0$
	* $\displaystyle \nabla f=(y,x)=\lambda(2x,2y)=\lambda \nabla g$
	* Then
		* $\displaystyle y=2\lambda x$
		* $\displaystyle x=2\lambda y$
		* $\displaystyle x^{2}+y^{2}=1$
	* 
	* $\displaystyle y=2\lambda x=2\lambda(2\lambda y)$
	* $\displaystyle  y(1-4\lambda ^{2})=0$
	* $\displaystyle y=0$ or $\displaystyle \lambda=\pm \frac{1}{2}$
	* Case 1: $\displaystyle y=0 \Rightarrow x=0 \Rightarrow (0,0)$
	* Case 2: $\displaystyle \lambda=\pm \frac{1}{2}\Rightarrow y=\pm x \Rightarrow 2x^{2}=1\Rightarrow x=\pm  \frac{1}{\sqrt{ 2 }}\Rightarrow \left(\pm \frac{1}{\sqrt{ 2 }},\pm  \frac{1}{\sqrt{ 2 }}\right)$
	* Checking
		* $\displaystyle (0,0)$ is a saddle point
		* $\displaystyle \left( \pm \frac{1}{\sqrt{ 2 }},\pm \frac{1}{\sqrt{ 2 }} \right)$ are maximum, $\displaystyle \left( \pm \frac{1}{\sqrt{ 2 }},\mp \frac{1}{\sqrt{ 2 }} \right)$ are minimum