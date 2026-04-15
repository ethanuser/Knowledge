#Physics 
The [[Fourier transform]] of real space
## Topics
* [[Nyquist Frequency]]

## Code
Shows both real space and reciprocal space functions

```mathematica
f[x_]:=Piecewise[{{0,x<-1},{-Abs[x]+1,-1<=x<=1},{0,x>1}}]
Plot[f[x],{x,-5,5},PlotRange->Full]
FourierTransform[f[x],x,k]
```

```mathematica
Plot[{(Sqrt[2/\[Pi]] Sin[k])/k,(2-2 Cos[k])/(k^2 Sqrt[2 \[Pi]])},{k,-30,30},PlotRange->Full]
```
