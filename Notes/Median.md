---
created: 2025-02-09
modified: 2026-04-15
---
#Math 
[[Central tendency]] measure that minimizes the sum of the [[Manhattan Distance|L1 norm]] between it and all the other points. 
## $$
\text{Med}(X)=
\begin{cases}
X\left[ \frac{n+1}{2} \right], & n\text{ is odd} \\
\text{mean}\left( X\left[ \frac{n}{2} \right],X\left[ \frac{n+1}{2} \right] \right), & n\text{ is even}
\end{cases}
$$
* The middle value of an odd-length list or the average of the two middle values of an even-length list
* $\displaystyle X$ is an ordered list