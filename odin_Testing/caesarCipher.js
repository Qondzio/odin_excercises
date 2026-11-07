function caesarCipher(word,factor){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newWord='';
    for(let x=0; x<word.length; x++){
        if(alphabet.includes(word.charAt(x).toLowerCase())){
            const index=alphabet.indexOf(word.charAt(x).toLowerCase());
            const newChar=alphabet[(index+factor)%26];
            if(word.charAt(x) === alphabet[index]){
                newWord+=alphabet[(index+factor)%26];
            }
            else{
                newWord+=alphabet[(index+factor)%26].toUpperCase();
            }
        }
        else{
            newWord+=word.charAt(x);
        }
    }

    return newWord;
}

module.exports = caesarCipher