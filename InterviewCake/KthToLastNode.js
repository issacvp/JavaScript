class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function kthToLastNode(k, head) {

    // Return the kth to last node in the linked list
    let pos = getLength(head) - k;
    pos
    let temp = head;
    while (pos > 0 && temp) {
        temp = temp.next;
        pos--;
    }
    return temp;
}

function getLength(head) {
    let temp = head;
    let length = 0;
    while (temp) {
        length++;
        temp = temp.next;
    }
    return length;
}


let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
let expected = nodes[3];
actual



function valuesToLinkedListNodes(values) {
    const nodes = [];
    for (let i = 0; i < values.length; i++) {
      const node = new LinkedListNode(values[i]);
      if (i > 0) {
        nodes[i - 1].next = node;
      }
      nodes.push(node);
    }
    return nodes;
  }