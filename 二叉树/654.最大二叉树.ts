class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    const recur = (leftIdx: number, rightIdx: number): TreeNode | null => {
        if (leftIdx > rightIdx) {
            return null;
        }
        let index = leftIdx;
        let max = nums[index];
        for (let i = leftIdx + 1; i <= rightIdx; i++) {
            if (max < nums[i]) {
                max = nums[i];
                index = i;
            }
        }
        const root = new TreeNode(max);
        root.left = recur(leftIdx, index - 1);
        root.right = recur(index + 1, rightIdx);
        return root;
    }
    return recur(0, nums.length - 1);
};