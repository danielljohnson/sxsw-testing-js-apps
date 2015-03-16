(function() {
    'use strict';

    angular
        .module('TaskManager')
        .filter('capitalize', capitalize);

    function capitalize() {
        return function(param) {
            if (param) {
                var words = param.split(' ');

                words = words.map(function(word) {
                    return word[0].toUpperCase() + word.slice(1);
                });

                return words.join(' ');
            }
        };
    }

})();