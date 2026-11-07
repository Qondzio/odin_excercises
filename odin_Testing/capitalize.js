function capitalize(word){
    if(typeof word === 'string'){
        const firstLetterUppercase=word.charAt(0).toUpperCase();
        return word.replace(word.charAt(0), firstLetterUppercase);
    }
    else{
        return word;
    }
    
}

module.exports = capitalize;