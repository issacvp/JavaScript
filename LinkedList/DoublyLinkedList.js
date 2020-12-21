class Node {
    constructor(prev=null, next = null, data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    insesrtAtBeginning = function(data){
        let newNode = new Node(data);
        if(!head){
            head.prev = null;
        } else {
            head.prev = newNode;
        }
        newNode.next = head;
        head = newNode;
        return head;
    }
    insertAtEnd = function data(){
        let newNode = new Node(data);
        if(!head){
            head.prev = null;
            head = newNode;
            return head;
        }
        let tail = head;
        while(tail.next !=null){
            tail = tail.next;
        }
        tail = newNode;


    }
}