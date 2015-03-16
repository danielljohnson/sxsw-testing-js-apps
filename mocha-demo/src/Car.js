var Car = function() {
    this.color = 'red';
    
    this.make = 'Ford';

    this.driver = 'driver1';
    
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

    this.changeDriver = function(driver) {
        this.driver = driver;
    };
};

exports.Car = Car;