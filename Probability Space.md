#Math 
* A probability space is a triple of $(\Omega,\mathcal{F},P)$:
	* $\Omega$ is the set of all possible outcomes of some random experiment
	* $\mathcal{F}$ is the power set of $\Omega$ (all possible events you could try to ask the probability of)
	* $P$ is a probability measure
	* An event $A$ satisfies: $A\in\mathcal{F}$ and $A\subseteq\Omega$
---
* E.g.: What is the probability of getting at least 1 head if you flipped two coins?
	* $\Omega=\{HH,HT,TH,TT\}$
	* $\mathcal{F}=\mathcal{P}(\Omega)$
* Let $A$ the event that you get at least 1 head
	* $A=\{HH,HT,TH\}$
	* Then of course, $A\in\mathcal{F}$ and $A\subseteq\Omega$
	* $P(A)=\frac{|A|}{|\Omega|}=\frac{3}{4}$