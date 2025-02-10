#Computers
## Notion to Obsidian Regex Matching Patterns
```
Format:
FIND
REPLACE

Remove ---
---

Remove Lines:
(\n\s+\n|\n+)
\n

Replace spaces with tabs:
\s\s\s\s
\t

Convert $$ to $$$$
^(\s+)(\$[^$]*\n[^$]*\$)
$1$$$2$$

Convert $$ to $$$$ part 2
^(\s+-\s)(\$[^$]*\n[^$]*\$)
$1$$$2$$

SET TO NORMAL SEARCH AND REPLACE WITH CASE SENSITIVITY

Replace \rarr with ->
\rarr
\rightarrow

Replace \rarr with <-
\lrarr
\leftarrow

Replace \R with \mathbb{\R}
\R
\mathbb{R}

Replace \bold with \textbf
\bold
\textbf

Replace \lang with \langle
\lang
\left\langle

Replace \rang with \rangle
\rang
\right\rangle

SET TO NORMAL SEARCH AND REPLACE WITHOUT CASE SENSITIVITY

Replace \oiint with \oint
\oiint
\oint
```

## Notion
- Math 🧮
	[https://yutsumura.com](https://yutsumura.com/category/probability/)
	- Set Theory {}
		- $\text{Set Definitions}$
			Elements are distinct and sequence-independent
			$|X|=\text{cardinality of }X=\text{number of elements in }X$
			| Symbol | Set | Examples |
			|  |  |  |
			| $\mathbb{R}$ | Reals | $\pi$, 2, $\frac{1}{2}$ |
			| $\mathbb{Q}$ | Rationals | $2, \frac{1}{2}$ |
			| $\mathbb{Z}$ | Integers | -1, 0, 1 |
			| $\mathbb{N}$ | Naturals | 1, 2, 3 |
			$\mathbb{Z}^-$ represents the negative integers
			$\mathbb{Z}^+$ represents the positive integers
			$\varnothing$ denotes the null or empty set
			$A\subset B$ means $A$ is a subset of $B$
			$A\cup B$ is the union of $A$ and $B$
			$A\cap B$ is the intersection of $A$ and B
			$A'$ or $\bar A$ or $A^C$ is the complement of $A$
			Commutative: $A\cup B=B\cup A,\space A\cap B=B\cap A$
			Associative: $(A\cup B)\cup C=A\cup (B\cup C),\space (A\cap B)\cap C=A\cap(B\cap C)$
			Distributive: $A\cap(B\cup C)=(A\cap B)\cup(A\cap C),\space A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$
			De Morgan’s Laws: $(A\cup B)'=A'\cap B',\space (A\cap B)'=A'\cup B'$
		- $\text{Cartesian Product}$
			E.g.: $\mathbb{Z}\times\mathbb{Z}$ can represent the xy-plane
		- $\text{Injective (one-to-one): }\forall x_1,x_2\in X,f(x_1)=f(x_2)\rightarrow x_1=x_2$
			Each element in $Y$ has either one or zero elements that map to it from $X$
			$f$ passes the horizontal line test
		- $\text{Surjective (onto): }\forall y\in Y,\exists x\in X:f(x)=y$
			Each element in $Y$ has at least one element that maps to it from $X$
			$\text{Ran}(f)=Y$
		$\text{Bijective (one-to-one correspondence): Injective and Surjective}$
		$\text{Relation: }aRb=(a,b)\in R$
		$\text{Reflexive: }\forall x\in X,xRx$
		$\text{Symmetric: }\forall x,y\in X,xRy\rightarrow yRx$
		$\text{Anti-symmetric: }\forall x,y\in X,xRy\land yRx\rightarrow x=y$
		$\text{Transitive: }\forall x,y,z\in X,xRy\land yRz\rightarrow xRz$
		$\text{Partial Order: reflexive, anti-symmetric, and transitive}$
		$\text{Equivalence Relation: reflexive, symmetric, and transitive}$
		$|X|=n\rightarrow |\mathcal{P}(X)|=2^n$
		$X\cup Y=\varnothing\rightarrow |X\cup Y|=|X|+|Y|\text{ (Addition Principle)}$
		$|X\cup Y|=|X|+|Y|-|X\cap Y|$
	- Logic ∴
	- Counting 🔢
		- $P(n,k)={}_{n}P_{k}=k!{n\choose k}=\frac{n!}{(n-k)!}$
			The number of permutations (these are ordered combination basically) when picking $k$ elements from a set of size $n$ is $P(n,k)$
			- E.g.: There is a set $X=\{A,B,C,D\}$. How many ways are there to pick two elements from $X$ when ordering matters?
				$P(4,2)=12$
			- E.g.: There are 4 empty parking spots. How many ways are there to park 2 unique cars when ordering matters?
				$P(4,2)=12$
		- $C(n,k)={}_nC_k={n\choose k}=\frac{P(n,r)}{k!}=\frac{n!}{k!(n-k)!}$
			Same as permutations, but ordering doesn’t matter
			For the first example for $P(n,k)$, there would be ${4\choose 2}=6$ ways to pick two elements from $X$ when ordering doesn’t matter
			- E.g.: How many ways are there to park 2 identical cars in 4 parking spots?
				${4 \choose 2}=6$
		${n\choose k}={n\choose n-k},\space{n+k\choose k}={n+k\choose n}$
		|  | Repetition/replacement allowed | Repetition/replacement not allowed |
		|  |  |  |
		| Order matters | $n^k$ | $P(n,k)$ |
		| Order doesn’t matter | ${n+k-1\choose k}$ | $C(n,k)$ |
		- ${n+k-1\choose k}={n+k-1\choose n-1}$
			This is the number of ways to uniquely choose $k$ items from $n$ types of items when ordering doesn’t matter.
			This is “with repetition” because you are allowed to pick multiple of the same type
			- E.g.: What is the number of ways to choose nine pieces of bread when there are three kinds?
				${11\choose2}=55$
			- E.g.: How many ways are there to park 2 identical cars in 4 parking spots if the cars can stack on top of each other?
				${5\choose3}=10$
			- E.g.: How many different outcomes are there to roll a 6-sided die 10 times if ordering of the outcomes between the trials does not matter (so 123456 is the same as 654321)?
				${15\choose10}=3003$
				The way to visualize this problem is to have 10 stars and $6-1=5$ bars that separate the stars. So with 0 representing a star and | representing a bar, 0||000|00|0000| would represent one 1, zero 2’s, three 3’s, two 4’s, four 5’s, and zero 6’s. There a total of $10+5=15$ “parking spots” and 5 “cars” or 10 “empty spots leftover” depending on how you view it, meaning there are ${15\choose 5}={15\choose 10}$ possibilities total.
		- $C(n;n_1,n_2\ldots n_k)={n\choose n_1\space n_2\ldots n_k}=\frac{n!}{n_1!n_2!\ldots n_k!}$
			This is the number of ways of choosing $n$ items with $k$ distinct groups when repetition is allowed and ordering matters
			Also called a multinomial coefficient of $a_1^{n_1},a_2^{n_2},\ldots,a_k^{n_k}$ for the multinomial expansion of $(a_1+a_2+\ldots+a_k)^n$ where $n_1+n_2+\ldots+n_k=n$
			- E.g. What is the number of numbers that can be formed using all of the following digits: 111122334
				$=\frac{9!}{4!2!2!1!}=3780$
		$(a+b)^n =\displaystyle\sum_{k=0}^{n}{n\choose k}a^{n-k}b^k,\space \{n\in\mathbb{Z}:n\ge0\}\text{ (Binomial Theorem)}$
		- ${n+1\choose k}={n\choose k-1}{n\choose k},\space 1\le k\le n$
			Usd to build Pascal’s Triangle
		- $(f:X\rightarrow Y\land |X|>|Y|)\rightarrow\exists x_1,x_2:f(x_1)=f(x_2)\land x_1\ne x_2\text{ (Pigeonhole Principle)}$
			i.e. if there are $n$ pigeons that fly into $k$ pigeon holes where $n > k$, at least one pigeon hole must have more than one pigeon in it
		- $(f:X\rightarrow Y,\space|X|=n,\space|Y|=m,\space k=\lceil \frac{n}{m}\rceil)\rightarrow \exists x_1,x_2,\ldots,x_k:f(x_1)=f(x_2)=\ldots=f(x_k)\text{ (Strong Pigeonhole Principle)}$
			i.e. if there are $n$ pigeons that fly into $m$ pigeon holes where $k$ is $\frac{n}{m}$ rounded up, at least one pigeon hole must have at least $k$ pigeons in it
	- Recurrence Relations 🐚
		- Linear homogenous recurrence relations with constant coefficients
			Shortened to LHRRWCC
			Linear: The highest degree is one
			Homogenous: All terms are of the same degee
			Constant coeffcients: Self-explanatory
			If some form of $t^n$ works, then the linear combination of the solutions to the resulting polynomial are solutions to the recurrence relation. 
			For order two LHRRWCC (i.e. $a_n=c_1a_{n-1}+c_2a_{n-2}$), if $t^2=c_1t+c_2$ has two distinct solutions $r_1$ and $r_2$, the solutions are of the form $\exists b,n\in\mathbb{R}:br_1^n+dr_2^n$
		- Fibonacci Sequence
			Explicit formula:
			$f_n=\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n}-\frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n}$
	- Graph Theory 🕸
		- Graph
			$G(V,E)$ describes a graph with vertices and edges
		- Euler Path
			- Definition
				A path that passes through all edges exactly once
			For a Euler path to exist, there must be zero or two nodes that have an odd number of connections. For the two nodes that have an odd number of connections, those are the starting and end points
		- Euler Cycle
		- Hamiltonian Cycle
	- Probability 🎲
		- Exclusive/Exhaustive Events
			$A_1,A_2,\ldots,A_k$ are mutually exclusive events iff $A_i\cap A_j=\varnothing$ when $i\ne j$
			$A_1,A_2,\ldots,A_k$ are exhaustive events iff $A_1\cup A_2\cup\ldots\cup A_k=\Omega$, the universal set
		- Probability Space
			A probability space is a triple of $(\Omega,\mathcal{F},P)$:
			$\Omega$ is the set of all possible outcomes of some random experiment
			$\mathcal{F}$ is the power set of $\Omega$ (all possible events you could try to ask the probability of)
			$P$ is a probability measure
			An event $A$ satisfies: $A\in\mathcal{F}$ and $A\subseteq\Omega$
			E.g.: What is the probability of getting at least 1 head if you flipped two coins?
			$\Omega=\{HH,HT,TH,TT\}$
			$\mathcal{F}=\mathcal{P}(\Omega)$
			Let $A$ the event that you get at least 1 head
			$A=\{HH,HT,TH\}$
			Then of course, $A\in\mathcal{F}$ and $A\subseteq\Omega$
			$P(A)=\frac{|A|}{|\Omega|}=\frac{3}{4}$
		- Probability Measure
			A probability measure is a function $P:\mathcal{F}\mapsto[0,1]$ satisfies
			(a) $P(A)\ge0$
			(b) $P(S)=1$
			(c) $A_i\cap A_j=\varnothing,i\ne j\rightarrow P(A_1\cup A_2\cup\ldots\cup A_k)=P(A_1)+P(A_2)+\ldots+P(A_k)$ (i.e. mutually exclusive events have cumulative probabilities )
		$0\le P(A)=1-P(A')\le1$
		$P(\varnothing)=0$
		$A\subset B\rightarrow P(A)\le P(B)$
		$P(A\backslash B)=P(A)-P(B)$
		- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$
			Inclusion-exclusion principle for two events
			![principle-of-inclusion-and-exclusion.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c152e49-b87f-461b-8248-49540e2b4f7c/principle-of-inclusion-and-exclusion.png)
		- $P(\displaystyle\bigcup_{j=1}^nA_j)=\displaystyle\sum_{k=1}^n(-1)^{k-1}\displaystyle\sum_{I\subseteq\{1,\ldots,n\},\space |I|=k}P(\displaystyle\bigcap_{j\in I}A_j)$
			Generalized inclusion-exclusion principle
			Example for 3 events:
			$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)$
		- $A,B\text{ are independent events}\leftrightarrow P(A\cap B)=P(A)P(B)$
			Generalized form:
			$A_1,A_2,\ldots,A_n\subseteq\Omega$ are mutually independent iff given $1\le k\le n$ and $1\le j_1<j_2<\ldots<j_n\le n$, then
			$P(\displaystyle\bigcup_{\ell=1}^kA_{j_\ell})=\displaystyle\prod_{\ell=1}^kP(A_{j_\ell})$
			In other words, each event needs to be pair-wise, tri-wise, $\ldots$, and $n$-wise independent
		- $P(A|B)=\frac{P(A\cap B)}{P(B)}$
			This is the conditional probability formula
			$P(A|B)$ is read as the probability of A given B
			$P(B)>0$ or else $B$ should have been able to occur in the first place (also division by 0)
			$P(A|B)$ satisfies the criteria for a probability function
		- $P(A_1\cap A_2\cap\ldots\cap A_n)=\displaystyle\prod_k^nP(A_k|(A_1\cap\ldots\cap A_{k-1}))$
			Generalized formula for probability of the union events using conditional probability
		- $(a+b)^n=\displaystyle\sum_{k=0}^n{n\choose k}a^nb^{n-k}$
			The famous binomial theorem
			Works for $n\in\mathbb{N}\cup\{0\}$ and $x,y\in\mathbb{R}$
		- $P(A)=\displaystyle\sum_{k=1}^nP(B_k)P(A|B_k)$
			Called the law of total probability
			$B_k$ here makes up a partition of $S$, our sample space
		- $P(A|B)=\frac{P(B|A)P(A)}{P(B)}$
			Bayes’ Theorem
			Comes from the fact that $P(A\cap B)=P(B|A)P(A)$, which can be plugged into the formula for conditional probability
	- Distributions 🔔
		- Random Variables
			- Definition
				For a set $S$ and a probability space $(\Omega,\mathcal{F},P)$
				$X:\Omega\mapsto S$
				$\Omega$ is the universal set
				i.e. a random variable $X$ is a function that assigns outcomes of our random experiments to values from our set $S$
				$P(X=x)\coloneqq P(\{\omega\in\Omega:X(\omega)=x\})$
				$P(X\in A)\coloneqq P(\{\omega\in\Omega:X(\omega)\in A\})$
				E.g.: Let’s say you play a game where if you flip a coin twice and land at least 1 head, you win 10 dollars, but you otherwise lose 5 dollars. Then we can define a probability space $(\Omega, \mathcal{F},P)$:
				$\Omega=\{HH,HT,TH,TT\}$
				$\mathcal{F}=\mathcal{P}(\Omega)$
				$P$ is a probability function
				Then we can define a random variable $X$ such that for $\omega\in\Omega,X(\omega)=$ the number of dollars won for $\omega$, which is $X(\omega) \in S=\{-5,10\}$
			- $F_X(x)=P(X\le x)$
				Cumulative distribution function (CDF)
				$F_X:\mathbb{R}\mapsto[0,1]$
				In the two-coin flip example , we may say:
				 $F_X(10)=P(X=10)=P(\text{winning 10 or less dollars})=P(\{\omega\in\Omega:X(\omega)=-5\})+P(\{\omega\in\Omega:X(\omega)=10\})=P(\{TT\})+P(\{HH,HT,TH\})=\frac{3}{4}+\frac{1}{4}=1$
			- $F_Y(x)=F_X(x)\rightarrow X\sim Y$
				If two random variables have the same CDF, then they are said to be identically distributed
				Let $X$ be the number of heads that appear when flipping a coin twice and $Y$ be the number of tails that appear when flipping a coin twice
				Then $X$ and $Y$ are identically distributed
			- $\mathbb{E}[a]=a,a\in \mathbb{R}$
				The expected value of a constant is just the constant
			- $\mathbb{E}[ag(X)+bh(X)]=a\mathbb{E[}g(X)]+b\mathbb{E}[h(X)]$
				i.e. the expectation of random variables is linear
			- $\mathbb{E}[(X-b)^r]$
				This is the $r$th moment of $X$ about $b$
				An example is that $\sigma_X^2$ is the 2nd moment of $X$ about $\mathbb{E}[X]$
				$b=0\rightarrow$ the $r$th moment of $X=\mathbb{E}[X^r]$
			$\sigma_X^2=\text{var}(X)=\mathbb{E}[(X-\mathbb{E}[X])^2]=\mathbb{E}[X^2]-\mathbb{E}[X]^2$
			$\sigma_X=\text{STDEV}(X)$
			$\sigma_{aX+b}^2=a^2\text{var}(X)$
			$\sigma_{aX+b}=|a|\sigma_X$
			- $M_X(t)=\mathbb{E}[e^{tX}],~t\in\mathbb{R}$
				Called the moment-generating function (MGF) of $X$
			$\mathbb{E}[X^r]=\frac{d^r}{dt^r}M_X|_{t=0}$
			$\mathbb{E}[X]=\frac{d}{dt}M_X|_{t=0}=\frac{d}{dt}\ln M_X|_{t=0}$
			$\sigma_X^2=\frac{d^2}{dt^2}\ln M_X|_{t=0}$
			Let there be $g(X,Y)$ and $h(X,Y)$
			- $\mathbb{E}[ag(X,Y) + bh(X,Y)] = a\mathbb{E}[g(X,Y)] + b\mathbb{E}[h(X,Y)]$
				States that expected value demonstrates linearity for bivariate random variables
			$g(x,y) \le h(x,y) ~ \forall (x,y) \in S \rightarrow \mathbb{E}[g(X,Y)] \le \mathbb{E}[h(X,Y)]$
			$\mathbb{E}[g(X)] = \displaystyle\sum_{x \in S_X}g(x)p_X(x), ~ \mathbb{E}[h(Y)] = \displaystyle\sum_{y \in S_Y} h(y)p_Y(y)$
			$X,Y\text{ independent} \rightarrow \mathbb{E}[g(X)h(Y)] = \mathbb{E}[g(X)]\mathbb{E}[h(Y)]$
			- $|\mathbb{E}[XY]| \le \sqrt{\mathbb{E}[X^2]\mathbb{E}[Y^2]}$
				Called the Cauchy-Schwarz inequality
			- $\text{cov}(X,Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]= \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$
				Measures how much 2 random variables vary together (is loosely how positively correlated they are)
				(1) $\text{cov}(X, a) = 0$
				(2) $\text{cov}(X,X) = \text{var}(X)$
				(3) $\text{cov}(X,Y) = \text{cov}(Y,X)$
				(4) $\text{cov}(aX,bY) = ab\text{cov}(X,Y)$
				(5) $\text{cov}(X + a,Y + b) = \text{cov}(X,Y)$
				(6) $\text{cov}(aX + bY, cW + dV) = ac ~ \text{cov}(X,W) + ad ~ \text{cov}(X,V) + bc ~ \text{cov}(Y,W) + bd ~ \text{cov}(Y,V)$
			$X,Y\text{ independent} \rightarrow \text{cov}(X,Y) = 0$
			- $\rho(X,Y) = \frac{\text{cov}(X,Y)}{\sqrt{\text{var}(X)\text{var}(Y)}}$
				Pearson correlation coefficient
				Same idea as $r = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2\sum(y_i - \bar y)^2}}$, except it also encapsulates $p_X(x)$ or $f_X(x)$ and $p_Y(y)$ or $f_Y(y)$ information into the coefficient
			$|\rho(X,Y)| \le 1$
			- $g(x) = \mathbb{E}[Y | x], ~ g(X) = \mathbb{E}[Y | X]$x`
				$g : S_X \mapsto \mathbb{R}$
				$g(X)$ is a random variable and is the conditional expectation of $Y$ conditioned on $X$
			- $h(x) = \text{var}(Y | x), h(X) = \text{var}(Y | X)$
				$h : S_X \mapsto \mathbb{R}$
				$h(X)$ is a random variable and is the conditional expectation of $Y$ conditioned on $x$
			- $\mathbb{E[E}[Y | X]] = \mathbb{E}[Y]$
				Called the Law of Iterated Expectation
			- $\text{var}(Y) = \mathbb{E[}\text{var}(Y | X)] + \text{var}(\mathbb{E}[Y | X])$
				Called the Law of Total Variance
		- Discrete Random Variables
			Let $X$ be a discrete random variable
			- Definition
				A random variable is discrete if $S$ from $X:\Omega\mapsto S$ is finite (injective onto $\mathbb{N}$)
			- $p_X(x)=P(X=x)$
				Probability mass function (PMF)
				$p_X:S\mapsto[0,1]$
				$P(X=x)\coloneqq P(\{\omega\in\Omega:X(\omega)=x\})$
				In the two-coin flip example , we may say:
				 $p_X(10)=P(X=10)=P(\text{winning 10 dollars})=P(\{\omega\in\Omega:X(\omega)=10\})=P(\{HH,HT,TH\})=\frac{3}{4}$
			$P(X\in A)=\displaystyle\sum_{x\in A\cap S}p_X(x)$
			$F_X(x)=\displaystyle\sum_{y\in S,~y\le x}p_X(y)$
			$P(a<X \leq b)=F_X(b)-F_X(a)$
			- $\mu_X=\mathbb{E}[X]=\displaystyle\sum_{x\in S}xp_X(x)\qquad(\text{if the sum converges})$
				Called the expected value of the random variable $X$
			- $\mathbb{E}[g(X)]=\displaystyle\sum_{x\in S}g(x)p_X(x),~g:S\mapsto\mathbb{R}$
				$g(X)=g(X)(\omega)=g(X(\omega))$
			- $X\sim \text{Uniform}(\{1,2,\ldots,m\})$
				A random variable is uniformly distrubted if the probability of each $x\in S$ is equal. For the probabilities to be equal and add up to one, and since there are $m$ of $x\in S$, $p_X(x_i)=\frac{1}{m}$
				$p_X(x)=\frac{1}{m},~x\in\{1,2,\ldots,m\}$
				$F_X(x) =$ 
				$M_X(t) =$ 
				$\mathbb{E}[X]=\frac{m+1}{2}$
				$\text{var}(X) =$ 
				An example of a random variable would be $X=$ the number of pips on a die face after a roll. There are 6 outcomes because $m=|\{1,2,3,4,5,6\}|=6$, meaning $p_X(x_i)=\frac{1}{m}=\frac{1}{6}$
			- $X\sim\text{Bernoulli}(p)\text{ for }p\in (0,1)$
				A Bernoulli random variable takes two values: $0$ and $1$, which are both specified by the below $p_X$ and functions
				$$p_X(x)=
				\begin{cases}
				p~~~\qquad\text{if }x=1\\
				1-p\quad\text{if }x=0
				\end{cases}$$
				$$F_X(x) =
				\begin{cases}
				0  ~~~~~~~\quad \text{if }x < 0\\
				1 - p\quad\text{if }0 \le x < 1\\
				1 ~~~\qquad \text{if }x \ge 1
				\end{cases}$$
				$M_X(t) =$ 
				$\mathbb{E}[X]=p$
				$\text{var}(X)=p(1-p)$
			- $X\sim\text{Binomial}(n,p)$
				A binomial random variable represents the number of successes out of $n$independent trials that each have a probability $p$ of success
				$p_X(x)={n\choose x}p^x(1-p)^{n-x},~x\in\{0,1,\ldots,n\}$
				$F_X(x) =$ 
				- $M_X(t)=(1-p+pe^t)^n$
					This occurs because:
					(1) $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p_X(x)$
					(2) $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p^x(1-p)^{n-x}$
					(3) $M_X(t)=\displaystyle\sum_{x=0}^n(e^tp)^x(1-p)^{n-x}$
					(4) By Binomial theorem: $M_X(t)=(1-p+pe^t)^n$
				$\mathbb{E}[X]=np$
				$\text{var}(X) = np(1 - p)$
				A binomial distribution describes the number of successes when running $n$ independent trials where the probability of a success for each trial is $p$
			- $X \sim \text{Geometric}(p)$
				A geometric random variable represents the number of trials until a first success where each trial is independent and has a probability $p$ of success
				$p_X(x) = (1-p)^{x-1}p, ~ x \in \{ 1, 2, 3, \ldots \}$
				$F_X(x) = 1 - (1 - p)^x$
				$M_X(t) = \frac{pe^t}{1 - (1 - p)e^t},~t < -\ln(1 - p)$
				$\mathbb{E}[X] = \frac{1}{p}$
				$\text{var}(X) = \frac{1 - p}{p^2}$
				A geometric distribution describes the number of trials until a success where each trial has a probability of $p$ of occuring
			- $X \sim \text{Negative Binomial}(r, p)$
				A negative binomial random variable represents the number of trials until the $r$th success where there each trial has a probability $p$ of success
				$p_X(x) = {x - 1\choose r - 1}p^r(1 - p)^{x - r},~x \in \{r,r + 1,\ldots\}$
				$F_X(x) =$ 
				$M_X(t) = \left(\frac{pe^t}{1 - (1 - p)e^t}\right)^r, ~ t < -\ln(1 - p)$
				$\mathbb{E}[X] = \frac{r}{p}$
				$\text{var}(X) = \frac{r(1 - p)}{p^2}$
			- $X \sim \text{Poisson}(\lambda t)$
				A Poisson variable represents the number of occurrences of an event in $t$ units of time that has an average occurrence of $\lambda$ occurrences per unit time
				Analogous to binomial distributions in the discrete world
				The $\lambda$ below $=$ $\lambda t$
				$p_X(x) = e^{-\lambda}\frac{\lambda^x}{x!}, ~ x \in \{ 0, 1, 2, \ldots \}$
				$F_X(x) =$ 
				$M_X(t) = e^{\lambda(e^t - 1)}$
				$\mathbb{E}[X] = \lambda$
				$\text{var}(X) = \lambda$
			Let $Y$ be another discrete random variable
			$p_{X,Y} : S \rightarrow P(X = x \cap Y = y)$
			- $P((X,Y) \in A) = \displaystyle\sum_{(x,y) \in A \cap S} p_{X,Y}(x,y)$
				$\displaystyle\sum_{(x,y) \in \mathbb{R}^2 \cap S} p_{X,Y}(x,y) = 1$
			- $p_X(x) = \displaystyle\sum_{y \in S_Y}p_{X,Y}(x,y), ~ p_Y(y) = \displaystyle\sum_{x \in S_X}p_{X,Y}(x,y)$
				$p_X(x)$ and $p_Y(y)$ are called marginal PMF’s of $X$ and $Y$ respectively
				$p_X : S_X \mapsto [0,1]$
				$p_Y : S_Y \mapsto [0,1]$
				$\displaystyle\sum_{x \in S_X} p_X(x) = 1, ~ \displaystyle\sum_{y \in S_Y} p_Y(y) = 1$
			$X,Y\text{ independent} \leftrightarrow p_{X,Y}(x,y) = p_X(x)p_Y(y) ~ \forall (x,y) \in S$
			$\mathbb{E}[g(X,Y)] = \displaystyle\sum_{(x,y) \in S} g(x,y) p_{X,Y}(x,y)$
			- $X|y \rightarrow p_{X|Y}(x|y) = P(X = x | Y = y) = \frac{p_{X,Y}(x,y)}{p_Y(y)}, x \in S_X$
				$X | y$ is a random variable and contains the above PMF
		- Continuous Random Variables
			Let $X$ be a continuous random variable
			- $f_X(x) = P(X = x)$
				Probability density function (PDF)
				$f_X : S \mapsto [0, \infty]$
				$f_X$ is called the probability density function for $X$ and can be thought of as probability per unit length of the interval. Is akin to  $p_X$in the discrete world, except $p_X(x)$ is usually not simply 0
			- $F_X(x) = \int_{-\infty}^x f_X(t)dt$
				$F_X : \mathbb{R} \rightarrow [0, 1]$ is still the cumulative distribution function like in the discrete world, where $F_X(x) \coloneqq P(X \le x)$
				$\displaystyle\lim_{x\to-\infty}F_X(x) = 0, ~ \lim_{x\to\infty}F_X(x) = 1$
				$\int_{-\infty}^\infty f_X(x)dx = 1$
			- $P(a < X < b) = \int_a^bf_X(x)dx$
				The inequalities don’t have to be strict, they can be $\le$ as well because $P(X = a) = P(X = b) = 0$ for continuous random variables
			$\mathbb{E}[X] = \int_{-\infty}^\infty xf_X(x)dx$
			$\mathbb{E}[g(X)] = \int_{-\infty}^\infty g(x)f_X(x)dx$
			- $X \sim \text{Cauchy}$
				Called a pathological distribution because most of the important values are undefined
				$f_X(x) = \frac{1}{\pi(1 + x^2)} ~ \forall x \in \mathbb{R}$
				$M_X(t) = \varnothing$
				$\mathbb{E}[X] = \varnothing$
				$\text{var}(X) = \varnothing$
			- $X \sim \text{Uniform}([a,b])$
				$X$ represents a random point in the interval $[a,b]$
				$$f_X(x) = \begin{cases}
				\frac{1}{b - a} \qquad \text{if } x \in (a,b)\\
				0 \qquad ~~~~ \text{otherwise}
				\end{cases}$$
				$$F_X(x) = \begin{cases}
				\frac{x - a}{b - a} ~~~ \text{if }x \in (a,b)\\
				0 \qquad \text{if }x \le a\\
				1 \qquad \text{if }x \ge b
				\end{cases}$$
				$\mathbb{E}[X] = \frac{b + a}{2}$
				$\text{var}(X) = \frac{(b - a)^2}{12}$
			- $X \sim \text{Exp}(\theta)$
				$X$ is the time of the first arrival for a Poisson process with mean number of arrivals per unit time $\lambda > 0$ and mean waiting time for each arrival $\theta = \frac{1}{\lambda} > 0$
				Analagous to geometric distributions in the discrete world 
				$$f_X(x) = \begin{cases}
				\frac{1}{\theta}e^{-\frac{x}{\theta}}, ~ x \ge 0\\
				0, ~~~~~~~~  x < 0
				\end{cases}$$
				$F_X(x) = 1 - e^{-\frac{x}{\theta}}$
				$M_X(t) = \frac{1}{1 - \theta t}, ~ t < \frac{1}{\theta}$
				$\mathbb{E}[X] = \theta$
				$\text{var}(X) = \theta^2$
				E.g.: What is the probability that for a store receiving on average 3 customer per minute that a customer comes after just 30 seconds?
				$X \sim \text{Exp}(\frac{1}{3}), ~ P(X < \frac{1}{2}) = F_X(\frac{1}{2}) - F_X(0) = 1 - e^\frac{-1/2}{1/3} - (1 - e^{-\frac{0}{1/3}}) = 1 - e^{-3/2} = 1 - 0.223 = 0.777$
			- $X \sim \text{Gamma}(\alpha,\theta)$
				$X$ is the time of the $\alpha$th arrival of a Poisson process with mean number of arrivals per unit time $\lambda > 0$ and mean waiting time for each arrival $\theta = \frac{1}{\lambda}$
				Analagous to negative binomial distributions in the discrete world 
				$\Gamma(\alpha) = \int_0^\infty x^{\alpha - 1}e^{-x}dx$
				$\Gamma(\alpha) = (\alpha - 1)! ~ \forall \alpha \in \mathbb{Z}$
				$f_X(x) = \frac{1}{\theta^\alpha\Gamma(\alpha)}x^{\alpha - 1}e^{-\frac{x}{\theta}}, ~ x > 0$
				Max of $f_X(x)$ at $x = \theta(\alpha - 1)$
				$M_X(t) = \frac{1}{(1 - \theta t)^\alpha}, ~ t < \frac{1}{\theta}$
				$\mathbb{E}[X] = \alpha \theta$
				$\text{var}(X) = \alpha \theta^2$
			- $X \sim \chi^2(k), ~ k \ge 1$
				$X$ is a chi-square distribution with $k$ degrees of freedom
				Is a special case of the gamma distribution: $\chi^2(k) \sim \text{Gamma}(k/2,2)$
				$f_X(x) = \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2 - 1}e^{-x/2}, ~ x > 0$
				$F_X(x) = \frac{1}{\Gamma(k/2)}\gamma(\frac{k}{2},\frac{x}{2})$
				$\gamma(s,x) = \int_0^xt^{s - 1}e^{-t}dt$
			- $X \sim \mathcal{N}(\mu, \sigma^2)$
				$\mu \in R, ~ \sigma^2 > 0$
				$f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x - \mu)^2}{2\sigma^2}}, ~ x \in \mathbb{R}$
				$F_X(x) = \int_{-\infty}^x f_X(t)dt$
				$M_X(t) = e^{\mu t + \frac{1}{2}\sigma^2t^2}, ~ t \in \mathbb{R}$
				$\mathbb{E}[X] = \mu$
				$\text{var}(X) = \sigma^2$
				For the standard normal distribution $Z = \frac{X - \mu}{\sigma} \sim \mathcal{N}(0, 1)$
				$f_Z(z) = \frac{1}{\sqrt{2\pi}}e^{-\frac{z^2}{2}}$
				$F_Z(z) = \Phi(z) = \int_{-\infty}^z f_Z(t)dt$
				$M_Z(t) = e^{\frac{1}{2}t^2}$
				$\mathbb{E}[Z] = 0$
				$\text{var}(Z) = \sigma_Z = 1$
				$\Phi(-x) = 1 - \Phi(x)$
				Table for $\phi(x)$
				![eqape-1.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3eaa25cb-f83e-4b84-bb8c-534bde9f3b06/eqape-1.jpg)
			- (baby) Central Limit Theorem
				$P\left(\mu_X - a\sigma_X \le X \le \mu_X + b\sigma_X\right) \rightarrow \frac{1}{\sqrt{2\pi}}\int_a^b e^{-\frac{1}{2}x^2}dx$ as $n \rightarrow \infty$
			- $P((X,Y) \in A) = \iint_A f_{X,Y}(x,y)dxdy$
				$f_{X,Y}$ is the joint probability density function
				$\int_{-\infty}^\infty \int_{-\infty}^\infty f{X,Y}(x,y)dxdy = 1$
			- $F_{X,Y}(x,y) = P(X \le x, Y \le y)$
				$f_{X,Y}(x,y) = \frac{\partial^2}{\partial x \partial y}F_{X,Y}(x,y)$
			- $f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x,y)dy$
				Marginal PDF of $X$
			- $f_Y(y) = \int_{-\infty}^\infty f_{X,Y}(x,y)dx$
				Marginal PDF of $Y$
			$\mathbb{E}[g(X,Y)] = \int_{-\infty}^\infty\int_{-\infty}^\infty g(x,y)f_{X,Y}(x,y)dxdy$
			- $f_{Y|X}(y|x) = \frac{f_{X,Y}(x,y)}{f_X(x)}$
				$\int_{-\infty}^\infty f_{Y|X}(y|x)dy = 1$
			- $Y = u(X) \rightarrow f_Y(y) = |\frac{d}{dy}u^{-1}(y)| \cdot f_X(u^{-1}(y))$
				The PDF of a random variable that is a function of another variable is given as above
				$u'(x) > 0 \text{ or } u'(x) < 0 ~ \forall x \in S$
		- Several Random Variables
			- Definitions
				$X_1, X_2, \ldots, X_n$ are discrete random variables taking values in sets $S_1, S_2, \ldots, S_n \subseteq \mathbb{R}$, $S = S_1 \times S_2 \times S_n \subseteq \mathbb{R}^n$
				$p_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = P(X_1 = x_1, X_2, = x_2, \ldots, X_n = x_n)$
				$p_{X_j}(x_j) = P(X_j = x_j) = \displaystyle\sum_{x_1 \in S_1} \cdots \sum_{x_{j - 1} \in S_{j - 1}} \sum_{x_{j + 1} \in S_{j + 1}}  \ldots \sum_{x_n \in S_n} p_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n)$
				$X_1, X_2, \ldots, X_n \text{ independent } \leftrightarrow p_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = p_{X_1}(x_1)p_{X_2}(x_2)\cdots p_{X_n}(x_n)$
				$X_1, X_2, \ldots, X_n \text{ independent and identically distriubted (i.i.d) if independent and } p_{X_j} = p_{X_1}, ~ j = 2, \ldots n$
				$X_1, X_2, \ldots, X_n \text{ are continuous random variables}$
				$\exists f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) : P((X_1, X_2, \ldots, X_n) \in A) = \int_A f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) dx_1 \ldots dx_n$
				$f_{X_j}(x_j) = \int_{\mathbb{R}^{n - 1}} f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n)dx_1 \ldots dx_{j - 1} dx_{j - 1} \ldots dx_n$
				$f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = f_{X_1}(x_1)f_{X_2}(x_2) \cdots f_{X_n}(x_n) \forall (x_1, x_2, \ldots, x_n)$
				$X_1, X_2, \ldots, X_n \text{ independent and identically distriubted (i.i.d) if independent and } f_{X_j} = f_{X_1}, ~ j = 2, \ldots n$
				$\mathbb{E}[u(X_1, \ldots, X_n)] = \displaystyle\sum_{(x_1, \ldots, x_n) \in S} u(x_1, \ldots, x_n) p_{X_1, \ldots, X_n}(x_1, \ldots, x_n)$
				$\mathbb{E}[u(X_1, \ldots, X_n)] = \int_{\mathbb{R}^n} u(x_1, \ldots, x_n) f_{X_1, \ldots, X_n)} (x_1, \ldots, x_n) dx_1 \cdots dx_n$
			$\mathbb{E}[au(X_1, \ldots, X_n) + bv(X_1, \ldots, X_n)] = a\mathbb{E}[u(X_1, \ldots, X_n)] + b\mathbb{E}[v(X_1, \ldots, X_n)]$
			$u(x_1, \ldots, x_n) \le v(x_1, \ldots, x_n) \forall (x_1, \ldots, x_n) \rightarrow \mathbb{E}[u(X_1, \ldots, X_n)] \le \mathbb{E}[v(X_1, \ldots, X_n)]$
			$Y = a_1X_1 + \ldots + a_nX_n$
			$\mathbb{E}[Y] = \displaystyle\sum_{j = 1}^n a_j \mathbb{E}[X_j]$
			$\text{var}(Y) = \displaystyle\sum_{j = 1}^n \sum_{k = 1}^n a_j a_k \text{cov}(X_j, X_k)$
			$X_j \text{ are independent} \rightarrow \text{var}(Y) = \displaystyle\sum_{j = 1}^n a_j^2 \text{var}(X_j)$
			$M_Y(t) = \displaystyle\prod_{j = 1}^n M_{X_j}(a_jt)$
			For i.i.d $X_j$ with mean $\mu$ and standard deviation $\sigma$
			$S_n = \displaystyle\sum_{j = 1}^n X_j$
			$\displaystyle \overline X_n = \frac{1}{n} \sum_{j = 1}^n X_j = \frac{1}{n}S_n$
			$\mathbb{E}[S_n] = \displaystyle\sum_{j = 1}^n \mathbb{E}[X_j] = \sum_{j = 1}^n \mu = n\mu$
			$\mathbb{E}[\overline X_n] = \mu$
			$\text{var}(S_n) = \displaystyle\sum_{j = 1}^n \text{cov}(X_j, X_j) = \sum_{j = 1}^n \text{var}(X_j) = n\sigma^2$
			$\text{var}(\overline X_n) = \frac{\sigma^2}{n}$
			$(X_n \rightarrow X \text{ in probability as } n \rightarrow \infty) \leftrightarrow P(|X - X_n| \ge \varepsilon) \rightarrow 0 \text{ as } n \rightarrow \infty \text{ for any } \varepsilon$
			- $\displaystyle \overline X_n = \frac{1}{n}\sum_{j = 1}^n X_j \rightarrow \mu \text{ as } n \rightarrow \infty$
				Weak law of large numbers
				The sample average random variable approaches in probability the expected value of each sample as we increase the number of samples
			- $P(X \ge \lambda) \le \frac{\mathbb{E}[X]}{\lambda}$
				Markov’s Inequality
			- $P(X \ge \lambda) \le \frac{\mathbb{E}[X^k]}{\lambda^k}$
				Generalized Markov’s Inequality
				$\lambda > 0$
				$k \ge 1$
			- $P(|X - \mu| \ge \lambda) \le \frac{\sigma^2}{\lambda^2}$
				Chebyshev’s Inequality
				$\lambda > 0$
			$M_X(t) = M_Y(t) \rightarrow X,Y \text{ i.i.d.}$
			$M_{S_n}(t) = [M(t)]^n$
			$M_{\overline X_n}(t) = [M(\frac{t}{n})]^n$
			$(X_n \rightarrow X \text{ in distribution as } n \rightarrow \infty) \leftrightarrow F_{X_n}(x) \rightarrow F_X(x) \text{ as } n \rightarrow \infty$
			$(X_n \rightarrow X \text{ in distribution as } n \leftrightarrow M_{X_n}(t) \rightarrow M_X(t) \text{ as } n\rightarrow \infty, ~ h > 0 \cap t \in (-h, h)$
			$\left(X_j \sim \mathcal{N}(\mu_j, \sigma_j^2), ~ Y = \displaystyle\sum_{j = 1}^n a_j X_j \right) \rightarrow Y = \mathcal{N}\left(\displaystyle\sum_{j = 1}^n \mu_j a_j, \sum_{j = 1}^n \sigma_j^2 a_j^2\right)$
			$\text{var}(\overline X_n) = \mathbb{E}[(\overline X_n - \mu)^2] = \frac{\sigma^2}{n}$
			- $\text{Central Limit Theorem: } \frac{\overline X_n - \mu}{\sigma / \sqrt{n}} \rightarrow \mathcal{N}(0,1) \text{ in distribution as } n \rightarrow \infty$
				States that the sample average random variable approaches a normal distribution given a large enough sample size
				3B1B Video: https://www.youtube.com/watch?v=zeJD6dqJ5lo
				“Sample size” here is not to be confused with the number of simulations taken when we are trying to sus out a normal distribution curve. So at ~7:04 in the video, # Sums refers to the number of simulations, but the sample size here is only 10.
				Results:
				$\overline X_n \approx \mu + \frac{\sigma}{\sqrt{n}}Z$
				$\overline X_n \approx \mathcal{N}(\mu, \frac{\sigma^2}{n})$
				$S_n = \displaystyle\sum_{j = 1}^n X_j \approx \mathcal{N}(n\mu, n\sigma^2)$
			- $$P(X \le l) \approx \Phi\left(\frac{l + \frac{1}{2} - np}{\sqrt{np(1 - p)}}\right)\\
			P(X \ge k) \approx \Phi\left(\frac{k - \frac{1}{2} - np}{\sqrt{np(1 - p)}}\right)\\
			P(k \le X \le l) \approx \Phi\left(\frac{l + \frac{1}{2} - np}{\sqrt{np(1 - p)}}\right) - \Phi\left(\frac{k - \frac{1}{2} - np}{\sqrt{np(1 - p)}}\right)$$
				DeMoivre-Laplace Correction
	- Algebra 𝐗
		- $\text{max}(a,b)=\frac{a+b}{2}+\sqrt{\left(\frac{a+b}{2}\right)^{2}-ab}=\frac{a+b+|a-b|}{2}\\\text{min}(a,b)=\frac{a+b}{2}-\sqrt{\left(\frac{a+b}{2}\right)^{2}-ab}=\frac{a+b-|a-b|}{2}$
			This property can be used to solve for $a$ or $b$ if all we know are their sum and product, which is useful for factoring. 
			E.g. to factor $x^2+52x+672$, we do:
			$a=\frac{52}{2}+\sqrt{(\frac{52}{2})^2-672}=26+\sqrt{676-672}=26+2=28\\b=52-a=52-28=24$
		- Factoring Algorithm for $ax^2+bx+c$
			E.g. for $2x^2+3x+1$
			(1) $\frac{1}{2}((2x)^2+3(2x)+2)$
			(2) $\frac{1}{2}(2x+1)(2x+2)$
			(3) $(2x+1)(x+1)$
			Simplified:
			$ax^2+bx+c=\frac{1}{a}(u^2+bu+ua),~u=ax$
		- Quanternions
			$i^2 = j^2 = k^2 = ijk = -1$
		- Geometric Algebra
			- Axioms
				(1) $(ab)c = a(bc) = abc$
				(2) $a(b + c) = ab + ac$
				(3) $aa = a^2 \in \mathbb{R}$
			- Notation
				Multivectors: capital letters $A, B, C, \ldots$
				Vectors: lowercase letters $a, b, c$
				Scalars: Greek letters $\alpha, \beta, \gamma$ or subscripted lowercase letters $a_1, a_2, b_1$
				$A = \sum_r \braket{A}_r$
				$\braket{A} = \braket{A}_0$
				$A = a \wedge b \wedge \ldots \wedge c \rightarrow A \text{ is a blade}$
			$ab = \frac{ab + ba}{2} + \frac{ab - ba}{2} = a \cdot b + a \wedge b$
			$a^{-1} = \frac{a}{a^2}$
			$I = e_1e_2, ~ I^2 = -1$
			$aI = -Ia = a_1e_2 - a_2e_1$
			$aa=|a|^2$
			| Product Type | Notation | Returns | Example | $=$ | Priority in Order of Operations |
			|  |  |  |  |  |  |
			| Dot | $a \cdot b$ | Scalar | $(1,2) \cdot (2,3)$ | $8$ | 1 |
			| Cross | $a \times b$ | Vector | $(1,2, 3) \times (4, 5, 6)$ | $(-3,6,-3)$ | 2 |
			| Complex | $Z * W$ | Complex | $(1-2i)(3+4i)$ | $11-2i$ | N/A |
			| Wedge | $a \wedge b$ | Bivector | $e_1 \wedge e_2$ | $-e_2 \wedge e_1 = e_1e_2$ | 2 |
			| Geometric | $ab$ | Scalar + Bivector | $(e_1+e_2)e_2$ | $e_1e_2+e_2e_2 = e_1e_2 + 1$ | 3 |
		- $A_r \cdot B_s = \braket{AB}_{|r - s|}$
			The dot product decreases the grade of the multivector from $r$ and $s$ to $r - s$
			e.g. The grade of $a \cdot b$ for $a,b \in V = 1 - 1 = 0$
		- $A_r \wedge B_s = \braket{AB}_{r + s}$
			The wedge product increases the grade of the multivector from $r$ and $s$ to $r + s$
			e.g. The grade of $a \wedge b$ for $a, b \in V = 1 + 1 = 2$, which is the grade of a bivector
	- Trigonometry 🔺
		- $\text{SOHCAHTOA}$
			$\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}}$
			$\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}}$
			$\tan\theta=\frac{\text{opposite}}{\text{adjacent}}$
		- $\text{CHOSHACAO}$
			$\csc\theta=\frac{\text{hypotenuse}}{\text{opposite}}$
			$\sec\theta=\frac{\text{hypotenuse}}{\text{adjacent}}$
			$\cot\theta=\frac{\text{adjacent}}{\text{opposite}}$
		| $\theta$ | $0$ | $\frac{\pi}{6}(30\degree)$ | $\frac{\pi}{4}(45\degree)$ | $\frac{\pi}{3}(60\degree)$ | $\frac{\pi}{2}(90\degree)$ | $\pi(180\degree)$ | $\frac{3\pi}{2}(270\degree)$ |
		|  |  |  |  |  |  |  |  |
		| $\sin$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ |
		| $\cos$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-1$ | $0$ |
		| $\tan$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | $\varnothing$ | $0$ | $\varnothing$ |
		| $\csc$ | $\varnothing$ | $2$ | $\sqrt{2}$ | $\frac{2\sqrt{3}}{3}$ | $1$ | $\varnothing$ | $-1$ |
		| $\sec$ | $1$ | $\frac{2\sqrt{3}}{3}$ | $\sqrt{2}$ | $2$ | $\varnothing$ | $-1$ | $\varnothing$ |
		| $\cot$ | $\varnothing$ | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ | $0$ | $\varnothing$ | $0$ |
		$\sin^2\theta+\cos^2\theta=1$
		$\tan^2\theta+1=\sec^2\theta$
		$1+\cot^2\theta=\csc^2\theta$
		$\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$
		$\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$
		$\sin(2\theta)=2\sin\theta\cos\theta$
		$\cos(2\theta)=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1=1-2\sin^2\theta$
		$\sin^2\theta=\frac{1-\cos(2\theta)}{2}$
		$\cos^2\theta=\frac{1+\cos(2\theta)}{2}$$\frac{}{}$
		![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b3a7d9a6-0f6d-49dd-911b-e750ffb3da80/Untitled.png)
		$\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}$
		$C=\sqrt{A^2+B^2-2AB\cos c}$
		- Hyperbolic Trig Functions
			Video definition: https://www.youtube.com/watch?v=aC5cYc7XhIs
			Desmos Interactive: https://www.desmos.com/calculator/7n3paqu1vg
			$\sinh x = \frac{e^x - e^{-x}}{2}$
			$\cosh x = \frac{e^x + e^{-x}}{2}$
			$\tanh x = \frac{\sinh x}{\cosh x}$
			$\text{csch } x = \frac{1}{\sinh x}$
			$\text{sech} x = \frac{1}{\cosh x}$
			$\text{coth } x = \frac{\cosh x}{\sinh x}$
			$\sinh (-x) = -\sinh x$
			$\cosh (-x) = \cosh x$
			$\cosh^2 x - \sinh^2 x  = 1$
			$1 - \tanh^2 x = \text{sech}^2 x$
			$\sinh(x + y) = \sinh x \cosh y + \cosh x \sinh y$
			$\cosh (x + y) = \cosh x \cosh y + \sinh x \sinh y$
	- Geometry ⚽️
		$\sum(\angle_\text{exterior of polygon})=2\pi=360\degree$
		$\sum(\angle_\text{interior of n-gon})=\pi(n-2)=180\degree(n-2)$
		$\angle_\text{interior of regular n-gon}=\pi-\frac{2\pi}{n}=180\degree-\frac{360\degree}{n}$
		- $\text{Area}_\text{regular polygon}=\frac{\text{apothem*perimeter}}{2}$
			The apothem is the closest perpendicular distance between the center and the edge of the regular polygon
	- Sequences/Series Σ
		https://brilliant.org/wiki/terminology-of-sequences-and-series/
		- $\text{Arithmetic}$
			- $a_{n_f}=a_{n_i}+d(n_f-n_i);\space a_n=a_1+d(n-1)$
				This is the formula for the next element in an arithmetic sequence
				$a_{n_f}$ is the $n_f$th element of the sequence while $a_{n_i}$ is the $n_i$th element of the sequence. $d$ is the difference between each element in the sequence. $a_i$ by default starts at 0.
				An example would be {2, 5, 8, 11, 14, …}, where $d=3$ and $a_1=2$. Then the 6th element of this sequence would be $a_{n_f}=2+3(6-1)=17$
			- $S=\frac{n_f - n_i + 1}{2}(a_{n_f}+a_{n_i}), ~ n_f - n_i = \frac{a_{n_f} - a_{n_i}}{d}$
				$S$ is the sum of elements of an arithmetic sequence with $a_{n_f}$ being the last element and $a_{n_i}$ being the first element in the series
				The visual intuition is to imagine a grid staircase with the first step being $a_{n_i}$ high and the last step being $a_{n_f}$ high with $n$ number of total steps. Duplicating the staircase and aligning them together to form a rectangle allows you to count the total number of squares:
				![maxresdefault.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dea41bcc-7962-4da6-8fea-5118c5a4859e/maxresdefault.jpg)
				Desmostartion of the formula:
				https://www.desmos.com/calculator/1rofjxm3op
			- $n=\frac{a_{n_f}-a_{n_i}}{d}+1$
				$n$ is the number of elements in the arithmetic series
		- $\text{Geometric}$
			- $a_{n_f}=a_{n_i}r^{(n_f-n_i)};~a_n=a_1r^{n-1}$
				This is the formula for the next element in a geometric sequence
				$a_{n_f}$ is the $n_f$th element of the sequence while $a_{n_i}$ is the $n_i$th element of the sequence. $r$ is the ratio between the $(n+1)$th element and the $n$th element the sequence. $a_0$ by default starts at 1.
				An example would be {2, 6, 18, 54, 162, …}, where $r=3$ and $a_1=2$. Then the 6th element of this sequence would be $a_{n_f}=2\cdot 3^{6-1}=486$
			- $S = \frac{a_{n_i}(r^{n_f-n_i+1}-1)}{r-1},~r \ne 1; ~ S_\infty = \frac{a_{n_i}}{1-r}, ~ |r| < 1$
				$S$ is the sum of elements in a geometric series from $a_{n_0}$ to $a_{n_f}$
				Derivation:
				 $S_{n_f} = a_{n_0} + a_{n_0}r + \ldots + a_{n_0}r^{n_f - n_0 + 1}$
				$S_{n_f}r = S_{n_f} - a_{n_0} + a_{n_0}r^{n_f - n_0}$
				$S_{n_f}(r - 1) = a_{n_0}r^{n_f - n_0} - a_{n_0}$
				$S_{n_f} = \frac{a_{n_0}(r^{n_f - n_0} - 1)}{r - 1}, ~ r \ne 1$
				Desmostration: https://www.desmos.com/calculator/quepjw8doa
			- $n = \frac{\ln \left (\frac{a_{n_f}}{a_{n_i}} \right )}{\ln(r)} + 1$
				$n$ is the number of elements in the geometric series
		$\displaystyle\sum_{n=1}^Nn=\frac{n(n+1)}{2}$
		$\displaystyle\sum_{n=1}^Nn^2=\frac{n(n+1)(2n+1)}{6}$
		$\displaystyle\sum_{n=1}^Nn^3=\left(\frac{n(n+1)}{2}\right)^2$
		- $f(x)=f(a)+f'(a)\frac{(x-a)}{1!}+f''(a)\frac{(x-a)^2}{2!}+f'''(a)\frac{(x-a)^3}{3!}+\ldots=\displaystyle\sum^\infty_{n=0} f^{(n)}(a)\frac{(x-a)^n}{n!}$
			Taylor Series
			Maclaurin series is when $a=0$
			https://www.youtube.com/watch?v=LDBnS4c7YbA
		$e^x=\displaystyle\sum^\infty_{k=0}\frac{x^k}{k!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\ldots$
		$$\sin x=
		\displaystyle\sum^\infty_{k=0}(-1)^k\frac{x^{2k+1}}{(2k+1)!}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\ldots$$
		$$\cos x=
		\displaystyle\sum^\infty_{k=0}(-1)^k\frac{x^{2k}}{(2k)!}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\ldots$$
		$$\frac{1}{1-x}=
		\displaystyle\sum^\infty_{k=0}x^k=1+x+x^2+x^3+\ldots\text{for } |x|<1$$
		$\ln(1+x)=\displaystyle\sum^\infty_{k=0}(-1)^{k+1}\frac{x^{k}}{k}=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\ldots(\text{if } -1<x\le1)$
	- Calculus $\frac{d}{dx}$
		- Derivatives
			(1) $(f\pm g)'(x)=f'(x)\pm g'(x)$
			(2) $(f\cdot g)'=f'g+fg'$
			(3) $(\frac{f}{g})'=\frac{f'g-fg'}{g^2}$
			(4) $\frac{d}{dx}(f(g(x))=f'(g(x))\cdot g'(x)$
			(1) $(x^n)'=nx^{n-1}$
			(2) $(e^x)'=e^x$
			(3) $(\ln x)'=\frac{1}{x}$
			(4) $(\sin x)'=\cos x$
			(5) $(\cos x)'=-\sin x$
			(6) $(\tan x)'=\sec^2 x$
			(7) $(\csc x)' = -\csc x \cot x$
			(8) $(\sec x)' = \sec x \tan x$
			(9) $(\cot x)' = -\csc^2 x$
			(10) $(\sin^{-1}x)' = \frac{1}{\sqrt{1 - x^2}}$
			(11) $(\cos^{-1}x)' = -\frac{1}{\sqrt{1 - x^2}}$
			(12) $(\tan^{-1}x)'=\frac{1}{1+x^2}$
			(13) $(\csc^{-1}x)'=-\frac{1}{|x| \sqrt{x^2 - 1}}$
			(14) ($\sec^{-1}x)' = \frac{1}{|x| \sqrt{x^2 - 1}}$
			(15) $(\cot^{-1}x)' = -\frac{1}{1+x^2}$
			(16) $(\sinh^{-1}x)' = \frac{1}{\sqrt{x^2 + 1}}, ~  x > 1$
			(17) $(\cosh^{-1}x)' = \frac{1}{\sqrt{x^2 - 1}}, ~ |x| < 1$
			(18) $(\tanh^{-1} x) = \frac{1}{1 - x^2}, ~ |x| < 1$
			(19) $(\text{csch}^{-1} ~ x)' = -\frac{1}{|x| \sqrt{1 + x^2}}, ~ x \ne 0$
			(20) $(\text{sech}^{-1} ~ x)' = -\frac{1}{x \sqrt{1 - x^2}}, ~ 0 < x < 1$
			(21) $(\coth^{-1} x)' = \frac{1}{1 - x^2}, ~ |x| > 1$
		- Integrals
			- $\frac{d}{dx}\int_a^x f(t)dt = f(x)$
				Fundamental Theorem of Calculus Part 1
				$\frac{d}{dx}\int_a^{g(x)} f(t)dt = f(g(x))g'(x)$
			- $\int_a^b f(x)dx = F(b) - F(a)$
				Fundamental Theorem of Calculus Part 2
				$F'(x) = f(x)$, meaning $F$ is the antiderivative of $f$
			- $\int(f(g(x))g'(x))dx=\int(f(u))du,\space u=g(x)$
				u-substitution
			- $\int(f'g)dx=fg-\int(fg')dx$
				Integration by parts
			$\int \sin x ~ dx = -\cos x + C$
			$\int \cos x ~ dx = \sin x + C$
			$\int \sec^2 x ~ dx = \tan x + C$
			$\int \sec x \tan x ~ dx = \sec x + C$
			$\int \csc x \cot x ~ dx = -\csc x + C$
			$\int \csc^2 x dx = -\cot x + C$
			$\int \tan x ~ dx = \ln|\sec x| + C$
			$\int \cot x ~ dx = -\ln|\csc x| + C$
			$\int\frac{dx}{x^2+a^2}=\frac{1}{a}\tan^{-1}(\frac{x}{a})+C$
			$\int\frac{dx}{\sqrt{x^2-a^2}}=\sin^{-1}(\frac{x}{a})+C$n
			$\int\frac{dx}{x\sqrt{x^2-a^2}}=\frac{1}{a}\sec^{-1}\frac{|x|}{a}+C$
			- $\int udv = uv - \int vdu$
				Integration by parts
				Derivation:
				$d(uv) = udv + vdu$
				$uv = \int udv + \int vdu$
				$\int udv = uv - \int vdu$
				Tabular Method Tutorial (blackpendredpen): https://www.youtube.com/watch?v=2I-_SV8cwsw
	- Multivariable Calculus $\iiint$
		- Derivatives
			$\exists f(x,y)\rightarrow f_x=\frac{\partial f}{\partial x},\space f_y=\frac{\partial f}{\partial y}$
			- $\frac{df}{ds} = \nabla_{\vec u}f=\nabla f\cdot\frac{\vec u}{\Vert\vec u\Vert} = \nabla f \cdot \hat u = |\nabla f|\cos \theta$
				This is the directional derivative of $f$ in the direction of $\vec u$
		- Jacobians
			$$J=\left|\frac{\partial(x, y)}{\partial(u,v)}\right|=
			\begin{vmatrix}
			\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\
			\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
			\end{vmatrix}$$
			$\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=\left|\frac{\partial(u,v)}{\partial(x,y)}\right|^{-1}$
			$$J=\left|\frac{\partial(x, y, z)}{\partial(u,v,w)}\right|=
			\begin{vmatrix}
			\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} & \frac{\partial x}{\partial w} \\
			\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} & \frac{\partial y}{\partial w} \\
			\frac{\partial z}{\partial u} & \frac{\partial z}{\partial v} & \frac{\partial z}{\partial w} 
			\end{vmatrix}$$
			$\left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|=\left|\frac{\partial(u,v,w)}{\partial(x,y,z)}\right|^{-1}$
			$J_{\text{polar}}=J_{\text{cylindrical}}=r$
			$x=r\cos \theta, \space y=r\sin \theta, \space z=z$
			$r=\sqrt{x^2+y^2},\space \theta=\tan^{-1}(\frac{y}{x}), \space z=z$
			$J_{\text{spherical}}=\rho^2\sin(\phi)$
			$x=\rho\sin\phi\cos\theta,\space y=\rho\sin\phi\sin\theta,\space z=\rho\cos\phi$
			$\rho=\sqrt{x^2+y^2+z^2},\space \theta=\tan^{-1}(\frac{y}{x}),\space \phi=\cos^{-1}(\frac{z}{\rho})$
		- Mass and Probability
			$M=\text{mass},\space\delta(x,y)=\text{mass density},\space$ 
			$M=\iint_\mathscr{D}\delta(x,y)\space dA$
			$M_y=\iint_\mathscr{D}x\delta(x,y)\space dA\text{ (y-moment)}$
			$M_x=\iint_\mathscr{D}y\delta(x,y)\space dA\text{ (x-moment)}$
			$(\bar x,\bar y)=(\frac{M_y}{M},\frac{M_x}{M})$
			$I_x=\iint_\mathscr{D}x^2\delta(x,y)\space dA\text{ (moment of inertia about x-axis)}$
			$I_y=\iint_\mathscr{D}y^2\delta(x,y)\space dA\text{ (moment of inertia about y-axis)}$
			$I_O=\iint_\mathscr{D}(x^2+y^2)\delta(x,y)\space dA$
			$M=\text{mass},\space\delta(x,y,z)=\text{mass density},\space$ 
			$M=\iiint_\mathscr{W}\delta(x,y,z)\space dV$
			$M_{yz}=\iiint_\mathscr{W}x\delta(x,y,z)\space dV\text{ (yz-moment)}$
			$M_{xz}=\iiint_\mathscr{W}y\delta(x,y,z)\space dV\text{ (xz-moment)}$
			$M_{xy}=\iiint_\mathscr{W}z\delta(x,y,z)\space dV\text{ (xy-moment)}$
			$(\bar x,\bar y,\bar z)=(\frac{M_\text{yz}}{M},\frac{M_\text{xz}}{M},\frac{M_\text{xy}}{M})$
			$I_x=\iiint_\mathscr{W}(y^2+z^2)\delta(x,y,z)\space dV\text{ (moment of inertia about x-axis)}$
			$I_y=\iiint_\mathscr{W}(x^2+z^2)\delta(x,y,z)\space dV\text{ (moment of inertia about y-axis)}$
			$I_z=\iiint_\mathscr{W}(x^2+y^2)\delta(x,y,z)\space dV\text{ (moment of inertia about z-axis)}$
			$I_O=\iiint_\mathscr{W}(x^2+y^2+z^2)\delta(x,y,z)\space dV$
			$P=\text{total probability},\space p_X(x)=\text{probability density function for continuous random variable X}$
			$P=\int_{-\infty}^\infty p_X(x)\space dx=1$
			- $\mathbb{P}[a<X\le b]=\int_a^bp_X(x)\space dx$
				This is the probability that $a<X\le b$
			- $\mathbb{E}[f(X)]=\int_{-\infty}^\infty f(x)p_X(x)\space dx$
				This is the expected value of $f(X)$
				Only applies if $f:\mathbb{R}\rightarrow\mathbb{R}$
			$P=\text{total probability},\space p_{X,Y}(x,y)=\text{probability density function for continuous random variables X and Y}$
			$P=\iint_{-\infty}^\infty p_{X,Y}(x,y)dxdy=1$
			- $\mathbb{P}[(X,Y)\in D]=\iint_Dp_{X,Y}(x,y)dA$
				This is the probability that $(X,Y)\in D$
			- $\mathbb{E}[f(X,Y)]=\iint_{-\infty}^\infty f(x,y)p_{X,Y}(x,y)dxdy$
				This is the expected value of $f(X,Y)$
				Only applies if $f:\mathbb{R}^2\rightarrow\mathbb{R}$
			$p_X(x)=\int_{-\infty}^\infty p_{X,Y}(x,y)dy$
			$p_Y(y)=\int_{-\infty}^\infty p_{X,Y}(x,y)dx$
		- Operations on Vector Fields
			$\nabla=\left\langle \frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right\rangle (\text{Del Operator})$
			- $\Delta=\nabla^2=\nabla\cdot\nabla=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}+\frac{\partial^2}{\partial z^2}\text{ (Laplace operator)}$
				The Laplacian of a function is akin to the second derivative of a function in 1D calculus. However, there is now more than one input. So $\Delta f=\nabla\cdot(\nabla f)$, which is the divergence of the gradient of $f$. So more positive $\Delta f$ corresponds to minima while more negative $\Delta f$ corresponds to maxima.
				3Blue1Brown video that explains the intuition of the Laplacian:
				https://www.youtube.com/watch?v=EW08rD-GFh0
			- $\nabla f(x,y,z)=\begin{bmatrix}
			\frac{\partial f}{\partial x}\\
			\frac{\partial f}{\partial y}\\
			\frac{\partial f}{\partial z}
			\end{bmatrix}=\vec F,\text{ which is a vector field (not the same as a vector)}$
				The gradient of a scalar field evaluated at a point gives a vector that points toward greatest increase of the scalar field
			$$\text{div}(\vec F)=\nabla\cdot\vec F=\frac{\partial f}{\partial x}+
			\frac{\partial f}{\partial y}+
			\frac{\partial f}{\partial z}$$
			$$\text{curl}(\vec F)=\nabla\times\vec F=\begin{vmatrix}
			\hat i&\hat j&\hat k\\
			\frac{\partial f}{\partial x}&\frac{\partial f}{\partial y}&\frac{\partial f}{\partial z}\\
			F_1&F_2&F_3
			\end{vmatrix}\\=(\frac{\partial F_3}{\partial y}-\frac{\partial F_2}{\partial z})\hat i+(\frac{\partial F_1}{\partial z}-\frac{\partial F_3}{\partial x})\hat j+(\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y})\hat k$$
			- $\vec F\text{ is conservative in 2D }\rightarrow \frac{\partial F_1}{\partial y}=\frac{\partial F_2}{\partial x}$
				This statement is biconditional if $F$ is on a simply connected domain (no holes)
			- $\vec F\text{ is conservative in 3D}\rightarrow\nabla\times F=0$
				This statement is biconditional if $\vec F$ is on a simply connected domain (no holes that prevent any choice of a closed curve from being stretched and deformed to a point without leaving the domain)
		- Scalar, Vector, and Flux Integrals
			- $\text{ Scalar line integral:}\int_\mathscr{C}f(x,y,z)\space ds=\int^{t_f}_{t_0}f(\vec r(t))||\vec r'(t)||\space dt$
				If $f$ represents mass density and $ds$ represents some infinitesimal length of the curve, the scalar line integral would represent the mass of the curve segment
				Might involve finding a parameterization of $f$ in terms of $t$
				- Ex: What is the mass of a wire represented by the curve $y=x^3,\{0\le x\le 1\}\text{ (cm)}$ if its mass density is represented by $f(x,y)=\sqrt{1+9xy}\text{ (g/cm)}$
					$r(t)=\left\langle t,t^3\right\rangle$
					$M\\=\int_C\sqrt{1+9xy}ds\\=\int_0^1\sqrt{1+9t^4}||\left\langle 1,3t^2\right\rangle||dt\\=\frac{14}{5}g$
			- $\text{ Vector line integral:}\int_\mathscr{C}\vec F\cdot\vec t\space ds=\int_\mathscr{C}\vec F\cdot d\vec r=\int_\mathscr{C}(F_1dx+F_2dy+F_3dz)=\\
			\int_{t_0}^{t_f}\vec F(\vec r(t))\cdot\vec r'(t)\space dt$
				$\vec t$ represents the unit tangent vector of the path
				If $\vec F$ represents a vector field for some force, then the vector line integral represents the work done by the force
				$dx=x'(t)dt,\space dy=y'(t)dt,\space dz=z'(t)dt$, where $\vec r'(t)=\left\langle x'(t),y'(t),z'(t)\right\rangle$
			$\int_\mathscr{C}\nabla f\cdot d\vec r=f(S_f)-f(S_0)\\\text{ (Fundamental Theorem of Vector Integrals)}$
			- $\text{2D Flux:}\int_\mathscr{C}\vec F\cdot\hat n\space ds=\int_{t_0}^{t_f}\vec F(\vec r(t))\cdot \vec N(t)\space dt$
				$\hat n$ is obtained by rotating $\hat t$ by $\frac{\pi}{2}$ clockwise
				$\vec t$ can be simplified to just $\vec r'(t)$
			- $\text{Vortex Field}$
				$\vec F(x,y)=\left\langle-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}\right\rangle \text{ if } (x,y)\ne (0,0)$
				Satisfies the cross-partials condition
				Not conservative on paths encircling the origin
			$\vec G(u,v)=(x(u,v),y(u,v),z(u,v))$
			- $\vec T_u(P)=\frac{\partial \vec G(u,v)}{\partial u},\space \vec T_v(P)=\frac{\partial \vec G(u,v)}{\partial v}$
				$\vec T_u$ points toward increasing $u$, 
				$\vec T_v$ points toward increasing $v$, 
			$\vec N(P)=\vec T_u(P)\times \vec T_v(P)$
			$\vec N_\text{sphere}(\theta,\phi)=\left\langle-\cos\theta\sin^2\phi,-\sin\theta\sin^2\phi,-\cos\phi\sin\phi\right\rangle$
			$(\left\langle x,y,z\right\rangle-\vec G(u,v))\cdot \vec N=0\text{ (Equation for tangent plane)}$
			- $\text{Area}(S)=\int_{v_0}^{v_f}\int_{u_0}^{u_f}||\vec N(u,v)||dudv$
				$\vec N(u,v)$ is the same as $||\vec T_u\times\vec T_v||$, which represents the area of a small paralleleogram on the surface $S$. This representation happens because $||\vec T_u\times\vec T_v||$ is $||\vec T_u||\space||\vec T_v||\sin(\theta)$, where $\theta$ is the angle between the two vectors that make up the parallelogram. $\vec T_u$ for example, is $\frac{\partial \vec G}{\partial u}\Delta u=\vec G(u+\Delta u, v)-\vec G(u,v)=\vec u$
			- $\text{Scalar surface integral:}\iint_Sf(x,y,z)\space dS=\int_{v_0}^{v_f}\int_{u_0}^{u_f}f(\vec G(u,v))||\vec N(u,v)||\space dudv$
				$\iint_CdS=\text{Area}(s)$
				Is akin to scalar line integral in that it is the mass of the surface if $f$ is mass density
			- $\text{Vector surface integral/3D Flux: }\iint_S\vec F\cdot \hat n\space dS=\iint_S\vec F\cdot d\vec S=\int_{v_0}^{v_f}\int_{u_0}^{u_f}\vec F(\vec G(u,v))\cdot \vec N(u,v)\space dudv$
				Physically measures the amount of “stuff” (say electric field or water current) that passes through a surface
				Is akin to the vector line integral and 2D flux, but for surfaces.
				Heuristically, $d\vec S=\vec Ndudv,\space dS=||\vec N||dudv$
		- Fundamental Theorems of Vector Analysis
			Intuition: https://www.youtube.com/watch?v=hJD8ywGrXks
			- $\text{Green's Theorem:}\iint_\mathscr{D}\text{curl}_z(\vec F)\space dA=\oint_\mathscr{C}\vec F\cdot d\vec r$
				$\text{curl}_z(\vec F(x,y))=\frac{\partial F_2}{\partial x}-\frac{\partial F_1}{\partial y}$. It is the z-component of the curl of $F$ 
				$\mathscr{C}$ is the boundary of $\mathscr{D}$ oriented positively, or “going counter clockwise”
				The intuition is that $\mathscr{C}$ is a closed curve going counter clockwise, and $\text{curl}_z(\vec F)$ represents the amount of counter clockwise rotation around a point. The total “alignment” between the vector field $\vec F$ and the counter clockwise boundary $\mathscr{C}$ can be obtained by summing up the curls of all the points within our boundary. This idea is explained in this video:
				https://www.youtube.com/watch?v=8SwKD5_VL5o
			- $\text{Green's Theorem (flux form): }\iint_D\text{div}(\vec F)\space dA=\oint_{\partial D}\vec F\cdot\hat n\space ds=\displaystyle\sum_{n=1}^N\oint_{\mathscr{C}_n}\vec F\cdot\hat n\space ds$
				The intuition is that the amount of stuff (e.g. fluid) represented by $\vec F$ leaving a point is represented by $\text{div}(F)$. The total amount of fluid leaving an entire domain would thus be the sum of divergences of all points within the domain and also the flux integral about the path of the domain’s boundary.
			- $\text{Mean value property: }f(x,y)\text{ is harmonic}\rightarrow\forall(x,y)\in \mathscr{D},f(x,y)=\frac{1}{\text{perimeter}}\oint_{\partial \mathscr{D}}f(x,y)\space ds$
				A function is harmonic iff $\Delta f=0$
				This essentially states that if a function is harmonic, the value of the function within any domain is equal to the average value of the domain’s perimeter.
			- $\iint_\mathscr{D}f\text{ div}(\vec F)\space dA=\oint_{\partial\mathscr{D}}f\space \vec F\cdot\hat n\space ds-\iint_\mathscr{D}\nabla f\cdot \vec F\space dA$
				Analagous to integration by parts in 1D, but for 2D vectors
				$\int_a^bf(x)g'(x)\space dx=[f(x)g(x)]_{x=a}^{x=b}-\int_a^bf'(x)g(x)\space dx$
			- $\iint_\mathscr{D}f\space \Delta g\space dA=\oint_{\partial \mathscr{D}}f\space\nabla g\cdot\hat n\space ds-\iint_\mathscr{D}\nabla f\cdot\nabla g\space dA$
				Also called Green’s Formula
				Another form of integration by parts in 2D.
				Proof: Take $\vec F=\nabla g$ and apply integration by parts in 2D
			- $\text{Stoke's Theorem: }\iint_S\text{curl}(\vec F)\cdot d\vec S=\oint_{\partial S}\vec F\cdot  d\vec r=\int_{u_0}^{u_f}\int_{v_0}^{v_f}\text{curl}(\vec F(\vec G(u,v)))\cdot \vec N(u,v)\space dvdu$
				Is like Green’s Theorem, but for 2D surfaces in 3D space.
				$\partial S$ is the positively oriented boundary of $S$, meaning you apply the right hand rule such that if the normal points out of the surface, the thumb points toward the surface while the curled fingers dictate the positive orientation of $\partial S$. Another way of viewing this is to imaging you are on the boundary with your body pointing upright in the same direction as the normal. If you follow the direction of $\partial S$, then your right foot should be closer to off the edge of the boundary
			- $\oint_S\text{curl}(\vec F)\cdot\vec{dS}=0$
				States that the curl of a function over a closed surface is $0$.
			$\vec F\text{ has a vector potential  }\leftrightarrow\vec F=\text{curl}(A)\rightarrow\text{div}(A)=0$
			$\text{curl}(\nabla f)=0,\space \text{div(curl }\vec F))=0$
			- $\text{Divergence Theorem: }\iiint_\mathscr{W}\text{div}(\vec F)\space dV=\oint_S\vec F\cdot d\vec S$
				Also called Gauss’s Theorem
				Like 3D version of Stoke’s Theorem, where $S$ is a positively oriented boundary of $W$. That essentially means the normal of $S$ points outward.
			- $\iiint_\mathscr{W}f\space \text{div}(\vec F)\space dV=\oint_{\partial \mathscr{W}}f\space\vec F\cdot d\vec S-\iiint_\mathscr{W}\nabla f\cdot \vec F\space dV$
				Integration by parts in 3D
				Proof: apply product rule to $\iiint_\mathscr{W}\text{div}(f\textbf{F})\space dV=\oint_{\partial\mathscr{W}}f\textbf{F}\cdot dS$
			- $\iiint_\mathscr{W}f\Delta g\space dV=\oint_{\partial\mathscr{W}}f\space\nabla g\cdot dS-\iiint_\mathscr{W}\nabla f\cdot\nabla g\space dV$
				Take $\textbf{F}=\nabla g$
	- Linear Algebra 👾
		Textbook: Linear Algebra with Applications (5th ed.) Otto Bretscher
		https://math.mit.edu/~dyatlov/54summer10/matalg.pdf
		https://www.statlect.com/matrix-algebra/
		- Basics
			- $\text{An }n\times m\text{ matrix has }n\text{ rows and }m\text{ columns:}$
			$$\begin{bmatrix}
			a_{11}&\cdots&a_{1m}\\
			\vdots&\ddots&\vdots\\
			a_{n1}&\cdots&a_{nm}\\
			\end{bmatrix}$$
				A system of linear equation’s coefficients represented by a coeffecient matrix would have $n$ equations and $m$ variables
			- $\text{Elementary Row Operations}$
				(1) Scale a row by a nonzero factor
				(2) Shuffle rows
				(3) Add nonzero multiple of one row to another row
				These are the only operations allowed when solving systems in matrix form
			- $\text{Reduced row-echelon form}$
				(i) The first nonzero entry must be a 1 in a nonzero row, called the leading 1/pivot
				(ii) If a column has a pivot, all other entries in the column must be 0
				(iii) All rows with pivots must contain a pivot above and to the left
				E.g.:
				$$\begin{bmatrix}
				0&1&0&3&5\\
				0&0&1&3&1\\
				0&0&0&0&0
				\end{bmatrix}$$
				Finding $\text{rref}(A)$ of your augmented matrix $A$ of your system of equations results in a solution to the system where the above matrix would represent:
				$$\begin{cases}
				x_2+3x_4=5\\
				x_3+3x_4=1
				\end{cases}$$
			- $\text{Consistency}$
				A system is consistent iff there is 1 or infinite solutions to it; otherwise, the system is inconsistent
				A linear system is inconsistent iff $\text{rref(A)}$ has the row:
				$$\begin{bmatrix}
				0 & 0&\cdots&1
				\end{bmatrix}$$
			- $\text{Rank}$
				$\text{rank(A) = number of leading 1's in rref(A)}$
				$\text{(1) rank(A)}\le n$
				$\text{(2) rank(A)}\le m$
				$\text{(3) System is inconsistent}\rightarrow\text{rank(A)}\lt n$
				If $A\vec x$ has only one solution, then
				$\text{rank}(A)=m$
			- $A=n\times p,\space B=p\times m,\space AB=n\times m$
				$$AB=\begin{bmatrix}
				A\vec v_1&A\vec v_2&\cdots&A\vec v_m
				\end{bmatrix},\space B=\begin{bmatrix}
				\vec v_1&\vec v_2&\cdots&\vec v_m
				\end{bmatrix},\space A\vec v_i=v_{i_1}A_{j1}+v_{i_2}A_{j2}+\ldots + v_{i_m}A_{jm}$$
			$T:\mathbb{R}^m\rightarrow\mathbb{R}^n,\space A=n\times m$
			- $\text{Properties of Matrix Multiplication}$
				Not commuative $AB \ne BA$
				Associative $A(BC) = (AB)C$
				Has identity, $AI_p=I_nA=A$
				Distributive for matrix and scalar multiplication $A(B+C)=AB+AC \,\forall A\in\mathbb{M},\mathbb{R}$
		- Transformations
			- $\text{Linear Transformations}$
			$(1)\space A(\vec x+\vec y)=A\vec x+A\vec y$
			$(2)\space A(k\vec x)=kA(\vec x)$
				Linear transformations necessarily follow (1) and (2)
				Another definition is that a function $T(\vec x)$ is a linear transformation if there exists an $n\times m$ matrix $A$ such that  $T(\vec x)=A\vec x$ for all $\vec x$ in $R^m$
			- $\text{scale}(\vec x)=
			\begin{bmatrix}
			k&0\\
			0&k
			\end{bmatrix}\vec x$
				$k$ is the scaling factor
			- $$\text{proj}_{\hat u}\vec x=(\vec x\cdot \hat u)\hat u=
			\begin{bmatrix}
			u_1^2&u_1u_2\\
			u_1u_2&u_2^2
			\end{bmatrix}\vec x
			=\begin{bmatrix}
			u_1^2&u_1u_2&u_1u_3\\
			u_1u_2&u_2^2&u_2u_3\\
			u_1u_3&u_2u_3&u_3^2
			\end{bmatrix}\vec x$$
				This  is the projection of $\vec x$ onto $\hat u$, and it is akin to casting a light perpendicular to $\hat u$ so that $\vec x$ casts a shadow on $\hat u$
				Another useful form is $$\frac{1}{w_1^2+w_2^2}\begin{bmatrix}
				w_1^2&w_1w_2\\
				w_1w_2&w_2^2
				\end{bmatrix}\vec x$$
				$\vec w$ is a non-normalized vector
			- $$\text{ref}_{\hat u}(\vec x)=\begin{bmatrix}
			a&b\\
			b&-a
			\end{bmatrix}\vec x,\space a^2+b^2=1$$
				This is the reflection of $\vec x$ about a vector $\vec u$
				Another useful form is $(2A-I_2)\vec x$, where $A$ is the coefficient matrix from $\text{proj}_{\vec u}\vec x$
				The way to think about reflections are that $$\begin{bmatrix}
				a\\
				b
				\end{bmatrix}$$ is the reflection of $$\begin{bmatrix}
				1\\
				0
				\end{bmatrix}$$, and $$\begin{bmatrix}
				-b\\
				a
				\end{bmatrix}$$ is the reflection of $$\begin{bmatrix}
				0\\
				1
				\end{bmatrix}$$
			- $$\text{rot}(\vec x)=\begin{bmatrix}
			\cos\theta&-\sin\theta\\
			\sin\theta&\cos\theta
			\end{bmatrix}\vec x=
			\begin{bmatrix}
			a&-b\\
			b&a
			\end{bmatrix}\vec x,\space a^2+b^2=r^2$$
				$\theta$ is the rotation from the x-axis toward the y-axis
				$r$ is the scaling factor of the vector, with 1 being no scaling
				One can imagine the transformation as scaling and rotating the vector$$\begin{bmatrix}
				1\\
				0
				\end{bmatrix}$$to$$\begin{bmatrix}
				a\\
				b
				\end{bmatrix}$$, transforming the curve/coordinate plane together as well
			- $$\text{vshear}(\vec x)=
			\begin{bmatrix}
			1&0\\
			k&1
			\end{bmatrix}\vec x$$
				A vertical shear transformation would keep rectangle’s vertical sides vertical
				$k$ is the shearing factor
			- $$\text{hshear}(\vec x)=
			\begin{bmatrix}
			1&k\\
			0&1
			\end{bmatrix}\vec x$$
				A hortizontal shear transformation would keep a rectangle’s horizontal sides horizontal
		- Invertibility
			- $\text{Rules}$
				For $A=n\times n$, either all hold true or none do:
				1) $\exists A^{-1}$
				2) $\exists!\vec x\in\mathbb{R}^n:A\vec x=\vec b\space\forall\space\vec b\in\mathbb{R}^n$
				3) $\text{rref}(A)=I_n$
				4) $\text{rank}(A)=n$
				5) $\text{im}(A)=\mathbb{R}^n$
				6) $\text{ker}(A)=\{\vec 0\}$
				7) $\text{Column vectors of }A\text{ form a basis of }\mathbb{R}^n$
				8) $\text{Column vectors of }A\text{ span }\mathbb{R}^n$
				9) $\text{Column vectors of }A\text{ are linearly independent}$
				10) $\det A\ne 0$
				11) $0$ not an eigenvalue of $A$
				To find $A^{-1}$, you have to isolate $x_1,\space\ldots,\space x_m$ in terms of $y_1,\space\ldots,\space y_m$
				i.e. compute $\text{rref}[A\space|\space I_n]$. If it’s $[I_n\space|\space B]$, then $A^{-1}=B$
			$\exists A^{-1}\rightarrow\text{rref}[A\space|\space I_n]=[I_n\space|\space A^{-1}]$
			$(AB)^{-1}=B^{-1}A^{-1}$
			$$A=\begin{bmatrix}
			a&b\\
			c&d
			\end{bmatrix}
			\land ad\ne bc\rightarrow\space
			A^{-1}=
			\frac{1}{ad-bc}\begin{bmatrix}
			d&-b\\
			-c&a
			\end{bmatrix}$$
		- Image and Kernel
			- $\text{im}(T)=\{T(\vec x):\vec x\in \mathbb{R}^m\}=\text{span}(\vec v_1,\ldots,\vec v_m)$
				$T:\mathbb{R}^m\rightarrow\mathbb{R}^n$
				Same as the range of a function
				$\text{im}(T)\subseteq \mathbb{R}^n$ and $\text{im(T)}$ is a subspace of $\mathbb{R}^n$
				Also known as the column space of $A$, where $A$ is a matrix of column vectors representing $T$
			- $\text{ker}(T)=\{\vec x\in\mathbb{R}^m:T(\vec x)=\vec 0\}$
				$T:\mathbb{R}^m\rightarrow\mathbb{R}^n$
				Can be thought of as the zeroes of a polynomial function
				$\text{im}(T)\subseteq \mathbb{R}^n$ and $\text{ker(T)}$ is a subspace of $\mathbb{R}^m$
				Also called the null space of $A$, where $A$ is a matrix of column vectors representing $T$
		- Bases and Dimensions
			- $\text{Basis}$
				The basis of a span is the smallest  linearly independent list of vectors that constitute the span
			- $\text{span}(\vec v_1,\ldots,\vec v_m)=\{c_1\vec v_1+\ldots+c_m\vec v_m:c_1,\ldots,c_m\text{ are scalars}\}$
				The span of some vectors is the set of all possible linear combinations of the vectors
			- $V\in\mathbb{R}^n\rightarrow\text{dim}(V)=m\le n$
				$\text{dim}(V)$ is the number of vectors in the basis of $V$
				1) There are at most $m$ linearly independent vectors in $V$
				2) We need at least $m$ vectors to span $V$
				3) If $m$ vectors in $V$ are linearly independent, they form a basis of $V$
				4) If $m$ vectors in $V\text{ span }V$, then they form a basis of $V$
			- $\text{dim(im(}A))=\text{rank}(A)$
				The basis of the image of a matrix is the set of the columns containing the leading variables. Can be found by taking the $\text{rref}(A)$ and then looking at the corresponding columns with a leading 1 (can’t look at the matrix from $\text{rref}(A)$ specifically, have to look at $A$)
			- $\text{dim(ker(}A))=m-\text{rank}(A)=\text{nullity}(A)$
				The basis of the kernel of matrix is the set of the columns containing the free variables. Can be found by taking the $\text{rref}(A)$, finding $\vec x$ in terms of the free variables and then taking the vectors that arise as a result of isolating the free variables as the basis vectors
			- $\text{nullity}(A)+\text{rank}(A)=m$
				Called the Rank-nullity theorem
				Is a portion of the fundamental theorem of linear algebra
		- Coordinates
			- $$[\vec x]_\mathfrak{B} = 
			\begin{bmatrix}
			c_1\\
			c_2\\
			\vdots\\
			c_m
			\end{bmatrix}
			\rightarrow
			\vec x = c_1 \vec v_1 + c_2 \vec v_2 + \ldots + c_m \vec v_m$$
				$\mathfrak{B}$ is some basis $(\vec v_1, \space \vec v_2, \ldots, \space \vec v_m)$ that spans $V$ in $\mathbb{R}^n$
				$[\vec x]_\mathfrak{B}$ is the $\mathfrak{B}$-coordinate vector of some vector $\vec x$ in $V$
				$c_1, \space c_2, \ldots, \space c_m$ are the $\mathfrak{B}$-coordinates of $\vec x$
				(1) $[\vec x + \vec y]_\mathfrak{B} = [\vec x]_\mathfrak{B} + [\vec y]_\mathfrak{B}\qquad\forall\vec x,\space \vec y \in V$
				(2) $[k \vec x]_\mathfrak{B} = k[\vec x]_\mathfrak{B},\qquad\qquad\space\space\space\space \forall \vec x \in V$
			- $$[T(\vec x)]_\mathfrak{B}=B[\vec x]_\mathfrak{B},\space B = [T]_\mathfrak{B} = 
			\begin{bmatrix}
			[T(\vec v_1)]_\mathfrak{B}\ldots[T(\vec v_n)]_\mathfrak{B}
			\end{bmatrix}$$
				Basis form of the equation: $$T(\vec x)=A\vec x,\space A=
				\begin{bmatrix}
				T(\vec e_1) & \ldots & T(\vec e_n)
				\end{bmatrix}$$
			- $AS = SB, \space B = S^{-1}AS, \space A = SBS^{-1}$
				$A$ is the standard matrix for $T(\vec x)$, meaning its columns represent how $\vec e_i$ are tranformed. It converts $\vec x$ to $T(\vec x)$
				$B$ is the $\mathfrak{B}$-matrix for $T(\vec x)$, meaning its columns represent how $\vec v_i$ in $V \in \mathbb{R}^n$ are transformed. It converts $[\vec x]_\mathfrak{B}$ to $[T(\vec x)]_\mathfrak{B}$
				$$S = 
				\begin{bmatrix}
				\vec v_1 \ldots \vec v_n
				\end{bmatrix}$$. It converts $[\vec x]_\mathfrak{B}$ to $\vec x$ and $[T(\vec x)]_\mathfrak{B}$ to $T(\vec x)$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af82227e-5886-4346-9cf0-80fe431d8d5f/Untitled.png)
				If the any of the statements are true and $S$ is invertible, $A$ and $B$ are considered to be similar
				Similarity is an equivalence relation (reflexive, symmetric, and transitive)
			- $\text{Diagonal }B$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/953455f7-105c-41c5-b9c9-47c1c02f4cdb/Untitled.png)
		- Orthogonality
			- $\text{Orthonormal Vectors}$
				Vectors are orthonormal if their magnitude is 1 (normalized) and they are all perpendicular/orthogonal to each other
				Orthonormal vectors are linearly independent and $n$ of them can form a basis of $\mathbb{R}^n$
			- $\text{proj}_V(\vec x) = \vec x^{\parallel} = \displaystyle\sum_{i=1}^m (\vec u_i \cdot \vec x) \vec u_i$
				The projection of $\vec x$ onto a subspace $V$ is equal to the sum of how much $\vec x$ aligns with each basis vector of $V$
				In the case where $m=\text{dim}(\mathbb{R}^n)$, the projection is just equal to $\vec x$
			- $V^{\perp}=\{\vec x \in \mathbb{R}^n : \vec v \cdot \vec x = 0 \space \forall \space \vec v \in \mathbb{R}\}$
				The orthogonal complement of $V$ is all $\vec x$ that are perpendicular to $V$
				It is also the kernel of $\text{proj}_V(\vec x)$
				(1) $V^{\perp} \in \mathbb{R}$
				(2) $V \cap V^{\perp} = {\vec 0}$
				(3) $\text{dim}(V) + \text{dim}(V^{\perp}) = n$
				(4) $(V^{\perp})^{^\perp}=V$
			- $\Vert \vec x + \vec y \Vert ^2 = \Vert\vec x \Vert ^2 + \Vert \vec y \Vert ^2 \leftrightarrow \vec x \cdot \vec y = 0$
				Pythagorean theorem
				The square of the magnitude of the the sum of two vectors is equal to the sum of the squares of the magnitude of the vectors iff the vectors are perpendicular to each other
			- $|\vec x \cdot \vec y| = \Vert \vec x \Vert \Vert \vec y \Vert \cos(\theta)$
				A consequence is the Cauchy-Schwarz inequality:
				$|\vec x \cdot \vec y| \le \Vert \vec x \Vert \Vert \vec y \Vert$
			- $r=\cos(\theta)=\frac{\vec x \cdot \vec y}{\Vert\vec x\Vert\Vert\vec y\Vert}$
				The correlation coefficient $r$ between two variables is the depends on the angle $\theta$ between the variables’ deviation vectors $\vec x$ and $\vec y$
				The deviation vectors are how far each point is from the average for the given variable
				$r=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sqrt{(\sum(x_i-\bar x)^2\sum(y_i-\bar y)^2)}}$ is the usual formula, but they are the same thing
			- $\text{Gram-Schmidt Process}$
				Is an algorithm to convert from a basis to an orthonormal basis (one where each basis vector is orthogonal to each other and has magnitude 1
				For each vector $\vec v_i$ after the first vector $\vec v_1$, the orthogonal version of $\vec v^\perp_i$ relative to $\text{span}(\vec v_1,\ldots,\vec v_{i-1})$ is equal to $\vec v_i-\vec v^\parallel_i$, where $\vec v_i^\parallel=\text{proj}_{\text{span}(\vec v_1,\ldots,\vec v_{i-1})}\vec v_i=\displaystyle\sum_{j=1}^{i-1}(\vec u_j\cdot\vec v_i)\vec u_j$
				The vectors’ orthogonal vectors then need to be normalized by dividing by their magnitude
			- $M=QR$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9d5c78e-aae2-47aa-abb8-f699b35c7c69/Untitled.png)
				$M$ represents the $\mathfrak{B}$-matrix, where $\mathfrak{B}$ is just some basis
				$Q$ represents the $\mathscr{U}$-matrix, where $\mathscr{U}$ is the orthonormal version of $\mathfrak{B}$
				$R$ represents the change of basis matrix from $\mathfrak{B}$ to $\mathscr{U}$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed4176c4-a1ed-4e5d-8184-c6ea899033c7/Untitled.png)
				$r_{ij}=0$ for $i\gt j$
				$$R=
				\begin{bmatrix}
				\Vert\vec v_1\Vert & \vec u_1\cdot\vec v_2 & \cdots & \vec u_1\cdot\vec v_1\\
				0 & \Vert\vec v_2^\perp\Vert & \ddots & \vdots\\
				\vdots & \ddots & \ddots & \vec u_{n-1}\cdot \vec v_n\\
				0 & \cdots & 0 & \Vert\vec v_n^\perp\Vert
				\end{bmatrix}$$
			- $\text{Orthogonal Transformations/Matrices}$
				An orthogonal transformation preserves absolute lengths and absolute angles
				(1) $AB$ is orthogonal if $A$ and $B$ are each orthogonal and they are $n\times n$
				(2) $A^{-1}$ is orthogonal if $A$ is orthogonal
				(a) $T$ mapping $\mathbb{R}^n\rightarrow\mathbb{R}^n$ iff $T(\vec e_1),\ldots,T(\vec e_n)$ form an orthonormal basis of $\mathbb{R}^n$
				(b) $n\times n$ matrix is orthogonal iff its columns are orthonormal
			- $A^T$
				The $ij$th entry of the transpose $A^T$ of $A$ is the $ji$th entry of $A$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73fd1c17-253a-4f9a-a9b9-438491fce75d/Untitled.png)
				$\text{Symmetric: }A^T=A$
				$\text{Skew-symmetric: }A^T=-A$
				(a) $(A+B)^T=A^T+B^T$
				(b) $(kA)^T=kA^T$
				(c) $(AB)^T=B^TA^T$
				(d) $\text{rank}(A^T)=\text{rank}(A)$
				(e) $(A^T)^{-1}=(A^{-1})^T$
			- $\vec v \cdot \vec w = \vec v^T \vec w$
				Note: not the same as $\vec v \vec w^T$, which would be an $n\times n$ matrix instead
			$A\text{ is an }n\times n\text{ orthogonal matrix}\leftrightarrow A^{-1}=A^T$
			$$\text{proj}_V(\vec x)=P\vec x,\space P=QQ^T,\space Q=\begin{bmatrix}
			\vec u_1 & \ldots \vec u_m
			\end{bmatrix}$$
		- Determinants
			- $\text{Determinant}$
				When $\det A\ne0$, $A$ is invertible
				The determinant of upper or lower triangular matrices or diagonal matrices is just the product of the main diagonal elements
				Swapping rows or columns results in negating the determinant
			- $\det A=ad-bc=\text{Area}_\text{parallelogram}$
				This is the parallelogram formed by column vectors from $A$
			- $$L_1(\vec x)=\det\begin{bmatrix}
			\vec v_1\\
			\vdots\\
			\vec x\\
			\vdots\\
			\vec v_n
			\end{bmatrix},\space L_2(\vec x)=\det\begin{bmatrix}
			\vec v_1 & \cdots & \vec x & \cdots & \vec v_n
			\end{bmatrix}$$
				The above statements says that the functions $L_1$ and $L_2$ from $\mathbb{R}^n\rightarrow\mathbb{R}$ are linear, meaning that the determinant of a matrix can be written as the sum of the determinants of two matrices whose one of rows or columns add together to form the original matrix
				The matrix also doesn’t have to be square
				E.g.: 
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd71c506-f5e8-4743-9304-ffc5b8a6fab6/Untitled.png)
			$$\det A=\vec u\cdot(\vec v \times \vec w)\ne 0\leftrightarrow A=\begin{bmatrix}
			\vec u & \vec v & \vec w
			\end{bmatrix}\text{ is invertible}$$
			- $\det A=\sum(\text{sgn }P)(\text{prod }P)$
				$P$ is the pattern or permutation of a matrix. It is defined as a choice of elements in a matrix that do not overlap in rows or columns (so kind of like in Sudoku)
				There are $n!$ patterns, so $n!$ terms need to be summed up
				$\text{sgn }P=(-1)^p$, where $p$ is the number of inversions of a pattern to reach diagonal or max number of elements that are above and right to one of them
				$\text{prod }P$ is simply the product of the pattern
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/693efab7-32fa-4d2e-8f18-ea0f1b0886c1/Untitled.png)
			- $\det\begin{bmatrix}
			A & B\\
			0 & C
			\end{bmatrix}=\det\begin{bmatrix}
			A & 0\\
			B & C
			\end{bmatrix}=(\det A)(\det C)$
				The determinant of a triangular block matrix is the same as the determinant of the matrix containing the determinant of each block, which would just be
				$$\det\begin{bmatrix}
				\det A & \det B\\
				0 & \det C
				\end{bmatrix}$$
				for example.
				The determinant of a block matrix is not generally just the determinant of a matrix containing the determinant of each block, as the block matrix has to be triangular
			$\det A^T=\det A$
			$\det A^{-1}=\frac{1}{\det A}$
			$\text{Deterimants of Matrices After Row Operations}$
			$\text{(1) Multiplying row by } k\text{: }\det B=k\det A$
			$\text{(2) Swapping rows: }\det B=-\det A$
			$\text{(3) Adding a scalar multiple of a row to another: }\det B=\det A$
			$\text{For }n\times n\text{ matrices } A\text{ and }B\text{:}$
			$\det(AB)=(\det A)(\det B)$
			$\det(A^m)=(\det A)^m$
			$A\text{ similar to }B\text{ by an invertible matrix }S\text{: }\det A=\det B$
			![Screen Shot 2022-11-19 at 4.22.27 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd6d15bb-94a8-4119-a9d7-9d71d25e8538/Screen_Shot_2022-11-19_at_4.22.27_PM.png)
			- $\det T=\det B$
				$B$ is the $\mathfrak{B}$-matrix of $T$, which is a linear transformation represented by some matrix $A$
		- Eigenvalues and Eigenvectors
			- $A\vec v=\lambda\vec v$
				$\vec v$ is called an eigenvector of $A$ or $T$
				$\lambda$ is called an eigenvalue of $A$ or $T$
			- $\mathfrak{B}=(\vec v_i)\text{ is an eigenbasis}\leftrightarrow A\vec v_i=\lambda_i\vec v_i$
				An eigenbasis is a basis with basis vectors that are all eigenvectors
			- $A\text{ is diagonalizable}\leftrightarrow\exists S:S^{-1}AS=B\text{ is diagonal}$
				A square transformation matrix is diagonalizable if there exists a basis in $\mathbb{R}^n$ such that $[T]_\mathfrak{B}$ is diagonal
				In other words, $A$ is diagonalizable if it’s similar to a diagonal matrix
					Diagonalizing matrices makes certain calculations easier (e.g. $A^{35}$ is more easily computed as $(SBS^{-1})^{35}=SB^{35}S^{-1}$, where $B$ is a diagonal matrix)
			- $\mathfrak{B}=(\vec v_i)\text{ is an eigenbasis for }A\leftrightarrow S^{-1}AS=B\text{ diagonalizes }A$
				$$S=\begin{bmatrix}
				\vec v_1 & \vec v_2 & \cdots & \vec v_n
				\end{bmatrix},\space B=\begin{bmatrix}
				\lambda_1 & 0 & \cdots & 0\\
				0 & \lambda_2 & \ddots & \vdots\\
				\vdots & \ddots & \ddots & 0\\
				0 & \cdots & 0 & \lambda_n
				\end{bmatrix}$$
				$AS=SB,\space A=SBS^{-1}$
				The vectors in $S$ must be linearly independent since $S$ is invertible
				Conceptually, the vectors of $S$ must form a basis spanning $\mathbb{R}^n$ because if $A=SBS^{-1}$, we are going from the standard basis to some eigenbasis, transforming it by $B$, and then returning back to the standard basis. Thus, there must be $n$ linearly independent vectors of $S$
				 for the eigenbasis to be traversable from $A$ and back
			$\lambda_i\text{ for orthogonal matrix}=1\text{ or }-1$
			$$e^{At} = I_n + tA + \frac{t^2A^2}{2!} + \frac{t^3A^3}{3!} + \ldots = S\left[I_n + \displaystyle\sum_{i = 1}^\infty\frac{t^i}{i!}D^i \right]S^{-1} = S\begin{bmatrix}
			e^{\lambda_1 t} & \cdots & 0\\
			\vdots & \ddots & \vdots\\
			0 & \cdots & e^{\lambda_n t}
			\end{bmatrix}S^{-1}$$
			- $\vec x(t+1)=A\vec x(t),\space \vec x(0)=\vec x_0\rightarrow\vec x(t)=\displaystyle\sum_{i=1}^n c_i\lambda_i^t\vec x_0$
				For a discrete dynamical system (like differential equations with discrete time inputs), the closed solution is given as the above summation
				The $n\times n$ matrix, $A$, has eigenbasis $\mathfrak{B}=(\vec v_i)$ and eigenvalues $\lambda_i$
				 $\vec x_0=\displaystyle\sum_{i=1}^{n}c_iv_i$
				In other words, each $c_i$ is the coefficient for the linear combination of $\vec x_0$ in terms of the eigenvectors $\vec v_i$
			- $\vec x(-i)=(A^i)^{-1}\vec x_0$
				To look at a system before $t=0$, use this formula
			- $\text{Phase Portraits}$
				These are curves obtained by connecting the dots of discrete dynamical systems
			- $\exists\lambda\text{ of }A\leftrightarrow\det(A-\lambda I_n)=0$
				Called the characterisitc or secular equation of $A$
			$\text{Eigenvalues of triangular matrices are the diagonal entries}$
			- $f_A(\lambda)=\det(A-\lambda I_n)=(-\lambda)^n+\text{tr }A(-\lambda)^{n-1}+\ldots+\det A$
				Called the characteristic polynomial of $A$ 
				$\text{tr }A$ is the sum of the diagonal entries of $A$
				An example for a $2\times 2$ $A$:
				$f_A(\lambda)=\det(A-\lambda I_2)=\lambda^2-(\text{tr }A)\lambda+\det A$
			- $f_A(\lambda)=(\lambda_0-\lambda)^kg(\lambda)\land g(\lambda_0)\ne0\leftrightarrow\text{almu}(\lambda_0)=k$
				If the characteristic polynomial of a matrix $A$ can be written as the product of a linear factor of $\lambda_0$ with algebraic multiplicity $k$ times some function $g(\lambda)$ that does not have $\lambda_0$ as a solution, then the eigenvalue $\lambda_0$ has an algebraic multiplicty of $k$
			- $\#\lambda_\text{distinct}\le n,\space n\text{ is odd}\rightarrow\#\lambda_\text{real}\ge1$
				The number of  distinct eigenvalues of an $n\times n$ matrix $A$ is at most $n$
				If $n$ is odd, then there will be at least one real eigenvalue of $A$
			$\displaystyle\prod_\text{i=1}^{\#\lambda}\lambda_i=\det A$
			$\displaystyle\sum_{i=1}^{\#\lambda}\lambda_i=\text{tr }A$
			- $E_\lambda=\text{ker}(A-\lambda I_n)=\{\vec v\in\mathbb{R}^n:A\vec v=\lambda\vec v\}$
				Called the eigenspace associated with $\lambda$
				All eigenvectors of $A$ with eigenvalue $\lambda$ are contained in $E_\lambda$
			- $\text{gemu}(\lambda)=\text{dim}(E_\lambda)=\text{nullity}(A-\lambda I_n)=n-\text{rank}(A-\lambda I_n)$
				The geometric multiplicity of an eigenvalue $\lambda$ is the dimension of its corresponding eigenspace $E_\lambda$
				To find the dimension, use rank-nullity theorem
			- $\text{Eigenbases and Geometric Multiplicities}$
				Given $s=\displaystyle\sum_{i=0}^N\text{gemu}(\lambda_i)$ for an $n\times n$ matrix $A$:
				(1) Concatenating the basis vectors of each eigenspace will give a new basis of dimension $s$, implying $s\le n$
				(2) $A$ is diagonalizable iff $s=n$
				Here, $N$ is the number of distinct eigenvalues
			$n\text{ distinct eigenvalues}\rightarrow A\text{ is diagonalizable}$
			$AS=SB\rightarrow$
			(a) $f_A(\lambda)=f_B(\lambda)$
			(b) $\text{rank }A=\text{rank }B,\space \text{nullity }A=\text{nullity }B$ 
			(c) $A \text{ and }B\text{ have the same eigenvalues, almu, and gemu}$
			(d) $\det A=\det B,\space \text{tr }A=\text{tr }B$
			$\text{gemu}(\lambda)\le\text{almu}(\lambda)$
		- Complex Linear Algebra
			- $\text{Operations on complex numbers}$
				$z,z_1,z_2,w\in\mathbb{C}$:
				(1) Commutativity of addition: $z+w=w+z$
				(2) Commutativity of multiplication: $zw=wz$
				(3) Associativity of addition: $(z_1+z_2)+z_3=z_1+(z_2+z_3)$
				(4) Associativity of multiplication: $(z_1z_2)z_3=z_1(z_2z_3)$
				(5) Distributivity: $z(w_1+w_2)=zw_1+zw_2$
			- $z=a+ib,\space \bar z=a-ib$
				The conjugate of a complex number negates the imaginary component of the number
			$z=a+ib,\space z^{-1}=\frac{1}{z}=(\frac{a}{a^2+b^2})+i(\frac{-b}{a^2+b^2})=\frac{a-ib}{a^2+b^2}$
			- $A$ with vectors $\in\mathbb{C}$ has $n$ distinct complex eigenvalues if they are counted with their algebraic multiplicities
				“Counted with their algebraic multiplicities” means you count three times for example if $\lambda_i$ has degree three
			- $\text{Orthonormal Eigenbasis}$
				$A$ has an orthonormal eigenbasis $S$ if $S^{-1}=S^T$ ($S$  is orthonormal) and $A=SBS^{-1}$ where $B$ is a diagonal $n\times n$ matrix
				We say $A$ is orthogonally diagonalizable (it is diagonalizable by an orthonormal matrix $S$)
			- $\text{Spectral Theorem: }A\text{ is orthogonally diagonalziable over }\mathbb{R}^n\leftrightarrow A^T=A$
				Symmetric matrices are orthogonally diagonalizable and vice versa
			- $A=A^T\land \lambda_1\ne \lambda_2\rightarrow\vec v_1\cdot\vec v_2=0$
				If $A$ is symmetric and $\vec v_1$ and $\vec v_2$ in $A$ are eigenvectors with different eigenvalues, then the eigenvectors must be orthogonal
				In other words, any eigen vectors of different eigenspaces must be orthogonal to each other. For a matrix to be orthogonally diagonalizable means that its eigenspaces are orthogonal to each other, which would allow us to find orthogonal eigenvectors
			$A$ that is symmetric has $n$ real eigenvalues if they are counted with their algebraic multiplicities
	- Differential Equations 🦊
		Universal Danker Differential Equations: https://www.youtube.com/watch?v=9h1c8c29U9g
		- Definitions
			- Ordinary
				Abbreviated as ODE sometimes
				Only depends on one variable
				Uses $d$ to denote a differential
				E.g.:
				$\frac{d^2x}{dt^2}+\omega^2x=0$
				The oscillating mass equation has a search function $x(t)$ that depends only on time $t$
			- Partial
				Depends on multiple variables
				Uses $\partial$ to denote a differential
				E.g.: 
				$\frac{\partial^2 E}{\partial x^2}+\frac{\partial^2 E}{\partial y^2}+\frac{\partial^2 E}{\partial z^2}=\frac{1}{c^2}\frac{\partial^2 E}{\partial t^2}$
				The wave equation has a search function $E(t,x,y,z)$ that depends on multiple variables
			- 1st Order
				Highest order derivative is one
				E.g.:
				$y'+y^2=9$
			- 2nd Order
				Highest order derivative is two
				E.g.: 
				$y''+y'=3t$
			- Higher Order
				Highest order derivative is greater than 2
				E.g.
				$y^{(4)}+y''+e^y=\cos t$, where the order of this ODE is 4
			- Linear
				An ODE is linear if it can be written in the form of:
				$p_n(t)y^{(n)}+\ldots+p_1(t)y'+p_0(t)y=q(t)$
				If $q(t)=0$, the linear ODE equation homogeneous. Otherwise, it’s inhomogeneous
			- Homogeneous
				$q(t)=0$ for the linear ODE
				E.g.:
				$y''+3ty=0$
			- Inhomogeneous
				$q(t)\ne0$ for the linear ODE
				E.g.:
				$t^2y''+\cos(t)y=\log t$
			- Separable
				A differential equation is separable if it can be written in the form of:
				$y'=f(t)g(y)$
				The next result is to write the equation as:
				$\frac{dy}{g(y)}=f(t)dt$, which allows for the $y$ and $t$ terms to be on opposite sides of the equation, setting up for integration.
			- Differential Forms
				A differential form is a multivariable expression of the form:
				$P(x,y)dx+Q(x,y)dy$
				A differential form is exact if 
				$P(x,y)dx+Q(x,y)dy=dF(x,y)$
				i.e.: $\exists F:P=\frac{\partial F}{\partial x},\space Q=\frac{\partial F}{\partial y}$
				An easy way to check for exactness is if $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$
			- Linearly Independent/Dependent
				An equation is linearly dependent on other equations if we can write $y_n=C_{n-1}y_{n-1}+\ldots+C_1y_1$
				An equation is linearly independent if $y_n$ cannot be written as a linear combination of other equations
			- Fundamental Set of Solutions
				If $y_1,y_2,\ldots,y_n$ are linearly independent solutions to a linear homogeneous ODE, then they are considered the fundamental set of solutions
			- Wronskian
				$$W(t)=\det\begin{bmatrix}
				y_1(t)&y_2(t)\\
				y_1'(t)&y_2'(t)
				\end{bmatrix}=y_1(t)y_2'(t)-y_1'(t)y_2(t)$$
				$W(t) \ne 0 \rightarrow \text{linearly independent solutions}$
			- Phase Lag form
				$C_1\cos(\omega t) + C_2\sin(\omega t) = A\cos(\omega t - \phi)$
				$A = \sqrt{C_1^2 + C_2^2}$
				$\phi = \text{angle between } \overrightarrow{OC} \text{ and the positive x-axis}, ~ C = (C_1, C_2)$
		- Solving Methods
			- 1st Order  Linear Homogeneous ODE
				$\frac{dy}{dt}=f(t)g(y)$
				$\int\frac{dy}{g(y)}=\int f(t)dt\xrightarrow{\text{if explicit solution exists}} y(t)=F(t)+C$
				Sometimes, there will only be implicit solutions of the form $G(y)=F(t)+C$
			- 1st Order Linear Inhomogeneous ODE
				$y'+fy=g$,  where $y$, $f$, and $g$ are functions of $t$
				$y=\frac{1}{u}\int ug\space dt$, where $u=e^{\int f(t)dt}$
				$u(t)$ is often called the integrating factor
				For the steps in between:
				(1) $y'+fy=g$
				(2) $uy'+ufy=ug$
				(3) $(uy)'=ug$
				(4) $uy=\int ug\space dt$
				(5) $y=\frac{1}{u}\int ug\space dt$
				From (3) to (2): $u=e^{\int f(t)dt}$, so $(uy)'=uy'+u'y=uy'+f(t)e^{\int f(t)dt}y=uy'+ufy$
			- Finding Values of Derivatives of Exact Differential Forms
				$F(x,y)=C,\space y'(x_0)=?$
				(1) Find $y(x_0)$ using $F(x,y)=C$
				(2) Calculate $dF$ and simplify using the form $Pdx+Qdy=0$
				(3) $Qdy=-Pdx$
				(4) $\frac{dy}{dx}=-\frac{P}{Q}$
				(5) $y'(x_0)=-\frac{P(x_0,y_0)}{Q(x_0,y_0)}$
				E.g.:
				Find $y'(\frac{1}{\sqrt 2})$ for $x^2+y^2=1$ when $y=y(x)>0$
				Geometrically, this curve is a circle about the origin with a radius of one. $y'(\frac{1}{\sqrt2})$ would correspond to the slope of the line at the point $45\degree$ between the $x$ and $y$ axes, which by intuition, would mean a slope of $-1$. Now for the calculation by implicit differentiation of this exact differential form:
				(1) $F(x,y)=x^2+y^2=1\rightarrow y(\frac{1}{\sqrt{2}})=\frac{1}{\sqrt{2}}$
				(2) $\frac{\partial F}{\partial x}=2x,\space \frac{\partial F}{\partial y}=2y\rightarrow2xdx+2ydy=0$
				(3) $2ydy=-2xdx$
				(4) $\frac{dy}{dx}=-\frac{x}{y}$
				(5) $y'(\frac{1}{\sqrt{2}})=-\frac{\frac{1}{\sqrt{2}}}{\frac{1}{\sqrt{2}}}=-1$
			- Implicit Differentiation of Exact Differential Forms
				If $Pdx+Qdy=0$ is exact (i.e. $\frac{\partial F}{\partial x}=P,\space \frac{\partial F}{\partial y}=Q$), then $F(x,y)=C$ is a solution to $Pdx+Qdy=0$
				(1) $\text{Check }$ $\frac{\partial P}{\partial y}=\frac{\partial Q}{dx}$
				(2) $F=\int Pdx+g(y)$
				(3) $Q=\frac{\partial F}{\partial y}=\frac{\partial}{\partial y}(\int Pdx+g(y))$
				(4) $g(y)=\int( Q-\frac{\partial}{\partial y}(\int Pdx))dy$
				(5) $F=\int Pdx+\int Qdy-\int\frac{\partial}{\partial y}(\int Pdx)dy$
			- Implicit Differentiation of Inexact Differential Forms
				$Pdx+Qdy=0\rightarrow \text{Find }F(x,y):\frac{\partial F}{\partial x}=P,\space \frac{\partial F}{\partial y}=Q$
				If $Pdx+Qdy$ not exact, then multiply by $\mu(x)$ or $\mu(y)$ (sometimes, $\mu$ may be a function of both $x$ and $y$, which is quite difficult) and then solve like a normal exact differential form by implicit differentiation
				$\mu(x)=e^{\int h(x)dx},\space h(x)=\frac{1}{Q}(\frac{\partial P}{\partial y}-\frac{\partial Q}{\partial x})$
				$\mu(y)=e^{\int g(y)dy},\space g(y)=\frac{1}{P}(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})$
			- 2nd Order Linear Homogeneous ODE
				(1) Find $y_1$ and $y_2$ as solutions to your differential equation
				(2) If $W(t)\ne 0$, then $y_1$ and $y_2$ are a fundamental set of solutions
			- Variation of Parameters
				Given a solution $y_1$, we try to variate $y_2$ by a factor of $u$
				(1) $y_2=uy_1$
				(2) $a(uy_1)''+b(uy_1)'+c(uy_1)=0$
				(3) $u(ay_1''+by_1'+cy_1)+2au'y_1'+au''y_1+bu'y_1=0$
				(4) $u''=0\rightarrow u'=1\rightarrow u=t$
			- 2nd Order Linear Homogeneous ODE with Constant Coefficients
				For $ay''+by'+cy=0$:
				$\lambda=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$
				$b^2-4ac>0\rightarrow y_1=e^{\lambda_1 t},~y_2=e^{\lambda_2 t}\space$
				$b^2-4ac=0\rightarrow y_1=e^{\lambda t},~y_2=te^{\lambda t}$
				$b^2-4ac<0\rightarrow y_1=e^{rt}\cos\omega t,~y_2=e^{rt}\sin\omega t,~\lambda=r\pm i\omega$
			- 2nd Order Linear Inhomogeneous ODE with Constant Coefficients
				$y'' + py' + qy = f(t)$
				(1) Solve $y_h$ for homogeneous $y'' + py' + qy = 0$
				(2) Find a particular solution $y_p$ by undetermined constant coefficients or ERF
				(3) If $f(t)$ is a sum of two terms say $f_1(t)$ and $f_2(t)$ with solutions $y_{p_1}$ and $y_{p_2}$, then $y_p = y_{p_1} + y_{p_2}$
				(4) $y = y_h + y_p$
				(5) Solve IVP
			- Undetermined Constant Coefficients
				When the inhomogeneous portion of the differential equation is $f(t)$, we make a guess/ansatz in the form of $y_p$ as indicated in the table below
				| $f(t)$ | $y_p$ |
				|  |  |
				| $c_nt^n + c_{n - 1}t^{n - 1} + \ldots + c_1t_1 + c_0$ | $a_nt^n + a_{n - 1}t^{n - 1} + \ldots + a_1t + a_0$ |
				| $\cos(\omega t) \text{ or } \sin(\omega t)$ | $a\cos(\omega t) + b\sin(\omega t)$ |
				| $e^{rt}$ | $p(t)e^{rt}, p(t)\text{ is a polynomial}$ |
				| $e^{rt}\cos(\omega t) + e^{rt}\sin(\omega t)$ | $ae^{rt}\cos(\omega t) + be^{rt}\sin(\omega t)$ |
			- Exponential Response Functionn
				$ay'' + by' + cy = e^{rt}$
				$y_p = \frac{e^{rt}}{p(r)} = \frac{te^{rt}}{p'(r)} = \frac{t^2 e^{rt}}{p''(r)}$
				In the above equation, go the next $y_p$ from left to right if any of the $p^{(n)}(r)$ are $0$
				$ay'' + by' + cy = e^{rt}\cos(\omega t)$
				$y_p = \mathbb{R}e\left(\frac{e^{(r + i\omega)t}}{p(r + i\omega)}\right)$
				$ay'' + by' + cy = e^{rt}\sin(\omega t)$
				$y_p = \Im\left(\frac{e^{(r + i\omega)t}}{p(r + i\omega)}\right)$
			- Homoegenous Planar System
				For systems of differential equations:
				$$x_1' = ax_1 + bx_2\\
				x_2' = cx_1 + dx_2$$
				or
				$$x' = ax + by\\
				y' = cx + dy$$
				where $x_1,x_2,x,y$ are functions of $t$
				Rewritten as $x' = Ax, ~ x = \begin{bmatrix}x_1 \\ x_2\end{bmatrix}, ~ A = \begin{bmatrix}a & b \\ c & d\end{bmatrix}$
				For a $2\times2 ~ A$, the fundamental set of solutions consists of two equations
				$\lambda_1,\lambda_2 \in \mathbb{R},\lambda, \bar\lambda \in \mathbb{C}, v_1,v_2,v,\bar v = \text{eigenvectors}$
				$\lambda = r + i\omega$
				$\bar\lambda = r - i\omega$
				$v = v_1 + iv_2$
				$\bar v = v_1 - iv_2$
				$v$ and $\bar v$ are eigenvectors for $\lambda$ and $\bar \lambda$ respectively
				Two distinct real eigenvalues: 
				$x(t) = C_1e^{\lambda_1 t}v_1 + C_2e^{\lambda_2 t}v_2$
				- Phase Portraits
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0642d014-dd2f-4695-b964-3f5d12793bb5/Untitled.png)
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a06c62f5-609d-43b3-a740-bba82157480b/Untitled.png)
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/365ccf82-94b3-4395-a16a-9d2a86394100/Untitled.png)
				Complex eigenvalues:
				$x(t) = C_1\frac{e^{\lambda t}v + e^{\bar\lambda t}\bar v}{2} + C_2 \frac{e^{\lambda t}v - e^{\bar \lambda t}\bar v}{2i} = C_1\mathbb{R}e(e^{\lambda t}v) + C_2\Im(e^{\lambda t}v)$
				- Phase Portraits
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b2cd6ea-725f-43da-9ddd-4db6756a5e50/Untitled.png)
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8fffb1ba-b08e-4ef9-b10c-d77abbae1cf2/Untitled.png)
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/552d966c-325b-497a-a9f7-fdbb8c287777/Untitled.png)
				Repeated real eigvenvalues and two linearly independent eigenvectors
				$x(t) = C_1e^{\lambda t}v_1 + C_2e^{\lambda t}v_2$
				Repeated real eigvenvalues and only one linearly independent eigenvector
				$x(t) = C_1e^{\lambda t}v_1 + C_2e^{\lambda t}(tv_1 + v_2)$
				$v_1 = \text{eigenvector for }\lambda$
				$v_2 = \text{generalized eigenvector for } \lambda : (A - \lambda I_2) \cdot v = v_1,\text{ where }v_2 \text{ is the non }t\text{-component of }v$
			- Phase Portraits
				Sketches of solutions to $\vec x' = A \vec x(t)$, or the planar system as time progresses
				As $t \rightarrow \infty$, a planar system is
				Stable: If all solutions tend to $0$
				Unstable: If one or more solutions are unbounded
				Semi-stable: If all solutions are bounded but do not tend to $0$
			- Matrix Exponential
				$$e^{At} = I_n + tA + \frac{t^2A^2}{2!} + \frac{t^3A^3}{3!} + \ldots = S\left[I_n + \displaystyle\sum_{i = 1}^\infty\frac{t^i}{i!}D^i \right]S^{-1} = S\begin{bmatrix}
				e^{\lambda_1 t} & \cdots & 0\\
				\vdots & \ddots & \vdots\\
				0 & \cdots & e^{\lambda_n t}
				\end{bmatrix}S^{-1}$$
				If $A$ not diagonalizable:
				$e^{At} = \Phi(t)\Phi^{-1}(0)$
				$$\Phi = \begin{bmatrix}
				\vec x_1 & \vec x_2
				\end{bmatrix}$$
				$\vec x_1$ and $\vec x_2$ are solutions to repeated real eigenvalues with only one independent eigenvector case of planar system for $A$
			- Inhomogeneous Planar System
				(1) $\vec x' = A\vec x(t) + \vec r(t)$
				(2) $\vec x = \vec x_h + \vec x_p$
				(3) $\vec x_h = \vec x$ for $\vec x' = A\vec x$
				(5) $\vec u = \int \Phi^{-1}\vec r ~ dt, \Phi = \begin{bmatrix}
				\vec x_1 & \vec x_2
				\end{bmatrix}$
				(4) $\vec x_p = \Phi \cdot \vec u$
				$A$ diagonalizable:
				$\vec x(t) = S \vec y(t)$
				$\vec y' = D \vec y + S^{-1} \vec r(t)$
		- Theorems
			- $\exists R:(t_0,y_0)\in R:f(t_0,y_0)\text{ is defined and continuous}\rightarrow \exists y(t)$
				Existence theorem for an equation $y'=f(t,y)$ with an IVP
			- $\exists R:\frac{\partial f}{\partial y}\text{ is defined and continuous on }R\text{, a rectangle}:(t_0,y_0)\in R\rightarrow\exists!y(t)$
				Uniqueness theorem for $y'=f(t,y)$ with IVP
			- $\text{Superposition Principle}$
				If $y_1,y_2,\ldots y_n$ are solutions to a linear homogeneous differential equation, then so are $\displaystyle\sum_{i=1}^nC_iy_i$ for $C_i\in\mathbb{R}$ (i.e. their linear combination is also a solution)
		- Applications
			- Undamped Harmonic Motion
				$my'' + ky = 0$
				$y = C_1\cos(\omega t) + C_2\sin(\omega t)$
				$\omega = \sqrt{\frac{k}{m}} = 2\pi f, ~ T = \frac{1}{f}$
			- Damped Harmonic Motion
				$my'' + \mu y' + ky = 0$
				$\lambda = \frac{-\mu \pm \sqrt{\mu^2 - 4km}}{2m}, ~ \beta = \frac{\mu}{2m}, ~ \omega_0 = \sqrt{\frac{k}{m}}, ~ \omega_d = \sqrt{\omega_0^2 - \beta^2}$
				Underdamped: $\mu^2 - 4km < 0$
				$y = C_1e^{-\beta t}\cos(\omega_d t) + C_2e^{-\beta t}\sin(\omega_d t) = A\cos(\omega_d t - \phi)$
				$T_\text{pseudo} = \frac{2\pi}{\omega_d}$
				Overdamped: $\mu^2 - 4km > 0$
				$y = C_1e^{\lambda_1 t} + C_2e^{\lambda_2 t}$
				Critically Damped: $\mu^2 - 4km = 0$
				$y = C_1e^{-\beta t} + C_2te^{-\beta t}$
			- Radioactive Decay
				$\lambda N=\ddot N$
	- Complex Algebra 💭
		- $\text{Operations}$
			(1) Addition/Subtraction: $(a+ib)\pm(c+id)=(a+c)\pm i(b+d)$
			(2) Multiplication: $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$
			(3) Complex Conjugation: $z=a+ib\rightarrow \bar z=a-ib$
			(4) Norm (length): $|z|=\sqrt{a^2+b^2}=\sqrt{z\cdot\bar z}$
			(5) Division: $\frac{1}{z}=\frac{1}{z}\cdot\frac{\bar z}{\bar z}=\frac{\bar z}{|z|^2}$
		- $\text{Operations in Polar Form}$
			(1)  Addition/Subtraction: Convert to $a+bi$ form
			(2) Multiplication: $(r_1e^{i\theta_1})(r_2e^{i\theta_2}=r_1r_2e^{i(\theta_1\theta_2)}$
			(3) Division: $\frac{r_1e^{i\theta_1}}{r_2e^{i\theta_2}}=\frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}$
			(4) Conjugation: $\bar z=re^{-i\theta}$
		- $\text{Rules of Operations}$
			$z,z_1,z_2,w\in\mathbb{C}$:
			(1) Commutativity of addition: $z+w=w+z$
			(2) Commutativity of multiplication: $zw=wz$
			(3) Associativity of addition: $(z_1+z_2)+z_3=z_1+(z_2+z_3)$
			(4) Associativity of multiplication: $(z_1z_2)z_3=z_1(z_2z_3)$
			(5) Distributivity: $w(z_1+z_2)=wz_1+wz_2$
		$\sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$
		$\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}$
		- $Ce^{ik\theta}=C(\cos(k\theta)+i\sin(k\theta))$
			This is called Euler’s Formula
			- Explanation
				The intuition is that $e^x=\frac{d}{dx}e^x$, and so if an object’s position with respect to time were modeled by $x(t)=e^t$, its velocity would be represented by $v(t)=e^t$. 
				Now when multiplying a number by $i$ on the complex plane, it has the effect of rotating the number by 90 degrees counter clockwise. 
				E.g. $i\cdot(a+bi)=-b+ai$, where we went from $(x,y)\rightarrow(-y,x)$
				Graph showing this: https://www.desmos.com/calculator/cg4ipkcwz3
				So then $\frac{d}{dt}e^{it}=ie^{it}$, which means the velocity vector our object always points 90 degrees counter clockwise from the position vector. 
				Starting at $t=0$, $x(0)=e^{i\cdot0}=1$, meaning the velocity vector is $i\cdot1=i$, which is indeed 90 degrees counter clockwise from the position vector.
				From these initial conditions and the fact that the velocity vector always points 90 degrees counter clockwise from the position vector, it should be apparent now that the path of our object should trace out a circle.
				Assuming constant speed of 1 ($|v|=1$), then it takes $2\pi$ units of time for the circle to be fully traced out. Notice now that if we treat the complex plane as a Cartersian plane, the parameterization of this circlular path is $(\cos(t),\sin(t))$, which directly translates to Euler’s Formula above.
				Video explaining this: https://www.youtube.com/watch?v=v0YEaeIClKY
			$e^{i\pi}=-1$ is Euler’s Identity
		- $\text{Ln}(z)=\ln|z|+i\theta,~-\pi\lt\theta\le\pi$
			Called the principal or complex log
			(1) $e^{\text{Ln }z}=z$
			(2) $\text{Ln }z=\ln z$ when $z$ is a positive real number
			(3) $\text{Ln}(z_1z_2)=\text{Ln}(z_1)+\text{Ln}(z_2)+2\pi in,n=\{-1,0,1\}$
			(4) $\text{Ln}(\frac{z_1}{z_2})=\text{Log}(z_1)-\text{Log}(z_2)+2\pi in,~n=\{-1,0,1\}$
			$\theta_1+\theta_2>\pi\rightarrow n=-1$
			$\theta_1+\theta_2\le-\pi\rightarrow n=1$
			$-\pi\lt \theta_1+\theta_2\le\pi\rightarrow n=0$
	- Fourier Transform 〜
		- $\hat g(f)=\int_{t_1}^{t_2}g(t)e^{-2\pi ift}dt$
			https://www.youtube.com/watch?v=spUNpyF58BY
			This function takes a frequency $f$, and from $g(t)$, your signal function (e.g. your signal composed of many different pure signals), determines the likelihood that that frequency is an original pure component of the total signal 
			As time $t_2-t_1$ increases, $\hat g(f)$ becomes more defined, as it means that there is more time to distill the signals/clear uncertainty
			The $e^{-2\pi if}$ part can be thought of as a wrapping $g(t)$ around a circle in the imaginary plane in the clockwise direction (due to the negative sign)
			$\hat g(f)$ is akin to the center of mass of a curve as $g(t)$ is wrapped around your circle
	- Uncertainty ±
		$\text{Error propagation in addition or subtraction}$
		$Q=a+b+\ldots+c-(x+y+z)$
		$\delta Q=\sqrt{(\delta a)^2+(\delta b)^2+\ldots+(\delta c)^2+(\delta x)^2+(\delta y)^2+\ldots+(\delta z)^2+}$
		$\text{Error propagation in multiplication or division}$
		$Q=\frac{ab\ldots c}{xy\ldots z}$
		$\delta Q = |Q|\sqrt{ (\frac{\delta a}{a})^2 + (\frac{\delta b}{b})^2 + \ldots + (\frac{\delta c}{c})^2 + (\frac{\delta x}{x})^2 + (\frac{\delta y}{y})^2 + \ldots + (\frac{\delta z}{z})^2 }$
		$\text{Error propogation in multiplication or division by a constant}$
		$Q=Cx$
		$\delta Q = |C|\frac{\delta x}{|x|}$
		$\text{Error propogation in exponentiation}$
		$Q = x^n$
		$\delta Q = |Q|n \frac{\delta x}{|x|}$ 
- Physics ☢️
	- Resources 🕸
		http://hyperphysics.phy-astr.gsu.edu/hbase/index.html
		https://physics.info/equations/
	- Approximations
		- $(1+x)^a\approx1+ax\text{ if }(|x|<1\land|ax|\ll1)$
			Called the binomial approximation
			Uses the first two terms of the taylor expansion of $(1+x)^a$
			https://en.wikipedia.org/wiki/Binomial_approximation
	- Constants $\varepsilon_0$
		$g=9.81\frac{\text{m}}{\text{s}^2}\text{ (Acceleration due to gravity on Earth)}$
		$G=6.6743\cdot 10^{-11}\frac{\text{m}^3}{\text{kg}\cdot \text{s}^2}\text{ (Universal gravitational constant)}$
		$e^-=-1.60217663\cdot 10^{-19}C\text{ (Charge of electron)}$
		$k=\frac{1}{4\pi\epsilon_0}=8.9875517923\cdot 10^9\frac{Nm^2}{C^2}\text{ (Coloumb's constant)}$
		$\varepsilon_0=8.85418782\cdot 10^{-12}\frac{C^2}{Nm^2}\text{ (Permitivity of freespace, electric constant)}$
		- $F=9.6485538\cdot10^4\frac{C}{mol \space e^-}\text{ (Faraday's constant)}$
			This is the charge in Coloumbs of a mole of electrons
		$\mu_0=4\pi\cdot10^{-7}\frac{T\cdot m}{A}=1.25663706\cdot 10^{-6}\frac{T\cdot m}{A}\text{ (Magnetic Constant)}$
	- Kinematics 🚗
		$a(t)=\frac{dv}{dt}=\frac{d^2x}{dt^2}$
		$\text{Constant Acceleration Kinetmatics:}$
		$\Delta v=at$
		- $\Delta x=v_0t+\frac{1}{2}at^2$
			Derivation:
			$a=\frac{dv}{dt}$
			$\int adt=\int dv$
			$at=v-v_0$
			$at=\frac{dx}{dt}-v_0$
			$\int dx=\int (at+v_0)dt$
			$\Delta x=v_0t+\frac{1}{2}at^2$
		- $\Delta(v^2)=2a\Delta x$
			Derviation:
			$\Delta x=v_0t+\frac{1}{2}at^2$
			$\Delta x=v_0t+\frac{1}{2}(v_f-v_0)t$
			$\Delta x=\frac{1}{2}t(v_0+v_f)$
			$2a\Delta x=ta(v_f+v_0)$
			$2a\Delta x=(v_f-v_0)(v_f+v_0)$
			$\Delta(v^2)=2a\Delta x$
	- Newtonian Mechanics 🚙
		$F=ma$
		$F_\text{g}=mg,\space g=9.8\frac{m}{s}\text{ on surface of Earth}$
		$F_\text{G}=G\frac{m_1m_2}{r^2},\space G=6.6743\cdot 10^{-11}\frac{m^3}{kg\cdot s^2}$
		$F_\text{normal force}=N,\text{ points perpendicularly from surface}$
		- $F_\text{kinetic friction}=f_k=\mu_k N$
			$\mu_k$ is the coeffecient of kinetic friction of the surface
		$f_k\le f_s$
		$p=mv$
		$F=\frac{\Delta p}{\Delta t}$
		$J=\Delta p=F\Delta t=\int_{t_0}^{t_f}F(t)dt\text{ (for non-constant force)}$
		$p_0=p_f$
		$KE_0=KE_f\text{ for elastic collisions}$
	- Rotational Mechanics 🎡
		$a_c=\frac{v^2}{r}$
		$I=\int r^2dm$
		$I=I_\text{center of mass}+MD^2$
		$I=I_{\text{ring}}=MR^2$
		$I_{\text{disk}}=\frac{1}{2}MR^2$
		$I_{\text{rod or plank}}=\frac{1}{12}ML^2$
		$I_{\text{sphere}}=\frac{2}{5}MR^2$
		$x=r\theta,\space v=r\omega,\space a=r\alpha$
		$\alpha=\frac{d\omega}{dt}=\frac{d^2\theta}{dt^2}$
		- $\vec\tau=\vec r\times\vec F$
			i.e. $|\vec\tau|=|\vec r||\vec F|\sin\theta$, where $\theta$ is the angle between the radius vector (pointing away from rotation axix) and the force vector
			Torque follows the right-hand rule, where the forefinger first points in the direction of the radius vector and then curls to point in the direction of the force vector, resulting in an extended thumb pointing in the direction of the torque
	- Energy ⚡️
		$W=\int_{x_0}^{x_f}F\cdot dx$
		$\Sigma W_\text{by conservative forces}=\Delta K$
		$\Sigma W_\text{by non-conservative forces}=\Delta E$
		$W_\text{by conservative forces}=-\Delta U$
		$\Delta E=\Delta K+\Delta U\space(=0\text{ when there are no non-conservative forces})$
		$E=K+U$
		$K=\frac{1}{2}mv^2$
		- $U=-\int_\text{ref}^{r}\vec F\cdot dr,\space F=-\frac{dU}{dx}$
			$\text{ref}$ can be defined to be some arbitrary reference point relative to $x$. If $\text{ref}$ is consistent between $U_0$ and $U_f$, $\Delta U$ will still be the same no matter the choice of $\text{ref}$ 
		- $\Delta U_\text{gravity}=mg\Delta h$
			Derivation:
			$\Delta U=U_f-U_0$
			$=-\int_{\text{ref}}^{h_f}-mgdx-(-\int_{\text{ref}}^{h_0}-mgdx)$
			$=mg(h_f-\cancel{\text{ref}})-mg[h_0-\cancel{\text{ref}}]$
			$=mg(h_f-h_0)$
	- Fluid Mechanics 💧
		- $ρ=\frac{m}{v}$
			Units are $\frac{kg}{m^{3}}$
		- $P=\frac{F}{A}$
			Units are $(\frac{N}{m^{2}})$
		- $P_\text{in}=P_\text{out}$
			Pascal’s Principle: pressure exerted by fluid on a container is constant
			$\frac{F_\text{in}}{A_\text{in}}=\frac{F_\text{out}}{A_\text{out}}$
		- $P=P_{0}+ρgΔh$
			$P$ is the pressure in the liquid at a certain height/of the manometer/barometer, $P_0$ is the initial pressure (often atmospheric pressure), $\rho$ is the density of the fluid, and $\Delta h$ is the difference in height between the two menisci or between two points of interest
			$760\space\text{torr}=1\space\text{atm}$
			Manometer:
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c4590fb-63b9-4955-8a83-67ac9fbce2e2/Untitled.png)
			Barometer:
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2092c834-fe24-4b3d-b431-041c49b16222/Untitled.png)
		- $F_\text{buoyant}=mg=\rho Vg$
			$m$ is the mass of the dispalced fluid, $\rho$ is the density of the fluid displaced, $V$ is the volume of the fluid displaced
		- $F_r = -mkv^n$
			$F_r$ is the retarding force on a moving object through air and is proportional to some power of the velocity of the object. This law is just an approximation though
			$m$ is the mass of the object
			$k$ is a constant dependent on mass that cancels out the effects of $m$
			$$n = \begin{cases} 1 \qquad v \le \text{60 mph}\\
			2 \qquad v \le \text{770 mph}
			\end{cases}$$
	- Periodic Motion 🌊
		- $\ddot x+\omega^2 x=c$
			SHM equation. The second time derivative of an object’s position is equal to the negative of its position times the square of the angular frequency
		$ω_{\text{spring}}=\sqrt{\frac{k}{m}}$
		$ω_{\text{pendulum}}=\sqrt{\frac{g}{L}}$
		- $\omega_{\text{physical pendulum}}=\sqrt{\frac{mgL}{I}}$
			Simplifies to some form of $\sqrt{\frac{g}{L}}$ when I is just $MR^2$
			$L$  is the distance from the pivot point to the center of mass of the entire physical system
		- $\omega_{\text{torsional pendulum}}=\sqrt{\frac{\kappa}{I}}$
			$\kappa$ is the torsion constant and has units of $\frac{N\cdot m}{rad}$
		- $T=\frac{2\pi}{ω}$
			$T$ is the time period of an oscillation
		$f=\frac{ω}{2\pi}$
		$x(t) = C_1e^{ikx} + C_2e^{-ikx} = D_1 \cos(\omega t) + D_2 \sin(\omega t)= A\cos(\omega t + \psi)$
		$v\left(t\right)=-Aω\sin\left(ωt+\psi\right)=-v_{max}\sin\left(\omega t+\psi\right)$
		$a\left(t\right)=-Aω^{2}\cos\left(ωt+\psi\right)=-a_{max}\cos\left(ωt+\psi\right)$
		$v_{\text{max}}=Aω$
		$a_{\text{max}}=Aω^{2}$
		- $\ddot x+2\beta \dot x+\omega_0^2x = \ddot x + \frac{b}{m} \dot x + \frac{k}{m} = 0$
			Damped Harmonic Oscillation differential equation
			$\omega_0$ is the natural frequency, or $\omega$ from the simple harmonic oscillator
			$\beta=\frac{b}{2m}$, where $b$ is the resistive constant/damping constant and $m$ is the mass
		$\omega=\sqrt{w_0^2 - \beta^2}, ~ \omega_0 = \sqrt{\frac{k}{m}}, ~ \beta = \frac{b}{2m}$
		Underdamping: $\beta<\omega_0\space \text{or}\space b<\sqrt{4mk}$ (oscillation)
		$x(t) = C_1e^{-\beta t}\cos(\omega_d t) + C_2e^{-\beta t}\sin(\omega_d t) = A\cos(\omega_d t - \phi)$
		Overdamping: $\beta>\omega_0\space \text{or}\space b>\sqrt{4mk}$ (no oscillation)
		$x(t)=C_+e^{S_+t}+C_-e^{S_-t} = Ae^{-\beta t}\cos(wt+\phi), ~ S_\pm = -\beta \pm \sqrt{\beta^2 - \omega_0^2}$
		Critical damping: $\beta=\omega_0\space \text{or}\space b=\sqrt{4mk}$ (no oscillation)
		$x(t) = C_1e^{\beta t} + C_2te^{-\beta t}$
		$A = \sqrt{x_0^2 + (\frac{v_0 + \beta x_0}{\omega})^2}  = \sqrt{C_1^2+C_2^2}$
		$\phi = \tan^{-1}(-\frac{v_0 + \beta x_0}{\omega x_0}) = \text{angle between }\overline{OC}\text{ and the x-axis},~C=(C_1,C_2)$
		- $\ddot x + 2 \beta \dot x + \omega_0^2 x = \frac{F_0}{m}\cos \omega t$
			Driven oscillation differential equation
			$\beta$ is the damping/resistivity constant
			$\omega_0$ is the angular frequency
			$F$ is the force supplied by the driven oscillator
		$x = x_h + x_p$
		$x_p = D\cos(\omega t - \delta), ~ D = \frac{F_0}{m\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2}}, ~ \delta = \tan^{-1}\left(\frac{2 \beta \omega}{\omega_0^2 - \omega^2}\right)$
		- $\omega_R = \sqrt{\omega_0^2 - 2\beta^2}$
			The resonance frequency of a driven oscillation is given by the oscillator’s natural frequency and its damping coefficient
			$\omega_R$ is specifically for the amplitude resonance
		- $\omega_E = \omega_0$
			$\omega_E$ is the kinetic energy resonance frequency, the frequency of the oscillator that minimizes energy loss due to the 
		- $Q = \frac{\omega_R}{2\beta} \cong \frac{\omega_0}{\Delta \omega}$
			$Q$ is the quality or Q factor of an oscillation
			$\Delta\omega$ is the width of the frequency such that the square of the amplitude has decreased by half. The approximation is valid for $\beta \ll \omega_0$
			![Screen Shot 2023-05-08 at 7.20.24 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0992879d-ae29-4579-a48e-9e0822f356cb/Screen_Shot_2023-05-08_at_7.20.24_PM.png)
			Tells how underdamped an oscillator is
			As $Q$ increases, the oscillator becomes more underdamped/less damped
		Resonance: $\omega_0 > \sqrt{2}\beta$
		No resonance: $\omega_0 < \sqrt{2}\beta$
		Overdamping: $\omega_0 < \beta$
		$$H(t_0) = \begin{cases}
		0, \quad t < t_0\\
		a, \quad t > t_0
		\end{cases}$$
		$$I(t_0, t_1) = H(t_0) - H(t_1) = \begin{cases}
		0, \quad t < t_0\\
		a, \quad t_0 < t < t_1\\
		0, \quad t > t_1
		\end{cases}$$
		For $x(t') = 0, \dot x(t') = 0$
		$$G(t, t') = \begin{cases}
		\frac{1}{m\omega_1}e^{-\beta(t - t')}\sin (\omega_1(t - t')) \quad t \ge t'\\
		0, \quad t < t'
		\end{cases}$$
		$x_p(t) = \int_{-\infty}^t F(t')G(t, t') dt'$
	- Waves/Sound 🔊
		$f(x,t)=A\sin(kx-\omega t+\psi)$
		$k=\frac{2\pi}{\lambda},\space \omega=\frac{2\pi}{T}=2\pi f$
		$v=\lambda f=\frac{\omega}{k}$
		- $x_R(x,t)=2A\cos(\frac{\psi}{2})\sin(kx-\omega t+\frac{\psi}{2})$
			$x_R$ is the resultant wave’s position of two interfering waves
			$A_R=2A\cos(\frac{\phi}{2})$
			Derived from the trig identities:
			$\cos\alpha+\cos\beta=2\cos\left(\frac{\alpha+\beta}{2}\right)\cos\left(\frac{\alpha-\beta}{2}\right)$
			$\sin\alpha+\sin\beta=2\sin(​\frac{\alpha+\beta}{2}​​)\cos(​\frac{​​\alpha−\beta}{2}​​)$
		- $f_{\text{obs}}=f_{\text{source}}\left(\frac{v_{\text{sound}}+v_{\text{obs}}}{v_{\text{sound}}+v_{\text{source}}}\right)$
			Doppler effect
			Observer to source is positive, $v_{\text{sound}}=\text{343}\frac{m}{s}$
		- $\theta_{\text{sonic boom}}=\sin^{-1}(\frac{v_\text{sound}}{v_\text{object}})$
			$\theta_\text{sonic boom}$ is the angle between the line parallel to the direction of travel and the resulting shock cone
		$v_{\text{mechanical}}\approx\sqrt{\frac{\text{restoring force}}{\text{resistive inertia}}}$
		- $v_{\text{string}}=\sqrt{\frac{T}{\mu}}=\sqrt{\frac{TL}{m}}$
			$T$ is tension, $\mu$ is linear mass density
		- $v_{\text{sound in air}}=\sqrt{\frac{B}{\rho}}=331K^{\degree}\sqrt{\frac{T}{273K^{\degree}}}$$v_{\text{sound}}=\sqrt{\frac{B}{\rho}}=331K^{\degree}\sqrt{\frac{T}{273K^{\degree}}}$
			$B$ is the bulk modulus, $\rho$ is the volume mass density, and $T$ is the air temperature
		$E\propto A^2$
		- $P=\frac{1}{2}\mu A^2\omega^2v$
			This is the power, $P$, of an oscillating string
		- $I=\frac{P}{A}=\frac{p_{\text{max}}^2}{2\rho v}$
			$I$ is the intensity, $P$ is power, $p_{\text{max}}$ is the pressure amplitude, $\rho$ is the volume mass density, and $v$ is the velocity of the wave
		- $\beta=10\log(\frac{I}{I_0}),\space I_0=10^{-12}\frac{W}{m^2}$
			$\beta$ is the decibel value, and $I_0$ is the threshold of human hearing. $W$ is watts
		$f_{\text{beat}}=|f_a-f_b|$
		$\lambda_{\text{like}}=\frac{2L}{n},\space n\in \mathbb{N}$
		$\lambda_{\text{mixed}}=\frac{4L}{n},\space n\in \mathbb{N_{odd}}$
		- $\nabla^2 F=\frac{1}{v^2}\frac{\partial^2 F}{\partial t^2}$
			This is the differential equation that describes a wave in 3D
		- $F = F(\phi), ~ \phi = \omega t - \vec k \cdot \vec r$
			$v_\text{phase} = \frac{\omega}{k}$
	- Electric Charge and Electric Fields 🔋
		$F_e=\frac{kq_1q_1}{r^2}=qE,\space k=\frac{1}{4\pi\varepsilon_0}=9*10^9\frac{Nm^2}{C^2},\space \varepsilon_0=8.854*10^{-12}\frac{C^2}{Nm^2}$
		$\vec F_e=k_e\frac{qQ}{r^2}\vec r=q\vec E$
		$\vec F_q=k_eq\displaystyle\sum^N_{i=1}\left(\frac{q_i}{r_i^2}\right)\hat r_i$
		- $\vec E=k_e\displaystyle\sum^N_{i=1}\left(\frac{q_i}{r_i^2}\right)\hat r_i=k_e\int\frac{dq}{r^2}\hat r$
			Units are $\frac{N}{C}$, or $\frac{V}{m}$
		$\lambda=\frac{dq}{dl},\space \sigma=\frac{dq}{dA},\space \rho=\frac{dq}{dV}$
		- $E_\text{ring}=k\frac{2\pi\lambda Rz}{(z^2+R^2)^{3/2}}=\frac{Qz}{(z^2+R^2)^{3/2}}$
			$R$ is the radius of the ring
			$z$ is the distance from the center of the ring to the point
		- $E_\text{disk}=k(2\pi\sigma z)(\frac{1}{z}-\frac{1}{\sqrt{z^2+R^2}})$
			$R$ is the radius of the ring
			$z$ is the distance from the center of the ring to the point
		- $E_\text{plane}=\frac{\sigma}{2\epsilon_0}$
			$\epsilon_0=\frac{1}{4\pi k}=8.85418782\cdot 10^{-12}\frac{C^2}{N\cdot m^2}(\frac{F}{m})$
		- Triboelectric Series
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ceb124be-d224-4714-9058-21a123f967a1/Untitled.png)
	- Gauss’s Law 🔌
		- $\Phi_e=\oint \vec E\cdot d\vec A=\frac{q_\text{en}}{\varepsilon_0}$
			$q_\text{en}$ is the charge enclosed by the Gaussian surface
			$d\vec A$ points outward from the enclosed surface
		- $\Omega=\frac{A}{r^2},\space \text{a sphere has }4\pi\text{ sterdians}$
			Akin to angles, but in 3D:
			$\theta=\frac{l}{r},\text{ a circle has }2\pi\text{ radians}$
		$$E_\text{conducting sphere or uniformly-charged spherical shell}=
		\begin{cases}
		0,\quad r<R\\
		k\frac{Q}{r^2},\quad r\ge R
		\end{cases}$$
		$$E_\text{uniformly-charged sphere}=\begin{cases}
		,\quad r<R
		\\k\frac{Q}{r^2},\quad r\ge R
		\end{cases}$$
	- Electric Potential ⚡️
		$U_E=k_e\frac{qQ}{r}=-\int F\cdot dr=qV=\frac{1}{2}k\frac{Q}{r^2}=\frac{\varepsilon_0}{2}E^2\text{Volume},\space F=-\nabla U$
		- $V_E=k_e\frac{Q}{r}=k_e\displaystyle\sum_{i=1}^N\frac{q_i}{r_i}=k\int \frac{dQ}{r}=-\int E\cdot dr=\frac{U_E}{q},\space E=-\nabla V$
			Units are $V\text{(volts)}=\frac{J}{C}$
		$W=\frac{1}{2}\int V(\vec r)dq$
		$\frac{U_E}{\text{Volume}}=\frac{\varepsilon_0}{2}E^2$
		$V_\text{conducting sphere or uniformly-charged spherical shell}=k\frac{Q}{r}$
		- $\vec p=q\vec d$
			$\vec p$ is the dipole moment, and $\vec d$ is the distance vector point from negative to positive charge
		$V=k\frac{\vec p\cdot\hat r}{r^2}$
		- $E_\text{max air}=3\cdot10^6\frac{N}{C}$
			This is the maximum electric field that can be passed through air before sparks are formed. This process is called electric breakdown, and it can happen to any insulator. The insulator effectively becomes a conductor when such a great electric field forces it to change.
	- Capacitance 📸
		- $Q=CV,\space C=\frac{Q}{V},\space V=\frac{Q}{C}$
			Units of capacitance $C$ are $\text{Farad }(\frac{C}{V})$
			The capacitance is dependent only on the geometry of the capacitor, and not the voltage or charge held.
		$U_C=\frac{1}{2}CV^2=\frac{1}{2}QV=\frac{Q^2}{2C}$
		- $C_\text{plates}=\kappa\epsilon_0\frac{A}{d}$
			$\kappa$ is the dielectric constant
			$\epsilon_0=\frac{1}{4\pi k}=8.85418782\cdot 10^{-12}\frac{C^2}{N\cdot m^2}(\frac{F}{m})$
			$A$ is the area of a single plate
			$d$ is the distance between the plates
		- $C_\text{plate}=\varepsilon_0=\frac{A}{d}$
		$C_\text{series}=\left(\displaystyle\sum_{i=0}^N\frac{1}{C_i}\right)^{-1}$
		$C_\text{parallel}=\displaystyle\sum_{i=0}^NC_i$
	- Current 🚰
		- $I=\frac{dQ}{dt}\approx\frac{\Delta Q}{\Delta t}=nev_dA$
			Units are Ampere $(A=\frac{C}{s})$
			Current measures the number of electrons that pass through a point per unit time
			Current is not a vector because for a given bending wire, it may travel in multiple directions.
			$n$ is the number of charged particles per unit volume
			$e$ is the magnitude of the charge on each charged particle
			$v_d$ is the drift velocity of electrons, $\approx10^{-4}\frac{m}{s}$ in a wire
			$A$ is the area of the wire
			Looks like $I=$ Nevada
		- $\vec J=\frac{dI}{dA}=n|q|\vec v_d$
			$J$ is volume current density
			We don’t call it area current density because current is already a one-dimensional (rather than zero-dimensional, like charge), and so when multiplying $J$ by the 2D quantity of area, the value essentially becomes 1D current.
		- $\vec E=\rho\vec J$
			This is Ohm’s Law
			$\rho$ is the resistivity of a material
		$\rho=\frac{E}{J}$
		- $\sigma=\frac{1}{\rho}$
			$\sigma$ is the conductivity of the material
		- $\rho(T)=\rho_0[1+\alpha(T-T_0)]$
			$\rho_0$ is the reference resistivity at a reference temperature $T_0$, and $\alpha$ is the temperature coefficient of resistivity
			![table.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9de0cde-2057-45da-ac25-9b9e9bdaf6c9/table.png)
		- $R=\frac{\rho L}{A}$
			Units are Ohm’s $(\Omega)$
			Resitivity is kind of like the density of people in a crouded hallway while resistance is like the total number of collisions a student may make trying to get to the end of the hall
		$R(T)=R_0[1+\alpha(T-T_0)]$
		- $V=IR$
			Is not necessarily true for all systems
			Is more like an approximation used by engineers
		$P=IV=I^2R=\frac{V^2}{R}$
		$I\text{ is constant in series circuits}$
		$R_\text{series}=\displaystyle\sum_{i=0}^NR_i$
		$V\text{ is constant in parallel circuits}$
		$R_\text{parallel}=\left(\displaystyle\sum_{i=0}^N\frac{1}{R_i}\right)^{-1}$
		- $\sum I_\text{in}=\sum I_\text{out}$
			This is Kirchhoff’s Current/Junction Rule
		- $(\sum\Delta V)_\text{loop}=0$
			This is Kirchoff’s Loop Rule
			Let $\vec l$ be the path vector of the loop
			$V_\text{resistor}=-(\vec I\cdot\vec l)R$
			$V_\text{battery}=\varepsilon$
		$\tau_\text{RC}=RC,\space Q_\text{max}=C\varepsilon,\space I_\text{max}=\frac{\varepsilon}{R},\space V(t)=\frac{Q(t)}{C}$
		$Q_\text{charge}(t)=Q_\text{max}(1-e^{-\frac{t}{\tau}})$
		$I_\text{charge}(t)=I_\text{max}e^{-\frac{t}{\tau}}$
		$Q_\text{discharge}(t)=Q_\text{max}e^{-\frac{t}{\tau}}$
		$I_\text{discharge}(t)=-I_\text{max}e^{-\frac{t}{\tau}}$
	- Magnetic Fields and Forces 🧲
		- $\vec F=q(\vec E+\vec v\times\vec B)$
			$\vec B$ is symbol for the magnetic field and has units of Teslas $(T)$, which is equal to $\frac{N}{A\cdot m}$
			Gauss $(G)=10^{-4}T$
			Earth’s magnetic field is about 25-65 $\mu T$, or 0.25-0.65 $G$
			Also known as Lorentz Force, where $q\vec E$ is the electric component of the force and $\vec v\times\vec B$ is the magnetic component of the force
			For the force on current-carrying wire, an equivalent formula is: $\vec F_B=\vec IL\times\vec B$
			The magnitude of the magnetic force is then is $|\vec F_B|=|q|vB\sin\phi$
		- $\oint\vec B\cdot d\vec l=\mu_0I_\text{enclosed}$
			This is known as Ampere’s Law, and it says that the vector line integral of the magnetic field around an enclosed area is proportional to the enclosed current 
			i.e. the summated curls of the magnetic field around a point is proportional to the current flowing through that point
			Closed path integrals are evaluated counter clockwise when current points out of the page
		- $\Phi_B=\iint\vec B\cdot d\vec A$
			Magnetic flux has units of Webers $(Wb)$ and equals $Tm^2$
		- $\oint\vec B\cdot d\vec A=0$
			Says that no magnetic charge or magnetic monopoles exist
		- $r=\frac{mv}{qB}$
			This is the radius of a charged particle in a cyclotron/mass spectrometer and has units of meters when $kg$, $\frac{m}{s}$, $C$, and $T$
			  are used for $m$, $v$, $q$, $B$ respectively.
		- $\omega=\frac{qB}{m},\space T=\frac{2\pi m}{|q|B},\space f=\frac{|q|B}{2\pi m}$
			The angular velocity, time period, and frequency of a charged particle circuiting in a magnetic field
		- $v=\frac{E}{B}$
			The velocity that is screened for in a velocity selector is dependent only on $E$ and $B$ 
		- $\vec F_B=ne\vec v_dALB=I\vec L\times\vec B$
			Known as the Lorentz Force
			$\vec L$ points in the direction of the current
			$ne\vec v_dA$ is the same as current
		$\vec F_B=\int I\vec dl\times\vec B$
		- $\vec\mu=I\vec A$
			Known as the magnetic moment, and anything that produces one can be called a magnetic dipole
			For a motor, $\vec A$ points perpendicular to the plane of the motor coils in the direction of thumb when curling the right hand along the direction of current flow
		- $\tau=N IAB\sin\phi=N\vec\mu\times\vec B$
			The torque of a motor depends on the number of motor coils $N$, the current $I$, the area of the motor coils $A$, the magnetic field $B$, and the angle between the area vector and the magnetic field vector $\phi$
			The torque has the effect of aligning the area vector/magnetic moment with the magnetic field vector
		- $U=-\mu\cdot B$
			The potential energy of a magnetic moment in a magnetic field
		- $\text{Magnets}$
			Magnets generate magnetic fields out of their north end and into their south end
			A magnetic dipole near a nonuniform magnetic field-generating magnet (e.g. a bar magnet) will be attracted if its magnetic moment points parallel with the generated magnetic field. If they point in opposite directions, they will repel each other
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/564b1fd4-bf12-4e3a-91ae-f8c0475332c5/Untitled.png)
			Magnetic dipoles that are attracted will also experience a stretching force, whereas magnetic dipoles that are repelled will experience a compression force
		- $\text{Hall Effect}$
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/519357d6-ac65-4ed4-991f-93464a1672c6/Untitled.png)
			Experiment showed that charge carriers are negative
			$nq=-\frac{J_xB_y}{E_z}$
		- $\vec B=\frac{\mu_0}{4\pi}\frac{q\vec v\times\hat r}{|\vec r|^2}=\frac{\mu_0}{4\pi}\frac{q\vec v\times\vec r}{|\vec r|^3}$
			$\mu_0=4\pi\cdot10^{-7}\frac{T\cdot m}{A}=1.25663706\cdot 10^{-6}\frac{T\cdot m}{A}\text{ (Magnetic Constant)}$
			$\vec r$ points from the moving charge to the point of $\vec B$ measurement
			$\hat r$ is the normalized (magnitued of 1) unit vector of $\vec r$
		- $\vec B=\frac{\mu_0}{4\pi}\int\frac{I\vec dl\times\hat r}{|\vec r|^2}=\frac{\mu_0}{4\pi}\int\frac{I\vec dl\times\vec r}{|\vec r|^3}$
			Called the Biot-Savart Law
			$\vec r$ and $\hat r$ are the same as in the above equation
		- $|d\vec B|=\frac{\mu_0Idl\sin\phi}{4\pi r^2}$
			Works when $|d\vec B|$ and $dl$ are sufficiently small
			$\phi$ is the angle between the magnetic field vector and the radial unit vector, which points from the current component to the point of measurement
		- $B_\text{wire}=\frac{\mu_0I}{2\pi r}$
			The direction of the $\vec B$ can be found by the right thumb to point in the direction of $I$ and then curling the other four fingers, which will point in the direction of the generated $\vec B$
		- $B_\text{wire length}=\frac{\mu_0 I}{4\pi}\frac{\ell}{r\sqrt{r^2+(\frac{\ell}{2})^2}}$
			This is the magnetic field at a point a distance $r$ from the conducting wire of length $\ell$
		- $B_\text{coil}=\frac{\mu_0NIR^2}{2(h^2+R^2)^{3/2}}$
			The direction of $\vec B$ points in the direction of the right thumb when the other four fingers curl in the direction of $I$ in the coil
			$N$ is the number of loops
			$R$ is the radius of the coil
			$h$ is the distance between the center of the coil and the point of measurement
		- $B_\text{solenoid}=\frac{\mu_0NI}{\ell}$
			This is the magnitude of the magnetic field inside a solenoid
			$N$ is the number of coil turns
			$\ell$ is the length of the solenoid
			The solenoid points in the direction of the right thumb when curling the fingers in the direction of current
		- $B_\text{toroidal solenoid}=\frac{\mu_0NI}{2\pi r}$
			This is the magnitude of the magnetic field inside a toroidal solenoid
			$N$ is the number of wire loopings around the toroid
		- $B_\text{inside wire}=\frac{\mu_0Ir}{2\pi R^2}$
			$r$ is the distance from the center of the wire to the radius of measurement
			$R$ is the radius of the wire
		- $B_\text{parallel wires}\frac{\mu_0I_1I_2}{2\pi r}$
			Wires with current flowing in the same direction will attract each other while wires with current flowing in opposite directions will repel each other
		- $B_{\text{from }\vec\mu}=\frac{\mu_0\mu_\text{total}}{2\pi(x^2+a^2)^{3/2}}$
			$x$ is the distance from the magnet to the point of interest
			$a$ is the width of the magnet
			$\mu_\text{total}$ is often found from $M$, the magnetization of a magnet
	- Quantum Magnetism ⚛️
		- $\vec\mu=m_l\frac{e\hbar}{2m}$
			$\mu$ is the magnetic moment of an atom with an electron orbiting it (Bohr magneton)
			$m_l$ is the magnetic quantum number
			$e$ is the charge of the electron
			$\hbar=\frac{h}{2\pi}=1.05457266\cdot 10^{-34}J\cdot s\text{ (Reduced Planck's constant)}$
			$m$ is the mass
			$\mu_B=\frac{e\hbar}{2m}=9.274\cdot 10^{-24}A\cdot m^2$
		- $\vec M=\frac{\vec\mu_\text{total}}{V}$
			$\vec M$ is the magnetization of a material and is the net magnetic moment per unit volume
			$\vec\mu_\text{total}$ is often 0 in atoms because the orbital and spin magnetic moments of electrons tend to cancel each other out in atoms
			For atoms like iron where there are free unparied $d$ orbital electrons, they can achieve a net magnetic moment
			Unpaired $e^-$ = paramagnetic
			Paired $e^-$ = diamagnetic
		- $\vec B=\vec B_0+\mu_0\vec M$
			The overall magnetic field inside a material is equal to the external magnetic field applied plus the permeability of free space times the magnetization of the material
			If $\vec M$ is aligned/**para**llel to $\vec B_0$, then the material is **para**magnetic. Otherwise, it’s diamagnetic
			So $\vec B$ is greater in paramagnetic materials, meaning they are more magnetic (e.g. iron is more magnetic and it’s paramagnetic)
		- $K_m=\frac{B}{B_0}=\frac{\mu}{\mu_0}$
			Called the relative permeability of a material
			$K_m=1$ means the material is like a vacuum in terms of the strength of the magnetic field inside it
			$K_m>1$ means the material is paramagnetic, or has a stronger magnetic field inside than in a vacuum for the same external $\vec B_0$
			$K_m<1$ means the material is diamagnetic, or has a weaker magnetic field inside than in a vacuum for the same external $\vec B_0$
		- $\chi_m=K_m-1$
			Called the magnetic susceptibility of a material
			Common magnetic susceptibilities:
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/84618585-580a-4371-830d-9ed19d400f8e/Untitled.png)
		- $\text{Hysteresis}$
			![Screen Shot 2022-10-10 at 5.34.04 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a397b123-d50b-45db-a054-5cf99865fe50/Screen_Shot_2022-10-10_at_5.34.04_PM.png)
		- $\text{Superconductors}$
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b1c7f02-2186-4206-898d-e151c04d098c/Untitled.png)
	- Induction 🛵
		- $|\varepsilon|=N|\frac{d\Phi_B}{dt}|$
			Called Faraday’s Law of Induction
			$\varepsilon$ is the emf in a closed loop
			$N$ is the number of loops of coil
			$\frac{d\Phi_B}{dt}$ is the change in magnetic flux through the area bound by the closed loop
			Units are $\frac{Wb}{s}$, and $Wb=Tm^2$
		- $\text{Lenz's Law}$
			States the direction of $\varepsilon$ in Faraday’s law
			The direction is that of the four right fingers curled when the thumb points in the direction of decreasing magnetic flux
		$\varepsilon=\oint(\vec v\times\vec B)\cdot\vec dl$
		- $|\varepsilon_\text{alternator}|=\omega BA\sin\omega t$
			$\omega$ is the angular velocity of the alternator rotation
		- $|\varepsilon_\text{alternator average}|=\frac{2N\omega BA}{\pi}$
			$N$ is the number of loops of the alternator coil
			$\omega$ is the angular velocity of the alternator
		- $|\varepsilon_\text{slidewire}|=vLB$
			$v$ is the velocity of the rod
			$L$ is the length of the rod
			$B$ is the magnitude of the magnetic field
		- $|\varepsilon_\text{faraday disk dynamo}|=\frac{1}{2}\omega BR^2$
			$\omega$ is the angular velocity of the dynamo
			$R$ is the radius of the disk
		- $M=\frac{N_2\Phi_{B2}}{I_1}=\frac{N_1\Phi_{B1}}{I_2}$
			$M$ is the mutual inductance between two solenoids on the same axis
			$M$ is also the constant of proportionality between $\Phi_{B2}$ and $I_1$ or between $\Phi_{B1}$ and $I_2$
			Units are Henry $(H)=\frac{Wb}{A}$
		- $L=\frac{N\Phi_B}{I}$
			$L$ is the self-inductance, which is the constant of proportionality between $\Phi_B$ and $I$ through the solenoid
			Units are also $H$
		- $\varepsilon=-M\frac{dI}{dt}=-L\frac{dI}{dt}$
			Inductors resist the flow of current. i.e. when you first switch on a circuit, the inductor induces an emf in the opposite direction to the circuit flowing through it. Over time, the current flow will steady out, meaning $\frac{dI}{dt}=0$. This steady current means the inductor won’t induce any emf. When you switch the circuit off, the current decreases, meaning the inductor will induce an emf in the direction that circuit is flowing.
			The water-pipe analogy for inductors are water wheels. It takes time/energy to get a water wheel going, but once it’s going, it keeps going even when there is nothing driving the water forward.
		$U_\text{inductor}=\frac{1}{2}LI^2$
		- $u=\frac{B^2}{2\mu_0}$
			$u$ is the magnetic energy density
		$L_\text{series}=\displaystyle\sum_{i=0}^NL_i$
		$L_\text{parallel}=\left(\displaystyle\sum_{i=0}^N\frac{1}{L_i}\right)^{-1}$
		$\tau_\text{RL}=\frac{L}{R},\space I_\text{max}=\frac{\varepsilon}{R},\space V_\text{drop}=-\varepsilon=L\frac{dI}{dt}$
		$I_\text{charge}=I_\text{max}(1-e^{-\frac{t}{\tau}})$
		$I_\text{discharge}=I_\text{max}e^{-\frac{t}{\tau}}$
		$\omega_\text{LC}=\sqrt{\frac{1}{LC}},\space Q_\text{max}=C\varepsilon{},\space V_\text{capacitor}(t)=\frac{Q(t)}{C},\space V_\text{inductor}(t)=-\varepsilon_\text{inductor}=L\frac{dI}{dt}$
		$Q(t)=Q_\text{max}\cos(\omega_\text{LC}t+\phi)$
		$I(t)=-\omega Q_\text{max}\sin(\omega_\text{LC}t+\phi)$
		$U=\frac{Q_\text{max}^2}{2C}=U_B+U_E=\frac{1}{2}LI^2+\frac{Q^2}{2C}$
		$\beta=\frac{R}{2L},\space \omega_\text{LRC}=\sqrt{\omega_\text{LC}^2-\beta^2}$
		$Q(t)=Q_\text{max}e^{-\beta t}\cos(\omega_\text{LRC}t+\phi)$
		Under damping: $\beta<\omega_0\space \text{or}\space R^2<\frac{4L}{C}$ (oscillation)
		Critical damping: $\beta=\omega_0\space \text{or}\space R^2=\frac{4L}{C}$ (no oscillation)
		Over damping: $\beta>\omega_0\space \text{or}\space  R^2>\frac{4L}{C}$ (no oscillation)
	- AC Current ∿
		$v(t)=V\cos(\omega t),\space i(t)=I\cos(\omega t)$
		$V_\text{rms}=\frac{V}{\sqrt{2}},\space I_\text{rms}=\frac{I}{\sqrt{2}}$
		$v_R(t)=IR\cos(\omega t)$
		$v_L(t)=IX_L\cos(\omega t+\frac{\pi}{2}),\space X_L=\omega L$
		$v_C(t)=IX_C\cos(\omega t-\frac{\pi}{2}),\space X_C=\frac{1}{\omega C}$
		- $v_\text{LRC}=IZ\cos(\omega t+\phi),\space Z=\sqrt{R^2+(X_L-X_C)^2},\space \phi=\tan^{-1}\left(\frac{X_L-X_C}{R}\right)$
			$Z$ is the impedence of an LRC circuit, which is a sort of resistance of the circuit
			$\phi$ is the power factor of your LRC circuit, which is a factor of how much power is dissipated by the circuit.
		$p_R(t)=I^2R\cos^2(\omega t)$
		$p_L(t)=-I^2\omega L\sin(\omega t)\cos(\omega t)$
		$p_C(t)=\frac{I^2}{\omega C}\sin(\omega t)\cos(\omega t)$
		- $P_\text{average LRC}=\frac{1}{2}VI\cos(\phi)$
			When $\phi=0$ with power factor $\cos(\phi)=1$, you have the power delivered as $P=V_\text{rms}I_\text{rms}$, which is the same as the power delieverd from a resistor
			When  $\phi=\pm\space 90^\degree$ with power factor $\cos(\phi)=0$, you have the power delivered as $P=0$, which is the same as the power delieverd from a pure inductor or capacitor
		- $\omega_0=\frac{1}{\sqrt{LC}}$
			The resonance frequency of an AC LRC circuit is the same as the resonance frequency of a DC LC circuit
		- $\frac{V_2}{V_1}=\frac{N_2}{N_1}$
			For a transformer, the voltage received by a secondary winding is proportional to the ratio of the windings (so more windings on the second winding means greater output voltage) and to the voltage through the first winding
			$N_2>N_1\rightarrow V_2>V_1$, which is a step-up transformer
			$N_2>N_1\rightarrow V_2>V_1$, which is a step-down transformer
		$R=(\frac{N_2}{N_1})^2\frac{V_1}{I_1}$
	- Maxwell’s Equations 📡
		- $\oint_S E\cdot dA=\frac{q_\text{enc}}{\varepsilon_0}$
			Gauss’s Law
			States that the electric flux through an enclosed surface is proportional to the charge that the surface encloses
		- $\oint_S B\cdot dA=0$
			Gauss’s Law for magnetism
			States that the magnetic flux through an enclosed surface is equal to 0
			i.e. there is no such thing as a magnetic dipole/charge
		- $\oint_\mathscr{C} E\cdot dl=-\frac{d\Phi_B}{dt}$
			Faraday’s Law
			States that the circulation/curl of an electric field about a loop scales with changing magnetic flux through the loop
			Direction of current is dictated by Lenz’z law
		- $\oint_\mathscr{C} B\cdot dl=\mu_0\left(I_c+\varepsilon\frac{d\Phi_E}{dt}\right)_\text{enc}$
			Ampere’s Law
			States that the curl of a magnetic field around a loop scales with the current and displacement current (changing electric field) through the loop
			Displacement current density is $\varepsilon\frac{dE}{dt}$
		- $\nabla\cdot E=\frac{\rho}{\varepsilon_0}$
			The divergence of the electric field at a point is proportional the  point’s charge density
		- $\nabla\cdot B=0$
			The divergence of the magnetic field at a point is zero; there are no magnetic sources or sinks (monopoles)
		$\nabla\times E=-\frac{\partial B}{\partial t}$
		$\nabla\times B=\mu_0(J+\varepsilon_0\frac{\partial E}{\partial t})$
	- Electromagnetic Waves 🌈
		$c=\lambda\nu=\frac{1}{\mu_0\varepsilon_0}$
		- $\vec E\times\vec B=\vec c_\text{prop}$
			$\vec c_\text{prop}$ is the direction of propagation of an EM wave
		$$\Vert\vec E\Vert=c
		\Vert\vec B\Vert$$
		- $E(x,t)=E_\text{max}\cos(kx-\omega t)$
			If $\vec c$ goes in the same direction as positive $x$, then $\omega$ is positive. Otherwise, $\omega$ is negative
		- $B(x,t)=B_\text{max}\cos(kx-\omega t)$
			Same rules apply as to $E(x,t)$
		$k=\frac{2\pi}{\lambda},\space \omega=\frac{2\pi}{T}=2\pi f$
		$\lambda_{\text{like}}=\frac{2L}{n},\space n\in \mathbb{N}$
		$\lambda_{\text{mixed}}=\frac{4L}{n},\space n\in \mathbb{N_{odd}}$
		- $n=\frac{c}{v}=\sqrt{\kappa\kappa_\mu}$
			The index of refraction
			Ratio of the speed of light in a vacuum to the speed of light in a medium
			$\kappa$ is the relative permitivity or dielectric constant of the medium
			$\kappa_\mu$ is the relative magnetic permeability of the medium
		$u=\frac{I}{c}=\frac{1}{2}\varepsilon_0E^2+\frac{1}{2\mu_0}B^2=\varepsilon_0E^2=\frac{B^2}{\mu_0}$
		- $\vec S=\frac{1}{\mu_0}\vec E\times\vec B=\frac{E_\text{max}B_\text{max}}{\mu_0}\cos^2(kx-\omega t)$
			Poynting vector
			Average of $S$ is light intensity, or the power per unit area
		$P=\oint\vec S\cdot d\vec A$
		- $I=S_\text{average}=\frac{E_\text{max}B_\text{max}}{2\mu_0}=\frac{1}{2}\varepsilon_0cE^2_\text{max}$
			Has units of $\frac{W}{m^2}$, or power per unit area
		- $p_\text{rad absorbed}=\frac{I}{c}$
			Defined as radiation pressure
			Same units as regular pressure
		$p_\text{rad reflected}=\frac{2I}{c}$
		$E_\text{standing}(x,t)=-2E_\text{max}\sin(kx)\sin(\omega t)$
		$B_\text{standing}(x,t)=-2B_\text{max}\cos(kx)\cos(\omega t)$
		$x_{\text{nodal planes of }\vec E}=n\frac{\lambda}{2};\space n\in \mathbb{N}$
		$x_{\text{nodal planes of }\vec B}=n\frac{\lambda}{4};\space n\in \mathbb{N}_\text{odd}$
	- Optics 🔎
		Snell’s Law Simulation: https://www.desmos.com/calculator/om6hzshyda
		Optics Simulation: https://www.desmos.com/calculator/iqldzpondt
		- $n=\frac{c}{v}$
			Index of refraction
		- $\theta_r=\theta_a$
			The angle between the reflected light ray and the normal of the surface is equal to the angle between the incident light ray and the normal of the surface
		- $n_a\sin(\theta_a)=n_b\sin(\theta_b)$
			Snell’s Law
			$\theta$ is measured as between the light ray and the normal to the medium surfaces
			$n_a$ is the index of refraction for the medium the light enters from
			$n_b$ is the index of refraction for the medium the light enters
			Other forms are:
			$\frac{\sin(\theta_a)}{\sin(\theta_b)}=\frac{v_a}{v_b}=\frac{n_b}{n_a}$
		- $\lambda=\frac{\lambda_0}{n},\space k=nk_0$
			$\lambda$ is the wavelength of light in the medium
			$\lambda_0$ is the wavelength of light in a vacuum
			$n$ is the index of refraction
			$k$ is the wave number of light in the medium
			$k_0$ is the wave number of light in the vacuum
			$f$ stays constant between mediums, $\lambda$ shortens to compensate for the wave slowing down
		- $\theta_\text{crit}=\sin^{-1}(\frac{n_b}{n_a})$
			When an light ray makes an angle $\theta_\text{crit}$ with the normal of the medium surfaces, the resulting light ray travels along the seam between the mediums rather than reflecting or refracting
			$n_a$ is the medium that the light enters from
			$n_b$ is the medium that the light enters
		- $n \propto \frac{1}{\lambda}$
			For most materials, this is the case
			For many materials, the amount of refraction depends on the wavelength of light. If this is true, this dependence is called dispersion
		- $I=I_\text{max}\cos^2(\phi),\space I_\text{max}=\frac{I_0}{2}$
			Malus’s Law
			The intensity through a second polarizer depends on the  angle $\phi$ between the two polarizers’ axes 
		- $\tan(\theta_p)=\frac{n_b}{n_a}$
			Brewster’s Law
			The angle of incident light at which none of the reflected light has light polarized in the parallel to the plane of incidence
			A consequence of this law is that the reflected and refracted ray are perpendicular to eachother
			$\theta_p$ is the angle between the polarized light and the 
		- $I_\text{rayleigh scattered}\propto \frac{1}{\lambda^4}$
			The intensity of scatttered light due to Rayleigh scattering is inversely proportional to the fourth power of the wavelength of light. So blue light for example scatters much more than red light
		- $m = \frac{y'}{y} = -\frac{s'}{s}=-\frac{n_as'}{n_bs}$
			The lateral magnification of an image
			$m<0$ corresponds to an inverted image
			$y'$ is the image height
			$y$ is the object height
			$s$ is the distance from the object to the mirror surface
			$s'$ is the distance from the object to the mirror surface
			$s > 0$ when the object’s on the same side as the incident ray
			$s' > 0$ when the image’s on the same side as the reflected or refracted ray
		- $m_\text{total}=m_1m_2\ldots m_n$
			The total magnification of a series of lens is the product of each lens’ magnifications
		- $\frac{1}{s}+\frac{1}{s'}=\frac{1}{f}=\frac{2}{R}$
			Image position for a spherical mirror of radius $R$
			$f$ is the focal length of the spherical mirror
			Same sign conventions as in above equation
			$R>0$ when the center of the spherical mirror is on the same side as the reflected light
			Essentially assumes $R \ll s$
		- $\frac{n_a}{s}+\frac{n_b}{s'}=\frac{n_b-n_a}{R}$
			Spherical lens equation for refraction between two media with different refractive indexes
			$n_a$ is the refractive index of the medium that the incoming light first passes through
			$n_b$ is the refractive index of the medium that the refracted light passes through
			Same sign rules as above equation
			Essentially assumes $R \ll s$
		- $\frac{1}{f}=(n-1)(\frac{1}{R_1}-\frac{1}{R_2})$
			Thin lensmaker equation
			$f$ is the focal length
			Assumes the lens’ thickness is less than the curvature of the lens ($d\ll R$)
		- $\frac{1}{f}=(n-1)\left(\frac{1}{R_1}-\frac{1}{R_2}+\frac{(n-1)d}{nR_1 R_2}\right)$
			Full lensmaker equation
| $s>0$                          | $s'>0$           | $R>0$           |                               |
| ------------------------------ | ---------------- | --------------- | ----------------------------- |
| If the X is on the same side as Y light rays | object; incoming | image; outgoing | center of curvature; outgoing | 
		- $f\text{-number}=\frac{f}{D}$
			The $f\text{-number}$ of a camera depends on the focal length $f$ and the diameter of the aperature $D$
			$f\text{-numbers}$ are generally given in the format of $\frac{f}{f\text{-number}}$. For example, $\frac{f}{1.4}$ would correspond to an $f\text{-number}$ of $1.4$
		$I\propto\frac{1}{(f\text{-number})^2}$
		- $P=\frac{1}{f}$
			$P$ is the optical power of the lens
			$f$ is the focal length of the lens and $=\frac{R}{2}$, where $R$ is the radius of the lens
			The optical power of a lens determines how much bends light toward a point
			$P>0$ means $f>0$ and that the lenses are converging for hyperopia (far-sighted, short eyeballs)
			$P<0$ means $f<0$ and that the lenses are diverging for myopia (near-sighted, long eyeballs)
			Increasing $|P|$ means lowering $f$ and $R$, which means more converging or diverging of light
|                             | Nearsighted                                 | Farsighted                                  |
| --------------------------- | ------------------------------------------- | ------------------------------------------- |
| Can see                     | Near things                                 | Far things                                  |
| Can’t see                   | Far things                                  | Near things                                 |
| X-opia                      | Myopia                                      | Hyperopia                                   |
| X-eyeballs                  | Long eyeballs                               | Short eyeballs                              |
| Lenses needed               | Divergent lens                              | Convergent lens                             |
| $f$ needed for focal lenses | $f<0$                                       | $f>0$                                       |
| $P$ needed for focal lenses | $P<0$                                       | $P>0$                                       |
| Eye size through lens       | Eyes look small from observer’s perspective | Eyes look large from observer’s perspective |
		- $M=\frac{\theta'}{\theta}=\frac{s_\text{nearpoint}}{f}$
			$M$ is the angular magnification of
			$\theta'$ is the angle subtended by the image height at the point of observation
			$\theta$ is the angle subtended by the object height at the point of observation
			$s_\text{nearpoint}$ is often taken as 25 cm for the human eye
			$f$ is the focal length of the lens
			Assumes that the object angle is small to allow for $\theta'\approx\theta\approx \sin\theta=\frac{y}{f}$
		- $M_\text{microscopes}=m_1M_2=\frac{s_\text{nearpoint}s_1'}{f_1 f_2}$
			Microscopes use two converging lens: the objective lens and the eyepiece
			$s_\text{nearpoint}$ is often taken as 25 cm for the human eye
			$s_1'$ is the length between the objective lens and the focal point of the eyepiece
			$f_1$ and $f_2$ are the focal length of the lenses
		- $M_\text{telescopes}=-\frac{f_1}{f_2}$
			Telescopes use two converging lens like microscopes
	- Interference 📡
		- $\text{Constructive Interference: }r_2-r_1=m\lambda, \space m\in \mathbb{Z}$$\text{Destructive Interference: }r_2-r_1=(m+\frac{1}{2})\lambda, \space m\in Z$
			$r_i$ is the distance from the point source to the point of interest
			$\lambda$ is the wavelength of light
			Constructive interference for two points produces linear nodal curves
			Destructive interference for two points produces hyperbolic antinodal curves
			The central bright peak corresponds to $m=0$ for constructive inteference
			The $n$th bright peak corresponds to $m=\pm n$ for constructive inteference
			The $n$th dark band corresponds to $m+\frac{1}{2}=\pm\frac{n}{2}$
		- $r_2-r_1=d\sin\theta$
			The difference in distances from two double slits to the point of interest is approximated by the above equation
			$d$ is the distance between the slits
			$\theta$ is the angle between the normal plane and the line formed between the center of the double slit and the point of interest
			Assumes $d\ll R$, the normal distance from the slits to the screen
		- $y_m=R\tan\theta_m\approx R\sin\theta_m$
			For constructive interference, $y_m$ is the distance between the center of the intensity pattern and the $m$th bright band
			For destructive interference, $y_m$ is the distance between the center of the intensity pattern and the $m$th dark band
			The approximation assumes $d\ll R$ and $y_m\ll R$
			When $\theta_m=\theta_0$, this corresponds to the central bright peak
			$\theta_m=\theta_n$ corresponds to the $n$th bright peak
		- $I=I_0\cos^2(\frac{\phi}{2})\approx I_0\cos^2(\frac{\pi dy}{\lambda R}),\space I_0=2\varepsilon_0cE^2,\space\phi=\frac{2\pi d}{\lambda}\sin\theta,\space \sin\theta\approx\frac{y}{R}$
			The intensity of light at each point depending on either the angle $\theta$ between the center line (the normal to the surface that intersects the center of the double slit) and the point of interest or depending on the shortest height $y$ between the center line and the point of interest
			This equation is for intereference, but it does not account for diffraction. The equation predict equal amplitudes of all of the intensity peaks, but in reality, the peaks diminish as $\theta$ deviates further from $0$
			The approximations are valid only when $d\ll R$
			**NOTE**: This formula and many others work only in radians mode (as indicated by the $\pi$’s)
			
|$n_a>n_b$|$n_a=n_b$|$n_a<n_b$|
|---|---|---|
|$\phi_\text{reflected}=0$|$\text{No reflection}$|$\phi_\text{reflected}=\pi$|
		- $\text{Constructive: }2t=(m+\frac{\Delta\phi}{2\pi})\lambda,\space \text{Destructive: }2t=(m+\frac{1}{2}-\frac{\Delta\phi}{2\pi})\lambda \space \\m\in0,\mathbb{Z}^+$
			$t$ is the thickness of a thin film
			$\lambda$ is the wavelenght of light in the medium of the thin film (may have to use $\lambda=\frac{\lambda_0}{n}$)
			When only one surface undergoes a half-cycle phase shift, then $\frac{\Delta\phi}{2\pi}=\frac{1}{2}$. Otherwise, $\frac{\Delta\phi}{2\pi}=0$
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b932fca5-814c-417e-b854-52e4a93606cb/Untitled.png)
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc08d208-d54a-4f37-affd-cbd42973257b/Untitled.png)
		$y_{m_\text{michelson inferometer}}=m\frac{\lambda}{2}$
	- Diffration 🔦
		- $\sin(\theta_\text{dark})=\frac{m\lambda}{a},\space m=\mathbb{Z}-\{0\}$
			The angular location of the dark fringes for far-field (Fraunhofer) diffraction
			The $n$th dark band would correspond to $m=\pm n$
		- $y_m=R\sin\theta_m$
			$\theta_m$ can be found from $\sin(\theta_\text{dark})\approx\frac{m\lambda}{a}$, which holds when the screen is far from the light obstacle
			Interestingly, the central bright band is twice as large as the other bright bands
		- $I=I_0\cos^2(\frac{\phi}{2})(\frac{\sin(\beta/2)}{\beta/2})^2,\space\beta=\frac{2\pi}{\lambda}a\sin(\theta)$
			Intensity of light at a certain angle $\theta$ or height 
			The $\cos^2(\frac{\phi}{2})$ factor comes from interference of the waves
			The $(\frac{\sin(\beta/2)}{\beta/2})^2$ factor comes from diffraction of light
		- $I_m\approx\frac{I_0}{(m+\frac{1}{2})^2\pi^2},\space m\in\mathbb{Z}^+$
			The intensity of a bright band for far-field (Fraunhofer) diffraction
			The $n$th bright peak corresponds to $m=\pm n$
			The intensity at $m=0$ is just $I_0$ (doesn’t appear that way from this equation)
		- $\text{Missing maxima at }k\text{th peak when }d=ka$
			For a double slit experiment with finite-width slits, the $k$th bright peak is missing when the slit separation distance $d$ is an integer multiple of the slit width $a$ by a factor of $k$
		- $I_\text{principal peaks}=N^2I_0$
			When there are $N$ slits for diffraction grating, the intensity of the principal peaks are $N^2$ times the central peak intensity for when there is one slit
		$\#\text{ minima between principal peaks}=N-1$
		$\text{Principal peak width}\propto\frac{1}{N}$
		- $\sin\theta_1=1.22\frac{\lambda}{D}$
			Light outgoing from a circular aperture produces a circular diffraction pattern with a central bright circle called the Airy disk
			$\theta_1$ is the angle between the center line and the line formed from the center of the aperture and the edge of the Airy disk
			$\lambda$ is the wavelength of light
			$D$ is the diameter of the aperture
	- Special Relativity 🚀
		*NOTE*: I have only verified these equations have only been verified for inertial reference frames (no accelerating reference frames)
		- Einstein’s Postulates
			(1) The laws of physics are the same from all inertial reference frames
			(2) The speed of light in a vacuum is a constant $c$
			(3) For low speed, classical Newtonian physics should hold
		- $\gamma=\frac{1}{\sqrt{1-\frac{v^2}{c^2}}}$
			Called the Lorentz’s factor
			Is a ubiquitous factor for equations in special relativity like for time dilation
			$v$ is the magnitude of the velocity that a reference frame $S'$ is moving relative to $S$
			When $v\ll c$, $\gamma\approx 1$
			As $v\rightarrow c$, $\gamma$ increases significantly beyond $1$
		- $\Delta t=\gamma\Delta t_0$
			This equation describes the time dilation of an event that is stationary in $S'$ as observed by someone in the reference frame $S$
			$\Delta t_0$ is the time measured of an event that occurs at the same point in $S'$ (called the proper time for this event)
			$\Delta t$ is the time measured of an event in $S$
		- $l=\frac{l_0}{\gamma}$
			This equation describes the length contraction of an object that is stationary in $S'$ as observed by someone in reference frame $S$
			$l_0$ is called the proper length of the object and is measured in $S'$.
			$l$ is the length measured of the object in $S$
			The length measured has to be parallel to the movement between $S$and $S'$
		- $x'=\gamma(x-ut)$
			The Lorentz-transformed $x$-coordinate $x'$ in $S'$ of $x$ in $S$
			$u$ is the velocity of $S'$ relative to $S$
		- $t'=\gamma(t-\frac{ux}{c^2})$
			The Lorentz-transformed time $t'$ in $S'$ of $t$ in $S$
			$t$ and $x$ are native to $S$
		$v'_x=\frac{v_x-u}{1-\frac{uv_x}{c^2}}$
		$p=\gamma mv$
		$F^\parallel=\gamma^3ma$
		$F^\perp=\gamma ma$
		$F=\gamma m[a+\frac{\gamma^2}{c^2}v(\vec v\cdot \vec a)]$
		$K=(\gamma-1)mc^2$
		$E=K+mc^2=\gamma mc^2$
		$E^2=(mc^2)^2+(pc)^2$
		- Lorentz Transformation
			Blog explaining hyperbolic trig functions: https://www.physicslog.com/blog/2019/03/lorentz-hyperbolic-rotation/
			$$\begin{bmatrix}
			t'\\
			x'\\
			y'\\
			z'
			\end{bmatrix} =
			\begin{bmatrix}
			\gamma & \gamma\beta & 0 & 0\\
			\gamma\beta & \gamma & 0 & 0\\
			0 & 0 & 1 & 0\\
			0 & 0 & 0 & 1
			\end{bmatrix}
			\begin{bmatrix}
			t\\
			x\\
			y\\
			z
			\end{bmatrix} = 
			\begin{bmatrix}
			\cosh \theta & \sinh \theta & 0 & 0\\
			\sinh \theta & \cosh \theta & 0 & 0\\
			0 & 0 & 1 & 0\\
			0 & 0 & 0 & 1
			\end{bmatrix}
			\begin{bmatrix}
			t\\
			x\\
			y\\
			z
			\end{bmatrix}$$
			$\beta = \frac{v}{c}$
			$\gamma = \frac{1}{\sqrt{1 - \beta^2}} = \cosh \theta$
			$\gamma\beta = \sinh \theta$
		- $s^2 = (ct)^2 - \vec r^2$
			$s$ is the preserved interval for Lorentz Transformations
			$\vec r = (x, y, z)$
		$$g_\text{Euclidean} = \begin{bmatrix}
		1 & 0 & 0\\
		0 & 1 & 0\\
		0 & 0 & 1
		\end{bmatrix}$$
		$$g_\text{hyperbolic} = \begin{bmatrix}
		1 & 0 & 0 & 0\\
		0 & -1 & 0 & 0\\
		0 & 0 & -1 & 0\\
		0 & 0 & 0 & -1
		\end{bmatrix}$$
		$$s^2 = \begin{bmatrix}
		ct & x & y & z
		\end{bmatrix} g_\text{hyperbolic}
		\begin{bmatrix}
		ct\\
		x\\
		y\\
		z
		\end{bmatrix} = (ct)^2 - (x^2 + y^2 + z^2)$$
		- $$\phi = \begin{bmatrix}
		\omega / c & k_x & k_y & k_z
		\end{bmatrix} g_\text{hyperbolic}
		\begin{bmatrix}
		ct\\
		x\\
		y\\
		z
		\end{bmatrix} = \omega t - \vec k \cdot \vec r$$
			$$k = \begin{bmatrix}
			\omega / c, k_x, k_y, k_z
			\end{bmatrix}$$
	- Mathematical Methods
		https://www.physicswithelliot.com/all-notes
		- Vector/Tensor Analysis
			- Tensor Definition
				Best contravariant/covariant explanation: https://www.youtube.com/watch?v=CliW7kSxxWU
				Tensor explanation 1: https://www.youtube.com/watch?v=7c8Agf9qtfI
				Tensor explanation 2: https://www.youtube.com/watch?v=ztUHlZftPlo
				Tensor explanation 3: https://www.youtube.com/watch?v=nNMY02udkHw
				A rank $n$ tensor in $m$ dimensional space has $n$ indicies (or coordinates), $m^n$ components, and transforms as described by a generalized version of the above transformation rule
				E.g. the 3D stress tensor is a rank $2$ tensor and has $3^2$ components. Likewise, vectors in 3D are rank $1$ tensors and have $3^1$ components
				Superscript represents column vectors:
				$$T^i = (T^i)_{i = 1, 2, 3} = 
				\begin{bmatrix}
				T^1\\
				T^2\\
				T^3
				\end{bmatrix}$$
				Subscript represents row vectors:
				$$T_{i} = (T_i)_{i = 1, 2, 3} = \begin{bmatrix}
				T_1 & T_2 & T_3
				\end{bmatrix}$$
			- $\varepsilon_\text{ijk}=
			\begin{cases}
			~~~1,\quad\text{even permutation of } \varepsilon_{ijk}\\
			-1,\quad \text{odd permutation of } \varepsilon_{ijk}\\
			~~~0,\quad \text{otherwise}
			\end{cases}$
				Called the Levi-civita symbol
			$\varepsilon_{ijk}\delta_{jk}=0$
			$\varepsilon_{ijk}\varepsilon_{ilm}=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}$
			$M_{ij}N_{jk}=(MN)_{ik}$
			$R_{ij}=R_{ji}^{-1}\text{ for orthogonal }R$
			- $v_i'=R_{ij}v_j$
				The vector components in a new  coordinate system $S'$ that is rotated with respect to the original coordinate system $S$ can be represented by the orthogonal transformation of the vector
				Vectors are defined to describe values that do not change despite changing coordinate systems. The components of the vector may change when the coordinate system is rotating or even moving, but the vector’s direction/magnitude do not change
			- $\lVert\vec a\times \vec b\rVert=\lVert\vec a\rVert\lVert\vec b\rVert\sin\theta$
				Called the vector product or cross product
				The resulting vector is orthogonal to both vectors and follows the right hand rule where taking your right hand, you point toward $\vec a$, curl your hands toward $\vec b$, and the direction of your thumb when pointing out is the $\lVert\vec a\times \vec b\rVert$
				(1) Anticommutative: $\vec a\times \vec b=-\vec b\times \vec a$
				(2) Distributive: $\vec a\times(\vec b + \vec c)=\vec a \times \vec b+\vec a\times \vec c$
			- $(\vec a\times \vec b)_i=\varepsilon_{ijk}a_jb_k$
				$(\vec a\times \vec b)_i=a_2b_3-a_3b_2=\varepsilon_{ijk}a_jb_k$
			- $\text{Triple Scalar Product}$
				$$\vec A\vec B\vec C=\det\begin{bmatrix}
				A_x & A_y & A_z\\
				B_x & B_y & B_z\\
				C_x & C_y & B_z
				\end{bmatrix}
				= \vec A \cdot (\vec B \times \vec C) = (\vec A \times \vec B) \cdot \vec C = \text{even permutations of }\vec A \vec B \vec C = -\text{(odd permutations of }\vec A \vec B \vec C)$$
			- $\text{Triple Vector Product}$
				$\vec A \times (\vec B \times \vec C) = (\vec A \cdot \vec C)\vec B - (\vec A \cdot \vec B)\vec C$
				In words (this is how it should be memorized):
				The value of a triple vector product is a linear combination of two vectors in the parenthesis; the coefficient of each vector is ht edot product of the other two; the middle vector in the triple product always had the positive sign
			- $I_{ik}=\sum m(r^2\delta_{ij}-r_ir_j)=\int d^3r\rho(\vec r)(r^2\delta_{ij}-r_ir_j)$
				Expanded form $=\begin{bmatrix}
				\sum m(y^2+z^2)&-\sum mxy&-\sum mxz\\
				-\sum mxy &\sum m(x^2+z^2)&-\sum myz\\
				-\sum mxz& -\sum myz&\sum m(x^2+y^2)
				\end{bmatrix}$
			- $\text{Principle Axes}$
				The principle axes of an object are the eigenvectors of the object’s diagonalized moment of inertia tensor matrix
			- $E=\frac{1}{2}\omega_i\omega_jI_{ij}$
				This mirrors the one-axis form of:
				$E=\frac{1}{2}I\omega^2$
			$L_i=I_{ij}\omega_j$
			- $x^{i'}=x^{i'}(x^1,x^2,\ldots,x^N)$
				Represents a generalized coordinate transformation
			- ${v^i}'={\frac{{(\partial x^i)}'}{\partial x^k}}v^k$
				Represents a generalized transformation of a vector.  Note we have to sum over $k$ elements of the vector for each $i$ elements in the transformed vector where $k = i = \text{dimension of }v$
				Additional fact: ${dx^i}' = \frac{\partial x^i}{\partial x^k}'dx^k$
				An example would be the rotation transformation:
				$$x' = x\cos\theta + y\sin\theta\\
				y' = -x\sin\theta + y\cos\theta$$
				Or using superscripts:
				$${x^1}' = x^1\cos\theta + {x^2}\sin\theta\\
				{x^2}' = -x^1\sin\theta + x^2\cos\theta$$
				where ${x^1}'$ is the $x^1$-coordinate of a vector in the transformed basis
				Now the vector would be represented by:
				${v^1}' = \sum_{k = 1}^2 \frac{{\partial x^i}'}{\partial x^k}v^k = \frac{{\partial x^{1}}'}{\partial x^1}v^1 + \frac{{\partial x^{1}}'}{\partial x^2}v^2 = \frac{\partial}{\partial x^1}(x^1\cos\theta + {x^2}\sin\theta)v^1 + \frac{\partial}{\partial x^2}(-x^1\sin\theta + {x^2}\cos\theta)v^1= v^1\cos\theta + v^2\sin\theta$
				${v^2}' = \ldots = -v^1\sin\theta + v^2\cos\theta$
			- ${T^{ik}}'={\frac{{(\partial x^i)}'}{\partial x^j}}{\frac{{(\partial x^k)}'}{\partial x^l}}T^{jl}$
				Generalized form for a tensor transformation
			- $ds^2 = g_{ik} dx^i dx^k$
				$ds$ here is an invariant distance between two points
				$g_{ik}$ is the metric tensor with the property that $g_{ik}$ applied to 
				In Euclidean space, $g_{ik} = \delta_{ik}$, which gives that $ds^2 = \delta_{ik}dx^idx^k = dx_kdx^k$, which is the scalar product between the two points’ vectors, which indeed equals the square of the distance between the two points
		- Linear Algebra
			$\det(A=a_{ij})=\varepsilon_{ijk}a_{1i}a_{2j}a_{3k}$
		- Differential Operators
			- Rules
				$\partial$ is only commutative with respect to other $\partial$ signs
				E.g:
				$\partial_i\partial_ju_i=\partial_j\partial_iu_i$ because $\frac{\partial^2 u_i}{\partial x_j\partial x_i}=\frac{\partial^2 u_i}{\partial x_j\partial x_i}$
				However, $\partial_iu_iv_k\ne \partial_iv_ku_i$
			$\partial_i=\frac{\partial}{\partial x_i}$
			$\nabla=\partial_i$
			$\nabla f=\partial_if$
			$\nabla\cdot\vec F=\partial_iF_i$
			$\nabla^2=\partial_i\partial_i$
			$\nabla^2f=\partial_i\partial_if$
			$\nabla^2\vec F=\partial_i\partial_i\vec F_j$
			$(\nabla\times\vec F)_i=\varepsilon_{ijk}\partial_jF_k$
			$\vec \nabla \times (\vec \nabla f) = \vec 0$
		- Vector Calculus
			- Jacobians and Change of Coordinate Systems
				$$J=\varepsilon_{ijk}\partial iu\partial_jv\partial_kw=\frac{\partial(x_1,x_2,\ldots,x_n)}{\partial(a_1,a_2,\ldots,a_n}=\det\begin{bmatrix}
				\frac{\partial x_1}{\partial a_1} & \cdots & \frac{\partial x_n}{\partial a_1}\\
				\vdots & \ddots & \vdots\\
				\frac{\partial x_1}{\partial a_n} & \cdots & \frac{\partial x_n}{\partial a_n}
				\end{bmatrix}$$
				$dV=|J|dx_1dx_2\ldots dx_n$
				$J_{\text{polar}}=J_{\text{cylindrical}}=r$
				$x=r\cos \theta, \space y=r\sin \theta, \space z=z$
				$r=\sqrt{x^2+y^2},\space \theta=\tan^{-1}(\frac{y}{x}), \space z=z$
				$ds^2=(dr)^2+(rd\phi)^2+(dz)^2$
				$J_{\text{spherical}}=\rho^2\sin(\phi)$
				$x=\rho\sin\phi\cos\theta,\space y=\rho\sin\phi\sin\theta,\space z=\rho\cos\phi$
				$\rho=\sqrt{x^2+y^2+z^2},\space \theta=\tan^{-1}(\frac{y}{x}),\space \phi=\cos^{-1}(\frac{z}{\rho})$
				$ds^2=(dr)^2+(r\sin\theta d\phi)^2+(rd\theta)^2$
			- Line, Surface, Vector Integrals
				- $\int_\Gamma\vec F\cdot d\vec l=\int_{t_0}^{t_f}\vec F(\vec r(t))r'(t)dt,\space r(t)=(y(t),x(t))\text{ where }y=f(x)\text{ describes }\Gamma$
					Called a line integral (or vector line integral more specifically)
				- $\int_S \vec F\cdot\hat ndA=\int_{b_0}^{b_f}\int_{a_0}^{a_f}(\vec F\cdot\hat n)dadb$
					Surface Integral
			- Major Theorems
				$\int_\mathscr{C}\nabla f\cdot d\vec r=f(S_f)-f(S_0)\\\text{ (Fundamental Theorem of Vector Integrals)}$
				$\iint_S(\vec F\cdot \hat n)dS=\iiint_V(\vec\nabla\cdot\vec F)dV\text{ (Divergence Theorem})$
				$\iint_S(\vec\nabla\times\vec F)\cdot\hat ndA=\oint_\Gamma\vec F\cdot d\vec l\text{ (Stoke's Theorem})$
		- Generalized Vector Spaces
			$V \coloneqq \{u,v,\ldots\} :$ addition and multiplication by numbers are defined:
			$\ket{u}, \ket{v} \in V \rightarrow \alpha \ket{u} + \beta \ket{v} \in V, \alpha,\beta \in \mathbb{R} \text{ or } \alpha,\beta \in \mathbb{C}$
			Properties of vector spaces:
			- (1) $\exists \ket{0} : \ket{u} + \ket{0} = \ket{u}$
				There is a zero vector such that adding it to any other vector results in no change
			- (2) $\exists \ket{-u} : \ket{u} + \ket{-u} = \ket{0}$
				There is such thing as the negative of a vector, which when added to its positive counterpart, results in the zero vector
			- (3) $\text{Vectors linearly independent} \leftrightarrow (\sum \alpha_i \ket{u_i} = \ket{0} \rightarrow \alpha_i = 0 ~ \forall i)$
				A set of vectors are linearly independent if the only way for a linear combination of them to equal the zero vector is if their coefficients are all 0
				i.e. Linearly independent vectors cannot form linear combinations of each other
			- (4) $\text{Vectors } \{\ket{e_i}\} \text{ are a basis of }V \leftrightarrow \text{linearly independent and } \exists \alpha_i : \ket{u} = \sum_i \alpha_i \ket{e_i} \forall \ket{u} \in V$
				A basis is a set of vectors that are each linearly independent and can form linear combinations to become any other vector in $V$
				An example is $\{\sin(\omega t\}, \cos(\omega t)\}$ for the space of solutions of $\ddot x + \omega^2 x(t) = 0$
			- (5) $\text{dim}(V) = |\ket{e_i}|$
				The dimension of a vector space is the number of elements in any of its bases
			- (6) $V_1 \cong V_2 \leftrightarrow (\exists L : V_1 \rightarrow V_2, \text{ an invertible linear operator})$
				Two vectors spaces are isomorphic if there exists a linear operator $L$ between them, meaning there is a bijection between the two vector spaces and $L(\alpha \ket{u_1} + \beta \ket{v_1}) = \alpha L \ket{u_1} + \beta L \ket{v_1} = \alpha \ket{u_2} + \beta \ket{v_2} \forall \alpha,\beta$
			Examples: 
			$\mathbb{R}^n$
			$\mathbb{C}^n$
			$\mathbb{P}^n = \{\text{polynomials of order} \le n\}$
			$\{\text{solutions to linear homogeneous differential equations}\}$
			- Infinite Dimensional Vector Space
				E.g.:
				Set of continuous functions $f : [0, 1] \rightarrow \mathbb{R}$
				Set of square integrable functions on $[0, 1]$, or $\{f : \int_0^1 (f(x))^2 dx\}$
				Set of all polynomials of degree $n$ where $n$ may be infinite
			Projection Operator: $L^2 = L$
			Scalar Product:
			- $( ~ , ~) : V \times V \rightarrow \mathbb{C}$
				$(a,b) = \braket{a|b}$
			- (1) $(a,b) = (b,a)^*$
				Scalar products are not quite commutative (have to take the complex conjugate)
			- (2) $(a, \alpha b + \beta c) = \alpha(a,b) + \beta(a,c)$
				Scalar products are distributive
			- (3) $\text{For orthongonal vectors} \ket{u},\ket{v} : \braket{u | v} = 0$
				Orthogonal vectors have a scalar product of 0
			- (4) $\text{For } \{\ket{e_i}\}, \braket{e_i | e_j} = \delta_{ij}$
				Basis vectors of the same index have a scalar product of 1, 0 if they have different indices
			E.g.:
			For square integrable functions on $[0,1]$
			$(f,g) = \int_0^1 fg ~ dx$ on $\mathbb{R}$
			Or
			$(f,g) = \int_0^1 f^*g ~ dx$ on $\mathbb{C}$
			E.g.:
			$\{\frac{1}{\sqrt{2L}}, \frac{1}{\sqrt{L}}\sin(\frac{n\pi}{L}x), \frac{1}{\sqrt{L}}\cos(\frac{n\pi}{L}x)\} \text{ is an orthonormal basis}$
			$(f,g) = \int_{-L}^Lfg ~ dx$
			E.g.:
			$\{\frac{1}{\sqrt{2\pi}} e^{inx}, n \in \mathbb{Z}\} \text{ is an orthonormal basis}$
			$(f,g) = \int_{-\pi}^\pi f^*g ~ dx$
			- $\braket{e_i | f} = \alpha_i$
				$e_i$ is a basis vector
				$f$ is a generalized vector (can be a function)
				$\alpha_i$ is the coordinate of $f$ for the $i$th basis vector
			- $(a,a) = \lVert a \rVert^2$
		- Fourier Analysis
			$f(x + \lambda) = f(x) ~ \forall x$
			$\bar f = \frac{1}{b - a} \int_a^b f(x)dx$
			$f(x) = \frac{1}{2}a_0 + \displaystyle\sum_{n = 1}^{\infty} a_n\cos(nx) + b_n\sin(nx)$
			$a_0 = \frac{1}{\pi}\int_0^{2\pi}f(x)dx$
			$a_n = \frac{1}{\pi}\int_0^{2\pi}f(x)\cos(nx)dx$
			$b_n = \frac{1}{\pi}\int_0^{2\pi}f(x)\sin(nx)dx$
			Generalized:
			For $f(x) = f(x + 2L)$
			$f(x) = \frac{a_0}{2} + \displaystyle\sum_{n = 1}^\infty\left[a_n\cos\left(\frac{n\pi}{L}x\right) + b_n\sin\left(\frac{n\pi}{L}\right)\right]$
			$a_0 = \frac{1}{L}\int_0^{2L}f(x)dx$
			$a_n = \frac{1}{L}\int_0^{2L} f(x) \cos(\frac{n\pi}{L}x)dx$
			$b_n = \frac{1}{L}\int_0^{2L} f(x) \sin(\frac{n\pi}{L}x)dx$
			Using $\omega$:
			For $f(x) = f(x + \frac{2 \pi}{\omega})$
			$f(t) = \frac{a_0}{2} + \displaystyle\sum_{n = 1}^\infty[a_n\cos(n \omega t) + b_n\sin(n \omega t)]$
			$a_0 = \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}}f(t)dt$
			$a_n = \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}} f(t) \cos(n \omega t)dt$
			$b_n = \frac{\omega}{\pi}\int_0^{\frac{2\pi}{\omega}} f(t) \sin(n \omega t)dt$
			$f(x) = \displaystyle\sum_{n = -\infty}^{\infty} C_ne^{inx}$
			$f^*(x) = \displaystyle\sum_{n = -\infty}^{\infty} C_n^*e^{-inx}$
			- $C_n = \frac{1}{\sqrt{2\pi}} \int_{-\pi}^{\pi}fe^{-inx}dx$
				$C_n$ is like a coordinate of $f$ for the basis vector $e^{inx}$
				$C_n = \braket{e_n | f} = \braket{\frac{1}{\sqrt{2\pi}}  e^{inx} | f} = \frac{1}{\sqrt{2\pi}} \int_{-\pi}^{\pi}fe^{-inx}dx$
		- Fourier Transform
			$\hat f(k) = \int_{-\infty}^\infty f(x)e^{-2\pi ixk}dx$
			$F(\omega) = \mathcal{F}(f(x)) = \frac{1}{2\pi}\int_{-\infty}^{\infty}f(x)e^{i\omega x}dx$
			$f(x) = \frac{1}{\sqrt{2 \pi}}\int_{-\infty}^\infty a(k)e^{ikx}dk$
			$a(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x) e^{-ikx}dx$
		- Laplace Transform
			$\hat x(s) = \int_0^\infty dt e^{-st}x(t)$
			$T(x,t) = \int_{-\infty}^\infty G(x, x') f(x')dx'$
			$G(x - x') = \frac{1}{\sqrt{4\pi Dt}}e^{-\frac{(x - x')^2}{4Dt}}$
		- Convolutions
			3B1B Video: https://www.youtube.com/watch?v=KuXjwB4LzSA
			- $$(a * b)_n = \displaystyle\sum_{\substack{i, j \\ 
			i + j = n}}
			a_i \cdot b_j = \displaystyle\sum_{i = 1}^n a_i \cdot b_{n - i}$$
				The convolution of $a_i$ and $b_i$ is given by the above formula
		- Legendre Series
		- Differential Equations
			- $\nabla^2\phi = 0$
			- $\frac{1}{c^2}\frac{\partial^2 f}{\partial t^2} = \nabla^2 f$
				Called the wave equation
			- $\frac{\partial T}{\partial t} = \alpha \nabla^2T$
				Called the heat equation
				3b1b video: https://www.youtube.com/watch?v=ToIXSwZ1pJU
				$T$ is temperature and is a function of position and time (e.g.: $T(\vec x, t)$)
				$\alpha$ is the thermal diffusivity of the material with units $\frac{m^2}{s}$
				To solve for $T$
				(1) Separation of variables (check differential equations section for more info)
				(2) Apply boundary conditions
				(3) Apply initial conditions
		- Lagrange’s Method
			- $J = \int_{x_1}^{x_2}f\{y(x), y'(x); x\}dx$
				The goal is to find $y(x)$ to minimize $J$
			- $\frac{\partial \mathcal{L}}{\partial q_i} - \frac{d}{dt}\frac{\partial L}{\partial \dot q_i} = 0, ~ i = 1, 2, 3$
				Euler-Lagrange Equation
				$\frac{\partial \mathcal{L}}{\partial q_i} = \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot q_i}$
			$(\frac{\partial f}{\partial Y} - \frac{d}{dt}\frac{df}{d\dot Y})(\frac{\partial g}{\partial Y})^{-1} = (\frac{\partial f}{\partial z} - \frac{d}{dt}\frac{\partial f}{\partial \dot z})(\frac{\partial g}{\partial z})^{-1}$
		- Hamiltonian
			- $\delta \int_{t1}^{t2}L dt = 0$
				Called Hamilton’s Principle, or Principle of Least Action
			- $\displaystyle H \equiv \sum_i p_i \dot q_i - \mathcal{L}(q_i, \dot q_i, t), ~  p_i \equiv \frac{\partial \mathcal{L}}{\partial \dot q_i}, ~ \dot q_k = \frac{\partial H}{\partial p_k}, ~ \dot p_k = -\frac{\partial H}{\partial q_k}$
				Hamilton’s equations of motion
			- $\mathcal{L}(x, \lambda) \equiv f(x) + \lambda g(x)$
				Lagrange undetermined multipliers
	- Quantum Physics
		- $\omega = 2\pi f = \frac{2\pi}{T}$
			This is the angular temporarl frequency
		- $k = 2\pi \xi = \frac{2\pi}{\lambda}$
			This is the angular spatial frequency
		$v_\text{phase} = \frac{\omega}{k} = f \lambda = \frac{\lambda}{\tau} = \frac{2\pi f}{k} = \frac{\omega \lambda}{2 \pi}$
		$v_\text{group} = \frac{\partial E}{\partial p} = \frac{\partial \omega}{\partial k}$
		$v_\text{phase}v_\text{group} = c^2$
		$v = \frac{\omega}{|k|\cos\theta} = \frac{\lambda}{T\cos\theta}$
		$E = \hbar\omega = \frac{h}{T} = hf$
		$p = \hbar k = \frac{h}{\lambda} = h\xi$
		![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ffcc194-3383-49ad-9952-8d10e3c1fa30/Untitled.png)
		- $n\lambda = d\sin \theta$
			The equation for Bragg scattering
			$n$ is the diffraction order
			$\lambda$ is the electron wavelength
			$d$ is the lattice period
			$\theta$ is the scattering angle
		- $\lambda = \frac{\lambda_C}{\sqrt{\frac{2K}{mc} + (\frac{K}{mc^2})^2}}, ~ \lambda_C = \frac{h}{mc} = \frac{2\pi}{k_C}$
			$\lambda_C$ is the Compton wavelength of a particle
			$\lambda_{C_\text{electron}} = 2.43 pm$
			The compton wavelength of a certain particle measures the wavelength of a photon that matches the energy of that certain particle’s rest energy
		$m_ec^2 \approx 511 keV$
		- $\frac{1}{\lambda_t^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda_C^2}$
			$\lambda_t$ is the temporal wavelength
			$\lambda$ is the de Broglie wavelength
			$\lambda_C$ is the Compton wavelength of the electron
		- $R = \frac{\lambda}{2\text{NA}}$
			$R$ is the spatial resolution of the microscope
			$\text{NA}$ is the numerical aperature
		$\frac{e^2}{4\pi\varepsilon_0} = 1.44 ~ eV \cdot nm$
		$\hbar c = 197 ~ eV \cdot nm$
		$\alpha = \frac{e^2}{4\pi\varepsilon_0\hbar c} \approx \frac{1}{137}$
		$E\lambda \approx 400\pi ~ eV\cdot nm$
		- $\Delta t \Delta \omega \ge \frac{1}{2}, ~ \Delta x \Delta k \ge \frac{1}{2}$
			Unitless
		- $\Delta t \Delta E \ge \frac{\hbar}{2}, ~ \Delta x \Delta p \ge \frac{\hbar}{2}$
			Heisenberg Uncertainty Principle
			Units of action
		$f(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty a(k)e^{ikx}dk$
		$a(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-ikx}dx$
		$\text{To time: }x\rightarrow t, ~ k\rightarrow \omega, ~ i \rightarrow -i$
		$\frac{}{}$$f(x) = \frac{1}{2\pi}\iint f(x')e^{-ikx'}dx'e^{ikx}dk = \frac{1}{2\pi}\iint f(x')e^{ik(x - x')}dkdx' = \int f(x')\delta(x - x')dx' = f(x)$
		$\delta(x - x') = \frac{1}{2\pi}\int_{-\infty}^\infty e^{ik(x - x')}dk$
		$f(x) = \int_a^b f(x')\delta(x - x')dx'$
		- $-\frac{1}{c^2}\frac{\partial^2 u}{\partial t^2} + \nabla^2 u = k_c^2u$
			Wave equation
		$\Psi(x,0) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \Psi(k)e^{ikx}dk$
		$\Psi(x,t) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \Psi(k)e^{i(kx-\omega(k)t)}dk, ~ \omega = \frac{\hbar k^2}{2m}$
		$-\frac{\hbar^2}{2m}\frac{d^2 \Psi}{dx^2} + U(x)\Psi(x, t) = i\hbar \frac{\partial \Psi}{\partial t}$
		$-\frac{\hbar^2}{2m}\frac{d^2 \Psi}{dx^2} + U(x)\Psi(x) = E\Psi(x)$
		$E_n = \frac{\hbar^2 k^2}{2m} = \frac{n^2 \pi^2 \hbar^2}{2mL^2}, ~ n \in \mathbb{Z}^+$
		$\Psi_n(x) = A\sin(\frac{n\pi x}{L})$
		$\Psi_0(x) = \frac{1}{\sqrt{\sigma_x \sqrt{2\pi}}}e^{-(\frac{x}{2\sigma_X})^2} = \left(\frac{m\omega_0}{\pi\hbar}\right)^{\frac{1}{4}}e^{-\frac{m\omega_0 x^2}{2\hbar}}$
		$\Psi_0(k) = \frac{1}{\sqrt{\sigma_x \sqrt{2\pi}}}e^{-(\frac{k}{2\sigma_X})^2} = \left(\frac{\hbar}{\pi m \omega_0}\right)^{\frac{1}{4}}e^{-\frac{\hbar k^2}{2m\omega_0}}$
		$P(x \in [a, b]) = \int_a^b |\psi(x)|^2dx$
		- $\braket{x} = \int_{-\infty}^\infty x|\Psi (x, t)|^2 dx$
			$\braket{x}$ is the expected value of the position of a particle
			$|\Psi (x, t)|^2$ is the same as $P(x)$, the probability density of the particle
		$\sigma_x^2 = (\Delta x)^2 = \braket{x^2} - \braket{x}^2$
		$E_n = (n + \frac{1}{2})\hbar \omega$
		- $\Psi(x, t) = Ae^{i(kx - \omega t)} + Be^{i(-kx - \omega t)}$
			This wave function describes the wave traveling toward or away from a potential energy barrier.
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ee891fb-0cf8-4b23-9131-a24e4f94c601/Untitled.png)
			If the wave source is on the left side of the barrier:
			For the $\Psi$ where $x < 0$:
			$A, B \in \mathbb{C}$
			For the $\Psi$ where $x > 0$:
			$B = 0$ because $e^{i(-kx - \omega t)}$ for $k > 0$ represents a wave traveling leftward, which shouldn’t be possible: https://www.desmos.com/calculator/pew0elwjfz
		- $R = \frac{(\Psi * \Psi)_\text{reflected}}{(\Psi * \Psi)_\text{incident}} = \frac{|B|^2}{|A|^2}$
			The reflection coefficient $R$ is the ratio of the reflected probability density to the incident probability density
		- $T = \frac{(\Psi * \Psi)_\text{transmitted}}{(\Psi * \Psi)_\text{incident}} \cdot \frac{k_2}{k_1} = \frac{|F|^2}{|A|^2}$
			The transmission coefficient $T$ is the ratio of the transmitted probability density to the incident probability density
		- $R + T = 1$
			A wave is either reflected or transmitted, so the reflected and transmitted probabilities must add up to $1$
		- $k = \frac{\sqrt{2m(E - U_0)}}{\hbar}$
			The wave number for a particle moving through space
		- $\lambda_f - \lambda_i = \Delta \lambda = \frac{h}{m_e c}(1 - \cos\theta)$
			Compton scattering equation
			$\lambda_f$  is the wavelength of the scattered photon
			$\lambda_i$ is the wavelength of the incident photon
			![Screen Shot 2023-06-05 at 10.22.42 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82481e53-a7bb-485b-8e52-38093a37e1af/Screen_Shot_2023-06-05_at_10.22.42_AM.png)
		$m_e vr = n\hbar$
		$2\pi r = n\lambda$
		- $r_n = \frac{n^2\hbar^2}{m_ek e^2} = n^2a_0$
			$r_n$ is the radius for the orbit of an electron at energy level $n$ orbiting a nucleus
			$n$ is the energy level, $\in \mathbb{Z}^+$
			$k$ is Coloumb’s constant
			$e$ is the charge of the electron
		- $a_0 = \frac{\hbar^2}{m_e k e^2} = \frac{1}{\alpha k_e} = \frac{\lambda_e}{2\pi\alpha} \approx 0.529 Å$
			$a_0$ is the Bohr radius for when $n = 1$
			This is the smallest radius for an electron to be orbiting a hydrogen atom
		- $E_i = \frac{\vec p_i^2}{2m} + \frac{1}{2}k\vec r_i^2$
			This is the equipotential theorem (might be spelling it wrong)
		- $2\braket{K} = n\braket{U}$
			Virial Theorem
		- $E_n = -\frac{ke^2}{2a_0}(\frac{1}{n^2})$
			The energy level for an electron at energy level $n$
		$r_n = n^2\frac{a_0}{Z}$
		$E_n = -\frac{ke^2}{2a_0}(\frac{Z^2}{n^2})$
		$\mu = \frac{m_e m_p}{m_e + m_p}$
		$f_\text{MB} = Ae^{-\frac{E_i}{k_BT}}$
		- $K_\text{max} = hf - \phi$
			Photoelectric effect
			States that the kinetic energy of a photoelectron is dependent on the frequency of the light hitting the material and work function of the material
			$\phi$ is the work function
		- $j^\star = \sigma T^4$
			Stefan’s Law
			$j^\star$  is black-body radiant emittance in terms of intensity, or $\frac{W}{m^2}$
			$\sigma$ is the Stefan-Boltzmann constant and has a value of $\frac{2\pi^5 k^4}{15 c^2 h^3} = 5.670374419 * 10^{-8} ~ W m^{-2} K ^{-4}$
			$T$ is thermodynamic temperature
		$u(\lambda, T) = \frac{8 \pi hc}{\lambda^5 (e^{hc / \lambda k T} - 1)}$ 
	- Particle Physics
		- Standard Model
			Video explaining: https://www.youtube.com/watch?v=mYcLuWHzfmE
			Infographic: https://www.flickr.com/photos/95869671@N08/51148317732/
			![51148317732_42c3d37d37_o.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/abbb92c1-0c0f-4845-a41c-20c281ec23fa/51148317732_42c3d37d37_o.png)
			| Particle | Fermion | Boson |
			|  |  |  |
			| Mass | Has mass | No mass |
			| Spin | $\frac{1}{2} + k, k \in \mathbb{N}^+ \\
			\frac{1}{2}, \frac{3}{2}, \frac{5}{2}, \ldots$ | $k, k \in \mathbb{Z} - \mathbb{Z}^- \\
			0, 1, 2, \ldots$ |
			- $\text{Baryon number} = \frac{1}{3}(n_{q} + n_q')$
				$n_q$ is the number of quarks in the baryon
				$n_q'$ is the number of anti quarks in the baryon
				A baryon is made of an odd number of 3 or more quarks
			- $\text{Color charge}$
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5f8c1fc-a7bc-4474-b721-db891711177b/Untitled.png)
				There are 3 color charges that quarks and gluons can take: red, green, and blue
				There are 3 color charges that antiquarks and antigluons can take: anti-red (cyan), anti-green (magenta), and anti-blue (yellow)
				For protons/neutrons, you need a neutral overall color charge, meaning 3 or each color for each quark
				For pions, you also need a neutral overall charge, meaning 1 quark and 1 anti quark of opposing colors
	- Thermodynamics
		$k_B = 1.380649*10^{-23}\frac{J}{K}$
		- Laws
			0) If 2 systems are in thermal equilibrium with a 3rd, they are all in the thermal equibilbrium with each other (transitivity, thermometers exists)
			1) Energy is conserved
			2) In process, the total entropy change $\Delta S > 0$
			3) The entropy $S \rightarrow k$ a constant (usually $0$) as $T \rightarrow 0$
			Analogy to life:
			0: There is a game
			1: You can’t win
			2: You can’t break even
			3: You have to play
		$\Omega(E) =$  # of distinguishable states accessible w/ energy E in $[E, E + dE]$
		$S = k_b \ln(\Omega (E))$
		$\frac{1}{T} = \frac{\partial S}{\partial E}$
		$N_{MB} = \frac{N!}{n_1! n_2! n_3! \ldots}$, $n_i$ are the indistinguishable outcomes, $\sum^+ n_i = N$
		$\Omega(E) = \sum_\text{arrangements}N_{MB}$
		$\bar n_j = n_{j1}p_1 + n_{j2}p_2 + \ldots + n_{jm}p_m$
		$\Omega = {\text{\# energy states + \# particles - 1} \choose \text{\# energy states}}$
		$PV = Nk_BT$
		$K_\text{gas} = \frac{3}{2}k_BT$
		$n(v)dv = 4\pi \frac{N}{V}(\frac{m}{2\pi k_BT})^{3/2}v^2e^{-mv^2/2k_BT}dv$
		$v_\text{mp} = \sqrt{\frac{2k_BT}{m}}$
- Chemistry 🧪
	- Resources 🕸
		https://ptable.com/?lang=en#Properties
	- Units $\mu$
		$\text{Molarity}=\frac{mol}{L}$
		$1ppm=1\frac{mg}{L}$
		$w/v\% = \frac{\text{grams of material}}{100mL\text{ of solution}}$
	- Uncertainty $\pm$
		$C=A\pm B\rightarrow\frac{\Delta C}{C}=\frac{\Delta A}{C}+\frac{\Delta B}{C}$
		$C=AB\text{ or }C=\frac{A}{B}\text{ or }C=\frac{B}{A}\rightarrow\frac{\Delta C}{C}=\frac{\Delta A}{A}+\frac{\Delta B}{B}$
		- $\text{Critical Ratio Test}$
			A test to determine whether to eliminate a questionable result as an outlier for a small number of trials $(n<7)$
			$R_q = \left|\frac{x_q - x_n}{x_q - x_f}\right|$
			$R_q$ is the deviation ratio
			$x_q$ is questionable result
			$x_n$ is the nearest result to the questionable result
			$x_f$ is the furthest result from the questionable result
			If $R_q$ exceeds the critical ratio designated by the chart below, then the questionable result may be excluded as an outlier
			![Screen Shot 2023-02-12 at 9.09.01 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc012a01-2c98-45c6-8b93-70ef1b493aa0/Screen_Shot_2023-02-12_at_9.09.01_AM.png)
		- $\text{RAD} = 100 \% \frac{\overline{\Delta x}}{\bar x}, ~ \overline{\Delta x} = \frac{\sum_{i=1}^n |(x_i - \bar x)|}{n}$
			This is the relative average deviation (RAD) of a sample
			$x_i$ is a sample point’s value
			$\bar x$ is the average of the sample
			$n$ is the number of samples
			E.g.: the RAD of $\{1, 2, 3, 4, 5\}$ is $100 \% \cdot \frac{|5 - 3| + |4 - 3| + |3 - 3| + |2 - 3| + |1 - 3|}{5} = 120 \%$
	- Constants $R_\infty$
		$u=1.6605390660\cdot10^{-24}g\text{ (Atomic  mass unit)}$
		$N_A=6.022142\cdot10^{23}\frac{particles}{mol}\text{ (Avogadro's number)}$
		$k_B=1.380651\cdot10^{-23}\frac{J}{K}\text{ (Boltzmann's constant)}$
		$R=0.0820575\frac{L\cdot atm}{mol\cdot K}=8.31447\frac{J}{mol\cdot K}\text{ (Gas constant)}$
		$e=1.60217634\cdot10^{-19}C\text{ (Charge on electron)}$
		$F=9.6485538\cdot10^4\frac{C}{mol \space e^-}\text{ (Faraday's constant)}$
		$m_e=9.109383\cdot10^{-28}g\text{ (Mass of electron)}$
		$m_n=1.6726217\cdot10^{-24}g\text{ (Mass of neutron)}$
		$m_p=1.6726217\cdot10^{-24}g\text{ (Mass of proton)}$
		$\pi=3.14159265358979323846\ldots$
		$h=6.626069\cdot10^{-34}J\cdot s\text{ (Planck's constant)}$
		$\hbar=\frac{h}{2\pi}=1.05457266\cdot 10^{-34}J\cdot s\text{ (Reduced Planck's constant)}$
		$c=2.99792458\cdot10^8\frac{m}{s}\text{ (Speed of light in vacuum, exact)}$
		$\varepsilon_0=\frac{1}{4\pi k}=8.85418782\cdot 10^{-12}\frac{C^2}{N\cdot m^2}(\frac{F}{m})$
		$\mu_0=4\pi\cdot 10^{-12}\frac{N}{A^2}$
	- Bohr Model ⚛
		$Z_{\text{eff}}\approx Z-\text{inner shell }e^--\frac{1}{2}\text{ number of same shell }e^-$
		$r_{n}=\frac{n^2}{Z_{\text{eff}}}a_0,\space n\in \mathbb{N}$
		- $a_0=\frac{h^2\varepsilon_0}{e^2\pi m_e}=0.529177\dot A$
			Called a Bohr radius, or the radius at which an electron would most likely to be found in a hydrogen atom
			$\dot A=10^{-10}m$
			$e=1.60217663*10^{-19}C$
			$m_e=9.109*10{-31}kg$
		$E_n=-R_0\frac{Z_\text{eff}^2}{n^2}$
		- $R_0=\frac{e^4m_e}{8h^2\varepsilon_0^2}=2.18\cdot10^{-18}J$
			$e=1.60217663*10^{-19}C$
			$m_e=9.109*10{-31}kg$
			$h=6.626069\cdot10^{-34}J\cdot s$
			$\epsilon_0=\frac{1}{4\pi k}=8.85418782\cdot 10^{-12}\frac{C^2}{N\cdot m^2}(\frac{F}{m})$
		$E_\text{ionization}=\Delta E=-R_0Z_\text{eff}^2\left(\frac{1}{n_f^2}-\frac{1}{n_0^2}\right)$
	- Heisenberg/Schrodinger’s Equation 🐈
		- $\sigma_x\sigma_p\ge \frac{h}{4\pi}$
			This is called Heisenberg’s Uncertainty Principle
			$\sigma_x$ is the uncertainty in position, $\sigma_p$ is the uncertainty in momentum
			For more massive objects, $\sigma_x$ is very small
		$\sigma_p=m\sigma_v$
		$\sigma=\frac{Zr}{a_0}$
		- $\hat{H}\Psi(x)=E\Psi(x)=-\frac{h^2}{8\pi^2m}\frac{d^2\Psi(x)}{dx^2}+U(x)\Psi(x)$
			The kinetic energy term is $\frac{h^2}{8\pi^2m}\frac{d^2\Psi(x)}{dx^2}$ while the potential energy term is $U(x)\Psi(x)$
		- $\text{De Broglie's Principle: }\lambda=\frac{h}{p}$
			$\lambda$ is the object’s associated wavelength
			$h=6.626069\cdot10^{-34}J\cdot s\text{ (Planck's constant)}$
			$p$ is the momentum of the object
			So for macroscopic objects, $p$ is huge, so $\lambda$ shrinks to negligible values
			For nanoscopic objects, $p$ is smaller, so $\lambda$ is no longer negligible
		$P(x)=|\Psi(x)|^2$
		$\int_{-\infty}^{\infty}|\Psi(x)|^2dx=1$
		$P(r)=4\pi r^2(R_{n,o}(r))^2dr\approx\Psi^2dV$
		- 1D PIB
			For a 1D Particle in a Box:
			$\Psi(x)=\sqrt{\frac{2}{L}}\sin(\frac{n\pi x}{L}),\space n \in \mathbb{N}$
			$E_n=\frac{n^2h^2}{8mL^2},\space n\in \mathbb{N}$
		- $L^2=\ell(\ell+1)\frac{h^2}{4\pi^2},\space\ell=0,1,2,\ldots,n-1$
			$L$ is the angular momentum while $\ell$ is the angular momentum quantum number
			$\ell=0\rightarrow s,1\rightarrow p,2\rightarrow d, 3\rightarrow f$
			$L_z=\frac{m_lh}{2\pi}=m_l\hbar,\space m_l=0,\pm1,\pm2,\pm \ell$
			$m_l$ is called the magnetic quantum number
		$\bar{r_{nl}}=\frac{n^2a_0}{Z_\text{eff}}\{1+\frac{1}{2}[1-\frac{\ell(\ell+1)}{n^2}]\}$
		$Z_\text{eff}^{ns}>Z_\text{eff}^{no}>Z_\text{eff}^{nd}>Z_\text{eff}^{nf}$
		- Paramagnetic = unpaired $e^-$, diamagnetic = paired $e^-$
			Di means two, so there are two electrons in the orbital that are paired
		Aufbau Principle:
		!https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xAny/8/8/3/131883_theaufbaudiagramliesattheheartofthetrouble_640390.jpg
		$E_\text{ionization}=\Delta E=h\nu_{\text{photon}}-\frac{1}{2}m_ev_e^2$
		$n_\text{radial nodes}=n-l-1$
		$n_\text{angular nodes}=l$
	- Orbitals ⚛
		- $(n,l,m_l,m_s)$
			$n\in\mathbb{N}$ is the principle quantum number and it dictates the orbital size and energy level
			$l\in\mathbb{N}:[0,n-1]$ is the secondary (angular momentum) quantum number and it dictates the subshell type (s, p, d, or f)
			$m_l\in\mathbb{N}:[-l,l]$ is the magnetic quantum number and it dictates the orbital orientation (x, y, z, or etc.)
			$m_s\in\{-\frac{1}{2},\frac{1}{2}\}$ is the spin quantum number and it dictates the electron spin direction
	- Periodic Trends 📈
		$\text{EN}=\frac{1}{2}|\text{IE}+\text{EA}|$
		$E_\text{dissociation}=-U(R)=-(k\frac{q_1q_2}{r}\cdot \frac{N_A}{1000}+U_\infty)\space(\frac{kJ}{mol})$
		$V_\infty=\text{IE}+\text{EA}$
		- $\mu=|q|r\space(C\cdot m)$$\mu=qr\space(C\cdot m)$
			The dipole moment between two charges is equal to the separated charge times the distance betwen them (e.g. bond distance)
	- Spectroscopy 🌈
		$\Delta E=h\nu$
		$c=\lambda\nu$
		
|Photon Type:|Radio|Microwaves|Infrared|Visible|UV|X-rays|Gamma|
|---|---|---|---|---|---|---|---|
|$\lambda_\text{min}$|$1m$|$1mm$|$700nm$|$400nm$|$10nm$|$10pm$|N/A|
|$E_\text{min}\space(cm^{-1})$|$0.001$|$1$|$1000$|$16000$|$100000$|$1E+8$|$8E+9$|
|$E_\text{min}\space(\frac{kJ}{mol})$|$0.0030125$|$0.0125$|$12.5$|$200$|$1250$|$1250000$|$1E+8$|
|Bonds|Nuclear spin|Rotational|Vibrational|Valence|Valence|Inner shell|Nuclear|	
		- $E_\text{rotational}(J)=BhJ(J+1),\space J\in\mathbb{N}$
			A permanent dipole moment is required for rotational energy states to be available  because otherwise, the oscillating $\vec E$ from the photon of light will not be able to excite the molecules to a higher rotational state.
		- $\Delta E=2BhJ_\text{larger},\space J\in\mathbb{N}$
			![Screen Shot 2022-05-31 at 5.35.53 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b98d55a-9681-43cd-adf9-89a2a0a149ea/Screen_Shot_2022-05-31_at_5.35.53_PM.png)
		- $B=\frac{h}{8\pi^2I}$
			Units are $Hz$ because $h$ is the $J\cdot s$, or $kg\frac{m^2}{s^2}\cdot s=kg\frac{m^2}{s}$, and when divided by $I$, which is in units of $kg\cdot m^2$, $B$ becomes $\frac{1}{s}$, or $Hz$
		- $\tilde B=\frac{B}{c}$
			$\tilde B$ is the wavenumber form of $B$, and $c$ is $2.998\cdot 10^{10}\frac{cm}{s}$.
			Units go from $Hz$ to $\frac{1}{cm}$
			In physics, the SI units for wavenumber are $\frac{1}{m}$ rather than $\frac{1}{cm}$ in chemistry. It is also calculated as $K=\frac{2\pi}{\lambda}$ in physics rather than $\bar v=\frac{1}{\lambda}$ in chemistry.
		$I=\mu R^2$
		$\mu=\frac{m_1m_2}{m_1+m_2}$
		- $E_\text{vibrational}(V)=(\frac{1}{2}+V)h\nu,\space V\in\mathbb{N}$
			The molecule needs to either be very massive (e.g. $I_2$) or the temperature needs to be very high for vibrational states to be excited.
		$\Delta E=h\nu$
		$\nu=\frac{1}{2\pi}\sqrt{\frac{k}{\mu}}$
		$\tilde\nu=\frac{\nu}{c}$
		- $A=\varepsilon lc=-\log(T),\space T=\frac{I}{I_0}$
			Beer-Lambert Law
			$A$ is the absorbance
			$\varepsilon$ is the molar absorptivity and is constant only for values of $A$ between 0.1 and 1.0
			$l$ is the length the light has to pass through for the solution
			$c$ is the concentration of the solution
			$T$ is the transmittance
	- Gases 💨
		- $P_\text{total}=P_a+P_b=X_a{}^{0}P_a+X_b{}^{0}P_b$
			This is called Raoult’s Law
			$X$ is the mole fraction of a gas
			${}^{0}P$ is the vapor pressure of a gas
		- $P_a=kX_a$
			This is called Henry’s Law
			The interpretation is that the higher the partial pressure $P_a$ of a gas over a liquid, the higher molefraction $X_a$ of the gas dissolved in the liquid.
			Only really works for very dilute/small $X_a$, then it follows something like Raoult’s Law
			$k$ is some constant $>{}^{0}P_a$
		- $P_\text{vapor}\propto T_\text{boiling}$
			Vapor pressure and boiling point are inversely related
		$\text{Boyle's Law: }V\propto \frac{1}{P}$
		$\text{Charle's Law: }V\propto T$
		$\text{Moles: }V\propto n$ 
		- $PV=nRT$
			$R=0.082057\frac{L\cdot atm}{K\cdot mol}=8.314472\frac{J}{K\cdot mol}$
			$\frac{101.33J}{L\cdot atm}$
			Assumptions (valid when $T$ is high and $P$ is low):
			Particle volume is negligible
			The particles follow straight line paths until collision
			$\Delta K=0$ (perfectly elastic collisions)
			There are no intermolecular forces
		$v_{\text{most probable}}=\sqrt{\frac{2k_bT}{m}},\space \bar v=\sqrt{\frac{8k_bT}{\pi m}},\space v_{\text{root mean square}}=\sqrt{\frac{3k_bT}{m}}$
		- $(P+a\frac{n^2}{V^2})(V-nb)=nRT$
			$a$ is the attractive force, $b$ is the repulsive force
		$d=\frac{P\cdot MM}{RT}\space(g/L)$
		- $K_\text{gas}=\frac{3}{2}nRT=\frac{3}{2}Nk_BT$
			$n$ is the number of moles of gas
			$N$ is the number of particles of gas
		$K_\text{particle}=\frac{3}{2}k_BT$
		- $Z=\frac{PV}{nRT}$
			$Z$ approaches 1 as the gas behaves more like an ideal gas
		- $\%\text{ composition of gas}_i = (100\%) (\frac{A_i}{A})$$
			For gas chromatography, the percent composition a species $i$ is equal to the fraction of its area of the chromatogram peak over the combined area of all peaks
			Area is calculated as the width at half the height of the peak times the height of the peak
		Hydrogen Bonding: NOF
	- Thermochemistry Δ
		$\Delta H=\Delta U+\Delta(PV)$
		$U_\text{tot}=U_\text{trans}+U_\text{rot}+U_\text{vib}+U_\text{elec}$
		$\text{df}_\text{total}=3N$
		$\text{df}_\text{trans}=3$
		$\text{df}_\text{rot}=3\text{ (or 2 if linear)}$
		$\text{df}_\text{vib}=3N-6\text{ (or } 3N-5 \text{ if linear)}$
		$U_\text{trans}=\frac{\text{df}_\text{trans}}{2}RT$
		$U_\text{rot}=\frac{\text{df}_\text{rot}}{2}RT$
		$U_\text{vib}=\text{df}_\text{vib}RT\text{ (only for massive molecules or high T)}$
		- $\Delta U_\text{system}=q+W_\text{by system}$
			Isochoric: $\Delta V=W=0$
			Isobaric: $\Delta P=0$
			Adiabatic**: $\Delta q=0,\space \Delta U=W$**
			Isothermal: $\Delta T=\Delta U=0$
		- $W_\text{by system}=-W_\text{by environment}=-\int_{V_0}^{V_f}PdV$
			This is the opposite of in physics, as $W_\text{by system}=\Delta U$ in chemistry rather than $W_\text{by environment}=-\Delta U$ in physics
			Units of $L\cdot atm$ are inconvenient and can be translated by $\frac{101.325J}{L\cdot atm}$
		- $W_\text{by irreversible process}=-P_\text{ext}\Delta V$
			$P_\text{ext}$ is the external pressure and also the final pressure of the system
		$W_\text{by isochoric system}=0$
		$W_\text{by isobaric system}=-P\Delta V$
		$W_\text{by adiabatic system}=nc_v\Delta T=-P_\text{ext}\Delta V$
		$W_\text{by isothermal system}=-nRT\ln\left(\frac{V_f}{V_0}\right)$
		$T_fV_f^{\gamma-1}=T_0V_0^{\gamma -1},\space\gamma=\frac{C_v}{C_p}\text{ for adiabatic systems}$
		$P_fV_f^{\gamma-1}=P_0V_0^{\gamma -1},\space\gamma=\frac{C_v}{C_p}\text{ for adiabatic systems}$
		$C=\frac{q}{\Delta T},\space c_n=\frac{q}{\Delta T\cdot n},\space c_s=\frac{q}{\Delta T\cdot g}(\text{same as }q=mc\Delta T)$
		$C_v=\frac{dU}{dT},\space C_p=\frac{dH}{dT}=C_v+R$
		Hess’s Law: $\Delta H_\text{net}=\Delta H_1+\Delta H_2+\ldots\Delta H_n$
		- $\Delta H=\displaystyle\sum_{i=0}^{N}(H_\text{bonds broken}-H_\text{bonds formed})$
			Breaking bonds requires energy and results in a positive contribution to enthalpy
			Forming bonds releases energy and results in a negative contribution to enthalpy
		- $\Delta H_\text{sublimation}\approx\Delta H_\text{fusion}+\Delta H_\text{vaporization}$
			$\Delta H_\text{fusion}$ is the heat required to transition from solid to liquid
			$\Delta H_\text{vaporization}$ is the heat required to transition from liquid to gas
			$\Delta H_\text{sublimation}$ is the heat required to transition from solid to gas
	- Thermodynamics 🔥
		$\text{1st Law: }\Delta U_\text{uni}=\Delta U_\text{sys}+\Delta U_\text{sur}=0$
		$\text{2nd Law: }\Delta S_\text{sys}+\Delta S_\text{sur}=\Delta S_\text{uni}\ge0$
		$\text{3rd Law: }S_{\text{pure substances at 0}\degree K}=0$
		$\Delta S=\int_{q_0}^{q_f}\frac{dq_\text{rev}}{T}=\frac{q_\text{rev}}{T}$
		$\Delta S_\text{isothermal}=-nRT\ln(\frac{P_f}{P_0})$
		$\Delta S_\text{adiabatic}=0$
		$\Delta S_\text{phase change}=\frac{q_\text{rev}}{T}=\frac{\Delta H}{T}$
		$\Delta S_\text{v}=nc_v\ln(\frac{T_f}{T_0})$
		$\Delta S_\text{p}=nc_p\ln(\frac{T_f}{T_0})$
		$S=k_B\ln(\Omega)$
		$\Omega\propto V^N\text{ for ideal gases}$
		- $\Delta G=\Delta H-T\Delta S$
			Called Gibb’s Free Energy
			Can be derived from the 2nd law of thermodynamics
			![signs_of_enthalpy_and_entropy_terms_and_spontaneity.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4597669e-1ce3-4a71-b9d9-25f75c3df3b4/signs_of_enthalpy_and_entropy_terms_and_spontaneity.png)
	- Equilibrium ⚖️
		- $\Delta G^\degree=-RT\ln(K)$
			At $25\degree C$
		$K=e^{-\frac{\Delta G^\degree}{RT}}$
		- $\Delta G=\Delta G^\degree+RT\ln(Q)$
			Called the Nernst Equation
		$K_f=K_0e^{-\frac{\Delta H}{R}(\frac{1}{T_f}-\frac{1}{T_0})}$
		- $K=\frac{\displaystyle\prod_{i=0}^{N_p}[P_i]^{p_i}}{\displaystyle\prod_{j=0}^{N_R}[R_j]^{r_j}}=\frac{[C]^c[D]^d}{[A]^a[B]^b}\text{ for }(\ce{aA +bB<=>cC +dD})$
			$p$ is the coeffecient of some $P$ product species
			$r$ is the coeffecient of some $R$ reactant species
		- $K_p=K_c[RT]^{\sum_{i=0}^{N_P}(p_i)-\sum_{j=0}^{N_R}(r_j)}=K_c[RT]^{c+d-a-b}\text{ for }(\ce{aA +bB<=>cC +dD})$
			$k_c\text{ is for concentration}$
			$k_p\text{ is for pressure}$
		- $\text{5\% rule}$
			If we arrive at some form of $k_{eq}=\frac{x^2}{a\pm x}$, then $x=\sqrt{k_{eq}*a}$ if $x<0.05*a$
		$K_\text{sp}=[B]^b[C]^c\text{ for }(\ce{aA_{(aq)}<=>bB_{(aq)} +cC_{(aq)}})$
		- ICE Tables
			E.g. $\ce{HA_{(aq)} + H2O_{(l)} <=> A-_{aq} + H3O+_{(aq)}, K_c = 1.2*10^{-3}}$
			| Reaction | $\ce{HA}$ | $\ce{H2O}$ | $\ce{A-}$ | $\ce{H3O+}$ |
			|  |  |  |  |  |
			| Initial | $0.5$ | $\varnothing$ | $0$ | $0$ |
			| Change | $-x$ | $\varnothing$ | $+x$ | $+x$ |
			| Equilibirium | $0.5-x$ | $\varnothing$ | $x$ | $x$ |
			$K=\frac{[A^-][H_3O^+]}{[HA]}$
	- Acid-Base 🍋
		- $\text{Equivalent Weight}$
			Equivalent Weight of Arrhenius Acids:
			$= \frac{g/mol\text{ acid}}{\text{equivalents of} ~ H^+\text{disassociated per mol of acid}}$
			Equivalent Weight of Arrhenius Bases:
			$= \frac{g/mol\text{ base}}{\text{equivalents of} ~ OH^- \text{ disassociated per mol of base}}$
		$K_w=K_aK_b=[H^+][OH^-]=1.008\cdot10^{-14}$
		$pX=-\log_{10}(X)$
		$\text{Strong Acids: }\ce{HCl, HBr, HI, HNO_3, HClO_3, HClO_4, H_2SO_4}$$\text{Strong Bases: }\ce{LiOH, NaOH, KOH, RbOH, CsOH, Ca(OH)_2, Sr(OH)_2,\\Ba(OH)_2,XO^{2-},XNH^{2-},S^{2-}}$
		$\ce{[OH^-] + [H_3O^+] << [A^-] +[HA]}\text{ for buffer solutions to exist}$
		- $pH=pK_a+\log\frac{[A^-]}{[HA]}$
			This is called the Henderson Hasselbach equation
		$pOH=pK_b+\log\frac{[HB]}{[B^-]}$
	- Electrochemistry 🔋
		Electrons travel from anode to cathode (AC)
		AOCR (Anode has oxidation, cathode has reduction)
		AnOreXic anode oxidation, CanceRous cathode reduction
		Anions migrate to anodes, cations migrate to cathodes
		- $E_\text{cell}^\degree=E_\text{cathode}^\degree-E_\text{anode}^\degree$
			Units are $V$
		- $\Delta G^\degree=-nFE^\degree_\text{cell}$
			$n$ is least common multiple of the number of electrons exchanged
			$F=9.6485538\cdot10^4\frac{C}{mol}\text{ (Faraday's constant)}$
		- $E=E^\degree-\frac{RT}{nF}\ln(Q)$
			$\frac{RT}{F}\approx0.0592$
			Called the Nernst equation
		!https://mmsphyschem.com/wp-content/uploads/2021/12/standard-reduction-potential-table_193-3076027.jpg
		The X agent includes the entire chemical formula, not the particular atom that gets X’ed, where X refers to oxidation or reduction.
	- Kinetics 🚄
		$\text{rate} = -\frac{1}{a}\frac{d}{dt}[A] = -\frac{1}{b}\frac{d}{dt}[B] = \frac{1}{c}\frac{d}{dt}[C] = \frac{1}{d}\frac{d}{dt}[D] \text{ for }\ce{aA + bB -> cC + dD}$
		$\text{rate}=k[A]^a[B]^b\text{ for }\ce{aA + bB <=> \ldots}$
		| Order | Rate law | Integrated rate law | Half-life | Unit of rate constant | Graph |
		|  |  |  |  |  |  |
		| $0$ | $\text{Rate}=k[A]^0$ | $[A]_t=-kt[A_0]$ | $t_{1/2}=\frac{[A]_0}{2k}$ | $mol\space L^{-1}s^{-1}$ | $\text{[A] vs t; slope = -k}$ |
		| $1$ | $\text{Rate}=k[A]^1$ | $\ln[A]_t=-kt+\ln[A]_0$ | $t_{1/2}=\frac{\ln(2)}{k}$ | $s^{-1}$ | $\text{ln[A] vs t; slope = -k}$ |
		| $2$ | $\text{Rate}=k[A]^2$ | $\frac{1}{[A]_t}=kt+\frac{1}{[A]_0}$ | $t_{1/2}=\frac{1}{k[A]_0}$ | $L\space mol^{-1}s^{-1}$ | $\frac{1}{[A]}\text{ vs t; slope = k}$ |
		| n | $\text{Rate}=k[A]^n$ | $(n-1)kt=\frac{1}{[A]^{n-1}}-\frac{1}{[A_0]^{n-1}}$ | $t_{1/2}=\frac{2^{n-1}-1}{k(n-1)[A]_0^{n-1}}$ | $(mol\space L^{-1})^{1-n}s^{-1}$ | $\frac{1}{[A]^{n-1}}\text{ vs t; slope = k}$ |
		- $\ln(\frac{k_t}{k_0})=\frac{E_a}{R}(\frac{1}{T_0}-\frac{1}{T_t}),\space k_t=k_0e^{\frac{E_a}{R}(\frac{1}{T_0}-\frac{1}{T_t})}$
			This is called the Arrhenius equation, and it relates rate constants at varying temperatures given the activation energy of the reaction
			$E_a$ is the activation energy of the reaction
			$R=8.31447\frac{J}{mol\cdot K}\text{ (Gas constant)}$
	- Nuclear Chemistry ☢️
		Nuclear reactions follow the rules of first order reactions
	- Solid State Chemistry 🖥
	- Organic Chemistry 💊
		Quizlet of Common Compounds:
		https://quizlet.com/432085522/organic-compounds-structure-nomenclature-flash-cards/
		Compound Drawer:
		https://chem-space.com/search
		- $\text{Delocalization}$
			Electrons can be “delocalized” or shared between more than two atoms
			$\pi$ bonds with lone pairs of $e^-$ or $\pi$ bonds that aren’t separated by an atom (so can’t have two single bonds between two $\pi$ bonds, only at most 1) are conjugated, or allow for delocalization
			A $p$ orbital is required to be used, meaning the atom is either $sp^2$ or rarely $sp$ hybridized
			Electron pushing is prioritized by the steps:
			1) negative charge
			2) lone pairs
			3) double/triple bonds
			The resonance structures that are most common prioritize these criteria:
			1) Filled valence shells
			2) Maximum number of covlanet bonds
			3) Least separation of unlike charges
			4) Negative charges on more electronegative atoms
		- $\text{Functional Groups}$
			![Functional Groups.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a04797e-fc15-4108-8595-f17b01207a52/Functional_Groups.jpg)
			- $\Delta G^\degree=-RT\ln(K_\text{eq})$
				$R=1.987\frac{cal}{mol\cdot K}=1.987\cdot 10^{-3}\frac{kcal}{mol\cdot K}=8.314\frac{J}{mol\cdot K}$
		- $\text{Stereochemistry}$
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f79dfe03-33b3-485e-b077-5e7a3fc30701/Untitled.png)
		- $\text{Optical Acitivty}$
			- $[\alpha]_\lambda^T=\frac{\text{Observed rotation }(\degree)}{\text{Length (dm) }\times\text{ Concentration}}$
				$[\alpha]_\lambda^T$ is the specific rotation of a substance in a polarimeter
				The length is typically 1 dm,  the concentration is typically 1 g/mL, and the wavelength $\lambda$ is typically 589 nm from the Sodium D line.
			- $\text{Percent optical purity}=\frac{[\alpha]_\text{sample}}{[\alpha]_\text{pure enantiomer}}\times 100\%$
		- $\text{Acid Base}$
			$K_a=\frac{[H^+][A^-]}{[HA]}$
			$\text{p}K_\text{x}=-\log(K_\text{x})$
			- $\text{p}K_{\text{a}\ce{(H2O)}}\approx 16$
				![pKa-table-organic-chemistry-acids-bases-chemistry-steps-3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4e21cbf-5a86-4a1d-8c34-172e4976a0cf/pKa-table-organic-chemistry-acids-bases-chemistry-steps-3.png)
			- $\text{p}K_\text{eq}=\text{p}K_\text{HA}-\text{p}K_{\text{BH}^+}$
				If the pKa of an acid in the reactants side is lower than the pKa of the conjugate acid (of the base in the reactants side), then the reaction favors the products.
				Low pKeq means high Keq
			- $\text{p}K_a\text{ table}$
				![pKa-table-organic-chemistry-acids-bases-chemistry-steps-3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8074d50-3983-4ada-b219-6b694976e7ae/pKa-table-organic-chemistry-acids-bases-chemistry-steps-3.png)
		- $\text{Mechanisms}$
			Alkenes
			- Rearrangment (1,2 shifts)
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c6d239f0-4655-4fce-a341-2cbb031aabd5/Untitled.png)
			- Hydrohalogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5f8e50ad-f407-4a39-be09-587a44d56d09/Untitled.png)
				In the addition of a hydrogen halide to an alkene reaction (hydrohalogenation, hydrochloration, hydrobromation, hydroiodation), the halide adds to the most substituted carbon and the hydrogen binds to the other carbon with rearrangment
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85cd45cf-7961-4f72-90a4-4342ab2df7bf/Untitled.png)
			- Hydration
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/24559fc6-1ca1-4030-b363-6a294fbcf19e/Untitled.png)
				In the addition of water to alkene with acid catalyst reaction (hydration), the hydroxyl group adds to the most substituted carbon with rearrangment
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff95a47a-49aa-4f33-a424-390d4e4555d1/Untitled.png)
			- Halogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33a33462-6ecf-4e8e-9730-6c40bfb44605/Untitled.png)
				In the addition of halogen gas to an alkene (halogenation) along with carbon tetrachloride catalyst, one of the halogen atoms forms a ring with the alkene. The other negative halide then attacks from the opposite side of the halonium ion in what’s called an anti co-planar attack without rearrangment
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f823238-68fb-4665-88d0-234f45b8e8c8/Untitled.png)
			- Halohydrin Formation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8c7de2f-ae2a-4eb1-b8dc-8544395de0f8/Untitled.png)
				In the addition of halogen and water to an alkene, the end result is that a hydroxyl group is added to the more substituted carbon while the halogen is added in anti to the less substituted carbon
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1ca3e19-701c-4165-8242-bdc8690f0a04/Untitled.png)
			- Oxymercuration
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f6751dd-82af-40b1-b37b-20dc146b7ae9/Untitled.png)
				In the addition of mercuric acetate to an alkene (oxymercuration), the net result is that an OH is added to the most substituted carbon while an H is added in anti without rearrangement (the addition of H and OH may be syn or anti) 
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f050c079-e26f-43cb-af55-48ca17d47eb6/Untitled.png)
			- Hydroboration
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ce09a0f3-5daf-458b-a3fc-12d5c425a183/Untitled.png)
				In the addition of borane to alkene with the presence of hydrogen peroxide and sodium hydroxide (hydroboration), a hydroxyl is added to the lesser substituted carbon along with a hydrogen in syn addition
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/985e0768-b4a2-4750-b419-fd470160adbc/Untitled.png)
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/65313f2d-a5cf-4cf7-bfab-dff812c531fb/Untitled.png)
				- Halohydrin Formation
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16fc0ec0-d923-4dce-9350-b685b8396679/Untitled.png)
					In the addition of a halogen and water to an alkene (halohydrin formation), one of the halogen atoms adds to the less substituted carbon while the hydroxyl adds to the more substituted carbon in an anti-coplanar attack without rearrangement
					![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff8f7cd0-1b01-4618-b6ef-f621f9865ab6/Untitled.png)
			- Diol formation (oxidation)
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc96f9d0-944f-4ec6-b6d6-ed66eba07d4b/Untitled.png)
				In the addition of osmium tetraoxide to alkene (diol formation) along with sodium hydrogen sulfite, the end result is that two hydroxyl groups are added in syn addition to the previously double-bonded carbons to form a glycol (or vicinal diol).
			- Ozonolysis (oxidation)
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3d8cd04-a32c-4135-ac5c-0e262bdc8f86/Untitled.png)
				When ozone and DMS are reacted with alkene (ozonolysis), the carbon double bond is cleaved and an oxygen is added to both ends to form a ketone or aldehyde
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aaa4a3e1-93cf-43b9-8c0b-8c8708c5550c/Untitled.png)
			- Hydrogenation (reduction)
				![Screen Shot 2022-11-19 at 11.16.47 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9bebe723-cf8d-4edc-b57a-f3a90323eb89/Screen_Shot_2022-11-19_at_11.16.47_AM.png)
				Addition of hydrogen gas to alkene produces alkane with hydrogens in syn addition
			Alkynes
			- Deprotonation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6407e3a1-bdab-412f-a8d6-4597206aeb71/Untitled.png)
				To convert an alkyne to an alkyide anion, react it with a strong base such as an azanide
			- Alkylation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddb87f5d-c1df-4c54-ac09-352b89fadb2f/Untitled.png)
				Acetylide anions can replace halogens in alkanes to add an alkyl group to form an alkyne
			- Alkyne From Alkene
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd5788a5-020a-4c7a-ba21-83940b2a3d80/Untitled.png)
				Alkenes can form alkynes by reacting first with halogen gas to form a dihalogen alkane and then with some sodium amide and ammonia to form the alkyne
				The second step removes 2 hydrogens and 2 halogens but can be tuned to remove only one
			- Halogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbc5879b-37c6-4412-905e-050627f66c06/Untitled.png)
				Addition of one mole of halogen gives two halogen molecules added anti to each other in an alkene. Another molar addition of halogen gives an alkane saturated with the halogen. Carbocation rearrangment is not possible
			- Hydrohalogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c19a9b34-e9e4-46a1-a5a6-f0994e15175b/Untitled.png)
				A molar addition of hydrogen halide produces an alkene with the halogen added to the most substitude carbon with possible carbocation rearrangmenets. Another molar addition of hydrogen halide produces an alkane that again follows Markovinikov’s rule
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbdb0526-a4ee-424b-92de-f5c1cd35e7fd/Untitled.png)
			- Hydroboration
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1549774-8870-47d3-889c-9449f2e26d2a/Untitled.png)
				In the addition of borane with hydrogen peroxide and sodium hydroxide to an internal alkyne, a ketone is formed on either carbon. If the reaction is done on a terminal alkyne, the result is an alkane with a diol on the terminal carbon
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdcf8d20-7a8a-4e9e-92f8-37db48b8a037/Untitled.png)
				In the addition of $\ce{(sia)2BH}$ with hydrogen peroxide and sodium hydroxide to a terminal alkyne, an aldehyde is formed at the very end of the alkane. Only one hydroboration happenes because (sia)2 borane is a weaker version of borane
			- Hydration
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d3a5cd9-8e0b-48b8-bb0b-6440ff61cb95/Untitled.png)
				In the addition of mercury sulfate with hydrosulfuric acid to an alkyne, a ketone is formed with the oxygen double bonded to the more substituted carbon without rearrangements
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a679e04-ec16-427c-ad13-61dc49000ec5/Untitled.png)
			- Hydrogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e34dbb4-b68d-4481-9b95-5a08def5bf58/Untitled.png)
				In the addition of two moles of hydrogen gas to alkyne with a transition metal catalyst, an alkane is formed
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/760cd558-8cfa-44cd-8901-83ae7f40735b/Untitled.png)
				In the addition of hydrogen gas to alkyne with Lindlar’s catalyst (transition metal poisoned with lead), two stereoisomers of cis-alkenes may be formed
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf3e496e-f88a-4cf0-a1ee-2930e2ff6fcb/Untitled.png)
				In the addition of a carboxylic acid to a hydroboranated alkyne, a cis-alkene is produced along with a boron bonded to three carboxylate groups
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbf45bdc-4852-4d84-8723-be557affbb64/Untitled.png)
				In the addition of alkali metal to alkyne in liquid ammonia, an alkene is formed with the hydrogens added anti to each other
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba00e88f-3612-4103-8a80-8ed1b0913315/Untitled.png)
			Haloalkanes
			- Halogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ca598fae-d072-4c5b-ba43-fcb0d4b38cbb/Untitled.png)
				In the addition of halogen to alkane, the halogen atom typically adds to the more substituted carbon in a radical chain reaction
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01300789-abbc-4239-9f92-8a86c351cc2c/Untitled.png)
			- Allylic Halogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01cdb584-fd98-4803-9d6d-4e9298dbcaad/Untitled.png)
				In the addition of NBS with carbon tetrachloride and light to alkene, 5
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/835b0097-7ba7-4932-a0f0-6139923621c7/Untitled.png)
			- Autooxidation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8336e9f-20a6-40f5-bf76-87fa08fc97fa/Untitled.png)
			- Hydrohalogenation
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26ac3cdb-d175-45d3-9b2d-6fdb42b93a81/Untitled.png)
				![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/021341f6-cf8d-47e1-b675-6a3cefc20a8b/Untitled.png)
			|  | $3^\degree:2^\degree:1^\degree$ |
			|  |  |
			| $\ce{Br2}$ | $1600:80:1$ |
			| $\ce{Cl2}$ | $5:4:1$ |
- Biology 🔬
	- Nervous System
		- $V_m=\frac{RT}{zF}\ln(\frac{c_o}{c_i})$
			Is one form of the Nernst Equation
			A cell produces a voltage difference (inside - outside) with a separation of charge at a certain temperature $T$, charge carrier charge $z$, inside concentrations of ions $c_i$, and outside concentrations of ions $c_o$
		- $V_m=\frac{RT}{F}\ln(\frac{P_A[A]_i+\ldots+P_N[N]_i}{P_A[A]_o+\ldots+P_N[N]_o})$
			$P_A$ represents the permeability of the membrane to $A$.
		- $\text{Action Potential}$
		CNS:
		Brain/spinal
		PNS:
		Somatic
		Control of skeletal muscles
		Autonomic
		Fight/flight (sympathetic)
		Food/digestion (parasympathetic)
		Frontal
		Primary motor cortex, prefrontal cortex, Broca’s area (grammar wrong, meaning there)
		Parietal lobe
		Somatosensory cortex
		Temporal
		Auditory cortex, Wernicke’s area (word salad)
		Occipital lobe
		Primary visual cortex
		Contralateral control, corpus callosem in between hemispheres
		Thalaus
		Sensory relay station
		…
		Quiz:
		1) Amygdala involuntary movement
		EEG on cerebral cortex
	- Cells
		- Cell Juncitons
			![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b019cc33-25bc-40fb-823f-0705f247c8b4/Untitled.png)
	- $Q=\frac{P}{R}$
		$Q$ is flow rate, $P$ is the pressure of the fluid, and $R$ is the resistance to flow
- Computers 💻
	- Numbers 💯
		- Floating-point
			https://www.geeksforgeeks.org/introduction-of-floating-point-representation/
			Sign: 
			Bit Designation:
			|  | Sign | Exponent | Mantissa (Fraction) |
			|  |  |  |  |
			| 32-bit Float | 1 | 8 | 23 |
			| 64-bit Double | 1 | 11 | 52 |
		- **Fixed-point**
		- **Decimal**
		- Rational
		- BCD
			Stands for Binary Coded Decimal
	- Algorithms 🌳
	- Data Analysis
		- numpy
	- Hardware
	- Automation 🤖
- Linguistics
	Free course: https://app.memrise.com/aprender/learn?course_id=239573?recommendation_id=1b923058-98e8-4fc8-a0f0-7918def39bc5&key=e15c58d2-91e0-4df9-a22d-6288654aeeaf
	![Phonemic-Chart.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5886de13-d593-45e0-85a8-f7e4f3046fbe/Phonemic-Chart.jpg)
	![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15a0d201-5174-43aa-a425-ca8b8fc65b4a/Untitled.png)
	