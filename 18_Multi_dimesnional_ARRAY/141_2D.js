let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0]); // 10
console.log(grid[1][2]); // 60


grid[2][1] = 85; // Update the value at row 2, column 1
console.log(grid[2][1]); // 85

console.log(grid.length); // 3 (number of rows)
console.log(grid[0].length); // 3 (number of columns in the first row)
console.log(grid[1].length); // 3 (number of columns in the second row)

