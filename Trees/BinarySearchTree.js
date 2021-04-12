/**
 * Binary search tree is regular binary tree with additional contraint that 
 * the left child is less that the root and right is greater than the root 
 * Applicable recursively 
 * 
 *                             10                         10
 *                          -5      30                       15
 *                       -10    0      36                       16
 *                                5                                18
 * How to search in the BST?
 *      As basic rule, We can assume that the left items of the root are less than of the root 
 *      So the search always can go to left or right based if the search item less or greater than of the root , progress recusively 
 * 
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const search = (root, item) => {
    if (root === null) {
        return false;
    }
    if (root.val === item) {
        return true;
    }
    if (root.val < item) {
        return search(root.right, item);
    } else {
        return search(root.left, item);
    }
}

/*
                 10
             5       25
          1   6       36
*/
// a = new Node(10);
// b = new Node(5);
// c = new Node(25);
// d = new Node(1);
// e = new Node(6);
// f = new Node(36);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(search(a, -5));


/*
Same Tree 
------------
 Given roots of two trees, tell if the two trees are exactly same in structure and values 

           10                       10
      12          13          12            13
                15     14                 15     14
                   16                        16


*/

const same = (root1, root2) => {
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 !== null && root2 !== null) {
        if (root1.val !== root2.val) {
            return false;
        }
        return same(root1.left, root2.left) && same(root1.right, root2.right);
    } else {
        return false;
    }
}
// Running time O(n)
// console.log(same(a, b));

/*

Given the root of the binary tree , give the sixe of the tree 
*/

const size = (root) => {
    if (root === null) return 0;
    return 1 + size(root.left) + size(root.right);
}
// s = size(a);
// s

/*
 Height of the binary tree
*/

const height = (root) => {
    if (root === null) return 0;

    return 1 + Math.max(height(root.left), height(root.right));
}
// Space : O(m) where m is the height of the tree,  Time : O(n)
// s = height(a);
// s

/*
 Root to leaf sum Binary tree 
 ------------------------------
 Given a sum value and the root of the tree, check if there exists a path to the leaf which equals to sum 
*/

const canConstruct = (root, value) => {
    if (root === null) {
        if (value === 0) return true;
        else return false;
    }
    console.log(root.val, value)
    return canConstruct(root.left, value - root.val) || canConstruct(root.right, value - root.val);
}

// var result = canConstruct(a,-6);
// result 


/*
  Is BST?
----------
Given a binary tree, check if its a BST?

*/

const isBST = (root, min = -Infinity, max = Infinity) => {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) {
        console.log(min, root.val, Math.floor(max))
        return false;
    }
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

function QNode (node, min, max) {
    this.node = node;
    this.min = min;
    this.max = max;
}
var isValidBST = function(root) {
    if(!root) return true;
    var queue = [];
    queue.push(new QNode(root,-Infinity,Infinity));
    while(queue.length > 0) {
        var current = queue.shift();
        console.log(current.node.val, current.min, current.max);
        var node = current.node;
        var val = node.val;
        var min = current.min;
        var max = current.max;
        if( val <= min || val >= max) 
            return false;
        if(node.left)
            queue.push(new QNode(node.left,min,val));
        if(node.right)
            queue.push(new QNode(node.right,val,max));
    }
    return true;
};

a = new Node(2);
b = new Node(1);
c = new Node(3);
a.left = b;
a.right = c

result = isValidBST(a);
result


//LEFT, SELF RIGHT
function findInOrderSuccessor(root, input) {
    if (!root) return null;
    if (!input) return null;
    return inOrder(root, input, false);
}

//LEFT, SELF RIGHT
function inOrder(root, input, found) {
    // The tree is empty
    if (!root) return null;
    if (found) {
        return root;
    }
    if (root.left) {
        return inOrder(root.left, input, found);
    }
    console.log(root.val, found);
    if (root.val === input.val) {
        found = true;
    }
    if (root.right) {
        return inOrder(root.right, input, found);
    }
}



a = new Node(20);
b = new Node(9);
c = new Node(5);
d = new Node(12);
e = new Node(11);
f = new Node(14);
g = new Node(25);

a.left = b;
a.right = 25;
b.left = c;
b.right = d;
d.left = e;
d.right = f;

//console.log(findInOrderSuccessor(a, b));


