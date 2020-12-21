function sudoku2(grid) {
    if(grid.length==0){
        return false;
    } else {
        var sameLen = true;
        for( let row of grid){
            if(row.length != grid.length){
                sameLen = false;
                break;
            }
        }
        if(sameLen){
            for(let i=0; i<grid.length;i++){
                for(let j=0;j<grid.length;grid++){
                    
                }
            }
        }else{
            return false;
        }
    }
}

console.log(sudoku2([['.','.'],['.']]));