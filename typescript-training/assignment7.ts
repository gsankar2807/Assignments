let sentence: string = "Java programming is fun and challenging";

// 1. Count total no of words
let words = sentence.split(" ");
console.log("Total words:", words.length);

// 2. Words in reverse order
console.log("Sentence in reverse order:");
let reversedSentence = "";
for (let i = words.length - 1; i >= 0; i--){
    reversedSentence = reversedSentence + words[i] + " ";
}

console.log("Reversed sentence:", reversedSentence);
 
// 3. Convert first letter of each word to uppercase
let newSentence = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let firstLetter = word.charAt(0).toUpperCase();

    let restLetters = word.slice(1);

    newSentence = newSentence + firstLetter + restLetters + " ";
}

console.log(newSentence);