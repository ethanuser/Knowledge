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
## $\displaystyle \frac{1}{2}\text{min}(\lVert w\rVert^{2})+\lambda \sum_{n = 1}^{N}\xi_{n}$
* $\displaystyle w$ is the [[support vector]]
* $\displaystyle \lambda$ is a [[regularization]] parameter
* $\displaystyle N$ is the number of data points that are on the wrong side of the decision boundary
* $\displaystyle \xi_{n}$ is the distance from the $\displaystyle n$th point to the decision boundary