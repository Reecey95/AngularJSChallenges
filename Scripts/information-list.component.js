'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
module('informationApp').
component('informationList', {
    template:
    //'<h1> $ctrl.information.</h1>' +

    // '<ul>' +
    // '<li ng-repeat="informationItem in $ctrl.information">' +
    // '<span>{{informationItem.category}}</span>' +
    // '<p>{{informationItem.title}}</p>' +
    // '<p>{{informationItem.description}}</p>' +
    //
    // '</li>' +
    // '</ul>',

    '<table>' +
    '<tr ng-repeat="informationItem in $ctrl.information">' +
    '<td>{{informationItem.title}}</td>' + '<hr />' +
    '<td>{{informationItem.description}}</td>' +
    '</tr>'  +
    '</table>',


    controller: function InformationListController() {
        //angular.fromJson()
        this.information = [
        {
            id: '1',
            category: 'Ice cream flavours',
            title: 'Vanilla',
            description: 'This is the most plain ice cream flavour there is. It is also the least exciting, however it is the tastiest.'
        }, {
            id: '2',
            category: 'Ice cream flavours',
            title: 'Chocolate',
            description: 'This is a flavour frequently argued over. Some people hate it, some people like it, some people actually don’t care much for it. If it has real chunks in it, it can be nice. If it doesn’t have any real chocolate in it, then it probably isn’t worth it. You will only end up disappointed.'
        },  {
            id: '3',
            category: 'Ice cream flavours',
            title: 'Strawberry',
            description: 'Why is this always the third option? What’s wrong with raspberry, or blueberry, or blackberry, or any of the other berries? Strawberry ice cream so rarely actually tastes like strawberries, you’re probably safer just opting for vanilla really. Unless you’re at a really posh ice cream joint (you can tell a posh one because they offer exotic flavours like ‘stracciatella’ or ‘cerise’) in which case, definitely try the strawberry, because there is a chance it’ll have some fruit in it, and that counts towards your 5-a-day.'
        },
        ];
    }
});





// {
//     id: '1',
//         category: 'Ice cream flavours',
//     title: 'Vanilla',
//     description: 'This is the most plain ice cream flavour there is. It is also the least exciting, however it is the tastiest.',
//     link: null,
//     image: null
// },
// {
//     id: "2",
//         category: 'Ice cream flavours',
//     title: 'Chocolate''',
//     description: 'This is a flavour frequently argued over. Some people hate it, some people like it, some people actually don’t care much for it. If it has real chunks in it, it can be nice. If it doesn’t have any real chocolate in it, then it probably isn’t worth it. You will only end up disappointed.',
//     link: 'https:\/\/en.wikipedia.org\/wiki\/Chocolate',
//     image: null
// },
// {
//     id: '1',
//         category: 'Ice cream flavours',
//     title: 'Vanilla',
//     description: 'This is the most plain ice cream flavour there is. It is also the least exciting, however it is the tastiest.',
//     link: null,
//     image: null
// }