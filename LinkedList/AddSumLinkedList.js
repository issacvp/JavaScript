/*

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

var addTwoNumbers = function(l1, l2) {
    var num1=0, mul1=1;
    while(l1!=null){
        num1 = num1+mul1*l1.val;
        mul1 *=10;
        l1 = l1.next;
    }
    var num2=0,mul2=1;
    while(l2!=null){
        num2 = num2+mul2*l2.val;
        mul2 *=10;
        l2 = l2.next;
    }
    num1 +=num2;
    var head = null;
    var arr = [];
    while(num1/10 >0){
        arr.push(num1%10);
        num1 = Math.floor(num1/10);
    }
    for(let i=arr.length-1; i>=0; i--){
        var newNode = new ListNode(arr[i]);
        newNode.next = head;
        head = newNode;
    }
    return head;
    
};
*/

{
    function ListNode(val){
        this.val = val;
        this,next = null;
    }
    var l1 = null;
    var newNode = new ListNode(5);
    newNode.next = l1;
    l1 = newNode;
    newNode = new ListNode(0);
    newNode.next = l1;
    l1 = newNode;
    newNode = new ListNode(0);
    newNode.next = l1;
    l1 = newNode;
   
    var l2 = null;
    var newNode = new ListNode(5);
    newNode.next = l2;
    l2 = newNode;
    newNode = new ListNode(0);
    newNode.next = l2;
    l2 = newNode;
    newNode = new ListNode(0);
    newNode.next = l2;
    l2 = newNode;
   
    function addSum(l1, l2){
        var c =0;
        var p = null;
        var node = new ListNode(0);
        p = node;
        while(l1!=null || l2 !=null || c!=0){
           if(l1!=null){
              c+=l1.val;
              l1 = l1.next;
           }
           if(l2!=null){
               c+=l2.val;
               l2 = l2.next;
           }
           p.next = new ListNode(c%10);
           c = Math.floor(c/10);
           p = p.next;
        }
        return node.next;
    }
   
    var l3 = addSum(l1,l2);
    while(l3!=null){
        console.log(l3.val);
        l3 = l3.next;
    }
   
   }