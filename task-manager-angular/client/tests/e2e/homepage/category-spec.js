var Homepage = require('./homepage.js');

describe('category', function() {
    var homepage;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000/reset-db');

        homepage = new Homepage();
    });

    it('should create a category', function() {
        homepage.get();

        homepage.categoryNameInput.sendKeys('Sports');
        homepage.categoryFormSubmit.click();
        
        expect(homepage.categoryList.count()).toEqual(3);
        expect(homepage.categoryList.get(2).getText()).toEqual('Sports');
    });
});