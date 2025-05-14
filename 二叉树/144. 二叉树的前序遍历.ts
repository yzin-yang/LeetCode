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

function preorderTraversal(root: TreeNode | null): number[] {
    const recur = (node: TreeNode|null, ret: number[]) => {
        if (node === null) {
            return ret;
        }
        ret.push(node.val);
        recur(node.left, ret);
        recur(node.right, ret);
        return ret;
    }
    return recur(root, []);
};