var _ = require('lodash'),
    Category = require('./domain/Category.js'),
    Task = require('./domain/Task.js'),
    repository = require('./repository.js');

var fixtures = (function() {
    var loadCategories = function() {
        var categories = [{
            name: 'Home'
        },{
            name: 'Work'
        }];
    
        _.forEach(categories, function(item) {
            repository.categories.push(new Category(item));
        });
    };
    
    var loadTasks = function() {
        var tasks = [{
            name: 'Cook Dinner',
            category: repository.categories[0].id,
            status: 0
        },{
            name: 'Clean out inbox',
            category: repository.categories[1].id,
            status: 0
        },{
            name: 'Play ping pong',
            category: repository.categories[1].id,
            status: 2
        }];
    
        _.forEach(tasks, function(item) {
            repository.tasks.push(new Task(item));
        });
    };
    
    return {
        loadAll: function() {
            loadCategories();
            loadTasks();
        }
    };
})();

module.exports = fixtures;