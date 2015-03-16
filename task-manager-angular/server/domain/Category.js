var nextId = 1;

var Category = function(params) {
    this.id = nextId++;
    this.name = params.name;
};

module.exports = Category;