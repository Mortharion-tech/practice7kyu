/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    const lowStr = str.toLowerCase();
    const charArr = lowStr.split('');
    const xArr = charArr.filter((char) => char.startsWith('x'));
    const oArr = charArr.filter((char) => char.startsWith('o'));
    return (xArr.length === oArr.length);
}