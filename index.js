const names = [
  'Mr. Fahri',
  'Mr. Abdul',
  'Mrs. Josephhine',
  'Mr. Joseph',
  'Mr. Paul',
  'Mrs. Paula',
  'Mr. Hakim',
]

console.log(names)

//Display names
let names_mapped = names.map(name => {
  return name + ' was mapped'
})
let names_loopped = names.forEach(name => {
  console.log(name + ' was looped')
  return name + ' was looped'
})

console.log('names mapped', names_mapped)
console.log('names looped', names_loopped)

//Display all names with Mr. title
let males = names
  .filter(name => name.includes('Mr.'))
  .map(name => {
    return name + ' (name)'
  })
console.log('males', males)

//Search a name inside the list of names

let searchName = person => {
  const foundName = names.find(name => {
    return name.toLowerCase().includes(person)
  })
  return foundName
}

let personFound = searchName('abdul')
console.log('person found ', personFound)

//Combine two-arrays
const names1 = ['Mr. Fahri', 'Mr. Abdul', 'Mrs. Josephhine']
const names2 = ['Mr. Joseph', 'Mr. Paul', 'Mrs. Paula', 'Mr. Hakim']

const combinedNames = names1.concat(names2)
combinedNames.map(name => {
  console.log(name)
})

//Remove non-string value in the array

const namesBadData = [
  'Mr. Fahri',
  null,
  undefined,
  'Mr. Abdul',
  24,
  'Mrs. Josephhine',
  'Mr. Joseph',
  'Mr. Paul',
  32,
  'Mrs. Paula',
  7,
  22,
  'Mr. Hakim',
]

const cleanDataNames = namesBadData.filter(data => typeof data === 'string')
console.log(cleanDataNames)
