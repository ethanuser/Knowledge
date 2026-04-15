#Math 
## $\displaystyle (a+b)^{n}\approx a^{n}\left( 1+\frac{bn}{a} \right)\text{ if } \left\lvert  \frac{bn}{a} \right\rvert \ll1$
## $\displaystyle (1+b)^{n}\approx 1+bn$
* Setting previous equation's $\displaystyle a=1$ gives this one which is just the first two terms of the Taylor expansion around $\displaystyle b=0$
	* The next few terms would be $\displaystyle \frac{1}{2}n(n-1)b^{2}+\frac{1}{6}n(n-1)(n-2)b^{3}+\frac{1}{24}n(n-1)(n-2)(n-3)b^{4}+O(b)^{5}$, where $\displaystyle O(b)^{5}$ is a polynomial of order $\displaystyle 5$ or greater
	* Shown by Mathematica code:
```mathematica
Series[(1+b)^n,{b,0,4}]
```