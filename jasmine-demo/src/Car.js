var Car = function() {
    this.color = 'red';
    
    this.make = 'Ford';
    
    this.drive = function() {
        return 'driving...';
    };
    
    this.paint = function(color, callback) {
        var that = this;
        
        setTimeout(function() {
            that.color = color;
            
            callback();
        }, 2000);
    };
};