// Problem 8: count word in a sentence


//  Without Function
// let str = "I love Bangladesh";

// console.log(str.split(" ").length);

// With Function

function wordCount(sentence) {
    let strSplit = sentence.split(" ");
    return strSplit.length;
}
console.log(wordCount("I love Bangladesh"));
