var webdriverio = require('webdriverio');
var assert = require('assert');

var client = {};

describe('Navigation', function() {
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

        done();
    });

    it('should navigate from forms page to grid page and then back again', function(done) {
        client
            .url('http://localhost:8080/forms.html')

            .saveScreenshot('forms_page.png')

            .getTitle(function(err, title) {
                assert.equal(title, 'Forms');
            })

            .click('.gridPageLink')

            .getTitle(function(err, title) {
                assert.equal(title, 'Grid');
            })

            .click('.formsPageLink')

            .getTitle(function(err, title) {
                assert.equal(title, 'Forms');
            })

            .call(done);
    });

    afterEach(function(done) {
        client.end(done);
    });
});
