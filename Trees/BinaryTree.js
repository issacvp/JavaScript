class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function bfs(root, target) {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) {
      return true;
    }
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false;
}

console.log(bfs(a, "e"));
console.log(bfs(a, "z"));

function dfs(root) {
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);
    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
}

dfs(a);

// SELF, LEFT, RIGHT
function preOrder(root) {
    // The tree is empty
    if(root == null) return ;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

preOrder(a);



//LEFT, RIGHT, SELF
function postOrder(root) {
    // The tree is empty
    if(root == null) return ;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(a);

function postOrderBFS(root) {
  if(root === null)  return;
  var stack1 = [];
  var stack2 = []; 
  stack1.push(root);

  while(stack1.length > 0 ) {
    root = stack1.pop();
    stack2.push(root);

    if(root.left) 
      stack1.push(root.left);
    if(root.right) 
      stack1.push(root.right);
  }

  while(stack2.length > 0) {
    root = stack2.pop();
    console.log(root.val);
  }
  
}

postOrderBFS(a);

//LEFT, SELF RIGHT
function inOrder(root) {
    // The tree is empty
    if(root == null) return ;
    inOrder(root.left);
      console.log(root.val);
    inOrder(root.right);
}

//inOrder(a);



a = new Node(3);
b = new Node(2);
c = new Node(7);
d = new Node(4);
e = new Node(-2);
f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

inOrder(a);
function sumTree(root) {
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return sum;
}

console.log(sumTree(a));

function sumTreeDFS(root) {
    if(root === null) return 0;
    return sumTreeDFS(root.left) + root.val + sumTreeDFS(root.right);
}

console.log(sumTreeDFS(a));