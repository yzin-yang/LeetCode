class _Node {
    val: number
    children: _Node[]

    constructor(v: number) {
        this.val = v;
        this.children = [];
    }
}

function levelOrder(root: _Node | null): number[][] {
    const ret: number[][] = [];
    const queue: (_Node | null)[] = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        const len = queue.length;
        const level: number[] = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            if (node) {
                level.push(node.val);
                queue.push(...node.children);
            }         
        }
        ret.push(level);
    }
    return ret;
};