function selectionSort(nums: number[]) {
    let minIndex = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        const temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
}

console.log(selectionSort([5, 2, 4, 6, 1, 3]));
