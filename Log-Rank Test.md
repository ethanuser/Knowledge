#Math 
A statistical test used to determine if two conditions produce differing survival curves
It works by applying a [[Chi-Squared Test]] across each time point of the [[survival curve]]
## $\chi^2 = \frac{(\sum_{i=1}^{k} O_{1i} - \sum_{i=1}^{k} E_{1i})^2}{\sum_{i=1}^{k} V_{i}}$
* The Log-Rank statistic ($\chi^2$) follows a Chi-squared distribution with 1 degree of freedom (for two groups)
* $k$: The total number of unique time points where at least one event occurred
* $O_{1i}$: The observed number of events in Group 1 at time $t_i$
* $E_{1i}$: The expected number of events in Group 1 at time $t_i$ under the null hypothesis
* $V_{i}$: The variance of the differences at time $t_i$
## $E_{1i} = \frac{n_{1i}}{N_i} \times O_i$
* At each event time $t_i$, we calculate how many deaths we would expect in Group 1 if the risk were identical across both groups
* $n_{1i}$: Number of individuals at risk in Group 1 just before time $t_i$
* $N_i$: Total number of individuals at risk across both groups just before time $t_i$ ($n_{1i} + n_{2i}$)
* $O_i$: Total number of events (deaths) observed in both groups at time $t_i$
## $V_i = \frac{O_i (n_{1i}/N_i) (1 - n_{1i}/N_i) (N_i - O_i)}{N_i - 1}$
* Hypergeometric Variance
* Because the Log-Rank test is based on a hypergeometric distribution (sampling without replacement from the "at risk" pool), the variance is more complex than a standard Poisson variance
*  $O_i$: Total events at time $t_i$
* $n_{1i}$: Number at risk in Group 1
* $N_i$: Total number at risk (Group 1 + Group 2)
* $(N_i - O_i) / (N_i - 1)$: The finite population correction factor, which distinguishes this from simple binomial variance