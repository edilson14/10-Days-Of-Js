/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou'
    let consonants = ''
    for (let letter of s) {
        if (vowels.includes(letter)) {
            console.log(letter)
        } else {
            consonants +=letter + '\n'
        }
    }
    console.log(consonants)
}