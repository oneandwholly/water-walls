# water-walls

```javascript
// Strategy
// Identify the walls the contain the puddles by iterating and comparing
// the height of each walls, and calculate the volume of the puddles
// between those identified walls.

const walls = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
cosnt expectedOutput = [3, 8, 11];

// Transformation
/*
              Input Walls                Indices of walls conataining puddles 
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, ]]
     ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, ]]
        ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, ]]
           ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, ]]
              ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, ]]
                 ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, ]]
                    ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, ]]
                       ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, 7], [7, ]]
                          ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, 7], [7, ]]
                             ^
    [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]               [[0, 2], [2, 7], [7, 9]]
                                ^

    calculate volume between indices of the walls 
    and +1 to indices for the right format.

    [[0, 2], [2, 7], [7, 9]]  --(mapping)-->  [[1, 3, 2], [3, 8, 11], [8, 10, 1]]

    find the largest volume and return the array containing it.
*/

```