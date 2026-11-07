function HashMap(){
    let map={};
    let capacity=16;
    let loadFactor=0.8;
    
    //Function used for hasing keys.
    function hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
        }

        return hashCode;
    }

    //Function used to add key-pair values to our HashMap. Takes two arguments: the first is a key, and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten
    function set(key,value){
        let bucket=hash(key);
        if(!map[bucket]){
            map[bucket]=[];
        }
        for(let item of map[bucket]){
            if(item.key===key){
                item.value=value;
                return
            }
        }
        if(length()>Math.floor(capacity*loadFactor)){
            bucket=hash(key);
            regrowth();
        }
        if(!map[bucket]){
            map[bucket]=[];
        }
        map[bucket].push({key,value});    
    }

    //Takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
    function get(key){
        const bucket=hash(key);
        if(Object.keys(map).length>0){
            for(let item of map[bucket]){
                if(item.key===key){
                    return item.value;
                }
            }
        }
        return null;
        
    }

    //Takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    function has(key){
        const bucket=hash(key);
        if(map[bucket]){
            for(let item of map[bucket]){
                if(item.key===key){
                    return true;
                }
            }
        }
        return false;
    }

    //Takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
    function remove(key){
        const bucket=hash(key);
        if(Object.keys(map).length>0){
            for(let i=0; i<map[bucket].length; i++){
                if(map[bucket][i].key===key){
                    map[bucket].splice(i,1);
                    if(map[bucket].length===0){
                        delete map[bucket];
                    }
                    return true;
                }
            }
        }
        else{
            return null;
        }
        return false;
    }


    //Returns the number of stored keys in the hash map.
    function length(){
        let result=0;

        for(let bucket in map){
            result+=map[bucket].length;
        }
        return result;
    }


    //Removes all entries in the hash map.
    function clear(){
        for(let item in map){
            delete map[item];       
        }
    }


    //Returns an array containing all the keys inside the hash map.
    function keys(){
        let arr=[];

        if(Object.keys(map).length>0){
            for(let bucket in map){
                for(let item of map[bucket]){
                    arr.push(item.key)
                }
            }
        }
        else{
            return null;
        }

        return arr;
    }

    //Returns an array containing all the values.
    function values(){
        let arr=[];

        if(Object.keys(map).length>0){
            for(let bucket in map){
                for(let item of map[bucket]){
                    arr.push(item.value)
                }
            }
        }
        else{
            return null;
        }

        return arr;
    }

    //Returns an array that contains each key, value pair.
    function entries(){
        let arr=[];

        if(Object.keys(map).length>0){
            for(let bucket in map){
                for(let item of map[bucket]){
                    arr.push(item);
                }
            }
        }
        else{
            return null;
        }

        return arr;
    }

    //Function used for rebuilding our HashMap. If number of entries will exceed the capacity (number of buckets), it will double the number of buckets and then re-hash all entries and then add them to new created buckets.
    function regrowth(){
        capacity=capacity*2;
        let allValues=entries();
        clear()

        allValues.forEach(entry => {
            set(entry.key,entry.value);
        });
        
        
    }

    return{hash,set,get,has,remove,length,clear,keys,values,entries,regrowth}
}

const map=HashMap();

map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')