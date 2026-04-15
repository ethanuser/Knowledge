#Computers 
## Pseudocode
 * W := max weight of knapsack
 * n := number of items
 * weights(i) := weight of item i
 * values(i) := value of item i
 * opt(i, w) := max value for the first i items and max weight w
 * Initialize opt(i, w) to 0 for all values
 * For i from 1 to n
	 * For w from 0 to W
		 * If weights(i) <= w
			 * opt(i, w) = max(opt(i - 1, w), opt(i - 1, w - weights(i)) + values(i))
		 * Else
			 * opt(i, w) = opt(i - 1, w)
 * Return opt(n, W)
## $\displaystyle O(nW)$
* $\displaystyle n$ is the number of weights
* $\displaystyle w$ is the weight the knapsack can handle