const removeFromArray = function(arr, ...toRemove) {
    // for each item in toRemove, find index, then remove the element
    for (let item of toRemove) {
        let idx = arr.indexOf(item);
        if (idx != -1) arr.splice(idx, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
