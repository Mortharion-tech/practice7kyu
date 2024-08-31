/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
    let newStr = str.replaceAll ('a', '');
    newStr = newStr.replaceAll ('e', '');
    newStr = newStr.replaceAll ('i', '');
    newStr = newStr.replaceAll ('o', '');
    newStr = newStr.replaceAll ('u', '');
    return str.length - newStr.length;
}