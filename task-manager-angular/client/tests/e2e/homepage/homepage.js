var Homepage = function() {
    this.categoryNameInput = element(by.model('category.name'));
    this.categoryFormSubmit = element(by.css('.category-form button'));
    this.categoryList = element.all(by.repeater('category in taskList.categories'));

    this.taskNameInput = element(by.model('task.name'));
    this.taskFormSubmit = element(by.css('.task-form button'));

    this.get = function() {
        browser.ignoreSynchronization = false;

        browser.get('http://localhost:8080');
    };

    this.setCategory = function(val) {
        element(by.css('select option[value="'+val+'"]')).click();
    };

    this.getTaskListByCategory = function(index) {
        return this.categoryList.get(index).all(by.repeater('task in taskList.tasks'));
    }.bind(this);
};

module.exports = Homepage;