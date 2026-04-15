#Math 
[3b1b Video](https://www.youtube.com/watch?v=IaSGqQa5O-M)
## $\displaystyle p_{X+Y}(s)=[p_{X}*p_{Y}](s)=[p_{Y}*p_{X}](s)$
# Discrete Case
## $\displaystyle [p_{X}*p_{Y}](s)=\sum_{x = 1}^{N}p_{X}(x)\cdot p_{Y}(s-x)$
* $\displaystyle p_{X}$ and $\displaystyle p_{Y}$ are probability mass functions
* $\displaystyle s$ is the value of the sum of the two variables we are trying to find the probability of occurring
* $\displaystyle N$ is the number of possible sums
# Continuous Case

## $\displaystyle [f*g](s)=\int_{-\infty}^{\infty} f(x)g(s-x) \, \mathrm{d}x$
* Essentially gives the probability of getting a sum $\displaystyle s$ when adding $\displaystyle f$ and $\displaystyle g$, which are two PDF's of two different random variables
# Signal Processing
## $\displaystyle x(t)=\int_{-\infty}^{\infty} x(\tau)\delta(t-\tau) \, \mathrm{d}\tau$
* $\displaystyle \delta(\cdot )$ is the [[Dirac Delta|delta function]]
* [Desmos Demo](https://www.desmos.com/calculator/gccl19pkbn)
## $\displaystyle y(t)=[x*h](t)=\int_{-\infty}^{\infty} x(\tau)h(t-\tau) \, \mathrm{d}\tau$
* $\displaystyle h$ is the [[impulse response]]
* Called the flip and drag technique
## $\displaystyle x(t)\rightarrow \underset{\text{LTI}}{\fbox{h(t)}}\rightarrow y(t)$
* Equivalent way of saying the above equation in block notation
# Properties
## $\displaystyle f*g=g*f$
* Commutative
## $\displaystyle f*(g*h)=(f*g)*h$
* Associative
## $\displaystyle f*(g+h)=f*g+f*h$
## A system is stable if $\displaystyle \int_{-\infty}^{\infty} \lvert h(t)\rvert \, \mathrm{d}t<\infty$ ($\displaystyle h(t)$ is absolutely integrable)
## $\displaystyle h*(\alpha x_{1}+\beta x_{2})=\alpha(h*x_{1})+\beta(h*x_{2})$
## $\displaystyle f*g=h\rightarrow f(t-a)*g(t-b)=h(t-(a+b))$
* Time-shifting property of convolution
## $\displaystyle \frac{\mathrm{d} }{ \mathrm{d}t}(f*g)=\left( \frac{\mathrm{d} }{ \mathrm{d}t}f \right)*g=f*\left( \frac{\mathrm{d} }{ \mathrm{d}t} g\right)$
* Derivatives distribute to just one of the functions