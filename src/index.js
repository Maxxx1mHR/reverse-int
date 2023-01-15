module.exports = function reverse (n) {
    let string = n.toString();
    let rez = '';
    for (let i = 0; i < string.length; i++) {
        rez = string[i] + rez;
        if (rez == '-') {
            rez = rez.substring (1);
        }
    }
    return +rez;
}


// let r = -123;
// const string = r.toString();

// console.log(typeof(string));

// let rez = '';
// for (let i = 0; i < string.length; i++) {
//     rez = string[i] + rez;
//     if (rez == '-') {
//         rez = rez.substring (1);
//     }
// }
// console.log(rez);

