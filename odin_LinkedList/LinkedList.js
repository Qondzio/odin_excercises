function Node(value){
    let next=null;
    
    return{value,next}
}

function LinkedList(){
    let head=null;
    
    function append(value){
        let node=Node(value);
        
        if(head===null){
            head=node;
            return
        }
        
        let current=head;
        while(current.next){
            current=current.next;
        }
        current.next=node;
    }
    
    function prepend(value){
        let newValue=Node(value);
        newValue.next=head;
        head=newValue;
    }
    
    function size(){
        let number=0;
        let current=head;
        
        while(current){
            number++;
            current=current.next;
        }
        
        return number;
    }
    
    function headNode(){
        if(!head){
            return null;
        }
        return head.value;
        
    }
    
    function tailNode(){
        if(!head){
            return null;
        }
        let current=head;
        
        while(current.next){
            current=current.next;
        }
        
        if(current===head){
            return null
        }
        else{
            return current.value;
        }
    }
    
    function at(index){
        
        if(!head){
            return null;
        }
        let current=head;
        for(let i=0; i<index; i++){
            if(current.next===null){
                return null; 
            }
            current=current.next;
        }
        return current.value;
    }
    
    function pop(){
        let current=head;
        let value=null;
        
        while(current){
            if(!current.next){
                value=current;
                break
            }
            current=current.next;
        }
        
        if(head===value){
            head=null;
            
        }
        
        current=head;
        
        while(current){
            if(current.next===value){
                current.next=null;
            }
            current=current.next;
        }
        
    }
    
    function contains(value){
        while(head){
            if(head.value===value){
                return true;
            }
            head=head.next;
        }
        return false;
    }
    
    function find(value){
        let index=0;
        
        while(head){
            if(head.value===value){
                return index;
            }
            head=head.next;
            index++;
        }
        return null;
    }
    
    function toString(){
        let current=head;
        let text='';
        
        while(current){
            if(current===head){
                text+=current.value+'(head)'+' -> ';
            }
            else if(!current.next){
                text+=current.value+'(tail)'+' -> ';
            }
            else{
                text+=current.value+' -> ';
            }
            current=current.next;
        }
        text+=null;
        console.log(text)
    }
    
    return {append,toString,prepend,size,headNode,tailNode,at,pop,contains,find}
}