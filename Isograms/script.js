/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */

function isIsogram(str) {
    const newStr = str.toLowerCase()
    const strArr = newStr.split('');
    return strArr.every((letter, index, array) => array.indexOf(letter) === index);
}