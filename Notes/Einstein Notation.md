#Math #Physics
## $\displaystyle a_{i}b_{i}=\sum_{i}a_{i}b_{i}$
* Sums are assumed when indices are shared
* Results in much shorter equations when combined with [[Levi-Civita Symbol]]

Rules:
				- (1) Einstein Summation Convention
					$a_ib_i=\displaystyle\sum_iab$
					When there are two common indices in an expression, they may be assumed to be summed over that index
					E.g.:
					$\Gamma_{ijk}x_ab_c=\displaystyle\sum_{a}\displaystyle\sum_b\Gamma_{ijk}x_ab_c$
				- (2) Dummy Indices
					For the expressions $a_ib_i + c_jd_j + e_nf_m$, $i$ and $j$ are repeated twice in a single term, so they are called dummy indices.
					Dummy indicies can be interchanged for other variables, so the above expression could also be represented as $a_kb_k + c_ld_l + e_nf_m$ provided $i$ and $k$ have the same range and so too do $j$ and $l$
				- (3) Free Indices
					An index that occurs once in a term
					Free indices can’t be interchanged like dummy indices can be
				- (4) Repetition of Indices
					Indices cannot be repeated more than twice in a term
					$a_ib_{ij}$ is ok
					$a_ib_{ii}$ is not ok
					$a^{ij}_i$ would indicate one pair of dummy variables $i$ and one free variable $j$
				- (5) Equations
					Free indices in equations must match
					E.g.: $x_i = a_{ij}b_j$
					Here, $i$ is the only free variable here, and it matches on both sides
					Non e.g.: $x_i = a_{ij}$
					Here, $i$ and $j$ are free variables, but $j$ doesn’t match both sides