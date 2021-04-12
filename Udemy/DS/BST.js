class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value, root = this.root) {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        if (root.value > value) {
            if (!root.left) {
                root.left = new Node(value);
            } else {
                this.insert(value, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new Node(value);
            } else {
                this.insert(value, root.right);
            }
        }
    }

    lookUp(value, root = this.root) {
        if (!root) return undefined;
        console.log(root.value);
        if (root.value === value) return true;
        if (root.left && root.value > value) {
            return this.lookUp(value, root.left)
        } else if (root.right && root.value < value) {
            return this.lookUp(value, root.right)
        }
        return false;

    }
    remove(value) {
        if (!root) return undefined;
        let node = this.root;
        let prev = null;
        let leftChild = null;
        let isLeft =  true;
        while (node) {
            if (!node) {
                return undefined;
            }
            if (node.value === value) break;
            else if (node.value > value) {
                prev = node;
                isLeft = true;
                node = node.left;
            } else {
                prev = node;
                isLeft = false;
                node = node.right;
            }
        }
        if (!node.left && !node.right) {
            if(isLeft) {
                prev.left = null;
            } else {
                prev.right = null;
            }
        } else {
            leftChild = node.right;
            while (leftChild.left) {
                leftChild = leftChild.left;
            }
            leftChild.left = node.left;

            if(isLeft) {
                prev.left = leftChild
            } else {
                prev.right = leftChild;
            }
        }
        return node.value;
    }

}

var tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(70);
console.log(tree.lookUp(21));
