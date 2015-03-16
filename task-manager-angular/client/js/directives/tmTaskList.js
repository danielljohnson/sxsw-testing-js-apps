(function() {
    'use strict';

    angular
        .module('TaskManager')
        .directive('tmTaskList', tmTaskList);

    function controller(TaskFactory) {
        var vm = this;

        vm.toggleStatus = function(task) {
            TaskFactory.toggleStatus(task);
        };
    }

    controller.$inject = ['TaskFactory'];

    function tmTaskList() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/tmTaskList.html',
            scope: {
                categories: '=',
                tasks: '='
            },
            controller: controller,
            controllerAs: 'taskList',
            bindToController: true
        };

        return directive;
    }

})();