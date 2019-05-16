/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let B=[];
    for (let i = 0; i < A.length; i++) {
        B[i] = A[i].reverse().map((item) => (item ^ 1));
    }
    return B;
};