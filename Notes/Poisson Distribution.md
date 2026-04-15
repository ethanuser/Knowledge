#Math 
## $X \sim \text{Poisson}(\lambda t)$
* A Poisson variable represents the number of occurrences of an event in $t$ units of time that has an average occurrence of $\lambda$ occurrences per unit time
* Analogous to binomial distributions in the discrete world
* The $\mu$ below $=$ $\lambda t$
* $p_X(x) = e^{-\mu}\frac{\mu^x}{x!}, ~ x \in \{ 0, 1, 2, \ldots \}$
* $F_X(x) =$ 
* $M_X(t) = e^{\mu(e^t - 1)}$
* $\mathbb{E}[X] = \mu$
* $\text{var}(X) = \mu$
## Example
* A radioactive particle emits a 10 photon every 5 seconds on average. What's the probability that no particles are emitted over the timespan of one second?
	* $\displaystyle \lambda=\frac{10}{5}=2{\rightarrow}p_{x}(0)=e^{-2}\frac{2^{0}}{0!}=\frac{1}{e^{2}}{\approx}0.135$
## Applications
* [[Poisson Scattering]]
## Derivation
* Can be derived from the [[binomial distribution]] when assuming $\displaystyle p\ll 1$ and $\displaystyle np$ remains finite (and even somewhat small) as $\displaystyle n\rightarrow \infty$