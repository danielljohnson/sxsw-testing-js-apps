var Http = function() {
  var method, methods = ['get', 'post', 'put', 'delete'];

  var createMethod = function(name) {
    return function() {
      var params = {
        url: arguments[0],
        type: name.toUpperCase()
      };
      
      if (arguments[1] !== null) {
        $.extend(params, arguments[1]);
      }
      
      return $.ajax(params);
    };
  };
  
  for (var i = 0; i < methods.length; i++) {
    this[methods[i]] = createMethod(methods[i]);
  }
};