function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function (head) {
    if (!head) return false;
    if (!head.next) return false;
    var first = head;
    var second = head;
    while (first && second) {
        if (!first.next || !second.next) return false;
        if (!first.next.next) return false;
        first = first.next.next;
        second = second.next;

        console.log(first.val, second.val)
        if (first == second) {
            //return true;
            first = head;
            while (first != second) {
                first = first.next;
                second = second.next;
            }
            return first;
        }
        
    }
    return null;
};

// var head = null;
// var a = new ListNode(4);
// var b = new ListNode(1);
// var c = new ListNode(6);
// var d = new ListNode(4);
// var e = new ListNode(5);
// head = a;
// head.next = b;
// b.next = c;
// c.next = d;
// d.next = b;

//console.log(detectCycle(head).val); 

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let lengthA = _getLength(headA);
    lengthA
    let lengthB = _getLength(headB);
    lengthB
    let diff = Math.abs(lengthA-lengthB);
    diff
    let longest = null, shortest = null;
    if(lengthA > lengthB) {
        longest = headA;
        shortest = headB;
    } else {
        longest = headB;
        shortest = headA;
    }
    console.log(longest.val)
    console.log(shortest.val)
    while(diff) {
        console.log(longest.val)
        longest = longest.next;
        diff--;
    }
    while(longest && shortest) {
        if(longest == shortest) return longest;
        longest = longest.next;
        shortest = shortest.next;
    }
    return null;
};

var _getLength = function(head) {
    let counter = 0;
    let temp = head;
    while(temp) {
        temp = temp.next;
        counter++;
    }
    return counter;
}

var a = new ListNode(4);
var b = new ListNode(1);
var c = new ListNode(6);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;


var f = new ListNode(5);
var g = new ListNode(6);
var h = new ListNode(1);
f.next = g;
g.next = h;
h.next = c;

console.log(getIntersectionNode(a,f).val);