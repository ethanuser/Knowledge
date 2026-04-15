---
aliases:
  - Breadth-first Search
---
#Math 
Search algorithm along a graph. Can tell you the shortest distance between two points if you start BFS at one of the points (the path distance is equal to the level number). This is probably the most efficient way to go about [[learning]], where if the goal is to maximize morale and minimize time spent, this beats [[DFS]]
## $\displaystyle O(E)$
* For a graph of $\displaystyle E$ edges
* Is $\displaystyle O(E)$ because each edge has to be checked twice
### Algorithm
* For each neighbor, look 