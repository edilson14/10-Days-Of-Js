function getLetter(s) {
    var letter = '';
    
    const caseA = 'aeiou' 
    const caseB = 'bcdfg'
    const caseC = 'hjklm'
    const caseD = 'npqrstvwxyz'
    
    switch (true) {
        case caseA.includes(s.charAt(0)):
            letter = 'A'
            break
        case caseB.includes(s.charAt(0)):
            letter = 'B'
            break
        case caseC.includes(s.charAt(0)):
            letter = 'C'
            break
        case caseD.includes(s.charAt(0)):
            letter = 'D'
            break
    }

    return letter
}