function zoom(n) {
    if(n===0){
        console.log('liftoff');
        return;
    }
    console.log(n);
    zoom(n-1);
}

zoom(10);

// zoom(10) <-- zoom(9) <-- zoom(8) <-- zoom(7) <-- zoom(6) <-- zoom(5) <-- zoom(4) <-- zoom(3) <-- zoom(2) <-- zoom(1) <-- zoom(0)
// Time : O(n) 
// Space : O(n)   recursive stack space 


function zap(n) { 
    if(n<1) {
        console.log("liftoff") ;
        return;
    }
    console.log(n);
    zap(n-2);

}

zap(10);

// zap(10) <-- zap(8) <-- zap(6) <-- zap(4) <-- zap(2) <-- zap(0)
// O(n/2) ==> O(n* (1/2)) ==> O(n) 
