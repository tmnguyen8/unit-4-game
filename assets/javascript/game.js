// GLOBAL VARIABLES
// *************************************
// targetNum is randomize from 19-120 inclusive
var targetNumLow = 19; //inclusive of 19
var targetNumHigh = 120+1; //inclusive of 120 (plus 1 to consider the round down of function Math.floor)
var targetNum =  Math.floor(Math.random() * (targetNumHigh - targetNumLow)) + targetNumLow;

// textContent back to HTML id targetNum
$("#targetNum").text(targetNum);

var totalScore = 0;

// Randomize the crystal and the score of each crystal
var crystalScoreLow = 1;
var crystalScoreHigh = 12;

// available crystal images
var crystalAvailable = [
    "assets/images/crystal1.jpg",
    "assets/images/crystal2.jpg",
    "assets/images/crystal3.jpg",
    "assets/images/crystal4.jpg",
];

// Score board
var roundResult = 0;
var totalScore = 0;
var numWin = 0;
var numLoss = 0;

// FUNCTION / EXECUTION
// *************************************
// shuffle() function randomize the array
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

// Creating images of randomized cystal images and randomized crystal score value data attribute
for (var i = 0; i < crystalAvailable.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image img-responsive");

    // Each imageCrystal will be given a src link to the crystal image
    // shuffle(crystalAvailable); // shuffle or reorders the crystal images.
    imageCrystal.attr("src", crystalAvailable[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (crystalScoreHigh - crystalScoreLow)) + crystalScoreLow);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".myCrystals").append(imageCrystal);
};

//  When the crystal image is clicked
$(".crystal-image").on("click", function() {

// Determining the crystal's value requires us to extract the value from the data attribute.
// Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);
// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from every crystal adds to the global counter.
totalScore += crystalValue;

// All of the same game win-lose logic applies. So the rest remains unchanged.
$("#totalScore").text(totalScore);

if (totalScore === targetNum) {
$("#totalScore").text(totalScore);
    alert(`You win!!! your total score is ${totalScore} and the target number is ${targetNum}`);
    numWin ++;
    $("#numWin").text(numWin);
    totalScore = 0;
    $("#totalScore").text(totalScore);
}

else if (totalScore >= targetNum) {
    
    alert(`You lose!!! your total score is ${totalScore} and the target number is ${targetNum}`);
    numLoss ++;
    $("#numLoss").text(numLoss);
    totalScore = 0;
    $("#totalScore").text(totalScore);
}

});

// TO DO WHEN I HAVE TIME - IMPROVEMENT
// *************************************
// Add flip functionality to flip the image and reveal the score of each crystal
//      https://github.com/nnattawat/flip
//      https://www.ostraining.com/blog/coding/jquery-flip/
