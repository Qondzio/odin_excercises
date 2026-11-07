function reverseString(word){
    const splittedWord=word.split('');
    let reversedWord="";
    for(let x=splittedWord.length-1; x>=0; x--){
        reversedWord+=splittedWord[x];
    }

    return reversedWord;

}

module.exports = reverseString