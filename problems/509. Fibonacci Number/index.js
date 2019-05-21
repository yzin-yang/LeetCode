/**
 * @param {number} N
 * @return {number}
 */
//尾递归
var fib = function (N) {
    function fun(count, pre, cur) {
        if (count <= 0)
            return pre;
        return fun(count - 1, cur, pre + cur);
    }

    return fun(N, 0, 1);
};

//解构赋值，迭代
var fib = function (N) {
    let [a, b] = [0, 1];
    for (let i = 0; i < N; i++) {
        [a, b] = [b, b + a];
    }
    return a
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));