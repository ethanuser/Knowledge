---
aliases:
  - Famous Problem
---
#Computers 
There are a group of people with one celebrity. Everyone knows the celebrity but the celebrity knows no one. You can ask questions such as "Does A know B?" How can you find the celebrity in the fewest number of questions? Let $\displaystyle K(X,Y)$ denote the boolean "X knows Y"
## Brute Force: $\displaystyle O(n^{2})$
* Ask everyone if they know everyone else and see who it is everyone knows or who it is that knows no one
## Stack: $\displaystyle O(n)$
* Make a stack of potential celebrities (initially contains everyone)
* While the stack size is greater than 1
	* Pop two people off the stack, call them $\displaystyle A$ and $\displaystyle B$
	* If $\displaystyle K(A,B)$
		* $\displaystyle A$ is not the celebrity, so remove them and push $\displaystyle B$ back onto the stack
	* Else
		* $\displaystyle B$ is not the celebrity, so remove them and push $\displaystyle A$ back onto the stack
* The last person in the stack is the celebrity
	* If we are assuming there can be 0 celebrities, then we need to double check here by asking everyone if they know this person and asking this person if they know anyone else