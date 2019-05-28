/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/**
 * 双数组
 */
var getRow = function (rowIndex) {
    let even = [], odd = [];
    even[0] = 1;
    if (rowIndex === 0)
        return even;
    for (let i = 1; i <= rowIndex; i++) {
        if (i & 1) {
            for (let j = 0; j <= i; j++) {
                let left = even[j - 1] || 0;
                let right = even[j] || 0;
                odd[j] = left + right;
            }
        } else {
            for (let j = 0; j <= i; j++) {
                let left = odd[j - 1] || 0;
                let right = odd[j] || 0;
                even[j] = left + right;
            }
        }
    }
    if (rowIndex & 1)
        return odd;
    else
        return even;
};

/**
 * 单数组
 */
var getRow = function (rowIndex) {
    let nums = [1];
    for (let i = 1; i <= rowIndex; i++) {
        nums[i] = 1;
        for (let j = i - 1; 0 < j; j--) {
            nums[j] = nums[j - 1] + nums[j];
        }
    }
    return nums;
};
getRow(0);
getRow(1);
getRow(2);
getRow(3);
getRow(4);