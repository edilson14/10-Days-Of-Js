function getMaxLessThanK(n, k) {
    let maxValue = 0
    for (let i = n; i > 0; i--){
        for (let j = i - 1; j > 0; j--){
            if ((j & i) < k && (i & j) > maxValue)
                maxValue = (i&j)
        }
    }
    return maxValue
}