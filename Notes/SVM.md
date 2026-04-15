---
aliases:
  - Support Vector Machines
  - SVMs
---
#Computers 
Given a labeled data set, is able to classify data points by seeing on what side of the [[decision boundary]] they lie on within an N dimensional space, where N is the number of features. The decision boundary is tuned during training. 
## Topics
* [[Support Vector]]
* [[Support Vector Margin]]
* [[Kernel Method]]
* [[Hinge Loss]]
## $\displaystyle \text{min}_{(w,b)}\sum_{n}\ell^{\text{Hinge}}(y_{n},w^{T}\phi(x_{n})+b)+\frac{\lambda}{2}\left\lVert w\right\rVert^{2}_{2}$
* Primal formulation of SVM
## $\displaystyle \frac{1}{2}\text{argmin}_{(w,b)}(\lVert w\rVert^{2}):y_{n}[w^{T}\phi(x_{n})+b]\geq 1$
* Hard margin SVM
* This is how to find the parameters $\displaystyle w,b$ while under some constraints to create a [[support vector margin]]
* $\displaystyle w$ is the [[support vector]]
* $\displaystyle b$ is the bias term
## $\displaystyle \frac{1}{2}\text{argmin}_{(w,b)}(\lVert w\rVert^{2})+\lambda \sum_{n = 1}^{N}\xi_{n}:y_{n}[w^{T}\phi(x_{n})+b]\geq 1-\xi_{n}$
* Soft margin SVM
* $\displaystyle \lambda$ is a [[regularization]] parameter
* $\displaystyle N$ is the number of data points that are on the wrong side of the decision boundary
* $\displaystyle \xi_{n}$ is the distance from the $\displaystyle n$th wrong point to the decision boundary