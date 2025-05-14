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

function inorderTraversal(root: TreeNode | null): number[] {
    const recur = (node: TreeNode|null, ret: number[]) => {
        if (node === null) {
            return ret;
        }
        recur(node.left, ret);
        ret.push(node.val);
        recur(node.right, ret);
        return ret;
    }

    return recur(root, []);
};