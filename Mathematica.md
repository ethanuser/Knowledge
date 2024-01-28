#Computers
A useful mathematics software that can do symbolic manipulation very well. Is a bit less intuitive than Desmos when it comes to plotting, but at least everything is integrated. Also has much less users than say Python (only about 14000 paid subscriptions vs. 8.2 million Python developers)
## How to Get for Free
* [Youtube Video Tutorial](https://www.youtube.com/watch?v=o7iogXsdtCQ)
* [Key Generator](https://ibug.io/blog/2019/05/mathematica-keygen/)
## How to Learn
1. Skim through [documentation](https://reference.wolfram.com/language/) to check if it fits your use case
2. Watch and follow along with interactive intro [Youtube video](https://www.youtube.com/watch?v=O6h9_Xx-nLA&list=PLxn-kpJHbPx1TOYrbMrvqOztwg0Ncv07e&index=1)
3. Check out their [free courses](https://www.wolfram.com/wolfram-u/courses/catalog/) and learn as you go
4. Have [[ChatGPT]] write code for you
## Test Integration with Obsidian
```Mathematica
Print["hi"]
```

```mathematica
reverselights = 
  Join[{{"Ambient", Black}}, 
   Table[{"Directional", Hue[0, 0, 1], 
     ImageScaled[{Sin[x], Cos[x], -.5}]}, {x, 0, 2 Pi - 2 Pi/8, 
     2 Pi/8}]];
AnatomyPlot3D[{AnatomyStyling[<|_ -> 
     Directive[Specularity[White, 50], Hue[.58, 0, 0.5, .1], 
      Lighting -> reverselights], 
    Entity["AnatomicalStructure", "OccipitalLobe"] -> Blue, 
    Entity["AnatomicalStructure", "ParietalLobe"] -> Yellow, 
    Entity["AnatomicalStructure", "TemporalLobe"] -> Green, 
    Entity["AnatomicalStructure", "FrontalLobe"] -> Red|>], 
  Entity["AnatomicalStructure", "Head"]}, 
 Background -> Hue[.58, 0, 1], SphericalRegion -> True]
```
