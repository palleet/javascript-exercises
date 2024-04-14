const removeFromArray = function(input_list, ...items) {
    for(let i = 0; i < items.length; i++) {
        while(input_list.indexOf(items[i]) != -1) {
            let itemIndex = input_list.indexOf(items[i]);
            input_list.splice(itemIndex, 1);
        }
    }
    return input_list;
};

// Do not edit below this line
module.exports = removeFromArray;
