/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * 双指针
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        let left = numbers[i];
        let right = numbers[j];
        if (left + right === target) {
            return [i + 1, j + 1];
        } else if (left + right > target) {
            j--;
        } else {
            i++;
        }
    }
    return [];
};

console.log(twoSum([2, 3, 7, 9], 10));