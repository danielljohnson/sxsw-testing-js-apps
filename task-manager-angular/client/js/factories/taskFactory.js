(function() {
    'use strict';

    angular
        .module('TaskManager')
        .factory('TaskFactory', TaskFactory);

    TaskFactory.$inject = ['$http', '$q', 'ServerUrl'];

    function TaskFactory($http, $q, ServerUrl) {
        var tasks = [];

        function getTasks() {
            return $http.get(ServerUrl + '/tasks')
                .then(function(response) {
                    angular.copy(response.data, tasks);
                });
        }

        function toggleStatus(task) {
            task.status = (task.status === 2) ? 0 : 2;

            return $http.put(ServerUrl + '/tasks/' + task.id, task);
        }

        function createTask(task) {
            return $http.post(ServerUrl + '/tasks', task)
                .then(function(response) {
                    tasks.push(response.data);
                });
        }

        function removeCompleted() {
            var httpRequests = [];

            angular.forEach(tasks, function(task) {
                if (task.status === 2) {
                    httpRequests.push($http.delete(ServerUrl + '/tasks/' + task.id));
                }
            });

            $q.all(httpRequests).then(function() {
                getTasks();
            });
        }

        return {
            tasks: tasks,
            getTasks: getTasks,
            toggleStatus: toggleStatus,
            createTask: createTask,
            removeCompleted: removeCompleted
        };
    }

})();