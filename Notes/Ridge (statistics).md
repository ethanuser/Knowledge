#Math 
[[Regularization]] method that tends to shrink all coefficients to non-zero values
## Related
* [[Lasso (statistics)]]
* [[Elastic Nets]]
## $\displaystyle {\lambda}\sum_{j = 1}^{J}\beta_{j} ^{2}=\lambda \lVert \beta\rVert_{2}$
* This ridge term effectively minimizes the coefficients for any feature $\displaystyle \beta$
* $\displaystyle J$ is the number of parameters
* Effectively uses the [[Euclidean Distance|L2 norm]] on each parameter
* This term is added to the [[loss function]]