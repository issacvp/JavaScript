class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        if(this.length <=0) return undefined;
        return this.bottom.value;

    }
    push(value){
        let node = new Node(value);
        if(this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            this.top.next = node;
            this.top = node;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length <=0) {
            return undefined;
        }

        let temp = this.bottom;
        if(this.length > 1) {
            let prev = null;
            while(temp.next) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.top = prev;
        }
        this.length--;
        if(this.length === 1) {
            this.top = this.bottom;
        }
        return temp.value;
    }
    isEmpty() {
        if(this.length <= 0) {
            return true;
        } else {
            return false;
        }
    }
}

let stack = new Stack();
stack.push(1).push(2).push(3).push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(1);

console.log(stack.peek());
stack.push(1);
console.log(stack.pop());
console.log(stack.pop());

