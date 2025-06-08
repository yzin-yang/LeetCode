// 二分查找
function search(nums: number[], left: number, right: number, target: number) {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;

}
function insertionSort(nums: number[]) {
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i];
        const index = search(nums, 0, i - 1, temp);
        for (let j = i - 1; index <= j; j--) {
            nums[j + 1] = nums[j];
        }
        nums[index] = temp;
    }

    return nums;
}

// 普通版本
function insertionSort1(nums: number[]) {
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i];
        let j = i - 1;
        for (; 0 <= j; j--) {
            if (temp >= nums[j]) {
                break;
            }
            nums[j + 1] = nums[j];
        }
        nums[j + 1] = temp;
    }

    return nums;
}

console.log(insertionSort([34, 7, 23, 32, 5, 62]));
