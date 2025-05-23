function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let count = 0;
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] > s[j]) {
            j++;
        } else {
            count++;
            i++;
            j++;
        }
    }
    return count;
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));