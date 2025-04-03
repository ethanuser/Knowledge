---
aliases:
  - GMM
---
#Computers
[[Clustering]] algorithm that models each cluster as a Gaussian
## $\displaystyle p(x)=\sum_{k = 1}^{K}\omega_{k}\mathcal{N}(x|\mu_{k},\Sigma_{k}):~\forall~k,\omega_{k}>0\land \sum_{k}\omega_{k}=1$
* The probability density function for observing a data point $\displaystyle x$ in our feature space
* $\displaystyle K$ is the number of Gaussians/classes/clusters
## $\displaystyle p(x_{n}|z_{n}=k)=\mathcal{N}(x_{n}|\mu_{k},\Sigma_{k})$
* The conditional distribution
* $\displaystyle \mathcal{N}(x_{n}|\mu_{k},\Sigma_{k})$ is the [[Multivariate Gaussian Distribution]]
# Parameter Estimation
## 
$$
\gamma_{nk}=\begin{cases}
1, & z_{n}=k \\
0, & \text{otherwise}
\end{cases}
$$
* Indicator function for whether data point $\displaystyle x_{n}$ belongs to cluster $\displaystyle k$. 
* Kind of like the [[Kronecker Delta]] in this case
## $\displaystyle \gamma_{nk}=p(z_{n}=k|x_{n})=\frac{p(x_{n}|z_{n}=k)p(z_{n}=k)}{\sum_{k' = 1}^{K}p(x_{n}|z_{n}=k')}= \frac{\mathcal{N}(x_{n}|\mu_{k},\Sigma_{k})\cdot \omega_{k}}{\sum_{k' = 1}^{K}\mathcal{N}(x_{n}|\mu_{k},\Sigma_{k})}$
* Non-binary "soft" version, used when actually training the Gaussian Mixture Model
* Expanded by [[Bayes' Theorem]]
## $\displaystyle \omega_{k}=p(z=k)=\frac{\sum_{n}\gamma_{nk}}{\sum_{k'}\sum_{n}\gamma_{nk'}}$
* The weight associated with a particular Gaussian
* The probability of a particular class
* Proportion of points with $\displaystyle z_{n}=$ to a particular $\displaystyle k$
## $\displaystyle \mu_{k}=\frac{1}{\sum_{n}\gamma_{nk}}\sum_{n}\gamma_{nk}x_{n}$
* The mean position of all points in cluster $\displaystyle k$
## $\displaystyle \Sigma_{k}=\frac{1}{\sum_{n}\gamma_{nk}}\sum_{n}\gamma_{nk}(x_{n}-\mu_{k})(x_{n}-\mu_{k})^{^{\top}}$
* The [[covariance matrix]] for all points with $\displaystyle z_{n}=k$
# Training
Called expectation-maximization
![[Pasted image 20250309131547.png]]
* Very similar to [[K-Means]], except that it is considered a "soft" version and also with a non zero $\displaystyle \sigma$
* The E step corresponds to step 1 while the M step corresponds to step 2