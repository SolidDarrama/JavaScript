// Initialize the game
var my_game = new Game();

//variables
var player1Name = "", player2Name = "";//players names
var hand1, hand2;//player1 and player2 hands
var game = new Game("Guadarrama, Jose");

// Create function that will "roll" user choices; that is, a function that will randomly choose a hand for each player
function roll() {
	var hands = Array('rock','paper','scissors','lizard','spock');//array
	hand1 = hands[Math.floor(Math.random()*hands.length)] //array randomizer
	hand2 = hands[Math.floor(Math.random()*hands.length)] //array randomizer
	document.getElementById('player1Choice').className = hand1; //change class string value to random array string output
	document.getElementById('player2Choice').className = hand2; //change class string value to random array string output
}
// Fade in the body of the document using jQuery effects
$(document).ready(function() {
    $('#mainBody').fadeIn();
});
// Set the name of the game using jQuery DOM maniplulation
document.getElementById("gameName").textContent="Guadarrama, Jose";
// Bind to the button in the middle of the screen so that it plays the game when clicked. Use jQuery events.
$("button").click(function() {
			var timer; //'timer' variable - for setInterval and clearInterval
			var i = 3; //variable to handle character length in the upcoming while loop
			document.getElementById("gameController").disabled = true; //disable the button during on game - calculation
		// Add 2 new players if there are none already. You can use a loop to make it easy.
			while(player1Name.length < i)
			{
				do{
					player1Name = prompt("Player 1, enter your name...\nNOTE: Name must be 3 or more characters!");
				}
				while(player1Name == null || player1Name == "" );
			}
			while(player2Name.length < i)
			{
				do{
					player2Name = prompt("Player 2, enter your name...\nNOTE: Name must be 3 or more characters!");
				}
				while(player2Name == null || player2Name == "" );
			}
			document.getElementById("player1Name").textContent = player1Name;
			document.getElementById("player2Name").textContent = player2Name;
		// Start rolling 4 times a second by using the "setInterval" function and the "roll" function you created above.
			$(document).ready(function()
			{
				timer = setInterval( function() 
				{
					for(i=0; i<5; i++) //for-loop: to handle rolling 4 times
					{
						roll();
					}
				}, 250);
			});
		// Set the "game status" and "game controller" text to "rolling" and 'vs"
			document.getElementById("gameStatus").textContent="( ͡° ͜ʖ ͡°).....rolling.....( ͡° ͜ʖ ͡°)";
			document.getElementById("gameController").textContent="vs";
		// Set a countdown timer for 3 seconds to run this code. Use the "setTimeout" function to do this.
			function countdown(){
			// Stop the roll. Use "clearInterval" to do it.
				clearInterval(timer);
			// Set the hand of each player and find out who won. Look at the "class" attribute of each player's hand to get the needed value.
				game.addPlayer(player1Name);
				game.addPlayer(player2Name);
				game.setHand('1',hand1);
				game.setHand('2',hand2);
				game.getWinner();
			// Set the "game status" and "game controller" to "Player X Won!" and "Play Again".
				if(hand1 === hand2)//to handle a tie situation
				{
					document.getElementById("gameStatus").textContent="ಠ╭╮ಠ.....No Winner.....ಠ╭╮ಠ";
				}
				else
				{
					document.getElementById("gameStatus").textContent="(づ｡◕‿‿◕｡)づ   Player " + game.winner + " Won!   (づ｡◕‿‿◕｡)づ";
				}
				document.getElementById("gameController").textContent="Play Again";
			// Update the "wins, losses, and rate" numbers on the screen. The "player" objects will have this information. Do it in a loop.
				document.getElementById("player1Wins").textContent = game.players[0].wins;
				document.getElementById("player2Wins").textContent = game.players[1].wins;
				document.getElementById("player1Losses").textContent = game.players[0].losses;
				document.getElementById("player2Losses").textContent = game.players[1].losses;
				document.getElementById("player1WinRate").textContent = game.players[0].rate;
				document.getElementById("player2WinRate").textContent = game.players[1].rate;
				//button
				document.getElementById("gameController").disabled = false; //re enable the button
			}
			setTimeout(countdown, 3000);
	
		});
