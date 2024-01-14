/*
  Name:        Popular songs quiz
  Purpose:     Finds how many popular songs the quiz-taker sings, as well as what identification they would recieve on a normality scale.

  Author:      Shehraan Hafiz
  Created:     19-Dec-2022
  Updated:     25-Dec-2022
*/

//This is to allow for proper prompting without repitition errors
const readline = require("readline-sync")
/**
This functions takes in the number(s) of song matches that the quiz-taker needs in order to get the corresponding identification. Then, it checks if any of the numbers of song matches, have been recieved by the quiz taker. If it has, then it will output the corresponding identification

@param {number} firstRatingNumber - A possible rating number that can be checked for
@param {number} secondRatingNumber - Another possible rating number that can be checked for (If applicable)

@returns The corresponding identification
*/
const musicRater =
  (firstRatingNumber, secondRatingNumber, identification) => {
    if (matchesNumber == firstRatingNumber || matchesNumber == secondRatingNumber) {
      return console.log("\nAccording to this, " + identification)
    }
  };
//Declaring the variable that shows the number of matches that were found between the popular music and the songs that the quiz taker themself, sings
let matchesNumber = 0;
//Creating an array to store the matched songs
const matches = [];
//Array that stores all the popular songs
const popularSongs = ["As it was", "Calm down", "Magical gift", "Left and right", "Bam bam", "Rock bottom", "Last last", "Hold my hand", "Light switch", "Don't you worry"];
//Asks quiz-taker for their top 10 favourite songs to sing. This asks the question once and leaves it on the top of the page, so that the user can answer without the question being repeated again and again
console.log("See if your musical taste is normal, based on what songs you sing. Enter your top 10 favorite songs to sing")
for (let i = 0; i < 10; i++) {
  //Takes the song name and makes sure that the characters are formatted properly
  let answer = (readline.question("")).toLowerCase();
  if (answer !== NaN) {
    firstLetter = answer[0].toUpperCase();
    answer = answer.replace(answer[0], firstLetter);
    //Checks if entered song is found in the popular songs array and if it is, the code removes it from that list and puts it in the matched songs array. It also increases the number of matches found by adding it to the "matchesNumber" variable 
    for (let j = 0; j < popularSongs.length; j++) {
      if (answer == popularSongs[j]) {
        popularSongs.splice(popularSongs.indexOf(answer), 1)
        matches.push(answer)
        matchesNumber++
      }
    }
  }
}
//Informs the quiz-taker of popular songs which are not in their list of top 10 songs to sing, if there are any
if (matchesNumber !== 10) {
  console.log("Songs that the general public loves but you don't: " + popularSongs)
}
//Tells the quiz-taker, which songs they sing, are on the popular songs list, and numbers them. It also tells them if there are none.
console.log("\nSongs that both you, and the general public love:")
if (matchesNumber !== 0) {
  for (let i = 0; i < matchesNumber; i++) {
    console.log(i + 1 + ") " + matches[i])
  }
}
else {
  console.log("None")
}
//Using the music rater function, to identify people based on their musical tastes by checking how many matches there are, and outputting the corresponding identification.
musicRater(0, 1, "your taste in songs, is extremely bizarre and vastly different from most people.")
musicRater(2, 3, "your music taste is quite bizarre and vastly different from most people.")
musicRater(4, 5, "your musical choices are quite abnormal, if not bizarre.")
musicRater(6, 7, "your musical preferences are relatively normal, while still having some uniqueness to them")
musicRater(8, 9, "you sing all the popular music and are always upto date with the latest hits.")
musicRater(10, "N/A", "you searched this up, didn't you? Quite clever!")