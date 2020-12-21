class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority  >= parent.priority) {   // MinBinaryHeap implementation
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }
    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild.priority < element.priority) { // MinBinaryHeap implementation
                    swap = leftIdx;
                }
            }

            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if (rightChild.priority < element.priority && rightChild.priority < leftChild.priority) {  // MinBinaryHeap implementation
                    swap = rightIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

/*
Complexity : 
  Insertion : O(logN)
  Deletion : O(logN)
  Search : O(n)
  Both worst case and Average case 
*/

let er = new PriorityQueue();
er.enqueue('Common Cold', 5);
er.enqueue('Gun Shot wound', 1);
er.enqueue('High Fever', 2);
er.enqueue('Broken Arm', 2);

console.log(er.values);

console.log(er.dequeue());

console.log(er.dequeue());

console.log(er.dequeue());

console.log(er.dequeue());
