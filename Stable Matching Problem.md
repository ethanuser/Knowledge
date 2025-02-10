---
aliases:
  - Stable Marriage Problem
---
#Computers 
There are $\displaystyle n$ men and $\displaystyle n$ women. Each person has a priority list of $\displaystyle n$ people they'd like to marry. Find a way to marry each man and woman together such that no two non-married man/woman pair prefer each other more than they prefer their current partners
## Gale-Shapley Algorithm: $\displaystyle O(n^{2})$
* While there are unmarried men $\displaystyle m$ who haven't exhausted their options
	* Let $\displaystyle m$ choose the highest person on his priority list he hasn't asked yet
	* If $\displaystyle w$ is free
		* Engage $\displaystyle m$ and $\displaystyle w$
	* If $\displaystyle w$ is already engaged to $\displaystyle m'$
		* If $\displaystyle m>m'$ on $\displaystyle w$'s priority list
			* Engage $\displaystyle m$ and $\displaystyle w$
			* Make $\displaystyle m'$ free
		* Else
			* $\displaystyle m'$ and $\displaystyle w$ remain engaged
* Let all engaged people marry
## Claims
* Men will get their best valid match
	* Valid meaning a match that will still enable stable matching
* Women will get their worst valid match