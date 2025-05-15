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

function isBalanced(root: TreeNode | null): boolean {
    let flag = true;
    const recur = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        const left = recur(node.left);
        const right = recur(node.right);
        if (Math.abs(left - right) > 1) {
            flag = false;
        }
        return 1 + Math.max(left, right);
    }
    recur(root);
    return flag;
};