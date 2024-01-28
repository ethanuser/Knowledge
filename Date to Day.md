---
aliases:
  - Doomsday Rule
---
#Math 
# Resources
[Mike Boyd Video]()
[Numberphile Video](https://www.youtube.com/watch?v=z2x3SSBVGJU)
# Formula
## $\displaystyle d\equiv f\left( {\left\lfloor \frac{Y}{100}\right\rfloor} \right)+g(\text{mod}(Y,100))+D-D_{D}~\left(\text{mod }7\right)$
* $\displaystyle d$ is the day in number form
	* Sunday = 0 (Noneday)
	* Monday = 1 (Oneday
	* Tuesday = 2 (Twosday)
	* Wednesday = 3 (Triday)
	* Thursday = 4 (Foursday)
	* Friday = 5 (Fiveday)
	* Saturday = 6 (Sixday)
* $\displaystyle Y$ is the year
* $\displaystyle {\left\lfloor \frac{Y}{100}\right\rfloor}$ removes the last two digits of $\displaystyle Y$. For example, $\displaystyle {\left\lfloor \frac{1984}{100}\right\rfloor}$ is 19
* $$
f(x)=
\begin{cases}
0 & x\equiv 1~\left(\text{mod }4\right) \\
5 & x\equiv  2~\left(\text{mod }4\right) \\
3 & x\equiv 3~\left(\text{mod }4\right) \\
2 & x\equiv 0~\left(\text{mod }4\right)   
\end{cases}
$$
* $\displaystyle \text{mod}\left(Y,100\right)$ takes the last two digits of $\displaystyle Y$. For example, $\displaystyle \text{mod}\left(1984,100\right)=84$
* $\displaystyle g(x)\equiv {\left\lfloor \frac{x}{4}\right\rfloor}+x$
	* Can simplify using Conway's method of subdividing years by 12 (see additional notes)
* $\displaystyle D$ is the date number
* $\displaystyle D_{D}$ is the Doomsday number for the particular month
	* For months 1 (January), 2 (February), ..., and etc., $\displaystyle D_{D}$ is as follows:
	1. 3 (4 for leap years)
	2. 28 (29 for leap years)
	3. 14 ($\displaystyle \pi$-day)
	4. 4
	5. 9
	6. 6
	7. 11
	8. 8
	9. 5
	10. 10
	11. 7
	12. 12
* E.g: What day was August 15th, 1930?
*$$
\begin{align}
d &\equiv f\left( {\left\lfloor \frac{1930}{100}\right\rfloor} \right)+g(\text{mod}\left(Y,100\right))+\cancelto{ \cancelto{ 0 }{ 7 } }{ 15-8 }~\left(\text{mod }7\right) \\
&= \cancelto{ \cancelto{ 5 }{ 12 } }{ 3+9 }+0 \\
&= 5\rightarrow \text{Friday}
\end{align}
$$

# Tools
*  [Spreadsheet Date to Day Tester](https://docs.google.com/spreadsheets/d/1El__FaIjieYvwjTUXSKQPVoIw-WJTw2deW6y2Y2R8X0/edit#gid=0)
* [Desmos Helper](https://www.desmos.com/calculator/869fyzdjwq)
# Additional Notes
## Dooms Days
These are dates that all share the same day throughout the year
* 1/3 (1/4 leap year)
* 2/7 (2/28 leap year)
* 3/14
* 4/4
* 5/9
* 6/6
* 7/11
* 8/8
* 9/5
* 10/10
* 11/7
* 12/12
## Dooms Days for Years
#### Centuries
Centuries repeat in the following cycle
* 1700 0
* 1800 5
* 1900 3
* 2000 2
#### Common Years
* 2001 3
* 2002 4
* 2003 5
* 2004 0
* 2005 1
* 2006 2
* 2007 3
* 2008 5
* 2009 6
* 2010 0
* 2011 1
* 2012 3
* 2023 2
#### Conway's Method for Years
* 0 0
* 12 1
* 24 2
* 36 3
* 48 4
* 60 5
* 72 6
* 84 7
* 96 8