#Computers 
Models the probability of observing data $\displaystyle x$ and that the class of our target is $\displaystyle c$. Generative model that aims to maximize the joint likelihood $\displaystyle \sum_{n}\log p(x_{n},y_{n})$.
## $\displaystyle P(X=x,Y=c)=\pi_{c}\prod_{k}\theta^{z_{k}}_{ck},X \in \mathbb{R}^{D},Y\in [C]$
* Joint probability of getting your data
## $\displaystyle (\pi_{c}^{*},\theta_{ck}^{*})=\text{argmax} \sum_{n}\log \pi_{y_{n}}+\sum_{n,k}z_{nk}\log \theta_{y_{n}k}$
## $\displaystyle \pi_{C}^{*}=\frac{\text{\# of data points labeled C}}{N}$
## $\displaystyle \theta_{ck}^{*}= \frac{\text{\# of times word k shows up in data points labeled c}}{\text{\# words in data points labeled c}}$
