describe('Car', function() {
    var car;

    beforeEach(function() {
       car = new Car(); 
    });

    describe('color', function() {
        it('should be red', function() {
            expect(car.color).toEqual('red');
        });
    });

    describe('make', function() {
        it('should be a Ford', function() {
            expect(car.make).toEqual('Ford');
        });
    });
    
    describe('drive()', function() {
        it('should return driving...', function() {
            expect(car.drive()).toEqual('driving...');
        });
    });

    describe('paint(color, callback)', function() {
        it('should paint the car blue', function(done) {
            car.paint('blue', function() {
                expect(car.color).toEqual('blue');
                
                done();
            });
        });
    });
});