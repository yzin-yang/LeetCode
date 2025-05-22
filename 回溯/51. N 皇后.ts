const check = (arr: string[], n: number, row: number, col: number) => {
    for (let i = 0; i < n; i++) {
        if (i === row) {
            continue;
        }
        if (arr[i][col] === 'Q') {
            return false;
        }
        if (i !== col && arr[row][i] === 'Q') {
            return false;
        }
        let curCol = i + col - row;
        if (0 <= curCol && curCol < n && arr[i][curCol] === 'Q') {
            return false;
        }
        curCol = row + col - i;
        if (0 <= curCol && curCol < n && arr[i][curCol] === 'Q') {
            return false;
        }
    }
    return true;
}

function solveNQueens(n: number): string[][] {
    const res: string[][] = [];
    const arr: string[] = new Array(n).fill('.');
    const colSet: Set<number> = new Set();
    const diagonal1: Set<number> = new Set();
    const diagonal2: Set<number> = new Set();
    const queens: number[] = new Array(n).fill(-1);
    const generateBoard = (): string[] => {
        const board: string[] = [];
        for (let i = 0; i < n; i++) {
            arr[queens[i]] = 'Q';
            board.push(arr.join(''));
            arr[queens[i]] = '.';
        }
        return board;
    }
    const helper = (row: number) => {
        if (row === n) {
            res.push(generateBoard())
            return;
        }
        for (let i = 0; i < n; i++) {
            if (colSet.has(i)) {
                continue;
            }
            if (diagonal1.has(i - row)) {
                continue;
            }
            if (diagonal2.has(i + row)) {
                continue;
            }
            // if (check(arr, n, row, i)) {
            // const splitArr = arr[row].split('');
            // splitArr[i] = 'Q';
            // arr[row] = splitArr.join('');
            colSet.add(i);
            diagonal1.add(i - row);
            diagonal2.add(i + row);
            queens[row] = i;
            helper(row + 1);
            // splitArr[i] = '.';
            // arr[row] = splitArr.join('');
            colSet.delete(i);
            diagonal1.delete(i - row);
            diagonal2.delete(i + row);
            queens[row] = -1
            // }
        }
    }
    helper(0);
    return res;
};

console.log(solveNQueens(4));
console.log(solveNQueens(1));