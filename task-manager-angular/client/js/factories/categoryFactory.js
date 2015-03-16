(function() {
    'use strict';

    angular
        .module('TaskManager')
        .factory('CategoryFactory', CategoryFactory);

    CategoryFactory.$inject = ['$http', 'ServerUrl'];

    function CategoryFactory($http, ServerUrl) {
        var categories = [];

        function getCategories() {
            return $http.get(ServerUrl + '/categories')
                .then(function(response) {
                    angular.copy(response.data, categories);
                });
        }

        function createCategory(category) {
            return $http.post(ServerUrl + '/categories', category)
                .then(function(response) {
                    categories.push(response.data);
                });
        }

        return {
            categories: categories,
            getCategories: getCategories,
            createCategory: createCategory
        };
    }

})();