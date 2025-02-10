#Computers 
Algorithm to find the shortest path from one node to any other node. Basically just visit each node of smallest edge weight and update the total weights accordingly
## Pseudocode
* Let s denote source
* Let dist(v) be the distance from source to vertex v
* Let len(v, w) be the edge distance between vertex v and w
* Set dist(s) = 0
* Set dist(v) = infinity for v != s
* While destination unexplored
	* Let v = smallest-valued unexplored vertex connected to an explored node
	* Set v = explored
	* For each unexplored vector w connected to v
		* Set dist(w) = min(dist(v) + len(v, w), dist(w))
## Runtime: $\displaystyle O(\lvert E\rvert+\lvert V\rvert\log \lvert V\rvert)$
* $\displaystyle E$ is the number of edges
* $\displaystyle V$ is the number of vertices 