---
aliases:
  - Least Absolute Shrinkage and Selection Operator
---
#Math 
[[Regularization]] method that tends to cause all but one parameter to be set to 0 during the process of loss minimization. Useful for reducing dimensionality of a model
See [Desmos demo](https://www.desmos.com/3d/r5elbq7gsw) for why the above happens
## Related
* [[Ridge (statistics)]]
* [[Elastic Nets]]
## $\displaystyle {\lambda}_{1}\sum_{j = 1}^{d}\lvert \beta_{j}\rvert=\lambda \lVert \beta\rVert_{1}$
* This lasso term effectively minimizes the coefficients for any feature $\displaystyle \beta$
* $\displaystyle J$ is the number of parameters
* Effectively uses the [[Manhattan Distance|L1 norm]] on each parameter
* This term is added to the [[loss function]]