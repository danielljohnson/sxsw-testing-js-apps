var webdriverio = require('webdriverio');
var assert = require('assert');
var FormsPage = require('./pages/FormsPage');

var client = {},
    formsPage;

describe('Forms Page', function() {
    this.timeout(99999999);

    beforeEach(function(done) {
        client = webdriverio.remote({
            desiredCapabilities: {
                browserName: 'phantomjs'
            }
        });

        client.init();

        client.setViewportSize({
            width: 1024,
            height: 768
        });

        formsPage = new FormsPage(client);
        formsPage.get();

        done();
    });

    it('name form should set displayName field', function(done) {
        formsPage.setFirstNameInput('Dan');
        formsPage.setLastNameInput('Johnson');
        formsPage.nameFormSubmit();

        client
            .getText('#displayName', function(err, text) {
                assert.equal(text, 'Dan Johnson');
            })

            .call(done);
    });

    it('color form should set displayColor field', function(done) {
        client
            .selectByValue('[name="color"]', 'red')

            .submitForm('#colorForm')

            .getText('#displayColor', function(err, text) {
                assert.equal(text, 'red');
            })

            .call(done);
    });

    it('should not allow contact form to be submitted with blank email', function(done) {
        client
            // submit empty form
            .submitForm('#contactForm')

            // check that we are still on the forms page
            .getTitle(function(err, title) {
                assert.equal(title, 'Forms');
            })

            // pause 3 seconds because the error box animation takes 2 seconds
            .pause(3000)

            // check that first validation message is present
            .isExisting('#formErrors .alertContent span:first-child')

            // check length of validation messages
            .elements('#formErrors .alertContent span', function(err, els) {
                assert.equal(els.value.length, 1);
            })

            // check content of first validation message
            .getText('//div[@class="alertContent"]/span[1]', function(err, text) {
                assert.equal(text, 'Please fill in all required fields!');
            })

            .call(done);
    });

    afterEach(function(done) {
        client.end(done);
    });
});
