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

app.controller('PhoneListCtrl', ['$scope', 'PhonesFactory', 'PhoneFactory', '$location',
    function ($scope, PhonesFactory, PhoneFactory, $location) {

        // $scope.editVoter = function (voterId) {
        //     $location.path('/voter/' + voterId);
        // };
        //
        // $scope.setStatus = function(status) {
        //     if (status) {
        //         $scope.myDynamicClass = 'some-css-class';
        //         return "Закрыто";
        //     } else {
        //         $scope.myDynamicClass = 'background-color:gray;';
        //         return "Открыто";
        //     }
        // };
        //
        // $scope.getStatusColor = function (status) {
        //     if (status) return "red";
        //     else  return "green";
        // };

        $scope.phoneBooks = PhonesFactory.query();
    }]);

app.controller('VoterDetailCtrl', ['$scope', '$routeParams', 'VoterFactory', '$location',
    function ($scope, $routeParams, VoterFactory,  $location) {

        $scope.updateVoter = function () {
            var radios = document.getElementsByName("radioBut");
            var x;
            for (var i = 0,  length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    x = parseInt(radios[i].value, 10);
                    // x = 1;
                    break;
                }
            }
            VoterFactory.update({id : x});
            $location.path('/');

        };

        // $scope.closeVoter = function () {
        //     VoterFactorySec.update({id : $scope.voter.id})
        //     $location.path('/');
        // };
        $scope.voter = VoterFactory.show({id: $routeParams.id});
    }]);

app.controller('PhoneBookCreationCtrl', ['$scope', 'PhonesFactory', '$location',
    function ($scope, PhonesFactory, $location) {


        $scope.phoneTypes = [{id:1, name: "Рабочий"},
                            {id:2, name: "Домашний"},
                            {id:3, name: "Мобильный"}];
        $scope.phones = [{"id" : null, "phbook_id" : 1, "phoneNumber" : null, "phoneType" : null, "defaultUsage" : null}];
        $scope.addPhone = function(){
            $scope.phones.push({"id" : null, "phbook_id" : 1, "phoneNumber" : null, "phoneType" : null, "defaultUsage" : null})
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
        $scope.mails = [{"id" : null, "phbook_id" : 1, "email" : null, "emailType" : null, "defaultUsage" : null}];
        $scope.addEmail = function(){
            $scope.mails.push({"id" : null, "phbook_id" : 1, "email" : null, "emailType" : null, "defaultUsage" : null})
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

