class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//LEFT, SELF RIGHT
function findInOrderSuccessor(root, input) {
    if(!root) return null;
    if(!input) return null;
    return inOrder(root, input, false);
}

//LEFT, SELF RIGHT
function inOrder(root, input, found) {
    // The tree is empty
    if(!root) return null;
    if(found) {
        return root;
    }
    inOrder(root.left, found);
      if(root.val === input.val) {
          found = true;
      }
      console.log(root.val, found);
    inOrder(root.right, found);
}



a = new TreeNode(20);
b = new TreeNode(9);
c = new TreeNode(5);
d = new TreeNode(12);
e = new TreeNode(11);
f = new TreeNode(14);
g = new TreeNode(25);

a.left = b;
a.right = 25;
b.left = c;
b.right = d;
d.left = e;
d.right = f;

console.log(findInOrderSuccessor(a,b));