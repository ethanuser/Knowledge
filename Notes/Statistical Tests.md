#Math 
[How to choose a statistical test](https://www.statsols.com/articles/types-of-statistical-tests)
# Broader Categories
* [[Student t-test]]

A way to determine if groups are different from each other. More precisely, it's a way to test whether measurements between two or more groups indicate that their population means are significantly different

An n-way or n-factor statistical test compares n [[Independent Variable|independent variables]]
# Compare Means
Assume variances between groups are equal
## 2 Groups (e.g. Control vs. Drug)
### Same Subjects Measured Twice (Before and After)
#### Pairwise Differences Normal
(i.e. )
* [[Paired t-test]] (parametric)
#### Pairwise Differences Non-Normal
* [[Wilcoxon Matched Pairs Signed Rank Test]] (non-parametric)
### Each Subject Measured Once
#### Each Group Normal and Variances Equal
* [[Unpaired t-test]]
#### Each Group Normal But Variances Not Equal
* [[Welch's t-test]]
* [[Unpaired t-test with Welch's Correction]] (Parametric Test)
#### One or Both Groups Non-Normal
* [[Mann-Whitney Test]] (Nonparametric Test)
## >2 Groups (e.g. Drug A vs. Drug B vs Drug C)
### One Factor (Drug)
#### Each Subject Measured More Than Once
##### Pass Normality
###### Assume [[Sphericity]]
* [[ANOVA]] (Missing Data)
###### Don't Assume Sphericity
* [[ANOVA]] with [[Greenhouse–Geisser Correction]]
##### Reject Normality
* [[Friedman Test]] (Non-parametric Test)
#### Each Subject Measured Once
##### Pass Normality and Variances Equal
* [[ANOVA]]
##### Pass Normality But Variances Not Equal
* [[Welch's ANOVA]]
##### Pass Normality and Variances Equal
* [[Kruskal-Wallis Test]]
### Two Factors (Drug, Diet)
* Same as One Factor except if there's no normality (so you can't use a parametric method), then you have to consider a transformation. I.e. there's no non-parametric methods
### Three Factors (Drug, Diet, Time)
* Same as Two Factors
### Two Or More Groups
* [[ANOVA]]
## Discrete Dependent Variable
* [[Chi-Squared Test]]
# Relationship between X and Y
## Correlation (Strength of Relationship)
## Linear Regression (Slope)
## Multiple Regression
## Nonlinear Regression
# Categorical Data
# Survival Analysis
# 