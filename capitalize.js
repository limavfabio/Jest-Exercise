function capitalize(string) {
   let capString = string.toLowerCase();
   let firstChar = capString.charAt(0).toUpperCase();
   return firstChar + capString.slice(1);
}

module.exports = capitalize;