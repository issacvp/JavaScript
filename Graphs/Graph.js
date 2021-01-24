class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // Adding a vertex which accepts a name of a vertex 
    // It should add a key to the adjacency list with the name of th vertex and set its value to be an empty array 
    addVertex(name, edges = []) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = edges;
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        let edgeList = [];
        for (let edge of this.adjacencyList[v1]) {
            if (edge !== v2) {
                edgeList.push(edge);
            }
        }
        this.adjacencyList[v1] = edgeList;
        edgeList = [];
        for (let edge of this.adjacencyList[v2]) {
            if (edge !== v1) {
                edgeList.push(edge);
            }
        }
        this.adjacencyList[v2] = edgeList;
        /*
        this.adjacencyList(v1) = this.adjacencyList[v1].filter (
            v => v!== v2;
        );
        this.adjacencyList(v2) = this.adjacencyList[v2].filter (
            v => v!== v1;
        );
        */
    }
    removeVertex(v) {
        for (let vertex in this.adjacencyList) {
            if (vertex !== v) {
                this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
                    edge => edge !== v
                );
            }
        }
        delete this.adjacencyList[v];
    }

    /**
 * Depth First traversal :
 *  Visit the children of the node before visiting the sibling (recursivly)
 *  Priority for deepning than widening
 *  - Meaning moving away from the root 
 *  - 
 * 
 */

    dfs(vertex) {
        let visited = {};
        let result = [];
        this._dfs(vertex, visited, result);
        return result;
    }
    _dfs(vertex, visited, result) {
        if (vertex === null || vertex === undefined || !this.adjacencyList[vertex]) {
            return;
        }
        visited[vertex] = true;
        result.push(vertex);
        for (let v of this.adjacencyList[vertex]) {
            if (!visited[v]) {
                this._dfs(v, visited, result);
            }
        }
    }
    dfs_iter(vertex) {
        let stack = [];
        let visited = {};
        let result = [];
        stack.push(vertex);
        while (stack.length > 0) {
            let vt = stack.pop();
            if (!visited[vt]) {
                visited[vt] = true;
                result.push(vt);
                this.adjacencyList[vt].forEach(v => {
                    stack.push(v);
                });
            }
        }
        return result;
    }

    bfs(vertex) {
        let queue = [];
        let visited = {};
        let result = [];
        queue.push(vertex);
        visited[vertex] = true;
        while (queue.length > 0) {
            let vt = queue.shift();
            result.push(vt);
            this.adjacencyList[vt].forEach(v => {
                if (!visited[v]) {
                    visited[v] = true;
                    queue.push(v);
                }
            });

        }
        return result;
    }

}

// let g = new Graph();
// g.addVertex('Issac', ['Thays']);
// g.addVertex('Thays', ['Issac']);
// g.addVertex('Abraham', ['Issac', 'Thays'])
// g.addVertex('Home');
// g.addEdge('Home', 'Issac');
// g.addEdge('Thays', 'Home');
// g.addEdge('Home', 'Abraham');
// g
// g.removeVertex('Home');
// g



let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('C', 'E');
g.addEdge('D', 'B');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

g

// console.log(g.dfs('A'));
// console.log(g.dfs('B'));
// console.log(g.dfs('C'));
// console.log(g.dfs('F'));
// console.log(g.dfs('G'));
// console.log(g.dfs_iter('A'));
// console.log(g.dfs_iter('B')); 
console.log(g.bfs('A'));
console.log(g.bfs('B'));
console.log(g.bfs('F'));

