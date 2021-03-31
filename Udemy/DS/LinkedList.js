class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    prepend(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    insert(index, value) {
        if(index === 0) {
            this.prepend(value);
        } else if(index >=   this.length) {
            this.append(value);
        } else if (index > 0 && index < this.length) {
            const node = new Node(value);
            let temp = this.traverse(index-1);
            node.next = temp.next;
            temp.next = node;
            this.length++;
        }
        return this;
    }
    print() {
        const values = [];
        let temp = this.head;
        while(temp !== null) {
            values.push(temp.value);
            temp = temp.next;
        }
        return values;
    }
    delete(index) {
        var node = null;
        if(this.length <= 0) {
            return undefined;
        }
        if(index === 0) {
            node = this.head;
            this.head = this.head.next;
            node.next = null;
        } else if (index === this.length -1) {
            var prev = this.traverse(index - 1) ;
            node = prev.next;
            this.tail = prev;
            prev.next = null;2
        } else if ( index < this.length-1) {
            var prev = this.traverse(index - 1) ;
            node = prev.next;
            prev.next = node.next;
            node.next = null;
        } else {
            return undefined;
        }
        this.length--;
        if(this.length === 1) {
            this.tail = this.head;
        }
        return node.value;
    }
    traverse(index) {
        let counter = 0;
        let temp = this.head;
        while(counter !== index) {
            temp = temp.next;
            counter++;
        }
        return temp;
    }
    
}

let list = new LinkedList();
list.append(0).append(1).append(2).append(3).append(4);
//list.prepend(0).prepend(-1).prepend(-2);
//list.insert(2,5).insert(3,6).insert(4,7)
console.log(list.print());
console.log(list.delete(3));

