var assert = require('assert');

var mathHelpers = require('../src/mathHelpers').mathHelpers;

describe('mathHelpers', function() {
    describe('add(num1, num2)', function() {
        it('should return 3 when called with 1,2', function() {
            assert.strictEqual(mathHelpers.add(1,2), 3);
        });

        it('should not return 4 when called with 1,2', function() {
            assert.notStrictEqual(mathHelpers.add(1,2), 4);
        });
    });
    
    describe('summation(num)', function() {
        it('should return 10 when called with 4', function() {
            assert.strictEqual(mathHelpers.summation(4), 10);
        });
        
        it('should return 15 when called with 5', function() {
            assert.strictEqual(mathHelpers.summation(5), 15);
        });

        it('should not return 20 when called with 5', function() {
            assert.notStrictEqual(mathHelpers.summation(5), 20);
        });
    });

    // add subtract test
});