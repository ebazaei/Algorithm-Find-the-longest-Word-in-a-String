// Tuesday: Find the longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number. For these algorithms you are allowed to use the split() method.

// findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
// findLongestWord("May the force be with you") should return 5.

function FindLangstWord(str){
    const array = str.split(" ")

    var max = 0
    for(let index = 0; index<array.length; index++){
        if(array[index].length>max){
            max = array[index].length
        }
    }

    return max
}

console.log(FindLangstWord("The quick brown fox jumped over the lazy dog"));