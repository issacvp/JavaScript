class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // append(data){
    //     if( this.head === null) {
    //         this.head = new Node(data);
    //         return;
    //     } 
    //     let curr = this.head;
    //     while(curr.next !== null) {
    //         curr = curr.next;
    //     }
    //     curr.next = new Node(data);
    // }

    // contains(data){
    //     let curr = this.head;
    //     while(curr !== null){
    //         if(curr.data === data){
    //             return true;
    //         }
    //         curr = curr.next;
    //     }
    //     return false;
    // }
    // print(){
    //     let curr = this.head;
    //     let str = '';
    //     while(curr !== null){
    //         str += curr.data +'->';
    //         curr = curr.next;
    //     }
    //     console.log(str);
    // }

    append(data) {
        if (this.head === null) {
            this.head = new Node(data);
            return;
        }
        this._append(data, this.head);
    }
    _append(data, curr) {
        if (curr.next === null) {
            curr.next = new Node(data);
            return;
        }
        this._append(data, curr.next);
    }

    contains(data) {
        return this._contains(this.head, data);
    }
    _contains(curr, data) {
        if (curr === null) return false;
        if (curr.data === data) return true;
        return this._contains(curr.next, data);
    }
    // deleteValue(head, target) {
    //     // Edge cases : 
    //     // 1) Delete first node 
    //     if(head.val === target){
    //         return head.next;
    //     }

    //     let prev = null;
    //     let curr = null;
    //     while (curr !== null) {
    //         if (curr.val === target) {
    //             prev.next = curr.next;
    //             break;
    //         }
    //         prev = curr;
    //         curr = curr.next;
    //     }
    //     return head;
    // } 
    deleteValue(head, target) {
        if(head.val === target) {
            return head.next;
        }
        this._deleteValue(head, null, target);
        return head;
    }
    _deleteValue( curr, prev, target) {
        if(curr === null) {
            return;
        }


        if(curr.val === target) {
            prev.next = curr.next;
            return;
        }

        this._deleteValue(curr.next, curr);

    }
    // reverse(){
    //     let prev = null;
    //     let curr = this.head;
    //     while(curr !== null ){
    //         var next = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = next;
    //     }
    //     this.head = prev;
    // }
    reverse() {
        this.head = this._reverse(this.head, null);
    }
    _reverse(curr, prev) {
        if(curr === null){
            return prev;
        }
        const next = curr.next;
        curr.next = prev;
        return this._reverse(next, curr);
    }
    removeDuplicates(){
        var memo = {};
        var temp = this.head.next, prev = this.head;
        memo[prev.data] = true;
        while(temp !== null) {
            if(temp.data in memo) {
                prev.next = temp.next;
                temp = prev.next;
            } else {
                memo[temp.data] = true;
                prev = prev.next;
                temp = prev.next;
            }
        }
    }
    print() {
        const output = this._print(this.head);
        console.log(output);
    }
    _print(curr) {
        if (curr === null) {
            return '';
        }
        return curr.data + '->' + this._print(curr.next);
    }
}


const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('a');
list.append('c');
list.append('a');
list.append('b');
list.print();
//list.reverse();
//list.print();
list.removeDuplicates();
list.print();

