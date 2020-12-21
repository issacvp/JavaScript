function findLongestWord(str) {
    let longestWord = '';
    let wordStarted = false;
    let wordStartIndex = 0;
    for(let i=0;i<str.length;i++){
        var charVal = str.charCodeAt(i);
        if((charVal>=65 && charVal <=90)||(charVal>=97 && charVal <=122)){
            if(wordStarted === false){
                wordStarted = true;
                wordStartIndex = i;
            } 
        } else {
            if(wordStarted === true){
                let word = str.slice(wordStartIndex,i);
                if(word.length > longestWord.length){
                    longestWord = word;
                }
                wordStarted = false;
            } else {
                wordStartIndex = i;
            }
        }
    }
    if(wordStarted === true){
        let word = str.slice(wordStartIndex);
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
};

console.log(findLongestWord(""));