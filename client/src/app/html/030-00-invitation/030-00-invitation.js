'use strict';

angular.module('eventApp')
    .controller('invitation', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        executeResults.information(sessionStorage.getItem('event_ID')).then(function(data) {
            $scope.item = data;
        });



    });