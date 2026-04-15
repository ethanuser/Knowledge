#Physics 
## $\ddot x + 2 \beta \dot x + \omega_0^2 x = \frac{F_0}{m}\cos \omega t$
* Driven oscillation differential equation
* $\beta$ is the damping/resistivity constant
* $\omega_0$ is the angular frequency
* $F$ is the force supplied by the driven oscillator
## $x = x_h + x_p$
## $x_p = D\cos(\omega t - \delta), ~ D = \frac{F_0}{m\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2}}, ~ \delta = \tan^{-1}\left(\frac{2 \beta \omega}{\omega_0^2 - \omega^2}\right)$
 $\omega_R = \sqrt{\omega_0^2 - 2\beta^2}$
			The resonance frequency of a driven oscillation is given by the oscillator’s natural frequency and its damping coefficient
			$\omega_R$ is specifically for the amplitude resonance
		- $\omega_E = \omega_0$
			$\omega_E$ is the kinetic energy resonance frequency, the frequency of the oscillator that minimizes energy loss due to the 
		- $Q = \frac{\omega_R}{2\beta} \cong \frac{\omega_0}{\Delta \omega}$
			$Q$ is the quality or Q factor of an oscillation
			$\Delta\omega$ is the width of the frequency such that the square of the amplitude has decreased by half. The approximation is valid for $\beta \ll \omega_0$
			![Screen Shot 2023-05-08 at 7.20.24 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0992879d-ae29-4579-a48e-9e0822f356cb/Screen_Shot_2023-05-08_at_7.20.24_PM.png)
			Tells how underdamped an oscillator is
			As $Q$ increases, the oscillator becomes more underdamped/less damped
		Resonance: $\omega_0 > \sqrt{2}\beta$
		No resonance: $\omega_0 < \sqrt{2}\beta$
		Overdamping: $\omega_0 < \beta$
		$$H(t_0) = \begin{cases}
		0, \quad t < t_0\\
		a, \quad t > t_0
		\end{cases}$$
		$$I(t_0, t_1) = H(t_0) - H(t_1) = \begin{cases}
		0, \quad t < t_0\\
		a, \quad t_0 < t < t_1\\
		0, \quad t > t_1
		\end{cases}$$
		For $x(t') = 0, \dot x(t') = 0$
		$$G(t, t') = \begin{cases}
		\frac{1}{m\omega_1}e^{-\beta(t - t')}\sin (\omega_1(t - t')) \quad t \ge t'\\
		0, \quad t < t'
		\end{cases}$$
		$x_p(t) = \int_{-\infty}^t F(t')G(t, t') dt'$