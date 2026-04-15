#Math 
## Topics
* [[Dual Space]]
* [[Dual Vector]]
## Notes
* The basis of a span is the smallest linearly independent list of vectors that constitute the span
* $\text{span}(\vec v_1,\ldots,\vec v_m)=\{c_1\vec v_1+\ldots+c_m\vec v_m:c_1,\ldots,c_m\text{ are scalars}\}$
	* The span of some vectors is the set of all possible linear combinations of the vectors
* $V\in\mathbb{R}^n\rightarrow\text{dim}(V)=m\le n$
	* $\text{dim}(V)$ is the number of vectors in the basis of $V$
		1) There are at most $m$ linearly independent vectors in $V$
		2) We need at least $m$ vectors to span $V$
		3) If $m$ vectors in $V$ are linearly independent, they form a basis of $V$
		4) If $m$ vectors in $V\text{ span }V$, then they form a basis of $V$
* $\text{dim(im(}A))=\text{rank}(A)$
	* The basis of the image of a matrix is the set of the columns containing the leading variables. Can be found by taking the $\text{rref}(A)$ and then looking at the corresponding columns with a leading 1 (can’t look at the matrix from $\text{rref}(A)$ specifically, have to look at $A$)
	* $\text{dim(ker(}A))=m-\text{rank}(A)=\text{nullity}(A)$
* The basis of the kernel of matrix is the set of the columns containing the free variables. Can be found by taking the $\text{rref}(A)$, finding $\vec x$ in terms of the free variables and then taking the vectors that arise as a result of isolating the free variables as the basis vectors
	* $\text{nullity}(A)+\text{rank}(A)=m$
	* Called the Rank-nullity theorem
	* Is a portion of the fundamental theorem of linear algebra