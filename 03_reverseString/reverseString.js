const reverseString = function(str) {
    // let i = str.length - 1;
    // let result = "";
    // while (i >= 0) {
    //     result += str[i];
    //     i--;
    // }

    // return result;

    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
