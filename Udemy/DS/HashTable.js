class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length;i++){
            hash += key.charCodeAt(i)*i;
        }
        hash = hash % this.data.length;
        return hash;
    }
    set(key,value){
        let hash = this._hash(key);
        if(!this.data[hash]) {
            this.data[hash] = [];
        } 
        this.data[hash].push([key,value]);
    }
    get(key) {
        let hash = this._hash(key);
        if(this.data[hash]) {
            for (let pair  of this.data[hash]){
                if(pair[0] === key) {
                    return pair[1];
                }
            }
            return undefined;
        } else {
            return undefined;
        }
    }
    keys() {
        let currentKeys = [];
        for(let address of this.data) {
            if(address) {
                for (let pair of address) {
                    currentKeys.push(pair[0]);
                }
            }
        }
        return currentKeys;
    }
}


let ht = new HashTable(10);
ht.set('issac', 1000);
ht.set('thays', 1000000);
ht.set('abraham', 100000000);
console.log(ht.get('issac'))
ht
console.log(ht.keys())



function hasDuplicates(array) {
    const set = new Set();
    for(let val of array) {
        if(set.has(val)) {
            return val;
        }
        set.add(val);
    }
    return undefined;
}
console.log(hasDuplicates([2,5,1,2,3,5,1,2,4]));
console.log(hasDuplicates([2,1,1,2,3,5,1,2,4]));
console.log(hasDuplicates([2,3,4,5]))