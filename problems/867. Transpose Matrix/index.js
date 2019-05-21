/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let matrix = [];
    let len = A[0].length;
    for (let i = 0; i < len; i++) {
        matrix[i] = [];
        for (let line of A) {
            matrix[i].push(line[i]);
        }
    }
    console.log(matrix);
    return matrix;
};

transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
transpose([[1, 2, 3], [4, 5, 6]]);