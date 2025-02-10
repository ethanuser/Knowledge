#Computers
## Topics
* [[Python Packages]]
```Python
R = sc.physical_constants['molar gas constant']
Rnew = Q(R[0], R[1])
print(Rnew)
print(Rnew.to('L atm mol^-1 K^-1'))
print(Rnew.to('m^3 atm mol^-1 K^-1'))
print(Rnew.to('cal mol^-1 K^-1'))
print(Rnew.to('mmHg L mol^-1 K^-1'))
print(Rnew.to('ft lbf mol^-1 K^-1'))
```