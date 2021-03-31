//Create a function that reverses a string :

function reverse(string) {
    // Check input 
    if(!str || str.length < 2 || typeof str !== 'string') {
        return str;
    }
    var arr = string.split('');
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join('');
}

var str = 'Hi My Name is Andrei ';
str = reverse(str);
str