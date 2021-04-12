class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null; 
        this.last = null;
        this.length = 0;
    }
    peek(){
        if(this.first) return this.first.value;
        else return undefined;
    }
    enqueue(value) {
        let node = new Node(value);
        if(this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(this.length <= 0) return undefined;
        let node = this.first;
        this.first = this.first.next;
        this.length--;
        if(this.length === 1) {
          this.last = this.first;
        }
        return node.value;

    }
}

let q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
q.enqueue(1);
console.log(q.peek());
console.log(q.dequeue());