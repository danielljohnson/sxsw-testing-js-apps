var mathHelpers = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    
    summation: function(num) {
        if (num > 0) {
            return num + mathHelpers.summation(num-1);
        } else {
            return 0;
        }
    }
};