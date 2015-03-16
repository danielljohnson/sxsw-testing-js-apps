(function() {
    'use strict';

    angular
        .module('TaskManager', [])
        .run(function(CategoryFactory, TaskFactory) {
            CategoryFactory.getCategories();
            TaskFactory.getTasks();
        });
    
    angular.module('TaskManager')
        .constant('ServerUrl', 'http://localhost:3000');

})();