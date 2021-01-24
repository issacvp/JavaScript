function capitalizeWords(arr) {
    // Try 1
    // var newArr = [];
    //   for(let str of arr) {
    //       newArr.push(str.toUpperCase());
    //   }
    // Try 2
    //var newArr = [];
    //   arr.forEach(str => {
    //       newArr.push(str.toUpperCase());
    //   })
    //   return newArr;
    return arr.map(str => str.toUpperCase());
}

    // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

    