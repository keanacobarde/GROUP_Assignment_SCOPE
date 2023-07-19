//ONE - C is for Cookie 
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//TWO - Conjunction Function 
let conjoinedWord; 
const conjunction = function (firstWord, secondWord) {
  conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

//Three - Mob Squad
const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
    }

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
})

console.log(HTMLRepresentation);

//Four - Simon Says
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocation; 

for (const location of locations) {
if (location[0] > 2) {
  invalidLocation = true;
}

if (invalidLocation) {
  console.log("This location is invalid");
}
}

//Challenge - Lambda Llama

const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)
  let llamas;
  let suffix = " the llama";  

const namer = function () {
  llamas = possibleNames[randomizer];
  return llamas + '' + suffix; 
}

return namer;
}

nameMaker = llamaNamer()
console.log(nameMaker())

