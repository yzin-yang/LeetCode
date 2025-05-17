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

// 迭代
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let node = root;
    while (node) {
        if (node.val === val) {
            return node;
        }
        if (node.val > val) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return node;
};
// 递归
function searchBST1(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST1(root.left, val);
    } else {
        return searchBST1(root.right, val);
    }
};