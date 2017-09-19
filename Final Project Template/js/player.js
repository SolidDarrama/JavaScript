// Create the Player class
var Player = function(name){
	// All your code starts here
		//Edit by Jose Guadarrama
		//Date 4.7.2017
		this.name = name;
		this.hand = false;
		this.wins = 0;
		this.losses = 0;
		this.played = 0;
		this.rate = 0;

	//bookmark: 01 Introduction to Objects I - 24. Constructors With Methods
    this.lose = function(){
        this.losses += 1;
		this.played += 1;
		this.rate = (this.wins/this.played).toFixed(2); 
    };
	
    this.win = function(){
        this.wins += 1; 
		this.played += 1;
		this.rate = (this.wins/this.played).toFixed(2); 
    };
	
    // All your code ends here
}

