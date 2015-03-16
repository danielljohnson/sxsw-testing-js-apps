describe('Http', function() {
    var http;

    beforeEach(function() {
       http = new Http(); 
    });

    describe('get', function() {
        beforeEach(function() {
            spyOn(http, 'get');
            // spyOn(http, 'get').and.callThrough();
            // spyOn(http, 'get').and.returnValue({ message: 'hi' });
            
            spyOn(http, 'post');

            http.get('data.json');
        });

        it('should call get', function() {
            expect(http.get).toHaveBeenCalled();
            expect(http.post).not.toHaveBeenCalled();
        });

        it('should not call post', function() {
            expect(http.post).not.toHaveBeenCalled();
        });

        it('make sure get is called with params', function() {
            expect(http.get).toHaveBeenCalledWith('data.json');
        });

        xit('should get the mock data', function() {
            var response = http.get('data.json');
            expect(response).toEqual({ message: 'hi' });
        });

        xit('should get the real data', function(done) {
            var request = http.get('data.json');

            request.then(function(response) {
                expect(response).toEqual({ message: 'hi' });

                done();
            });
        });
    });
});