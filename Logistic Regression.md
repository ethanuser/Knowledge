#Computers 
A model that predicts the probability of a data point belonging to a certain class. This probability may then be used to classify (e.g. $\displaystyle P(y=1|x)>0.5\rightarrow y=1$) if desired
## Topics
* [[Log Likelihood]]
* [[Softmax]]
## $\displaystyle L({\beta}_{0},{\beta}_{1})=-\log(L(p|Y))-\sum_{i}\left( y_{i}\ln\left( p_{i} \right)+(1-y_{i})\ln\left( 1-p_{i} \right) \right)$
* Negative log of the product of log likelihood...
## $\displaystyle p_{i}=\frac{1}{1+e^{-({\beta}_{0}+{\beta}_{1}x_{i})}}$
# Training
Use [[gradient descent]] to minimize the negative log likelihood of the dataset (same as finding the [[Maximum Likelihood Estimator|Maximum Likelihood Estimate]]) by modifying $\displaystyle \theta$, or the weights of the model
## $\displaystyle J(\theta)=-\sum_{n}\left\{ y_{n}\log h_{\theta}(x_{n})+(1-y_{n})\log[1-h_{\theta}(x_{n})] \right\}$
* The log likelihood of the dataset
* $\displaystyle h_{\theta}(x_{n})$ is the same as $\displaystyle p_{i}$
## $\displaystyle \frac{\partial J(\theta) }{\partial \theta}=\sum_{n}\left\{ h_{\theta}(x_{n})-y_{n} \right\}x_{n}$
* $\displaystyle \left\{ h_{\theta}(x_{n})-y_{n} \right\}$ is the error of the $\displaystyle n$th training sample
# Testing
## $\displaystyle h_{\theta}(x)=P(y=1|x)=\sigma(a(x))$
* $\displaystyle \sigma(x)$ is the [[sigmoid function]]
* $\displaystyle a(x)$ is the [[activation function]]
* If $\displaystyle h_{\theta}(x)>0.5$
	* Classify $\displaystyle y=1$
* Else
	* Classify $\displaystyle y=0$
### $\displaystyle O(d)$
* $\displaystyle d$ is the dimensionality of the data