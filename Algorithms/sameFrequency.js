function sameFrequency(m,n){
    var map1 = {}, map2={};
    while(m>1){
        map1[m%10] = (map1[m%10]||0)+1;
        m = Math.floor(m/10);
    }
    while(n>1){
        map2[n%10] = (map2[n%10]||0)+1;
        n = Math.floor(n/10);
    }
    for(key in map1){
        if(map1[key]!==map2[key]){
            return false;
        }
    }
    return true;
}
sameFrequency(234,432);