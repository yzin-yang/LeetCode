/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//递归
var isSymmetric = function (root) {
    if (root === null)
        return true;
    if (root.left === null && root.right === null)
        return true;
    if (root.left === null || root.right === null)
        return false;
    return deepSearch(root.left, root.right);
};

function deepSearch(leftNode, rightNode) {
    if (leftNode === null && rightNode === null)
        return true;
    if (leftNode === null || rightNode === null)
        return false;
    if (leftNode.val !== rightNode.val)
        return false;
    return deepSearch(leftNode.left, rightNode.right) &&
        deepSearch(leftNode.right, rightNode.left);
}