class Stack {
    constructor() {

        // Initialize an empty stack
        this.items = [];
    }

    // Push a new item onto the stack
    push(item) {
        this.items.push(item);
    }

    // Remove and return the last item
    pop() {

        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    }

    // Return the last item without removing it
    peek() {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    length() {
        return this.items.length;
    }
}

//  Implement the enqueue and dequeue methods


class QueueTwoStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length() === 0) {
            while (this.stack1.length() > 0) {
                this.stack2.push(this.stack1.pop());
            }
            if (this.stack2.length === 0) {
                throw new Error('Empty queue')
            } 
        }
        return this.stack2.pop();
    }
}


// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
actual

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
actual
desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
actual

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();