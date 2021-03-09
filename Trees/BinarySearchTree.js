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
a = new Node(10);
b = new Node(5);
c = new Node(25);
d = new Node(1);
e = new Node(6);
f = new Node(36);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(search(a, -5));


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
    if(root1=== null && root2===null){
        return true;
    }
    if(root1!== null &&  root2!== null){
        if(root1.val !== root2.val) {
            return false;
        }
        return same(root1.left, root2.left) && same(root1.right, root2.right);
    } else {
        return false;
    }
}
// Running time O(n)
console.log(same(a, b));

/*

Given the root of the binary tree , give the sixe of the tree 
*/

const size = (root) => {
    if(root === null) return 0;
    return 1 + size(root.left) + size(root.right);
}
s = size(a);
s

/*
 Height of the binary tree
*/

const height = (root) => {
    if(root === null) return 0;

    return 1 + Math.max(height(root.left), height(root.right));
}
// Space : O(m) where m is the height of the tree,  Time : O(n)
s = height(a);
s

/*
 Root to leaf sum Binary tree 
 ------------------------------
 Given a sum value and the root of the tree, check if there exists a path to the leaf which equals to sum 
*/

const canConstruct=(root, value) =>{
    if(root === null) {
        if(value === 0) return true;
        else return false;
    }
    console.log(root.val,value)
    return canConstruct(root.left, value-root.val) || canConstruct(root.right, value-root.val);
}

var result = canConstruct(a,-6);
result 


/*
  Is BST?
----------
Given a binary tree, check if its a BST?

*/

const isBST = (root,min=Number.MIN_VALUE,max=Number.MAX_VALUE) => {
    if(root === null) return true;
    if(root.val <= min ||root.val >= max) {
        console.log(min,root.val,max);
        return false;
    } 
    return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

result = isBST(a);
result