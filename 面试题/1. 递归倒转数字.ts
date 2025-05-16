// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
// 公司：bilibili
function reverse(num: number): string {
    const text = String(num);
    if (text.length <= 1) {
        return text;
    }
    let res:string = text[0];
    return reverse(+text.substring(1)) + res;
}

console.log(reverse(1234));