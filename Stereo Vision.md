#Computers 
A way to get 3D information from 2D images
![[Pasted image 20240306103137.png|700]]
## $$
\begin{bmatrix}
X_{c} \\
Y_{c} \\
Z_{c}
\end{bmatrix}=\mathbf{R}
\begin{bmatrix}
X_{w} \\
Y_{w} \\
Z_{w}
\end{bmatrix}+\vec{t}=
[\mathbf{R}|t]
\begin{bmatrix}
X_{w} \\
Y_{w} \\
Z_{w}
\end{bmatrix}
$$
* $\displaystyle \mathbf{R}$ is the [[Rotation Transformation|rotation matrix]] in 3D
* $\displaystyle \vec{t}$ is a translation vector
* $\displaystyle [\mathbf{R}|t]$ is called the extrinsic matrix