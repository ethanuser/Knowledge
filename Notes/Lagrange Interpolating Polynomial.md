#Math 
A neat way to generate a function that passes through certain points
[Wolfram Article](https://mathworld.wolfram.com/LagrangeInterpolatingPolynomial.html)
[Desmos Demo](https://www.desmos.com/calculator/3islcgj7ga): shows sequence autocompletion
[Desmos Demo 2](https://www.desmos.com/calculator/tjtadfqi3g): shows polynomial that morphs to fit arbitrary point while fitting other points
[Desmos Demo 3](https://www.desmos.com/calculator/fwvgzua9eq): shows parabola defined by three moveable points
[Desmos Demo 4](https://www.desmos.com/calculator/rffsp9cahg) shows quartic polynomial defined by four moveable points
## $\displaystyle P(x)=\sum_{j = 1}^{n}P_{j}(x),\,P_{j}(x)=y_{j}\prod_{k = 1,k\neq j}^{n} \frac{x-x_{k}}{x_{j}-x_{k}}$
* $\displaystyle P(x)$ is the polynomial
* $\displaystyle n$ is the number of points
* Example: Find the $\displaystyle x$ in this sequence: $\displaystyle 33,34,35,x,39$:
* ![[Pasted image 20231025222825.png]]
* Plugging in 1 gives 33 because all the terms not corresponding to $\displaystyle y_{j}=33$ are sent to $\displaystyle 0$ by $\displaystyle x-x_{k}$ in the numerator
* The remaining term is still normalized to $\displaystyle 1$ by the denominator
## Code
```Mathematica
In[34]:= Expand[
 InterpolatingPolynomial[{{1, 5}, {2, 10}, {3, 20}, {4, 40}, {5, 
    80}, {6, 160}, {7, b}}, x]]

Out[34]= -315 + b + (9353 x)/12 - (49 b x)/20 - (8581 x^2)/12 + (
 203 b x^2)/90 + (15545 x^3)/48 - (49 b x^3)/48 - (3695 x^4)/48 + (
 35 b x^4)/144 + (443 x^5)/48 - (7 b x^5)/240 - (7 x^6)/16 + (
 b x^6)/720

In[35]:= Simplify[%]

Out[35]= 1/720 (b (720 - 1764 x + 1624 x^2 - 735 x^3 + 175 x^4 - 
      21 x^5 + x^6) - 
   15 (15120 - 37412 x + 34324 x^2 - 15545 x^3 + 3695 x^4 - 443 x^5 + 
      21 x^6))

In[33]:= Series[5*2^x,{x,7,9}]

Out[33]= SeriesData[x, 7, {
 640, 640 Log[2], 320 Log[2]^2, Rational[320, 3] Log[2]^3, 
  Rational[80, 3] Log[2]^4, Rational[16, 3] Log[2]^5, Rational[8, 9] 
  Log[2]^6, Rational[8, 63] Log[2]^7, Rational[1, 63] Log[2]^8, 
  Rational[1, 567] Log[2]^9}, 0, 10, 1]

In[29]:= Simplify[%]

Out[29]= SeriesData[x, 0, {5, 
Log[32], Rational[5, 2] Log[2]^2, Rational[5, 6] Log[2]^3}, 0, 4, 1]
```