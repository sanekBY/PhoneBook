'use strict';
var app = angular.module('ngdemoApp', ['mycontrollers', 'myservices']);

app.config(['$routeProvider', '$locationProvider',
        function($routeProvider,  $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'phones-list.html', controller: 'PhoneListCtrl'
        })
        // .when('/voter/:id', {
        //     templateUrl: 'voter.html', controller: 'VoterDetailCtrl'
        // })
        .when('/create-phone', {
            templateUrl: 'create-phone.html', controller: 'PhoneBookCreationCtrl'
        })
        .otherwise('/', {templateUrl: 'phones-list.html', controller: 'PhoneListCtrl'});
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
