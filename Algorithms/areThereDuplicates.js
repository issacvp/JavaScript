/*function areThereDuplicates(...args){
    var map = {};
    for(let c of args){
        if(map[c]){
            return true;
        }
        map[c] = 1;
    }
    return false;
}*/

function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
}
areThereDuplicates(1,2,3);