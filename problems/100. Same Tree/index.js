/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//深度优先遍历
var isSameTree = function (p, q) {
    let tree1 = preOrder(p, "");
    let tree2 = preOrder(q, "");
    return tree1 === tree2;

    function preOrder(root, str) {
        str += root !== null ? root.val : null;
        if (root !== null) {
            str += preOrder(root.left, "");
            str += preOrder(root.right, "");
        }
        return str;
    }
};

var isSameTree = function (p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//模板字符串
var isSameTree = function (p, q) {
    var serialize = function (root) {
        if (!root)
            return "#";
        return `${root.val}${serialize(root.left)}${serialize(root.right)}`;
    };
    return serialize(p) === serialize(q);
};

const superme = (x) => (console.log(x), 2);