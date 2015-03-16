var Game = function() {
    this.choices = ['rock', 'paper', 'scissors'];
    this.your_score = 0;
    this.computer_score = 0;

    this.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.takeTurn = function() {
        var you = prompt('rock, paper or scissors?');
        
        you = this.choices.indexOf(you);

        var computer = this.getRandomInt(0, 2);

        if (you === computer) {
            return this.takeTurn();
        } else {
            return {
                'you': you,
                'computer': computer
            };
        }
    };

    this.compare = function(turn) {
        var winner;
        
        if (turn.you === 0 && turn.computer === 1) {
            winner = 'computer';
        }
        
        if (turn.you === 0 && turn.computer === 2) {
            winner = 'you';
        }
        
        if (turn.you === 1 && turn.computer === 0) {
            winner = 'you';
        }
        
        if (turn.you === 1 && turn.computer === 2) {
            winner = 'computer';
        }
        
        if (turn.you === 2 && turn.computer === 0) {
            winner = 'computer';
        }
        
        if (turn.you === 2 && turn.computer === 1) {
            winner = 'you';
        }
        
        return winner;
    };
};