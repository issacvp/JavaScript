class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(val) {
        if (this.size === 0) {
            this.top = new Node(val);
        } else {
            const node = new Node(val);
            node.next = this.top;
            this.top = node;
        }
        this.size++;
    }
    // Time : O(1)
    getTop(){
        return this.top.val;
    }
    pop(){
        if(this.size === 0) return null;
        const curr = this.top;
        this.top = this.top.next;
        this.size--;
        return curr.val;
    }
    //Time : O(1)
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.top);
console.log(stack.pop());
console.log(stack.top);
