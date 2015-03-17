var assert = require('assert');

var Car = require('../src/Car').Car;

// mocha --reporter spec --timeout 5000

describe('Car', function() {
    beforeEach(function() {
       this.car = new Car(); 
    });
    
    describe('color', function() {
        it('should be red', function() {
            assert.strictEqual(this.car.color, 'red');
        });
    });
    
    describe('make', function() {
        it('should be Ford', function() {
            assert.strictEqual(this.car.make, 'Ford');
        });
    });
    
    describe('drive()', function() {
        it('should return driving...', function() {
            assert.strictEqual(this.car.drive(), 'driving...');
        });
    });
    
    describe('paint(color, callback)', function() {
        it('should paint the car blue', function(done) {
            var car = this.car;
            
            car.paint('blue', function() {
                assert.strictEqual(car.color, 'blue');
                
                done();
            });
        });
    });
});