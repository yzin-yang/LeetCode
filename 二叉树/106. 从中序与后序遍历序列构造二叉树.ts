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

// 指针
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const recur = (inStart: number, inEnd: number, postStart: number, postEnd: number): TreeNode | null => {
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }
        const rootVal = postorder[postEnd];
        const root = new TreeNode(rootVal);
        let index;
        for (let i = inStart; i <= inEnd; i++) {
            if (inorder[i] === rootVal) {
                index = i;
                break;
            }
        }
        const leftOffset = index! - 1 - inStart;
        const rightOffset = inEnd - index! - 1;
        root.left = recur(inStart, inStart + leftOffset, postStart, postStart + leftOffset);
        const rightPostStart = postStart + leftOffset + 1
        root.right = recur(index! + 1, inEnd, rightPostStart, rightPostStart + rightOffset);
        return root;
    }
    const endIndex = inorder.length - 1;
    return recur(0, endIndex, 0, endIndex);
};

// 构造数组
function buildTree1(inorder: number[], postorder: number[]): TreeNode | null {
    if (!postorder.length) {
        return null;
    }
    const rootVal = postorder.at(-1);
    const root = new TreeNode(rootVal);
    const index = inorder.findIndex((val) => val === rootVal);
    const leftInorder = inorder.slice(0, index);
    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightInorder = inorder.slice(index + 1);
    const rightPostorder = postorder.slice(leftInorder.length, leftInorder.length + rightInorder.length);
    root.left = buildTree1(leftInorder, leftPostorder);
    root.right = buildTree1(rightInorder, rightPostorder);
    return root;
};