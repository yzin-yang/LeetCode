const partition = (nums:number[], low: number, high: number) => {
    const pivot = nums[low];
    while (low < high) {
        while (low < high && nums[high] >= pivot) {
            high--;
        }
        nums[low] = nums[high];
        while (low < high && nums[low] <= pivot) {
            low++;
        }
        nums[high] = nums[low];
    }
    nums[low] = pivot;
    return low;
}
function quickSort(nums: number[]) {
    if (nums.length < 2) {
        return nums;
    }

    const sort = (low: number, high: number) => {
        if (low < high) {
            const pivotIndex = partition(nums, low, high);
            sort(low, pivotIndex - 1);
            sort(pivotIndex + 1, high);
        }
    }
    sort(0, nums.length - 1);
    return nums;
}

console.log(quickSort([34, 7, 23, 32, 5, 62]));