#Physics 
Based on [this pdf](http://individual.utoronto.ca/kzhu/writing/mnemonic_device.pdf)

| Coordinate  | $\displaystyle h_{1}$ | $\displaystyle h_{2}$ | $\displaystyle h_{3}$           | $\displaystyle u_{1}$ | $\displaystyle u_{2}$  | $\displaystyle u_{3}$ | $\displaystyle n_{1}$      | $\displaystyle n_{2}$        | $\displaystyle n_{3}$      |
| ----------- | --------------------- | --------------------- | ------------------------------- | --------------------- | ---------------------- | --------------------- | -------------------------- | ---------------------------- | -------------------------- |
| Cartesian   | $\displaystyle 1$     | $\displaystyle 1$     | $\displaystyle 1$               | $\displaystyle x$     | $\displaystyle y$      | $\displaystyle z$     | $\displaystyle \hat{x}$    | $\displaystyle \hat{y}$      | $\displaystyle \hat{z}$    |
| Cylindrical | $\displaystyle 1$     | $\displaystyle s$     | $\displaystyle 1$               | $\displaystyle s$     | $\displaystyle \phi$   | $\displaystyle z$     | $\displaystyle \hat{s}$    | $\displaystyle \hat{\phi}$   | $\displaystyle \hat{z}$    |
| Spherical   | $\displaystyle 1$     | $\displaystyle \rho$  | $\displaystyle \rho\sin \theta$ | $\displaystyle \rho$  | $\displaystyle \theta$ | $\displaystyle \phi$  | $\displaystyle \hat{\rho}$ | $\displaystyle \hat{\theta}$ | $\displaystyle \hat{\phi}$ |
## $\displaystyle \nabla f=\frac{1}{h_{i}}\partial_{u_{i}}fn_{i}$
## $\displaystyle \nabla \cdot \vec{f}=\frac{1}{h_{1}h_{2}h_{3}}\partial_{u_{i}}(h_{j}h_{k}f_{i})$
## $\displaystyle \nabla \times \vec{f}=\frac{1}{h_{j}h_{k}}\varepsilon_{ijk}\partial_{u_{j}}(h_{k}f_{k})n_{i}$
# Cartesian
## $\displaystyle \nabla f={\left\langle{\partial_{x}}f,\partial_{y}f,\partial_{z}f\right\rangle}$
# Cylindrical
# Spherical
## $\displaystyle \nabla f=\partial_{\rho}f\hat{\rho}+\frac{1}{\rho}\partial_{\theta}f\hat{\theta}+\frac{1}{\rho \sin \theta}\partial_{\phi}f\hat{\phi}$
* $\displaystyle \theta$ is the [[azimuthal angle]]
## $\displaystyle \nabla \times \vec{f}=\frac{1}{\rho\sin \theta}[\partial_{\theta}(f_{\phi}\sin \theta)-\partial_{\phi}f_{\theta}]\hat{\rho}+\frac{1}{\rho}\left[ \frac{1}{\sin \theta}\partial_{\phi}f_{\rho}-\partial_{\rho}(\rho f_{\phi}) \right]\hat{\theta}+\frac{1}{\rho}[\partial_{\rho}(\rho f_{\theta})-\partial_{\theta}f_{\rho}]\hat{\phi}$
