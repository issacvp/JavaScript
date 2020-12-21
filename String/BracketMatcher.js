function bracketMatcher(str) {
    var stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } if (char === ')' || char === ']' || char === '}') {
            if(stack.length === 0){
                return 0;
            }
            const charStack = stack.pop();
            if (charStack === '(' && char !== ')') {
                return 0;
            }
            if (charStack === '{' && char !== '}') {
                return 0;
            }
            if (charStack === '[' && char !== ']') {
                return 0;
            }
        }
    }
    if (stack.length === 0) {
        return 1;
    } else {
        return 0;
    }
}


console.log(bracketMatcher("the color re(d))()(()"));