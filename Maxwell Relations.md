---
alias:
---
#Physics 
Relates second partial derivatives of thermodynamic energies with each other
## Example
* $\displaystyle \mathrm{d}U=\tau \mathrm{d}\sigma-P\mathrm{d}V$
	* Start with the differential of a thermodynamic energy
* $\displaystyle \frac{ \partial U }{ \partial \sigma } =\tau,\frac{ \partial U }{ \partial V } =P$
	* Take partial derivatives
* $\displaystyle \frac{ \partial^2 U}{ \partial V\partial \sigma}=\frac{ \partial^2 U}{ \partial \sigma\partial V}=\left( \frac{ \partial \tau }{ \partial V } \right)_{\sigma}=\left( \frac{ \partial P }{ \partial \sigma } \right)_{V}$
	* Equate the second partial derivatives

| Thermodynamic Energy | Differential Expression                                         | Maxwell Relation                                                                                                                        |
| -------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| $\displaystyle U$    | $\displaystyle \mathrm{d}U=\tau \mathrm{d}\sigma-P\mathrm{d}V$  | $\displaystyle \left( \frac{ \partial \tau }{ \partial V } \right)_{\sigma}=-\left( \frac{ \partial P }{ \partial \sigma } \right)_{V}$ |
| $\displaystyle H$    | $\displaystyle \mathrm{d}H=\tau \mathrm{d}\sigma+V\mathrm{d}P$  | $\displaystyle \left( \frac{ \partial \tau }{ \partial P } \right)_{\sigma}=\left( \frac{ \partial V }{ \partial \sigma } \right)_{P}$  |
| $\displaystyle F$    | $\displaystyle \mathrm{d}F=-\sigma \mathrm{d}\tau-P\mathrm{d}V$ | $\displaystyle \left( \frac{ \partial \sigma }{ \partial V } \right)_{\tau}=\left( \frac{ \partial P }{ \partial \tau } \right)_{V}$    |
| $\displaystyle G$    | $\displaystyle \mathrm{d}G=-\sigma \mathrm{d}\tau+V\mathrm{d}P$ | $\displaystyle -\left( \frac{ \partial \sigma }{ \partial P } \right)_{\tau}=\left( \frac{ \partial V }{ \partial \tau } \right)_{P}$                                                                                                                                        |
