// Create the Game class
var Game = function(name){
	// Your code starts here
	this.running = false;
	this.name = name;
	this.players = [];
	this.winner = 'NA';
	
	this.choices = ['rock','paper','scissors','lizard','spock'];
	
	this.addPlayer = function(playerName)
		{
		if(this.players.length <= 1)
			{
			var p = new Player(playerName);
			this.players.push(p);
			return true;
			}
		else
			{
			alert('Only two players.');
			return false;
			}
		}
		
	this.getPlayer = function(playerNumber)
		{
		var valueAtIndex = this.players[playerNumber-1];
		return valueAtIndex;
		
			//NOTES
			// 2-3 lines of code
			//getPlayer had to do is look in the array, and return the requested player object
		}
		
	this.setHand = function(playerNumber, playerHand)
		{
			if (this.choices.indexOf(playerHand) > -1) 
			{
				this.players[playerNumber-1].hand = playerHand;
				return playerHand;
				//In the array!
			} 
			else 
			{
				alert('Input not found.');
				return false;
				//Not in the array
			}
			
			//NOTES
			//set hand 1 rock, go find the player 1 object; set the player 1 hand properrty to string "rock"
			//set the player ones hand property to string
		}
		
	this.getWinner = function()
		{
			var pH1 = this.players[0].hand;
			var pH2 = this.players[1].hand;
									
			/*if((this.matrix.pH1.indexOf(pH2) > -1) === true)
			{
				this.players[0].win;
				this.players[1].lose;
				this.winnner = this.players[0].name;
				return 1;
			}
			else if((this.matrix.pH2.indexOf(pH1) > -1) === true)
			{
				this.players[1].win;
				this.players[0].lose;
				this.winnner = this.players[1].name;
				return 2;
			}
			else
			{
				return false;
			}*/

			//this is temporary
			if((this.matrix.rock.indexOf('lizard') > -1) === true)
			{
				this.players[1].win;
				this.players[0].lose;
				this.winnner = this.players[1].name;
				return 2;
			}
			else
			{
				return false;
			}
		}
	
	this.matrix = 
		{
			rock: ['scissors','lizard'],
			paper: ['rock','spock'],
			scissors: ['lizard','paper'],
			lizard: ['spock','paper'],
			spock: ['rock','scissors']
		};
		
	// Your code ends here
}