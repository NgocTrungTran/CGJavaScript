// var matrix = new Array(10).fill(new Array(10));
// for (var row = 0; row < matrix.length; row++) {
//     for (var column = 0; column < matrix[row].length; column++) {
//         matrix[row][column] = Math.floor((Math.random() * 100) + 1)
//     }
// }
// console.log(matrix);


// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]];
// for (var row = 0; row < matrix.length; row++) {
//     for (var column = 0; column < matrix[row].length; column++) {
//         console.log(matrix[row][column] + "");
//     }
// }


// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]];
// var total = 0;
// for (var row = 0; row < matrix.length; row++) {
//     for (var column = 0; column < matrix[row].length; column++) {
//         total += matrix[row][column];
//         console.log(total);
//     }
// }


// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]];
// for (var column = 0; column < matrix[0].length; column++) {
//     var total = 0;
//     for (var row = 0; row < matrix.length; row++) {
//         total += matrix[row][column];
//         console.log("Sum for column " + column + " is " + total);
//     }
// }


// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]];
// var maxRow = 0;
// var indexOfMaxRow = 0;

// for (var column = 0; column < matrix[0].length; column++) {
//     maxRow += matrix[0][column];
// }
// for (var row = 1; row < matrix.length; row++) {
//     var totalOfThisRow = 0;
//     for (var column = 0; column < matrix[row].length; column++) {
//         totalOfThisRow += matrix[row][column];
//         if (totalOfThisRow > maxRow) {
//             maxRow = totalOfThisRow;
//             indexOfMaxRow = row;
//         }
//     }
// }
// console.log("Row " + indexOfMaxRow + " has the maximum sum of " + maxRow);


// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8],[9, 10, 11, 12], [13, 14, 15, 16]];
// for (var i = 0; i < matrix.length; i++) {
//     for (var j = 0; j < matrix[i].length; j++) {
//         var i1 = parseInt(Math.random() * matrix.length);
//         var j1 = parseInt(Math.random() * matrix[i].length);
//         var temp = matrix[i][j];
//         matrix[i][j] = matrix[i1][j1];
//         matrix[i1][j1] = temp;
//     }
// }console.log(matrix);

