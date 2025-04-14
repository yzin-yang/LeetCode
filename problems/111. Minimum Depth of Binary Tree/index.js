/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//深度优先遍历，递归
var minDepth = function (root) {
    if (root === null)
        return 0;
    return deep(root, 0, Infinity) + 1
};

function deep(node, depth, min) {
    if (node === null) {
        return Infinity;
    }
    if (node.left === null && node.right === null) {
        if (min > depth)
            min = depth;
        return min
    }
    return Math.min(deep(node.left, depth + 1, min), deep(node.right, depth + 1, min));
}