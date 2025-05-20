function letterCombinations(digits: string): string[] {
    if (!digits.length) {
        return [];
    }
    interface NumMap {
        [key: string]: string[],
    }
    const map: NumMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    const res: string[] = [];
    const helper = (curText: string, startIndex: number) => {
        if (curText.length === digits.length) {
            res.push(curText);
            return;
        }
        const charArr: string[] = map[digits[startIndex]];
        for (let j = 0; j < charArr.length; j++) {
            helper(curText + charArr[j], startIndex + 1);
        }
    }
    helper('', 0);
    return res;
};

console.log(letterCombinations('234'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));