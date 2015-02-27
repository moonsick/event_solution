'use strict';

angular.module('eventApp')
    .controller('surroundings', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {



        executeResults.turisme(sessionStorage.getItem('event_ID')).then(function(data) {
            $scope.item = data;

        });


    });