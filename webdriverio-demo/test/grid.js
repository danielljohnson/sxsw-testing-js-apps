var webdriverio = require('webdriverio');
var assert = require('assert');

var client = {};

describe('Grid Tests', function() {
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

    it('should load initial grid', function(done) {
        client
            .url('http://localhost:8080/grid.html')

            .getTitle(function(err, title) {
                assert.equal(title, 'Grid');
            })

            .waitForExist('tbody tr', 5000)

            .elements('tbody tr', function(err, els) {
                assert.equal(els.value.length, 3);
            })

            .getText('tbody tr:nth-child(1) td:nth-child(1)', function(err, text) {
                assert.equal(text, '1');
            })

            .getText('tbody tr:nth-child(2) td:nth-child(2)', function(err, text) {
                assert.equal(text, 'Ella');
            })

            .getText('tbody tr:nth-child(3) td:nth-child(3)', function(err, text) {
                assert.equal(text, 'Johnson');
            })

            .call(done);
    });

    it('should refresh grid', function(done) {
        client
            .url('http://localhost:8080/grid.html')

            .getTitle(function(err, title) {
                assert.equal(title, 'Grid');
            })

            .waitForExist('tbody tr', 5000)

            .elements('tbody tr', function(err, els) {
                assert.equal(els.value.length, 3);
            })

            .click('#refreshGrid')

            .waitForExist('tbody tr:nth-child(4)', 5000)

            .getText('tbody tr:nth-child(4) td:nth-child(1)', function(err, text) {
                assert.equal(text, '4');
            })

            .call(done);
    });

    afterEach(function(done) {
        client.end(done);
    });
});
