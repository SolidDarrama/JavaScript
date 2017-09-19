// Create the Game class
var Game = function(name){
	// Your code starts here
	this.running = false;
	this.name = name;
	this.players = [];
	this.winner = '';
	
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
				return true;
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
			var player1Hand = this.players[0].hand;
			var player2Hand = this.players[1].hand;
								
			if(player1Hand === player2Hand)
				{
					return false;
				}
				
			if(player1Hand === 'rock')
				{
					if((this.matrix.rock.indexOf(player2Hand) > -1) === true)
					{
						this.players[0].win();
						this.players[1].lose();
						this.winner = this.players[0].name;
						return 1;
					}
					else
					{
						this.players[1].win();
						this.players[0].lose();
						this.winner = this.players[1].name;
						return 2;
					}
				}
				
			if(player1Hand === 'paper')
				{
					if((this.matrix.paper.indexOf(player2Hand) > -1) === true)
					{
						this.players[0].win();
						this.players[1].lose();
						this.winner = this.players[0].name;
						return 1;
					}
					else
					{
						this.players[1].win();
						this.players[0].lose();
						this.winner = this.players[1].name;
						return 2;
					}
				}

			if(player1Hand === 'scissors')
				{
					if((this.matrix.scissors.indexOf(player2Hand) > -1) === true)
					{
						this.players[0].win();
						this.players[1].lose();
						this.winner = this.players[0].name;
						return 1;
					}
					else
					{
						this.players[1].win();
						this.players[0].lose();
						this.winner = this.players[1].name;
						return 2;
					}
				}

			if(player1Hand === 'lizard')
				{
					if((this.matrix.lizard.indexOf(player2Hand) > -1) === true)
					{
						this.players[0].win();
						this.players[1].lose();
						this.winner = this.players[0].name;
						return 1;
					}
					else
					{
						this.players[1].win();
						this.players[0].lose();
						this.winner = this.players[1].name;
						return 2;
					}
				}

			if(player1Hand === 'spock')
				{
					if((this.matrix.spock.indexOf(player2Hand) > -1) === true)
					{
						this.players[0].win();
						this.players[1].lose();
						this.winner = this.players[0].name;
						return 1;
					}
					else
					{
						this.players[1].win();
						this.players[0].lose();
						this.winner = this.players[1].name;
						return 2;
					}
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