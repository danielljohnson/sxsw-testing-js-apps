(function() {
    'use strict';

    angular
        .module('TaskManager')
        .directive('tmCategoryForm', tmCategoryForm);

    function controller(CategoryFactory) {
        var vm = this;

        vm.createCategory = function(category) {
            CategoryFactory.createCategory(category);
        };
    }

    controller.$inject = ['CategoryFactory'];

    function tmCategoryForm() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/tmCategoryForm.html',
            scope: {
                categories: '='
            },
            controller: controller,
            controllerAs: 'categoryForm',
            bindToController: true
        };

        return directive;
    }

})();