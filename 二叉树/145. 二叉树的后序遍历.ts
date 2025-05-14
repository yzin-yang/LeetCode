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

function postorderTraversal(root: TreeNode | null): number[] {
    const recur = (node: TreeNode|null, ret: number[]) => {
        if (node === null) {
            return ret;
        }
        recur(node.left, ret);
        recur(node.right, ret);
        ret.push(node.val);
        return ret;
    }
    return recur(root, []);
};