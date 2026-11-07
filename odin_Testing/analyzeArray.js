function analyzeArray(array){
    const average = array.reduce((total,number) =>{return total+number;})/array.length;
    const length=array.length;
    let max=Math.max(...array);
    let min=Math.min(...array);

    return {average,length,max,min}
}

module.exports = analyzeArray