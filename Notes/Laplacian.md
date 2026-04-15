---
aliases:
  - Laplace Operator
---
#Math 
Intuition: higher values of $\displaystyle \Delta f(x,y)$ correspond to $\displaystyle f(x,y)$ being more like a valley as opposed to a hill. Basically tells you how much a point is like a local minimum. Analogous to second derivative in 1D calculus
## $\displaystyle \Delta=\nabla ^{2}=\partial_{i}^{2}$
* $\displaystyle \partial_{i}^{2}$ is in [[Einstein Notation]]
* For 3 dimensions, $\displaystyle \Delta=\left( \frac{ \partial^2 }{ \partial x^{2}} +\frac{ \partial^2 }{ \partial y^{2}}+\frac{ \partial^2 }{ \partial z^{2}}\right)$
## $\displaystyle \nabla\cdot(\nabla \vec{f})=\Delta f \neq \nabla(\nabla\cdot \vec{v})$
* Divergence of gradient of $\displaystyle \vec{f}$ is the laplacian of $\displaystyle \vec{f}$
## $\displaystyle \Delta f=\partial ^{2}_{i}f$
## $\displaystyle \Delta \vec{F}=\partial_{i}^{2}F_{i}$
# Other Coordinates
[How to remember the Laplacian in spherical and cylindrical coordinates](https://www.youtube.com/watch?v=hMkVR3ngPNI)
## $\displaystyle \nabla ^{2}=\frac{1}{r^{2}}\frac{\partial  }{\partial r}\left( r^{2}\frac{\partial  }{\partial r}  \right)+\frac{1}{r^{2}\sin \theta}\frac{\partial  }{\partial \theta} \left( \sin \theta \frac{\partial  }{\partial \theta}  \right)+\frac{1}{r^{2}\sin ^{2}\theta}\left( \frac{\partial^2 }{\partial \phi^{2}}  \right)$
* Laplacian in [[spherical coordinates]]
## $\displaystyle \nabla ^{2}=\frac{1}{r}\frac{\partial  }{\partial r}\left( r \frac{\partial }{\partial r} \right)+\frac{1}{r^{2}} \frac{\partial^2 }{\partial \theta^{2}}+\frac{\partial^2 }{\partial z^{2}}$
* Laplacian in [[cylindrical coordinates]]