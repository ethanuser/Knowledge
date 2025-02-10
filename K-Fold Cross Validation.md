#Computers 
A way to validate the effectiveness of a machine learning model
## $\displaystyle CV(\text{Model})=\frac{1}{K}\sum_{i = 1}^{K}L(\hat{f}_{C_{-i}}(C_{i}))$
* Lower value means better model
* $\displaystyle K$ is the number of chunks the data set is split into
* $\displaystyle \hat{f}_{C_{-i}}$ is the model fitted to the training set of all chunks that aren't $\displaystyle C_{i}$, the validation set
* $\displaystyle L$ is the loss function