function divide(array){
    if(array.length===1) return array;
 
    let length=Math.floor(array.length/2);
    let left=array.slice(0,length);
    let right=array.slice(length);
 
 
    return conquer(divide(left),divide(right));
}
 
function conquer(x,y){
    const result=[];
 
    while(x.length!==0 && y.length!==0){
        if(x[0]<y[0]){
            result.push(x.shift());
        }
        else{
            result.push(y.shift());
        }
    }
 
    while(x.length!==0){
        result.push(x.shift());
    }
 
    while(y.length!==0){
        result.push(y.shift());
    }
 
    return result;
}
 
console.log(divide([2,6,1,32,23,26,7,6]));