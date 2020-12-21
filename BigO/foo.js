function foo(n) {
    for(let a=0; a<n/2;a++){   // --> n/2 times 
        console.log(a);
    }                            
                               // + 
    for(let b=0;b<n;b++) {          //  --> n times 
        for(let c = 0; c< n ;c++) {   // --> n times 
            console.log(b+"," +c);
        }
    }
};

foo(10);


/*
 O(n+n^2) ==> O(n^2)
*/