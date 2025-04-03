#Computers 
A method to tune the parameters a neural network. Often done by [[gradient descent]], where the change in the [[loss function]] is calculated [[chain rule]] using [[computation graphs]]
## $\displaystyle \frac{\partial J }{\partial \Theta^{(L)}}=(a^{(L)}-y)(a^{(L-1)})^{T}$
* The derivative of the [[loss function]] with respect to the last layer's parameters