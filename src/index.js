module.exports = function reverse (n) {
//    n = Math.abs(n);
    return Number(String(Math.abs(n)).split('').reverse().join(''));  
}
