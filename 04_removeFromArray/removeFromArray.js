const removeFromArray = function() {
    allArgs = Array.from(arguments);
    originalArray = allArgs[0];
    replacedValues = allArgs.slice(1);
    for (const val of replacedValues) {
        const index = originalArray.indexOf(val);
        if (index < 0) continue; 
        originalArray.splice(index, 1);

    }

    return originalArray;
    
};

testArr = [1,2,3,4];
console.log(testArr.indexOf(5));
console.log(testArr.splice(-1,1));



// Do not edit below this line
module.exports = removeFromArray;
