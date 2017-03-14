'use strict';

var services = angular.module('myservices', ['ngResource']);


services.factory('PhonesFactory', function ($resource) {
    return $resource('/api/phones', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('ContactFactory', function ($resource) {
    return $resource('/api/contact/:id', {}, {
        show: { method: 'GET'},
        delete: { method: 'DELETE', params: {id:'@id'}},
        update: { method: 'PUT', params: {id:'@id'} }
    })
});



