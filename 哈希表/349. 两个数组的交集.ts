function intersection(nums1: number[], nums2: number[]): number[] {
    [nums1, nums2] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
    const set1: Set<number> = new Set(nums1);
    const set2: Set<number> = new Set(nums2);
    const res: Set<number> = new Set();
    for (const num of set2) {
        if (set1.has(num)) {
            res.add(num);
        }
    }
    return [...res];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));