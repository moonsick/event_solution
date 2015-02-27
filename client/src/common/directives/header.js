'use strict';

angular.module('eventApp')
    .controller('header', function ($scope, $http, $route, $rootScope,localStorageService, $location) {


        $scope.user =sessionStorage.getItem('user');

        $scope.introduction = function(){
            location.href = "/introduction";
        };
        $scope.invitation = function(){
            location.href = "/invitation";
        };
        $scope.schedule = function(){
            location.href = "/schedule";
        };
        $scope.lectureList = function(){
            location.href = "/lectureList";
        };
        $scope.lectureQna = function(){
            location.href = "/lectureQna";
        };
        $scope.surroundings = function(){
            location.href = "/surroundings";
        };



    });
