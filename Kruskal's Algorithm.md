#Math #Computers 
A way of finding a [[MST]] by sorting all edges by their weights and adding them to our constructed MST as long as it doesn't form a cycle with previous edges
## Topics
* [[Union Find Problem]]
## Pseudocode
* Sort all edges by their weights
* For edge $\displaystyle e_{i}$ in list of sorted edges
	* Add $\displaystyle e_{i}$ to the MST
	* If $\displaystyle e_{i}$ forms a cycle with the MST (this can be done in $\displaystyle O(\log V)$ time by applying the [[union find problem]]. Consider each connected tree to be a set and if we find the nodes forming $\displaystyle e_{i}$ belong to the same set, then a cycle is formed. If not, there is no cycle, and we then union the two connected trees)
		* Discard it
	* $\displaystyle i$++
## $\displaystyle O(E\log V)=O(E\log E)$
* $\displaystyle E$ is the number of edges
* $\displaystyle V$ is the number of vertices
* The equality occurs because if $\displaystyle E=V$ or $\displaystyle E=V^{2}$, then the log makes the constant go away