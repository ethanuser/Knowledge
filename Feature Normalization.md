#Computers 
In some machine learning algorithms, failing to normalize features results in that feature being over or underrepresented
## $\displaystyle x_{\text{normalized}}= \frac{x-\bar{x}}{s_{d}}$
* Essentially a [[Z-scores|z-score]] but using sample metrics rather than population metrics
* $\displaystyle x$ is the original sample data
* $\displaystyle \bar{x}$ is the [[mean]] of $\displaystyle x$
* $\displaystyle s_{d}$ is the [[standard error]] in $\displaystyle x$
* This is the equivalent of the StandardScaler() in [[sklearn]]
## $\displaystyle x_{\text{normalized}}=\frac{x-x_{\text{max}}}{x_{\text{max}}-x_{\text{min}}}$
* 