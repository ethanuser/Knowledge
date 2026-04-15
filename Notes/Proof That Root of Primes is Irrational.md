#Math 
Let $\displaystyle p$ be a prime number
Prove: $\displaystyle p^{1/n}\neq \frac{a}{b}~\forall~a\in \mathbb{Z},b\in \mathbb{Z}-\left\{ 0,1 \right\},n\in 2,3,4\ldots$
Assume for contradiction that $\displaystyle  p^{1/n}=\frac{a}{b}$ and is reduced
$$
\begin{align}
p^{1/n}&=\frac{a}{b} \\
p&=\frac{a^{n}}{b^{n}} \\
\end{align}
$$
* Then $\displaystyle a^{n}=pb^{n}$, and so $\displaystyle a^{n}$ is divisible by a prime
* But $\displaystyle a$ must also be divisible by a prime because otherwise, squaring $\displaystyle a$ wouldn't get the factor of $\displaystyle p$ ($\displaystyle p$ is only divisible by itself and $\displaystyle 1$)
* We write $\displaystyle a=kp,k\in \mathbb{Z}$
* Then $\displaystyle p=\frac{k^{n}p^{n}}{b^{n}}$
* Then $\displaystyle b^{n}=p^{n-1}k^{n}$
* So then $\displaystyle b^{n}$ is divisible by $\displaystyle p$, and so must $\displaystyle b$ be
* But this contradicts our assumption that $\displaystyle \frac{a}{b}$ was reduced
$\displaystyle \therefore$ by [[Proof by Contradiction]], the root of a prime number must be irrational
$\displaystyle Q.E.D.$