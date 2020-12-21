function sockMerchant(n, ar){
  if(!ar.length || ar.length <2){
      return 0;
  } else {
      var obj = {};
      for(let i=0; i<ar.length;i++){
         obj[ar[i]] = (obj[ar[i]]||0)+1;
      }
      var pairs =0;
      keys(obj).forEach(function(key){
         pairs +=Math.floor(obj[key]/2); 
      });
      return pairs;
  }
}

console.log(sockMerchant(9, [10,20]));