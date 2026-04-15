#Math 
Takes small steps using first derivative information to arrive at root, or minima of a function. Similar to [[Newton's Method]] except it converges slower if using constant step sizes
## $\displaystyle \theta^{t+1} \leftarrow \theta^{t}-\eta \frac{\partial f }{\partial \theta}$
* The new parameters for our ML model
* $\displaystyle \eta$ is the step size
* $\displaystyle f$ is the error function (we want to minimize error)
# Training
## Gradient Descent
* GradientDescent()
	* $\displaystyle \theta:=0$
	* For epoch $\displaystyle =1\ldots T$
		*  $\displaystyle \theta^{t+1} \leftarrow \theta^{t}-\eta \frac{\partial f }{\partial \theta}$
	* return $\displaystyle \theta$
### $\displaystyle O(nd)$
* Time complexity depends on the number of samples and dimensionality
## Stochastic Gradient Descent
* StochasticGradientDescent()
	* $\displaystyle \theta:=0$
	* For epoch $\displaystyle =1\ldots T$
		* For $\displaystyle (x,y)\in \mathcal{D}$
			*  $\displaystyle \theta^{t+1} \leftarrow \theta^{t}-\eta \nabla J_{(x,y)}(\theta)$
				* The gradient is calculated on just one datapoint
	* return $\displaystyle \theta$