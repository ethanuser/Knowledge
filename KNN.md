---
aliases:
  - K-nearest Neighbors
  - Nearest Neighbors
  - Nearest Neighbors Classifier
  - NNC
---
#Computers 
A way to classify a data point based on its "similarity distance" to the $\displaystyle k$ nearest neighbors.
## Topics
* [[Feature Normalization]]
## Steps to Classify (based on [this animation](https://www.youtube.com/watch?v=0p0o5cmgLdE))
1. Initialize
	1. Place the data point in a [[feature space]]
2. Calculate Distance
	1. Find the [[Euclidean distance]] from the data point with all other labeled data
	2. May have to normalize data point values along different coordinates to be [[Z-scores]] for each coordinate
3. Sort Distance
	1. Sort distances of the data point with other labeled data points in increasing order
	2. For classification, the most common class of $\displaystyle k$-nearest neighbors determines the data point class
	3. For regression, use the average of the $\displaystyle k$-nearest neighbors' labels
## Choices of $\displaystyle k$
* Too small $\displaystyle k$
	* Results in [[overfitting]] of the model to the data
* Too large $\displaystyle k$
	* Results in [[underfitting]]
# CS M146
## $\displaystyle \text{nn}_{k}(x)=\text{argmin}_{n\in \left( [N]-\sum_{i = 1}^{k-1}\text{nn}_{i}(x) \right)}\lVert x-x_{n}\rVert^{2}_{2}$
* Gives the index in $\displaystyle [N]$ of the $\displaystyle k$th nearest neighbor of $\displaystyle x$, or the data point we're interested in classifying
* $\displaystyle [N]$ is an array of indices for each data sample point
* We use the square of the [[Euclidean Distance|L2 norm]] here to calculate distance but other measures could work
## $\displaystyle \text{knn}(x)=\left\{\text{nn}_{1}(x),\text{nn}_{2}(x),\ldots ,\text{nn}_{K}(x)  \right\}$
* Gives the set of indices of the $\displaystyle K$ nearest neighbors to $\displaystyle x$
## $\displaystyle v_{c}=\sum_{n\in \text{knn}(x)}\mathbb{I}(y_{n}==c)~\forall~c\in [C]$
* Gives the number of "votes" for a particular class/label $\displaystyle c$
* We iterate over each of the $\displaystyle K$-nearest neighbors and increment by one every time the neighbor equals the class of interest
## $\displaystyle y=h(x)=\text{argmax}_{c\in [C]}v_{c}$
* The prediction is the class $\displaystyle c$ that maximizes the number of votes
### Training Time Complexity $\displaystyle O(1)$
* I don't know why this isn't $\displaystyle O(n)$, but spatial complexity definitely is $\displaystyle O(n)$
### Classifying Time Complexity: $\displaystyle O(nd+n\log n)$
* To classify, we need to calculate the distances from our point to all of our $\displaystyle n$ data points, where calculating the distances scales linearly with the number of features $\displaystyle d$, which overall takes $\displaystyle O(nd)$ time. We must also sort these distances before finding the $\displaystyle K$-nearest neighbors, which takes $\displaystyle O(n\log n)$ time