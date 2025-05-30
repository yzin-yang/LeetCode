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

function isSymmetric(root: TreeNode | null): boolean {
    const recur = (left: TreeNode | null, right: TreeNode | null): boolean => {
        if (left === null && right === null) {
            return true;
        }
        if (left === null || right === null) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }

        const outside = recur(left.left, right.right);
        const inside = recur(left.right, right.left);
        return outside && inside;
    }
    return recur(root, root);
};