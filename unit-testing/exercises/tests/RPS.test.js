const whoWon = require('../RPS.js');

describe('whoWon', function(){

    test('should return tie', function(){
        
        expect(whoWon('paper','paper')).toBe('TIE!');
    });
    test('should return player one wins', function(){
        
        expect(whoWon('paper','rock')).toBe('Player 1 wins!');
    
    });
});