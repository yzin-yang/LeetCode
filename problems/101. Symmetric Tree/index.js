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
    return deepSearch(root, root);
};

function deepSearch(leftNode, rightNode) {
    if (leftNode === null && rightNode === null)
        return true;
    if (leftNode === null || rightNode === null)
        return false;
    return leftNode.val === rightNode.val
        && deepSearch(leftNode.left, rightNode.right)
        && deepSearch(leftNode.right, rightNode.left);
}