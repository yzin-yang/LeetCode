function mergeSort(nums: number[]): number[] {
    const len = nums.length;
    if (len < 2) {
        return nums;
    }
    const mid = Math.floor(len / 2);
    const leftNums = nums.slice(0, mid);
    const rightNums = nums.slice(mid);
    return merge(mergeSort(leftNums), mergeSort(rightNums));
}

function merge(nums1: number[], nums2: number[]): number[] {
    let i = 0;
    let j = 0;
    const res: number[] = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            res.push(nums1[i++]);
        } else {
            res.push(nums2[j++]);
        }
    }
    res.push(...nums1.slice(i), ...nums2.slice(j));
    return res;
}

console.log(mergeSort([34, 7, 23, 32, 5, 62]));