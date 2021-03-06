'use strict';

/* Controllers */

var app = angular.module('mycontrollers', []);


//Clear browser cache (in development mode)

//http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });
});

app.controller('PhoneBookListCtrl', ['$scope', 'PhonesFactory', '$location',
    function ($scope, PhonesFactory, $location) {
        $scope.phoneBooks = PhonesFactory.query();
    }]);

app.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'ContactFactory', '$location',
    function ($scope, $routeParams, ContactFactory,  $location) {
        $scope.contact = ContactFactory.show({id: $routeParams.id});

        $scope.phoneTypes = [{id:1, name: "Рабочий"},
                            {id:2, name: "Домашний"},
                            {id:3, name: "Мобильный"}];
        $scope.emailTypes = [{id:1, name: "Рабочая"},
            {id:2, name: "Домашняя"}];

        $scope.deleteContact = function () {
            ContactFactory.delete({id : $scope.contact.id});
            $location.path('/');
        };

    }]);


app.controller('ContactEditCtrl', ['$scope', '$routeParams', 'PhonesFactory', 'ContactFactory','$location',
    function ($scope, $routeParams, PhonesFactory, ContactFactory, $location) {

        $scope.phbook = ContactFactory.show({id: $routeParams.id});

        $scope.phoneTypes = [{id:1, name: "Рабочий"},
            {id:2, name: "Домашний"},
            {id:3, name: "Мобильный"}];
        $scope.phones = $scope.phbook.phoneList;
        $scope.addPhone = function(){
            $scope.phones.push({"id" : null, "phbook_id" : 1, "phoneNumber" : null, "phoneType" : 1, "defaultUsage" : null})
        };
        //
        // $scope.removePhone = function() {
        //     var lastPhone = $scope.phones.length-1;
        //     $scope.phones.splice(lastPhone);
        // };
        //
        // $scope.addresses = phbook.addressList;
        // $scope.addAddress = function(){
        //     $scope.addresses.push({"id" : null, "phbook_id" : 1, "address" : null, "defaultUsage" : null})
        // };
        // $scope.removeAddress = function() {
        //     var lastAddress = $scope.addresses.length-1;
        //     $scope.addresses.splice(lastAddress);
        // };
        //
        // $scope.emailTypes = [{id:1, name: "Рабочая"},
        //     {id:2, name: "Домашняя"}];
        // $scope.mails = phbook.mailList;
        // $scope.addEmail = function(){
        //     $scope.mails.push({"id" : null, "phbook_id" : 1, "email" : null, "emailType" : 1, "defaultUsage" : null})
        // };
        // $scope.removeEmai = function() {
        //     var lastEmail = $scope.mails.length-1;
        //     $scope.mails.splice(lastEmail);
        // };


        // $scope.createNewPhoneBook = function () {
        //
        //     var phbook = {"id" : 1, "firstName" : $scope.phbook.firstName, "middleName" : $scope.phbook.middleName,
        //         "lastName" : $scope.phbook.lastName, "dateOfBirth" : $scope.phbook.dateOfBirth, "phoneList" : $scope.phones, "addressList" : $scope.addresses, "mailList" : $scope.mails};
        //
        //     PhonesFactory.create(phbook);
        //     $location.path('/');
        //     alert('Книга успешно создана');
        // }
    }]);


app.controller('PhoneBookCreationCtrl', ['$scope', 'PhonesFactory', '$location',
    function ($scope, PhonesFactory, $location) {

        $scope.phoneTypes = [{id:1, name: "Рабочий"},
                            {id:2, name: "Домашний"},
                            {id:3, name: "Мобильный"}];
        $scope.phones = [{"id" : null, "phbook_id" : 1, "phoneNumber" : null, "phoneType" : 1, "defaultUsage" : null}];
        $scope.addPhone = function(){
            $scope.phones.push({"id" : null, "phbook_id" : 1, "phoneNumber" : null, "phoneType" : 1, "defaultUsage" : null})
        };

        $scope.removePhone = function() {
                var lastPhone = $scope.phones.length-1;
                $scope.phones.splice(lastPhone);
        };

        $scope.addresses = [{"id" : null, "phbook_id" : 1, "address" : null, "defaultUsage" : null}];
        $scope.addAddress = function(){
            $scope.addresses.push({"id" : null, "phbook_id" : 1, "address" : null, "defaultUsage" : null})
        };
        $scope.removeAddress = function() {
            var lastAddress = $scope.addresses.length-1;
            $scope.addresses.splice(lastAddress);
        };

        $scope.emailTypes = [{id:1, name: "Рабочая"},
            {id:2, name: "Домашняя"}];
        $scope.mails = [{"id" : null, "phbook_id" : 1, "email" : null, "emailType" : 1, "defaultUsage" : null}];
        $scope.addEmail = function(){
            $scope.mails.push({"id" : null, "phbook_id" : 1, "email" : null, "emailType" : 1, "defaultUsage" : null})
        };
        $scope.removeEmai = function() {
            var lastEmail = $scope.mails.length-1;
            $scope.mails.splice(lastEmail);
        };


        $scope.createNewPhoneBook = function () {

            var phbook = {"id" : 1, "firstName" : $scope.phbook.firstName, "middleName" : $scope.phbook.middleName,
                        "lastName" : $scope.phbook.lastName, "dateOfBirth" : $scope.phbook.dateOfBirth, "phoneList" : $scope.phones, "addressList" : $scope.addresses, "mailList" : $scope.mails};

            PhonesFactory.create(phbook);
            $location.path('/');
            alert('Книга успешно создана');
        }
    }]);

