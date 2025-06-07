// 分组 + 哈希表
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map1:Map<number, number> = new Map();
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            const sum = num1 + num2;
            map1.set(sum, (map1.get(sum) ?? 0) + 1);
        }
    }
    let count = 0;
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            const sum = num3 + num4;
            if (map1.has(-sum)) {
                count += map1.get(-sum)!;
            }
        }
    }
    return count;
};

// 暴力剪枝
function fourSumCount1(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    nums3.sort((a, b) => a - b);
    nums4.sort((a, b) => a - b);
    let count = 0;
    let count1 = 1;
    let count2 = 1;
    let count3 = 1;
    let count4 = 1;
    const len = nums1.length;
    for (let i = 0; i < len; i++) {
        if (i < len && nums1[i] === nums1[i + 1]) {
            count1++;
            continue;
        }
        for (let j = 0; j < len; j++) {
            if (j < len && nums2[j] === nums2[j + 1]) {
                count2++;
                continue;
            }
            for (let k = 0; k < nums3.length; k++) {
                if (k < len && nums3[k] === nums3[k + 1]) {
                    count3++;
                    continue;
                }
                for (let l = 0; l < nums4.length; l++) {
                    if (l < len && nums4[l] === nums4[l + 1]) {
                        count4++;
                        continue;
                    }
                    if (nums1[i] + nums2[j] + nums3[k] + nums4[l] === 0) {
                        count += count1 * count2 * count3 * count4;
                    }
                    count4 = 1;
                }
                count3 = 1;
            }
            count2 = 1;
        }
        count1 = 1;
    }
    return count;
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));
console.log(fourSumCount([0, 1, -1], [-1, 1, 0], [0, 0, 1], [-1, 1, 1]));