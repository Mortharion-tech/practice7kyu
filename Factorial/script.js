/* Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial */

function factorial(n) {
    return n < 0 ? -1 : n === 0 ? 1 : (n * factorial(n - 1));
}