const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const flatArray = array.flat(2);
console.log(flatArray);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const sentenceArray = greeting.map(row => row.join(" "));
console.log(sentenceArray);

const fullSentence = sentenceArray.join(" ");
console.log(fullSentence);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const released = trapped.flat(Infinity);
console.log(released);
