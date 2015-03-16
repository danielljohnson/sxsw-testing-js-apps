var nextId = 1;

var Task = function(params) {
    this.id = nextId++;
    this.name = params.name;
    this.category = params.category;
    this.status = (typeof params.status === 'undefined') ? 0 : params.status; // ['open', 'in-progress', 'completed']
};

module.exports = Task;