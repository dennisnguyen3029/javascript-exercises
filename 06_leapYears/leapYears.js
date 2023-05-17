const leapYears = function() {
    year = arguments[0];
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 100 === 0) {
            return false;
        } else return true;
    } else return false; 

};

console.log(leapYears(2000));
console.log(leapYears(20));
console.log(leapYears(1985));
console.log(leapYears(1800));
console.log(leapYears(40));

// Do not edit below this line
module.exports = leapYears;
