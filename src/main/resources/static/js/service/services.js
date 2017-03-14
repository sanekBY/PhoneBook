'use strict';

var services = angular.module('myservices', ['ngResource']);


services.factory('PhonesFactory', function ($resource) {
    return $resource('/api/phones', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('PhoneFactory', function ($resource) {
    return $resource('/api/phone/:id', {}, {
        show: { method: 'GET'},
        update: { method: 'PUT', params: {id:'@id'} }
    })
});

services.factory('PhoneFactorySec', function ($resource) {
    return $resource('/api/voter/:id', {}, {
        update: { method: 'PUT', params: {id:'@id'} }
    })
});


