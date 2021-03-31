class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function isBalanced(treeRoot) {
    if (!treeRoot) {
        return true;
    }
    const depths = [];
    return getDepth(treeRoot.left, 1, depths) && getDepth(treeRoot.right, 1, depths);
}

function getDepth(node, depth, depths) {
    if (!node) {
        return true;
    }
    if (!node.left && !node.right) {
        node
        depth
        // Сase: we found a leaf
        // We only care if it's a new depth
        if (depths.indexOf(depth) < 0) {
            depth
            depths.push(depth)
            depths
            // Two ways we might now have an unbalanced tree:
            //   1) More than 2 different leaf depths
            //   2) 2 leaf depths that are more than 1 apart
            if (depths.length > 2 || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                return false;
            }
        }
    }
    return getDepth(node.left, depth + 1, depths) && getDepth(node.right, depth + 1, depths);
}

treeRoot = new BinaryTreeNode(6);
leftNode = treeRoot.insertLeft(1);
rightNode = treeRoot.insertRight(0);
rightNode.insertRight(7).insertRight(8);
console.log(isBalanced(treeRoot));