#Computers 
A method of clustering data by minimizing $\displaystyle J$, or the [[distortion measure]]
# Training
* Initialize $\displaystyle \left\{ \mu_{k} \right\}$, or the [[Cluster Prototype|cluster prototypes]] to some values
* Assuming $\displaystyle \left\{ \mu_{k} \right\}$ is fixed, minimize $\displaystyle J$ by varying $\displaystyle \left\{ r_{nk} \right\}$, or the indicator functions for each data point
	* I.e. reassign classes for each data point based on distance from cluster prototype
	* $$
r_{nk}=\begin{cases}
1, & k=\text{argmin}_{j}\left\lVert x_{n}-\mu_{j}\right\rVert^{2}_{2} \\
0, & \text{otherwise}
\end{cases}
$$
* Assuming $\displaystyle \left\{ r_{nk} \right\}$ is fixed, minimize $\displaystyle J$ by reassigning the [[Cluster Prototype|cluster prototypes]]
* Terminate if $\displaystyle J$ stops changing much or repeat the above steps
## The same as GMM but with $\displaystyle \omega_{k}=\frac{1}{K},\Sigma_{k}=\sigma ^{2}\mathbb{I}_{D},\sigma ^{2}\rightarrow 0$