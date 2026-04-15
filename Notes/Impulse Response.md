#Engineering 
## $\displaystyle h(t,\tau)=H(\delta(t-\tau))$
* Impulse response
* $\displaystyle H(\cdot )$ is the system
* $\displaystyle \delta(t-\tau)$ is an [[Dirac Delta|impulse function]] where you replace every instance of $\displaystyle x(t-\tau)$ with this
* $\displaystyle t$ in $\displaystyle h(t,\tau)$ is a specific value of time
* $\displaystyle t$ in $\displaystyle \delta(t-\tau)$ is an independent dummy variable and varies across all time
	* Can be more rigorously defined as $\displaystyle h(t,\tau):=H[\delta(s-\tau)]|_{s=t}$
* $\displaystyle \tau$ is the time of the impulse function