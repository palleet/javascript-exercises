const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    }
    let low;
    let high;
    if(num1 < num2) {
        low = num1;
        high = num2;
    }
    else {
        low = num2;
        high = num1;
    }

    let sum = 0;
    for(let i = high; i >= low; i--) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
