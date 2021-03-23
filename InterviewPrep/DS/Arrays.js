const strings = ['a', 'b', 'c', 'd'];
strings 

strings.push('e');
strings 

console.log(strings.pop());
console.log(strings.pop());

strings.shift('f');
strings

strings.unshift('x');
strings

strings.splice(1,0,'alien');
strings

console.log(strings[0]);



class MyArray {
    constructor() {
        this.length = 0; 
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
         this.data[this.length] = item;
         this.length++;
         return this.length; 
    }
    pop() {
        const lastItem = this.data[this.length -1];
        delete this.data[this.length -1] ;
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shift(index);
    }
    shift(index) {
        for(let i=0; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArr = new MyArray();
newArr.push('hi');
newArr.push('World');
newArr

var lastVal = newArr.pop();
lastVal
newArr
lastVal = newArr.pop();
lastVal
newArr

newArr.push('hi');
newArr.push('World');
newArr
newArr.delete(1);
newArr