/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

var heroGender;

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/
function newAdventure (){

if (Math.random() < 0.5) {
	heroGender = "heroine";
} else {
	heroGender = "hero";
}
var chosenMonster = chosen(monsters);
var chosenWeapon = chosen(weapons);
var chosenAction = chosen(actions);


var output = "Armed with only their " +
	chosenWeapon +
	" our " +
	heroGender +
	" " +
	chosenAction +
	" the evil " +
	chosenMonster +
	"!";

function chosen(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("adventure").innerText = output;
}
// var element = document.getElementById("new_adventure");

// element.onclick = newAdventure;
document.getElementById("new_adventure").onclick = newAdventure
window.onload = newAdventure;

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/
