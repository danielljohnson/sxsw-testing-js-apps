exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: { 'browserName': 'chrome' },

    onPrepare: function() {
        browser.driver.manage().window().setSize(1200, 800);
    },

    suites: {
        homepage: 'homepage/*-spec.js'
    }
};

// protractor tests/e2e/conf.js --suite homepage