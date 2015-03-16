describe('mathHelpers', function() {
    describe('add(num1, num2)', function() {
        it('should return 3 when called with 1,2', function() {
            expect(mathHelpers.add(1,2)).toEqual(3);
        });

        it('should not return 4 when called with 1,2', function() {
            expect(mathHelpers.add(1,2)).not.toEqual(4);
        });
    });
    
    describe('summation(num)', function() {
        it('should return 10 when called with 4', function() {
            expect(mathHelpers.summation(4)).toEqual(10);
        });
        
        it('should return 15 when called with 5', function() {
            expect(mathHelpers.summation(5)).toEqual(15);
        });

        it('should not return 20 when called with 5', function() {
            expect(mathHelpers.summation(5)).not.toEqual(20);
        });
    });
});