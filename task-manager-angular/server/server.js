var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    repository = require('./repository.js'),
    fixtures = require('./fixtures.js');

app.use(bodyParser.json());

// cross domain stuff
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// load fixture data
fixtures.loadAll();

// categories
app.get('/categories', function(req, res) {
    res.status(200).json(repository.categories);
});

app.post('/categories', function(req, res) {
    var newCategory = repository.createCategory(req.body);
    
    res.location('/categories/' + newCategory.id);
    res.status(201).json(newCategory);
});

app.put('/categories/:id', function(req, res) {
    repository.updateCategory(req.params.id, req.body);
    
    res.status(204).end();
});

app.delete('/categories/:id', function(req, res) {
    repository.deleteCategory(req.params.id);
  
    res.status(204).end();
});

// tasks
app.get('/tasks', function(req, res) {
    res.status(200).json(repository.tasks);
});

app.post('/tasks', function(req, res) {
    var newTask = repository.createTask(req.body);
    
    res.location('/tasks/' + newTask.id);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', function(req, res) {
    repository.updateTask(req.params.id, req.body);
    
    res.status(204).end();
});

app.delete('/tasks/:id', function(req, res) {
    repository.deleteTask(req.params.id);
  
    res.status(204).end();
});

// helper to reset data store for tests
app.get('/reset-db', function(req, res) {
    repository.categories = [];
    repository.tasks = [];

    fixtures.loadAll();

    res.status(200).end();
});

// all other routes return a 404
app.use(function(req, res){
    res.status(404).send('404 Not Found');
});

// start server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});