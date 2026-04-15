#Math 

| $\displaystyle x(t)$                      | $\displaystyle X(s)$                                        | Region of Convergence                |
| ----------------------------------------- | ----------------------------------------------------------- | ------------------------------------ |
| $\displaystyle \delta(t)$                 | $\displaystyle 1$                                           | All $\displaystyle s \in \mathbb{C}$ |
| $\displaystyle u(t)$                      | $\displaystyle \frac{1}{s}$                                 | $\displaystyle \text{Re}(s)>0$       |
| $\displaystyle e^{-at}u(t)$               | $\displaystyle \frac{1}{s+a}$                               | $\displaystyle \text{Re}(s)>-a$      |
| $\displaystyle e^{at}u(t)$                | $\displaystyle \frac{1}{s-a}$                               | $\displaystyle \text{Re}(s)>a$       |
| $\displaystyle t^{n}u(t)$                 | $\displaystyle \frac{n!}{s^{n+1}}$                          | $\displaystyle \text{Re}(s)>0$       |
| $\displaystyle \cos({\omega}_{0}t)u(t)$   | $\displaystyle \frac{s}{s^{2}+{\omega}_{0}^{2}}$            | $\displaystyle \text{Re}(s)>0$       |
| $\displaystyle \sin({\omega}_{0}t)u(t)$   | $\displaystyle \frac{{\omega}_{0}}{s^{2}+{\omega}_{0}^{2}}$ | $\displaystyle \text{Re}(s)>0$       |
| $\displaystyle e^{-at}\cos(\omega t)u(t)$ | $\displaystyle \frac{s+a}{(s+a)^{2}+\omega ^{2}}$           | $\displaystyle \text{Re}(s)>-a$      |
| $\displaystyle e^{-at}\sin(\omega t)u(t)$ | $\displaystyle \frac{\omega}{(s+a)^{2}+\omega ^{2}}$        | $\displaystyle \text{Re}(s)>-a$      |
| $\displaystyle \delta(t-T)$               | $\displaystyle e^{-sT}$                                     | All $\displaystyle s \in \mathbb{C}$ |
| $\displaystyle u(-t)$                     | $\displaystyle -\frac{1}{s}$                                | $\displaystyle \text{Re}(s)<0$       |

All of these have a $\displaystyle u(t)$ factor because we assume casual signals