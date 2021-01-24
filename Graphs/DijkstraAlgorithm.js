// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         this.values.push({ val, priority });
//         this.sort();
//     };
//     dequeue() {
//         return this.values.shift();
//     };
//     sort() {
//         this.values.sort((a, b) =>
//             a.priority - b.priority
//         );
//     }
// }
// Sorting in O(n*logN) complexity

// var q = new PriorityQueue();
// q.enqueue('C',5);
// q.enqueue('B', 3);
// q.enqueue('Q',20);
// q
// console.log(q.dequeue());

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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        //Build up initial stage
        for (let vertex in this.adjacencyList) {
            if( vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        //As long as there is something to visit 
        while(nodes.values.length) {
            let smallest = nodes.dequeue().value;
            if(smallest === finish) {
                // We are done 
                // We need to build the path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
                
            } 
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbour in this.adjacencyList[smallest]) {
                    // Find neighbour node
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    // Calculate the shortest path
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]) {
                        // Updating new sma;;erst distance to neighbour
                        distances[nextNeighbour] = candidate;
                        // updating previous - Hhow we got to neighbour
                        previous[nextNeighbour] = smallest; 
                        // enqueue in priorty queue with new priporty 
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }
        }
        console.log(distances);
        console.log(previous);
        return path.concat(start).reverse();
    }
}

let wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');
wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);
console.log(wg.Dijkstra('A','E'));

