const repeatString = function(text, num) {
    if (num < 0) return "ERROR";
    let result = "";
    for (let i = 0; i < num; i++) {
        result = result + text;
    }
    return result;
};

console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
