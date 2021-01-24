
const assert = require('assert').strict;
// class Node {
//     constructor(prev=null, next = null, data) {
//         this.data = data;
//         this.prev = null;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor(){
//         this.head = null;
//     }
//     insesrtAtBeginning = function(data){
//         let newNode = new Node(data);
//         if(!head){
//             head.prev = null;
//         } else {
//             head.prev = newNode;
//         }
//         newNode.next = head;
//         head = newNode;
//         return head;
//     }
//     insertAtEnd = function data(){
//         let newNode = new Node(data);
//         if(!head){
//             head.prev = null;
//             head = newNode;
//             return head;
//         }
//         let tail = head;
//         while(tail.next !=null){
//             tail = tail.next;
//         }
//         tail = newNode;


//     }
// }

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
     constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
       var node = new Node(val);
       if(this.head){
           this.tail.next = node;
           node.prev = this.tail;
           this.tail = node;
       } else {
           this.head = node;
           this.tail = node;
       }
       this.length++;
       return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        
        var temp = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
}

var dll = new DoublyLinkedList();
dll.push(5);
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.tail.val)
console.log(dll.head.prev)
dll.push(10);
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.tail.val)
console.log(dll.head.next.prev.val)
dll.push(15);
console.log(dll.length)
console.log(dll.head.val)
console.log(dll.tail.val)
console.log(dll.tail.prev.val)
console.log(dll.head.next.next.val)

console.log(dll.pop().val)
console.log(dll.length);
console.log(dll.pop().val)
console.log(dll.length);
console.log(dll.pop().val)
console.log(dll.length);
console.log(dll.pop())


