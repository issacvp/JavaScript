// const hash = (key, arrayLen) => {
//     let total = 0;
//     for (let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }

// Problems 
//  Only hashes strings 
//  Not constant time , Becase Hashing takes O(n)
//  More random hash values - High collision (use prime numbers )




const hash = (key, arrayLen) => {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let value = key[i].charCodeAt(0) - 96;
        total = (total * 31 + value) % arrayLen;
    }
    return total;
}

console.log(hash("purple", 13));
console.log(hash("maroon", 13));

//Collision example 
console.log(hash("cyan", 13));
console.log(hash("pink", 13));

// How to handle Hash collision 
//   1. Seperate Chaining 
//   2. Linear probing 

class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * 31 + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let pair of this.keyMap[index]){
                if(key === pair[0]){
                    return pair[1];
                }
            }
            return undefined;
        }
        return undefined;
    }
    keys() {
        let keyArr = [];
        for(let indexPair of this.keyMap) { 
            console.log(indexPair);
            if(indexPair){
                for (let pair of indexPair){
                    keyArr.push(pair[0]);
                }
            }
        }
        return keyArr;
    }

    values() {
        let valueArr = [];
        for(let indexPair of this.keyMap) { 
            if(indexPair){
                for (let pair of indexPair){
                    if(!valueArr.includes(pair[1]))
                        valueArr.push(pair[1]);
                }
            }
        }
        return valueArr;
    }

}

/*
Complexity (Average Case): 
    Insert : O(1)
    Deletion : O(1)
    Access : O(1)
        Searching for keys : O(1)
        Searching for values : O(n) 
*/


let ht = new HashTable();
ht.set('hello world', 'good bye');
console.log(ht.keyMap);
ht.set('dogs', 'are cool');
console.log(ht.keyMap);

ht.set('cats', 'are fine');
console.log(ht.keyMap);

ht.set('i love', 'pizza');
ht.set('i loved', 'pizza');
console.log(ht.keyMap);

console.log(ht.get('i love'));
console.log(ht.get('cats'));
console.log(ht.get('issac'));

console.log(ht.keys());
console.log(ht.values());