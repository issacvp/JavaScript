class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const value = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (value <= parent) {
        break;
      }
      let temp = this.values[idx];
      this.values[parentIdx] = value;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  delete() {
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
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (rightChild > element && rightChild > leftChild) {
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

let heap = new MaxBinaryHeap();
heap.insert(41);
console.log(heap.values);

heap.insert(39);
console.log(heap.values);

heap.insert(33);
console.log(heap.values);

heap.insert(18);
console.log(heap.values);

heap.insert(27);
console.log(heap.values);

heap.insert(12);
console.log(heap.values);

heap.insert(55);
console.log(heap.values);


console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);

console.log(heap.delete());
console.log(heap.values);