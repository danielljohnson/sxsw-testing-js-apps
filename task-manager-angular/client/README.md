Task Manager Client
===================

### Instructions

- `bower install`
- `npm install -g http-server`
- browse to localhost:8080

### Test setup

#### Unit

- `npm install -g karma karma-cli`
- `npm install` in this directory
- `karma start` in the tests/unit directory

#### Functional
- `npm install -g protractor`
- `webdriver-manager update'
- `webdriver-manager start` in the tests/e2e directory

#### Plato

- `plato -r -d report src`