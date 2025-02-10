#Computers 
Uses a [[Binary Tree]] with the property that each sub tree has a min at the root
## Topics
* [[Heap Sort]]
## Find min: $\displaystyle O(1)$
* Minimum value is at the root of the tree
## Heapify: $\displaystyle O(\log n)$
* Turning a binary tree into a heap
* Done by checking the element that was changed (inserted or deleted) and switching parents and children if the child is of lower value than the parent
## Insertion: $\displaystyle O(\log n)$
* Add an element to the right most available spot
* Heapify
## Deletion: $\displaystyle O(\log n)$
* Replace node with the min of either left or right and repeat the process recursively until a leaf node is removed
* If the leaf node removed is not the right most one
	* Replace it with the last leaf node (right-most) and then heapify