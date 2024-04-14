const repeatString = function(word, count) {
    if(count < 0) {
        return "ERROR";
    }
    result = "";
    for(let i = 0; i < count; i++) {
        result = result + word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
