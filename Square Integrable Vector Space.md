#Math 
The [[Vector Spaces|vector space]] of functions that are [[Square Integrable]]
## Topics
* [[Hilbert Space]]
## $\displaystyle L^{2}\left\{ f:\mathbb{R}^{d} \right\}$
* WIP
## $\displaystyle \mathfrak{B}=\left\{\sin\left( \frac{n\pi}{L}x \right),n \in\mathbb{N}\right\}$
* A [[basis]] of this vector space is given above
* Proof of orthogonality:
$$
\begin{align}
\int \sin\alpha\sin \beta \, \mathrm{d}x & =\int \frac{1}{2}(\cos \alpha \cos \beta-\cos \alpha \cos \beta+2\sin \alpha \sin beta) \, \mathrm{d}x  \\
&=\frac{1}{2}\int (\cos \alpha \cos(-\beta)-\sin \alpha \sin(-\beta)-[\cos \alpha \cos \beta-\sin \alpha \sin \beta]) \, \mathrm{d}x  \\
&=\frac{1}{2}\int \left(\cos(\alpha+\beta)-\cos(\alpha-\beta)\right) \, \mathrm{d}x  \\
\end{align}
$$
...