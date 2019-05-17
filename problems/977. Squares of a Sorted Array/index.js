/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let lo = 0, hi = A.length, mid;
    while (lo < hi) {//二分查找找到最接近0的非负数
        mid = lo + Math.floor((hi - lo) / 2);
        if (A[mid] < 0)
            lo = mid + 1;
        else
            hi = mid;
    }
    let i = lo - 1, j = lo;
    let arr = [];
    while (0 <= i && j < A.length) {//合并排序
        if (A[i] * A[i] < A[j] * A[j]) {
            arr.push(A[i] * A[i]);
            i--;
        } else {
            arr.push(A[j] * A[j]);
            j++;
        }
    }
    while (0 <= i) {
        arr.push(A[i] * A[i]);
        i--;
    }
    while (j < A.length) {
        arr.push(A[j] * A[j]);
        j++;
    }
    return arr;
};
sortedSquares([-2, -1, 3]);
sortedSquares([-4, -1, 0, 3, 10]);
sortedSquares([0, 1, 9, 16, 100]);
sortedSquares([-7, -3, 2, 3, 11]);
sortedSquares([4, 9, 9, 49, 121]);