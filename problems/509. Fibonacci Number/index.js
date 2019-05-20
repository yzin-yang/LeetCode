/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {//尾递归
    function fun(count, pre, cur) {
        if (count <= 0)
            return pre;
        return fun(count - 1, cur, pre + cur);
    }

    return fun(N, 0, 1);
};

var fib = function (N) {//解构赋值，迭代
    let [a, b] = [0, 1];
    for (let i = 0; i < N; i++) {
        [a, b] = [b, b + a];
    }
    return a
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));