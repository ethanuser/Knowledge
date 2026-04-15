#Math 
[Wikipedia](https://en.wikipedia.org/wiki/Hyperoperation)
$$
H_{n}(a,b)=a[n]b=
\begin{cases}
b+1 & n=0 \\
a & n=1\land b=0 \\
0 & n=2\land b=0 \\
1 & n\geq 3\land b=0 \\
H_{n-1}(a,H_{n}(a,b-1)) & \text{otherwise}
\end{cases}
$$
* $\displaystyle n=0,1,2,3,4\ldots$ corresponds to secession, addition, multiplication, exponentiation, tetration, and beyond
* E.g.: $\displaystyle H_{4}(2,4)=2[4]4=2\uparrow\uparrow4=2^{2^{2^{2}}}$