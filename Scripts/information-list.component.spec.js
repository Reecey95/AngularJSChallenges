'use strict';

describe('informationList', function() {

    // Load the module that contains the `informationList` component before each test
    beforeEach(module('informationApp'));

    // Test the controller
    describe('InformationListController', function() {

        it('should create a `information` model with 3 information', inject(function($componentController) {
            var ctrl = $componentController('informationList');

            expect(ctrl.information.length).toBe(3);
        }));

    });

});