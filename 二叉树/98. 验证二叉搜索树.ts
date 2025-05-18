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

function isValidBST(root: TreeNode | null): boolean {
    const recur = (node: TreeNode | null, lower: number, upper: number):boolean => {
        if (node === null) {
            return true;
        }
        if (node.val <= lower || node.val >= upper) {
            return false;
        }

        return recur(node.left, lower, node.val) && recur(node.right, node.val, upper); 
    }
    return recur(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};