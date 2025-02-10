#Computers 
## $\displaystyle J=\sum_{n = 1}^{N}\sum_{k = 1}^{K}r_{nk}\lVert x_{n}-\mu_{k}\rVert^{2}$
* How much the data points vary/are distorted from the clusters they've been assigned to
* $\displaystyle N$ is the number of data points
* $\displaystyle K$ is the number of clusters
* $\displaystyle r_{nk}$ is an [[indicator function]] with value $\displaystyle 1$ if data point $\displaystyle x_{n}$ is assigned to class/cluster $\displaystyle k$ and 0 otherwise
## $\displaystyle \mu_{k}= \frac{\sum_{n = 1}^{N} r_{nk} x_{n}}{\sum_{n = 1}^{N} r_{nk}}$
* $\displaystyle \mu_{k}$ is the prototype of cluster $\displaystyle k$, or where we initially guess the location of our cluster and iteratively improve upon. Is also the [[Mean|average]] of the points assigned to cluster $\displaystyle k$
* The denominator denotes the number of points in cluster $\displaystyle k$