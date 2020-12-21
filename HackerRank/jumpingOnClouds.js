function jumpingOnClouds(c){
    if(!c.length || c.length <2){
        return 0;
    } else {
        let i=0,j=1,k=2;
        let steps=0;
        while(k<c.length){
           if((c[j]==c[k] && c[j]==0)||(c[j]==1 &&c[k]==0) ){
               i=k;
               j=k+1;
               k=k+2;
           } else {
               i=j;
               j=k;
               k=k+1;
           }
           steps++;
        }
        if(j<c.length){
            steps++;
        }
        return steps;
    }
}

console.log(jumpingOnClouds([0,1,0,0,0,1,0,0,0,0,1,0]));