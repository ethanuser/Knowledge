#Computers 
[Cool visualizer](https://isabek.github.io/)
Method for finding max flow in the [[max flow problem]] in a directed graph going from some source to some sink
## Pseudocode
* Let augmenting paths be those from s to t with only (non-full forward edges or non-empty backward edges)
* While there are still augmenting paths
	* Find the augmenting path
	* Compute bottle neck capacity
	* Augment each edge and total flow
## $\displaystyle O(\lvert f\rvert m)$
* $\displaystyle \lvert f\rvert$ is the max flow of the path
* $\displaystyle m$ is the number of edges of the algorithm