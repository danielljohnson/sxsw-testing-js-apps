var FormsPage = function(client) {
    this.setFirstNameInput = function(val) {
        client.setValue('#nameForm input[name="firstName"]', val);
    };

    this.setLastNameInput = function(val) {
        client.setValue('#nameForm input[name="lastName"]', val);
    };

    this.nameFormSubmit = function() {
        client.submitForm('#nameForm');
    };

    this.get = function() {
        client.url('http://localhost:8080/forms.html');
    };
};

module.exports = FormsPage;