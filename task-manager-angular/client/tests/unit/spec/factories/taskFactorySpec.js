describe('TaskManager', function() {
    'use strict';

    var ServerUrl,
        TaskFactory,
        task;

    // mock the TaskManager module
    beforeEach(angular.mock.module('TaskManager'));

    // inject the TaskFactory
    beforeEach(angular.mock.inject(function(_ServerUrl_, _TaskFactory_) {
        ServerUrl = _ServerUrl_;
        TaskFactory = _TaskFactory_;

        // mock a task
        task = {
            id: 1,
            name: 'Cook Dinner',
            category: 1,
            status: 0
        };
    }));

    it('should have an toggleStatus function', function () { 
        expect(angular.isFunction(TaskFactory.toggleStatus)).toBe(true);
    });

    it('toggleStatus() should set the right status on a task', function() {
        expect(task.status).toBe(0);

        TaskFactory.toggleStatus(task);

        expect(task.status).toBe(2);
    });
});