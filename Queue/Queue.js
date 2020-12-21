// With an array 
// const queue = [];
// queue.push('a');
// queue.push('b');
// queue.push('c');
// queue.push('d');
// console.log(queue);
// console.log(queue.shift());
// console.log(queue);

// Queue with Linked list 


// a -> b -> c -> d
// F              B
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    enqueue(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.size++;
    }
    dequeue() {
        if (this.size === 0) return null;
        if (this.size === 1) this.back = null;
        const curr = this.front;
        this.front = this.front.next;
        this.size--;
        return curr.val;
    }
}

const queue = new Queue();
console.log('-----Enqueue values------')
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.size)
console.log(queue.front);
console.log(queue.back);
console.log('-----Dequeue values------')
console.log(queue.dequeue());
console.log(queue.size)
console.log(queue.dequeue());
console.log(queue.size)
console.log(queue.dequeue());
console.log(queue.size)
console.log(queue.dequeue());
console.log(queue.size)
console.log(queue.front);
console.log(queue.back);
