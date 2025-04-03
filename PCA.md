---
aliases:
  - Principal Component Analysis
---
#Computers 
Projects data onto the dimension that maximizes variance of the data along that dimension, which so happens to be along the [[eigenvector]] with the largest [[eigenvalue]] when looking at the sample [[covariance matrix]] of the data
## $\displaystyle \mathbf{Z=XP}$
* $\displaystyle \mathbf{Z}\in \mathbb{R}^{n\times k}$ the lower-dimensional representation of the data,  where $\displaystyle n$ is the number of datapoints and $\displaystyle k$ is the number of principal components
* $\displaystyle \mathbf{X}\in \mathbb{R}^{n\times d}$ is the data, where $\displaystyle d$ is the dimensionality of the data
* $\displaystyle \mathbf{P} \in \mathbb{R}^{d\times k}$ is the transformation matrix
## $\displaystyle \text{Fraction of retained variance}= \frac{\sum_{i = 1}^{k}\lambda_{i}}{\sum_{i = 1}^{d}\lambda_{i}}$
* If you choose the first $\displaystyle k$ highest eigenvalues, this is proportion of variance you retain after PCA
## $\displaystyle \text{max}_{p}p^{^{\top}}C_{X}p,\,\left\lVert p\right\rVert_{2}=1$
* The goal of PCA is to maximize the variance represented by $\displaystyle p^{^{\top}}C_{x}p$ by varying $\displaystyle p$ with the constraint that $\displaystyle p$ is normal
* $\displaystyle C_{X}$ is the [[covariance matrix]]
# Training
![[Screenshot 2025-03-13 at 11.03.18 PM.png|500]]
