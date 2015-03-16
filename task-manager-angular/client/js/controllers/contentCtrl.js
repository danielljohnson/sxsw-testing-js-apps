(function() {
    'use strict';

    angular
        .module('TaskManager')
        .controller('ContentCtrl', ContentCtrl);

    ContentCtrl.$inject = ['CategoryFactory', 'TaskFactory'];

    function ContentCtrl(CategoryFactory, TaskFactory) {
        var vm = this;

        vm.categories = CategoryFactory.categories;
        vm.tasks = TaskFactory.tasks;

        vm.removeCompleted = function() {
            TaskFactory.removeCompleted();
        };
    }

})();