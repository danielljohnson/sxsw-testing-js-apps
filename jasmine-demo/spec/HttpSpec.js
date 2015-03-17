describe('Http', function() {
    var http;

    beforeEach(function() {
       http = new Http(); 
    });

    describe('get', function() {
        it('should call $.ajax with correct params', function() {
            spyOn($, 'ajax');

            http.get('data.json');

            expect($.ajax).toHaveBeenCalledWith({
                type: 'GET',
                url: 'data.json'
            });
        });

        it('should get the mock data', function() {
            spyOn($, 'ajax').and.returnValue({ message: 'hi' });

            var response = http.get('data.json');

            expect(response).toEqual({ message: 'hi' });
        });

        it('should get the real data', function(done) {
            spyOn($, 'ajax').and.callThrough();

            var request = http.get('data.json');

            request.then(function(response) {
                expect(response).toEqual({ message: 'hi' });

                done();
            });
        });
    });
});