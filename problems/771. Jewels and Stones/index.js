/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let hash = new Set();

    for (let i = 0; i < J.length; i++) {
        hash.add(J.charAt(i));
    }
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        if (hash.has((S.charAt(i))))
            count++;
    }
    return count;
};

let J = "aA", S = "aAAbbbb";
console.log(numJewelsInStones(J, S));
J = "z";
S = "ZZ";
console.log(numJewelsInStones(J, S));