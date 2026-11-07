function knightMoves(startPosition,endPosition){
    const availableMoves=[
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ]


    const queue=[ [startPosition, [startPosition]] ];
    const visited=[startPosition];
    let pathLength=0;
    
    while(queue.length!==0){
        const current = queue.shift();
        const path=current[1];
        
        for(let move of availableMoves){
            let alreadyVisited=false;
            const newMove = [current[0][0] + move[0], current[0][1] + move[1]];

            if(newMove[0]>=0 && newMove[0]<=7 && newMove[1]>=0 && newMove[1]<=7){
                if(newMove[0]===endPosition[0] && newMove[1]===endPosition[1]){
                    path.push(newMove)
                    if(path.length<=pathLength || pathLength===0){
                        pathLength=path.length
                        console.log(path);
                    }
                }
                else{
                    for(let item of visited){
                        if(item[0]===newMove[0] && item[1]===newMove[1]){
                            alreadyVisited=true;
                            break;
                        }
                    }
                    if(alreadyVisited===false){
                        visited.push(newMove);                        
                        const newPath=[...path,newMove];
                        queue.push([newMove, newPath])
                    }
                }
            }
        }
        
    }
    
    
}

knightMoves([0,0],[7,7]);