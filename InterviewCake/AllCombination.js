function allCombination(remainder, denominators, index = 0) {
    if (remainder === 0) return 1;
    let sum = 0;
    console.log(remainder, denominators.slice(index));
    for (let i = index; i < denominators.length; i++) {
        let newRemainder = remainder - denominators[i];
        if (newRemainder >= 0) {
            sum += allCombination(newRemainder, denominators, i);
        }
    }
    return sum;
}

console.log(allCombination(4, [1, 2, 3], 0));

function changePossibilitiesBottomUp(amount, denominations) {
    // Initialize an array of zeros with indices up to amount
    const waysOfDoingNcents = new Array(amount + 1).fill(0);
    waysOfDoingNcents[0] = 1;

    denominations.forEach(coin => {
        for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
            const higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
        waysOfDoingNcents
    });
    
    return waysOfDoingNcents[amount];
}

console.log(changePossibilitiesBottomUp(5, [1, 3, 5]));