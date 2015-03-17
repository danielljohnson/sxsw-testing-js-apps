describe('Game', function() {
    var game;
    
    beforeEach(function() {
        game = new Game();
    });
    
    it('getRandomInt helper returns 0 if Math.random() returns .1', function() {
        spyOn(Math, 'random').and.returnValue(0.1);
        
        var randomInt = game.getRandomInt(0, 2);
        
        expect(randomInt).toEqual(0);
    });
    
    it('getRandomInt helper returns 1 if Math.random() returns .4', function() {
        spyOn(Math, 'random').and.returnValue(0.4);
        
        var randomInt = game.getRandomInt(0, 2);
        
        expect(randomInt).toEqual(1);
    });
    
    it('getRandomInt helper returns 2 if Math.random() returns .7', function() {
        spyOn(Math, 'random').and.returnValue(0.7);
        
        var randomInt = game.getRandomInt(0, 2);
        
        expect(randomInt).toEqual(2);
    });
    
    it('should take a turn', function() {
        spyOn(window, 'prompt').and.returnValue('rock');
        
        spyOn(game, 'getRandomInt').and.returnValue(1);
        
        var turn = game.takeTurn();
        
        var expected = {
            'you': 0,
            'computer': 1
        };
        
        expect(turn).toEqual(expected);
    });
    
    it('should repeat turn if both players choose the same value', function() {
    spyOn(game, 'getRandomInt').and.returnValue(0);
    
    var firstChoice;
    
    // force prompt to return duplicate value first time but not second
    spyOn(window, 'prompt').and.callFake(function() {
        if (firstChoice === 'rock') {
            return 'paper';
        } else {
            firstChoice = 'rock';
            
            return 'rock';
        }
    });
    
    var takeTurnSpy = spyOn(game, 'takeTurn').and.callThrough();
    
    var turn = game.takeTurn();
    
    expect(takeTurnSpy.calls.count()).toEqual(2);
});
              
    it('you should win if you have a rock and the computer has scissors', function() {
        var winner = game.compare({
          'you': 0,
          'computer': 2
        });
        
        expect(winner).toEqual('you');
    });
    
    it('computer should win if the computer has a rock and you have scissors', function() {
        var winner = game.compare({
          'you': 2,
          'computer': 0
        });
        
        expect(winner).toEqual('computer');
    });
    
    it('you should win if you have paper and the computer has a rock', function() {
        var winner = game.compare({
          'you': 1,
          'computer': 0
        });
        
        expect(winner).toEqual('you');
    });
    
    it('computer should win if the computer has paper and you have a rock', function() {
        var winner = game.compare({
          'you': 0,
          'computer': 1
        });
        
        expect(winner).toEqual('computer');
    });

    it('you should win if you have scissors and the computer paper', function() {
        var winner = game.compare({
          'you': 2,
          'computer': 1
        });
        
        expect(winner).toEqual('you');
    });

    it('computer should win if the computer has scissors and you have paper', function() {
        var winner = game.compare({
          'you': 1,
          'computer': 2
        });
        
        expect(winner).toEqual('computer');
    });
});