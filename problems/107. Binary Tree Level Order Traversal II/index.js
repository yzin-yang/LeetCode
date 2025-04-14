/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//深度优先遍历，递归
var levelOrderBottom = function (root) {
    let arr = [];
    levelOrder(root, 0, arr);
    return arr.reverse();
};

function levelOrder(node, index, arr) {
    if (node === null) {
        return;
    }
    if (arr[index] === undefined)
        arr[index] = [];
    arr[index++].push(node.val);
    levelOrder(node.left, index, arr);
    levelOrder(node.right, index, arr);
}