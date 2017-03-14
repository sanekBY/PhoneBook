'use strict';
var app = angular.module('ngdemoApp', ['mycontrollers', 'myservices']);

app.config(['$routeProvider', '$locationProvider',
        function($routeProvider,  $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'phones-list.html', controller: 'PhoneBookListCtrl'
        })
        .when('/contact/:id', {
            templateUrl: 'contact.html', controller: 'ContactDetailCtrl'
        })
        .when('/contact-edit/:id', {
            templateUrl: 'contact-edit.html', controller: 'ContactEditCtrl'
        })
        .when('/create-phone', {
            templateUrl: 'create-phone.html', controller: 'PhoneBookCreationCtrl'
        })
        .otherwise('/', {templateUrl: 'phones-list.html', controller: 'PhoneListCtrl'});
        $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
