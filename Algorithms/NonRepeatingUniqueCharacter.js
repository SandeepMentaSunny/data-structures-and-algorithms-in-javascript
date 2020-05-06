//First Unique Character in a String
//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

//Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

//solution: 
var firstUniqChar = function (s) {
    let hashStr = new Array(26).fill(0);
    let indexesOfStr = [];
    for (let char of s) {
        const unicode = char.charCodeAt() - 97;
        if (hashStr[unicode] === 0) {
            hashStr[unicode] = 1;
        } else {
            hashStr[unicode] = hashStr[unicode] + 1;
        }
    }
    for (let i = 0; i < hashStr.length; i++) {
        if (hashStr[i] === 1) {
            let unicodeChar = i + 97;
            unicodeChar = String.fromCharCode(unicodeChar);
            const strIndex = s.indexOf(unicodeChar);
            indexesOfStr.push(strIndex);
        }
    }
    if (indexesOfStr.length > 0) {
        return Math.min.apply(null, indexesOfStr);
    } else {
        return -1;
    }
};

//Time Complexity => O(N)
//Space Complexity => O(1)