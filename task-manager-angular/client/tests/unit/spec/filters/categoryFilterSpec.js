describe('TaskManager', function() {
    'use strict';

    // mock the TaskManager module
    beforeEach(angular.mock.module('TaskManager'));

    // test capitalize filter
    it('capitalize filter should calitalize each letter in a string', function() {
        inject(function(capitalizeFilter) {
            expect(capitalizeFilter('this is a test')).not.toBe('This is a test');
            expect(capitalizeFilter('this is a test')).toBe('This Is A Test');
        });
    });
});