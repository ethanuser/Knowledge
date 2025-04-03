#Math 
## Topics
* [[Coefficient of Determination]]
## $\displaystyle \hat{Y}=\hat{\beta}_{1}X+\hat{\beta}_{0}+\varepsilon$
* The hats are considered estimators, or values we have to calculate to predict $\displaystyle Y$
* $\displaystyle \hat{\beta}_{1}$ and $\displaystyle \hat{\beta}_{0}$ are regression coefficients
* $\displaystyle \varepsilon$ is random noise
## $\displaystyle L({\beta}_{0},{\beta}_{1})=\frac{1}{n}\sum_{i = 1}^{n}[y_{i}-({\beta}_{1}X+{\beta}_{0})^{2}]=J(\boldsymbol{\theta})=\left\lVert \boldsymbol{y}-\boldsymbol{X\theta}\right\rVert^{2}_{2}$
* The [[loss function]] for simple linear regression
* Minimizing this by varying $\displaystyle {\beta}_{0}$/$\displaystyle {\beta}_{1}$ or $\displaystyle \boldsymbol{\theta}$ gives the linear model that best fits with the data $\displaystyle \boldsymbol{y}$
* $\displaystyle \boldsymbol{y}$ is the [[target vector]]
* $\displaystyle \boldsymbol{X}$ is the [[design matrix]]
* $\displaystyle \boldsymbol{\theta}$ is the [[Parameter Matrix]]
## $\displaystyle \nabla J(\boldsymbol{\theta})=2(\mathbf{X^{^{\top}}X}\boldsymbol{\theta}-\mathbf{X^{^{\top}}y})$
* Gradient of loss function
## $\displaystyle \hat{\beta}_{1}= w=\frac{\sum_{i}(x_{i}-\bar{x})(y_{i}-\bar{y})}{\sum_{i}(x_{i}-\bar{x})^{2}}$
* Coefficient of regression that minimizes $\displaystyle L$
* Same as $\displaystyle \frac{\text{cov}(X,Y)}{\text{var}(X)}$
## $\displaystyle \hat{\beta}_{0}=b=\bar{y}-\hat{\beta}_{1}\bar{x}$
* Coefficient of regression that minimizes $\displaystyle L$
## $\displaystyle \hat{\beta}=\theta=\underset{\beta}{\text{argmin}}\text{\,MSE}(\beta)=(\mathbf{X}^{\top}\mathbf{X})^{-1}\mathbf{X}^{\top}\mathbf{Y}$
* If $\displaystyle \mathbf{X}^{^{\top}}\mathbf{X}$ is not invertible, this happens both/either because
	* $\displaystyle  N<D$, or there are fewer data points than features
	* $\displaystyle \mathbf{X}$ is not linearly independent, in which case 
* 
## $\displaystyle SE(\hat{\beta}_{0})=\sigma\sqrt{ \frac{1}{n}+\frac{\bar{x}^{2}}{\sum_{i}(x_{i}-\bar{x})^{2}} }$
* $\displaystyle \sigma$ is the variance in $\displaystyle \hat{y}$
* $\displaystyle \bar{x}$ is the average value of our sample
## $\displaystyle SE(\hat{\beta}_{1})=\frac{\sigma}{\sqrt{ \sum_{i}(x_{i}-\bar{x})^{2} }}$
## $\displaystyle \sigma\approx \sqrt{ \sum_{i} \frac{(\hat{f}(x)-y_{i})^{2}}{n-2}}$
* Used for when the noise $\displaystyle \varepsilon$ is unknown