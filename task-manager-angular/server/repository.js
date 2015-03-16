var _ = require('lodash'),
    Category = require('./domain/Category.js'),
    Task = require('./domain/Task.js');

var repository = (function() {
    var repo = {
        categories: [],

        createCategory: function(params) {
            var category = new Category(params);

            repo.categories.push(category);

            return category;
        },

        updateCategory: function(id, params) {
            var category = _.find(repo.categories, { 'id': parseInt(id) });

            // don't update primary key
            delete params.id;

            _.forIn(params, function(value, key) {
                category[key] = value;
            });

            return category;
        },

        deleteCategory: function(id) {
            return _.remove(repo.categories, { 'id': parseInt(id) });
        },

        tasks: [],

        getTasks: function() {
            var tasks = _.clone(repo.tasks, true);

            return tasks.map(function(task) {
                var category = _.find(repo.categories, {
                    'id': parseInt(task.category)
                });

                task.category = category;

                return task;
            });
        },

        createTask: function(params) {
            var task = new Task(params);

            repo.tasks.push(task);

            return task;
        },

        updateTask: function(id, params) {
            var task = _.find(repo.tasks, { 'id': parseInt(id) });

            // don't update primary key
            delete params.id;

            _.forIn(params, function(value, key) {
                task[key] = value;
            });

            return task;
        },

        deleteTask: function(id) {
            return _.remove(repo.tasks, { 'id': parseInt(id) });
        }
    };

    return repo;
})();

module.exports = repository;
