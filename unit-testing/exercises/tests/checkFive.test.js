const checkFive = require('../checkFive.js');

describe('checkFive', function(){

    test('should correct statement for number under five', function(){
        let output = checkFive(2);
        expect(output).toEqual('2 is less than 5.');
    }); 
});