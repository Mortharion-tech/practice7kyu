/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */

function capitalize(s) {
    return [s.split('').map((val, ind) => ind % 2 ? val : val.toUpperCase()).join(''), s.split('').map((val, ind) => ind % 2 ? val.toUpperCase() : val).join('')];
}