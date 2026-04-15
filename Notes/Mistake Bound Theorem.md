#Math #Computers 
By Novikoff 1962, Block 1962
* For a dataset $\displaystyle \left\{ (x_{1},y_{1}),\ldots,(x_{N},y_{N})  \right\}$ with $\displaystyle R\geq \lVert x_{n}\rVert_{2}$ and labels $\displaystyle y_{n}\in \left\{ -1,1 \right\}$
* Suppose $\displaystyle ~\exists~u\in \mathbb{R}^{D}:~\exists~\gamma>0\land \gamma\leq y_{n}u^{^{\top}}x_{n}$
	* $\displaystyle u$ can be thought of as a $\displaystyle w$ of a candidate for the margin of the dataset
* Then the PerceptronTrainingAlgorithm will make $\displaystyle \leq \frac{R^{2}}{\gamma ^{2}}$ mistakes on the training sequence