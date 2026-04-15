---
aliases:
  - Markov Process
  - Markov Model
---
#Computers 
A model that tries to predict the next future state given one future state (one in the case of 1st-order Markov models)
## $\displaystyle \pi_{i}=P(X_{1}=i)$
* Called the initial probability
## $\displaystyle q_{ij}=P(X_{t+t}=i|X_{t}=j)$
* Called the transition probability
* The probability that the future state is $\displaystyle i$ given the current state is $\displaystyle j$
$$
\pi=\begin{bmatrix}
\pi_{1} \\
\vdots  \\
\pi_{K}
\end{bmatrix}
$$
$$
Q=\begin{bmatrix}
q_{11} & \ldots  & q_{1K}
\end{bmatrix}
$$

## $\displaystyle p_{t}(i)=P(X_{t}=i)=\sum_{j}p_{t-1}(j)q_{ij}=$
## $\displaystyle \hat{\theta}=$
### Time Complexity
# Training
* Viterbi Algorithm