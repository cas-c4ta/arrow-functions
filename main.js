const myArr = [
  { x: 10, y: 24 },
  { x: 72, y: 12 },
  { x: 39, y: 74 },
  { x: 41, y: 33 }
]

// Herkömmlicher loop (for of)
// for (position of myArr) {
//   console.log(position.x)
// }

// forEach loop
myArr.forEach(a => { console.log(a.x) })

for (let i = 0; i < myArr.length; i++) {

}

// Filtern auf bestimmte Eigenschaften mit map
const xPositions = myArr.map((a) => {return a.x})
const yPositions = myArr.map((a) => {return a.y})
console.log(xPositions)
console.log(yPositions)

// Higher Order Functions in «Eloquent JavaScript»
// https://eloquentjavascript.net/05_higher_order.html