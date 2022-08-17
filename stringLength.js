function stringLength(string) {
    return string.length;
    if (string.length >= 1 && string.length <= 10) {
       return true; 
    } else {
        return false;
    }
}

module.exports = stringLength;