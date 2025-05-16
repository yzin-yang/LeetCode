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

function findBottomLeftValue(root: TreeNode | null): number {
    const queue: TreeNode[] = [root!];
    let target: number = 0;
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (i === 0) {
                target = node!.val;
            }
            if (node?.left) {
                queue.push(node.left);
            }
            if (node?.right) {
                queue.push(node.right);
            }
        }
    }
    return target;
};

// 递归
function findBottomLeftValue1(root: TreeNode | null): number {
    let maxHeight = 0;
    let target: number = 0;
    const recur = (node: TreeNode | null, height: number) => {
        if (node === null) {
            return;
        }
        if (height > maxHeight) {
            maxHeight = height;
            target = node.val;
        }
        recur(node.left, height + 1);
        recur(node.right, height + 1);
    }
    recur(root, 1);
    return target;
};