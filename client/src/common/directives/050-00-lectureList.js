'use strict';

angular.module('eventApp')
    .controller('lectureList', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {



        executeResults.lectureList(sessionStorage.getItem('event_ID')).then(function(data) {

        $scope.item = data;

        });


    });