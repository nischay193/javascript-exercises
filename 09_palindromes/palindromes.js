const palindromes = function (text) {
    text = text.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase();
    let start = 0, end = text.length - 1;
    while (start < end) {
        if (text[start] != text[end]) return false;
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
