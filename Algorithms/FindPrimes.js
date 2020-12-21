//This is the basic idea of the prime numbers; Find all numbers which can not divide by any numbers except 1 and itself
function findPrimes_Basic(n){
    for(let  i=3; i<=n;i++){
        var isPrime = true;
        for(let j=2; j<i;j++){
           if(i%j==0){
               isPrime = false;
           }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

// IsPrime() fucntion 
function isPrime(n){
    var isPrimeNum = true;
    for(let i=2;i<n;i++){
        if(n%i ==0){
            isPrimeNum = false;
        }
    }
    
    return isPrimeNum;    
}

/*
Sieve of erastosthens

Create a list of consecutive integers from 2 to n: (2, 3, 4, …, n).
Initially, let p equal 2, the first prime number.
Starting from p2, count up in increments of p and mark each of these numbers greater than or equal to p2 itself in the list. These numbers will be p(p+1), p(p+2), p(p+3), etc..
Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this number (which is the next prime), and repeat from step 3.

The outer loop has time complexity of O(N).

Inside the loop goes like this 
(N/2  + n/3 + n/5 +n/7)  -> N(1/2 +1/3 +1/7 +1/11)   

The time complexity of a harmony (1/2 + 1/3 +1/4 +1/5 +1/7)   --> log(n)  

Here we just have all the prime numbers 

So the time complexity is O(logn) --> More optimized O(loglogn)

Considering the outer loop  O(loglogn)


*/

function findPrimes_Sieve_Of_Erastosthens(n){
    var boolArr = Array(n+1).fill(true);
    for(let i=2; i*i<=n;i++){
        if(boolArr[i]){
            for(let j=2;i*j<=n;j++){
                if(boolArr[i*j]){
                    boolArr[i*j]=false;
                }
            }
            console.log(i+":"+boolArr);   
        }
    }
    for(let i=2; i<boolArr.length;i++){
       if(boolArr[i]){
            console.log(i);
       } 
    }
}

/*
Sieve of Sundaram To find all primes except 2 (which is the only even prime)

Start with a list of the integers from 1 to n. From this list, remove all numbers of the form i + j + 2ij where:

Eleminate all elements which satisfies below
i,j E n/2+1, 1<=i<=j
i+j+2ij <=n/2

Then eliminate all above elements as i then 
2*i+1 <= n 

are prime numbers 

*/
function findPrimes(n){
    var boolArr = Array(n/2+1).fill(true);
    for(let i=1;i<=n/2;i++){
        for(let j=1; (i+j+2*i*j)<=n/2;j++){
            boolArr[i+j+2*i*j] = false;
        }
    }
    for(let i=1; i<=n/2;i++){
        if(boolArr[i]){
            console.log(2*i+1);
        }
    }
}

findPrimes(1000);