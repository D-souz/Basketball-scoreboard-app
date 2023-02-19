// getting the number from the  home screen
let displayHome = document.getElementById('counter1');
// console.log(display);

// creating a counter variable for home
let countHome = 0;

function addOneHome() {
// gets the count value and adds one to it and displays
countHome += 1;
// console.log(count);
displayHome.textContent = countHome;
// console.log(display.textContent = count);
}
function addTwoHome() {
   // gets the count value and adds two to it and displays 
   countHome += 2;
   displayHome.textContent = countHome;
}
function addThreeHome() {
  // gets the count value and adds three to it and displays 
  countHome += 3;
  displayHome.textContent = countHome;
}

// getting the number from the  guest screen
let displayGuest = document.getElementById('counter2'); 
// console.log(displayGuest);

// Creating a counter variable for guests
let countGuest = 0; 

function addOneGuest() {
    // gets the count value and adds two to it and displays 
    countGuest += 1;
    displayGuest.textContent = countGuest;
 }
function addTwoGuest() {
    // gets the count value and adds two to it and displays 
    countGuest += 2;
    displayGuest.textContent = countGuest;
 }
 function addThreeGuest() {
    // gets the count value and adds two to it and displays 
    countGuest += 3;
    displayGuest.textContent = countGuest;
 }

//  Resetting the scoreboard
function reset() {
    // console.log(document.querySelector('#reset'));

    // resetting the guest numbers
    countGuest = 0;
    displayGuest.textContent = countGuest;

    // Resetting the home numbers
    countHome = 0;
    displayHome.textContent = countHome;
}