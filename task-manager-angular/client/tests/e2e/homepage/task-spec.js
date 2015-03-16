var Homepage = require('./homepage.js');

describe('task', function() {
    var homepage;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:3000/reset-db');

        homepage = new Homepage();
    });

    it('should create a task', function() {
        homepage.get();

        homepage.taskNameInput.sendKeys('Email');
        homepage.setCategory(1);
        homepage.taskFormSubmit.click();

        var taskList = homepage.getTaskListByCategory(1);

        expect(taskList.count()).toEqual(3);
        expect(taskList.get(2).getText()).toEqual('Email');
    });

    it('should complete a task', function() {
        homepage.get();

        var taskList = homepage.getTaskListByCategory(1);

        taskList.get(0).click();

        expect(taskList.get(0).getAttribute('data-status')).toEqual('2');
    });

    it('should remove completed tasks', function() {
        homepage.get();

        element(by.css('.remove-completed')).click();

        expect(homepage.getTaskListByCategory(1).count()).toEqual(1);
    });
});