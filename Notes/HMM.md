---
aliases:
  - Hidden Markov Models
---
#Computers 
A model that tries to predict the hidden variables of a [[markov model]]
## Topics
* [[Markov Chains]]
## $\displaystyle e_{k}(b)=P(Y_{t}=b|X_{t}=k)$
* Emission probability, or probability we observe $\displaystyle b$ given hidden variable state $\displaystyle k$
## $\displaystyle P(x_{1:T})=\pi_{x_{1}}\prod_{t = 1}^{T-1}q_{x_{t+1}x_{t}}$
## $\displaystyle v_{t}(k)=\text{max}_{x_{1}:t-1}P(y_{1:t},x_{1:t-1},x_{t}=k)$
* Probability of most probable path (MPP) that ends in state $\displaystyle k$
## $\displaystyle v_{1}(k)=P(y_{1},x_{1}=k)=e_{k}(y_{1})\pi_{k}$
* 
## $\displaystyle v_{t}(k)=\text{max}_{l}v_{t-1}(l)q_{kl}e_{k}(y_{t})$
## $\displaystyle \text{MPP}_{t}(k)=\text{argmax}_{l}v_{t-1}(l)q_{kl}e_{k}(y_{t})$

