#Math 
Given multiple sets each of different elements, efficiently determine whether two arbitrary elements are within the same set. Also efficiently be able to form a union of any two sets
## $\displaystyle O(\log n)$ find and $\displaystyle O(1)$ union
* Let each set be represented as a tree where the elements represented as nodes all point upward eventually to some root
* To find whether two elements are the same, start at their nodes and follow them up until their roots. If the two elements' roots are the same, they are in the same set
* To union two sets, point the smaller set's root toward the larger one's root
	* If they're the same size, just arbitrarily choose one tree's root to point to the other's