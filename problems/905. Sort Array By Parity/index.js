/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {//快排双指针
    let left = 0, right = A.length - 1;
    let tmp;
    while (left < right) {
        while (left < right && A[right] % 2 === 1)
            right--;
        while (left < right && A[left] % 2 === 0)
            left++;
        if (A[right] % 2 === 0) {
            tmp = A[right];
            A[right] = A[left];
            A[left] = tmp;
        }
    }
    return A;
};

var sortArrayByParity = function(A) {//js数组方法
    var result = [];
    for (var i = 0, len = A.length; i < len; i++) {
        if (A[i] % 2 === 0) {
            result.unshift(A[i])
        } else {
            result.push(A[i])
        }
    }
    return result
};


sortArrayByParity([3, 1, 2, 4]);