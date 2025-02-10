#Computers 
A way of encoding categorical data into numbers by assigning 1 as a value to whether they have feature and 0 if not. The benefits of this encoding method is that it prevents giving more weight to certain data if we were to just encode all the variables numerically as one feature (e.g. assigning 0, 1, 2, or 3 to asian, white, black, pacific islander)
## Example
* For race, we may split up the possibilities as multiple boolean variables for each race like so:
	* 1 if asian, 0 otherwise
	* 1 if white, 0 otherwise
	* 1 if black, 0 otherwise
	* 1 if pacific islander, 0 otherwise