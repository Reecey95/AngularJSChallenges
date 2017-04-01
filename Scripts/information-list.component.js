'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('informationApp').
component('informationList', {
    template:
    '<ul>' +
    '<li ng-repeat="informationItem in $ctrl.information">' +
    '<span>{{informationItem.name}}</span>' +
    '<p>{{informationItem.snippet}}</p>' +
    '</li>' +
    '</ul>',
    controller: function InformationListController() {
        this.information = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
});