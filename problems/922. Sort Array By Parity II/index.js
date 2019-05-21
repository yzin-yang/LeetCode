/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let even = 0, odd = 1;
    let B = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            B[even] = A[i];
            even += 2;
        } else {
            B[odd] = A[i];
            odd += 2;
        }
    }
    return B;
};

sortArrayByParityII([4, 2, 5, 7]);