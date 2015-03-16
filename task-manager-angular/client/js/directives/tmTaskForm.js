(function() {
    'use strict';

    angular
        .module('TaskManager')
        .directive('tmTaskForm', tmTaskForm);

    function controller(CategoryFactory, TaskFactory) {
        var vm = this;

        vm.categories = CategoryFactory.categories;

        vm.createTask = function(task) {
            TaskFactory.createTask(task);
        };
    }

    controller.$inject = ['CategoryFactory', 'TaskFactory'];

    function tmTaskForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/tmTaskForm.html',
            scope: {
                categories: '=',
                tasks: '='
            },
            controller: controller,
            controllerAs: 'taskForm',
            bindToController: true
        };

        return directive;
    }

})();