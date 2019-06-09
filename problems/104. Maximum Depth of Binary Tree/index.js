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
//递归
var maxDepth = function (root) {
    if (root === null)
        return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//迭代
var maxDepth = function (root) {
    if (root === null)
        return 0;
    let stack = [];
    let depth = 0;
    stack.push({node: root, depth: 1});
    while (stack.length) {
        let current = stack.shift();
        root = current.node;
        let current_depth = current.depth;
        if (root !== null) {
            depth = Math.max(depth, current_depth);
            stack.push({node: root.left, depth: current_depth + 1});
            stack.push({node: root.right, depth: current_depth + 1});
        }
    }
    return depth;
};

