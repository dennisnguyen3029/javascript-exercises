const sumAll = function() {
    let res = 0;
    let lower = Math.min(arguments[0], arguments[1]);
    let upper = Math.max(arguments[0], arguments[1]);
    if (
        arguments.length !== 2 ||
        isNaN(arguments[0]) || isNaN(arguments[1]) ||
        typeof(arguments[0]) === 'string' || typeof(arguments[1]) === 'string' ||
        lower < 0 || upper < 0
    ) { return "ERROR";}
    for (let i = lower; i <= upper; i++) {
        res += i;
    }

    return res;
};

console.log(sumAll(1, '90'));
// Do not edit below this line
module.exports = sumAll;
