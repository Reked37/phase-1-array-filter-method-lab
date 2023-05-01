const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, str){
    const result = arr.filter(driversName => driversName.toLowerCase() === str.toLowerCase())
    return result
}

function fuzzyMatch(arr,strLetter){
    const result = arr.filter(letter=>letter.startsWith(strLetter))
    return result
}

function matchName (arr, str){
    const result = arr.filter(driversMatch => driversMatch.name === str)
    return result
}