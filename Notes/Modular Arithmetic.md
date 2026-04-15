#Math 
Deals with arithmetic of cyclical numbers
[Wikipedia](https://en.wikipedia.org/wiki/Modular_arithmetic)
## Topics
# Definitions
## $\displaystyle a\equiv b~\left(\text{mod }n\right)\leftrightarrow a=kn+b\leftrightarrow a=pn+r \land b=qn+r,k,p,q\in \mathbb{R}$
* Reads: $\displaystyle a$ is congruent to $\displaystyle b$ modulo $\displaystyle n$, or $\displaystyle n$ divides $\displaystyle a-b$
* $\displaystyle r$ is the remainder of $\displaystyle \frac{a}{n}$ and $\displaystyle \frac{b}{n}$
## $\displaystyle r=\text{mod}\left(a,n\right)=a\text{ mod }n=a~\%~n\leftrightarrow a=pn+r,p\in \mathbb{R}$
* $\displaystyle r$ is the remainder of $\displaystyle \frac{a}{n}$
## $\displaystyle 0\leq r<n$
* $\displaystyle r$ is the remainder of a division by $\displaystyle n$
## $\displaystyle a+b\equiv 0~\left(\text{mod }n\right)\rightarrow a=b^{-1} \text{ on }n$
* $\displaystyle a$ and $\displaystyle b$ are [[Inverse|inverses]] of each other on $\displaystyle n$ if their sum congruent to $\displaystyle 0$
# Properties
1. Reflexivity
	1. $\displaystyle a\equiv a~\left(\text{mod }n\right)$
2. Symmetry
	1. $\displaystyle a\equiv b~\left(\text{mod }n\right)\leftrightarrow b\equiv a~\left(\text{mod }n\right)$
3. Transitivity
	1. $\displaystyle a\equiv b~\left(\text{mod }n\right)\land b\equiv c~\left(\text{mod }n\right)\rightarrow a\equiv c~\left(\text{mod }n\right)$
4. $\displaystyle \text{mod}\left(a,n\right) \approx  n-\text{mod}\left(-a,n\right)$
	1. They are equal except for when $\displaystyle \text{mod}\left(a,n\right)=0$, in which case the right hand side is equal to $\displaystyle n$
# Applications
* [[Date to Day]]