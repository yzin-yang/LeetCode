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

function sumOfLeftLeaves(root: TreeNode | null): number {
    const recur = (node: TreeNode | null, isLeft: boolean): number => {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return isLeft ? node.val : 0;
        }
        const left = recur(node.left, true);
        const right = recur(node.right, false);
        return left + right;
    }
    return recur(root, false);
};