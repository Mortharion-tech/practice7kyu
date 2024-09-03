/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
    const wordArr = s.split(' ');
    let shortLength = wordArr[0].length;
    wordArr.forEach((word) => {
      if (word.length < shortLength) {
        shortLength = word.length;
      }
    })
    return shortLength;
}