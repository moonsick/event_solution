'use strict';

angular.module('eventApp')
    .controller('lectureList', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        executeResults.lectureList().then(function(data) {

        $scope.item = data;
        console.log($scope.item);

        });


    });