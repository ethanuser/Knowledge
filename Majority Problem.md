#Computers 
There are $\displaystyle m$ candidates and $\displaystyle n$ total votes. A majority occurs when there is a candidate with votes greater than $\displaystyle \frac{n}{2}$
## Claim 1
* If there is a majority, removing two votes from different candidates causes the majority to remain
### Proof
* If a candidate has $\displaystyle >\frac{n}{2}$ votes and one vote is removed from them, then the proportion of votes they will have is $\displaystyle p>  \frac{\frac{n}{2}-1}{n-2}=\frac{\frac{n-2}{2}}{n-2}=\frac{1}{2}$, so they will still have the majority
## Claim 2
* A majority may be established by removing votes from different candidates
	* What if you start off with exactly two candidates with the same number of votes?
### Proof
* Assume a majority can't be established by removing votes from different candidates
* Let $\displaystyle a$ be the candidate with the most votes or one of multiple candidates who have the same and most number of votes
* Choose any other candidate $\displaystyle b$
## Brute Force: $\displaystyle O(n^{2})$
* For each element $\displaystyle i$ in the array
	* Initialize a counter $\displaystyle c$
	* For each element $\displaystyle j$ in the array
		* If $\displaystyle i=j$
			* $\displaystyle c$++
		* If $\displaystyle c>$ half the number of elements
			* break
* Element $\displaystyle i$ is the majority element
## Moore's Voting Algorithm: $\displaystyle O(n)$
* c := 0, representing candidate majority counter
* x := 1 to store index position
* For each element $\displaystyle i$
	* If c == 0
		* x = i
		* c++
	* Else If x == i
		* c++
	* Else
		* c--
* c = 0
* Check the candidate majority is indeed a majority element
* For each element i
	* If x == i
		* c++
* If c > n/2
	* x is a majority element