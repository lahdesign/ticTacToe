'use strict'

// a function that takes a tray and a list of coordinate pairs
// (a tray is an array of characters, length 16)
// and returns a string representing the concatenation of the letters at each of
// the coordinates.
const boggle = function (tray, coordinatePairs) {
  // step 1. Find letter for first coordinate
}
// each row is length 4
// const rowCounter = 0 do I need another count?

let row0 = []
let row1 = []
let row2 = []

for(let i = 0; tray.length; i++) {
  if(rowCounter>= 0 && <= 2) {
    // on row 0
  } else if(i > 3 && i <=7) {
    const row1 = tray[i]
    // on row 1
  }
} else if(i > 7 && i <=11) {
  const row2 = tray[i]
  // on row 2
}
}
// Ensure tray has the correct length
// Ensure that coordinates fall within the tray
// Disallow coordinate pairs that aren't in a line
// Return the empty string if a validation fails
/*
const bigBoggle = function () {}

const superBigBoggle = function () {}
*/

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle
}
