const dice = document.getElementById('dice-btn');

function diceGame() {
	//DICE 1
	let randomDice = Math.floor((Math.random() * 6) + 1);
    let diceLocation = `img/Dice-${randomDice}.png`;
	let img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
	
	//DICE 2
	let randomDice2 = Math.floor((Math.random() * 6) + 1);
    let diceLocation2 = `img/Dice-${randomDice2}.png`;
	let img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2 && randomDice==6) {
		document.querySelector("h1").innerHTML = " &#128681; Player 1 Win !";
	}
	else if (randomDice < randomDice2 && randomDice2 == 6) {
		document.querySelector("h1").innerHTML = "Player 2 Win ! &#128681; ";
	}
	else if (randomDice = randomDice2 && randomDice==6) {
		document.querySelector("h1").innerHTML = "&#128681; Draw! &#128681;";
	}
	else {
		document.querySelector("h1").innerHTML = "No one can win"
	}
	dice.innerHTML = "Play Again"
}