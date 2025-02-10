#Computers 
To show a problem is NP complete (not easy), you may show that a known NP complete problem reduces into the given problem
## $\displaystyle Y\leq _p X\land Y\text{ is NP complete}\rightarrow Y\text{ is NP complete}$
* Reads that if $\displaystyle Y$ is polynomial reducible/transformable to $\displaystyle X$ and $\displaystyle Y$ is NP complete, then Y must be NP complete
* Proof by contradiction:
	* Assume $\displaystyle Y$ isn't NP complete with the above givens
	* Then we could solve $\displaystyle X$ in polynomial time by solving $\displaystyle Y$ and then reducing it to $\displaystyle X$, which contradicts the fact that $\displaystyle X$ is NP complete

| $\displaystyle Y$                   | $\displaystyle X$                   | $\displaystyle X\leq_{p}Y$ too? | Description                                                                  |
| ----------------------------------- | ----------------------------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| [[Maximum Clique Problem]]          | [[Maximum Independent Set Problem]] | Yes                             | Invert all edges/non-edges in $\displaystyle O(n^{2})$ time                  |
| [[Maximum Independent Set Problem]] | [[Vertex Cover Problem]]            | Yes                             | Take set of nodes that aren't in VC as MIS                                   |
| [[Vertex Cover Problem]]            | [[Efficient Recruiting Problem]]    | Yes                             | From $\displaystyle G(V,E)$, let edges represent sports and nodes counselors |
