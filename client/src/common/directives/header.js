'use strict';

angular.module('eventApp')
    .controller('header', function ($scope,executeResults, $http, $route, $rootScope,localStorageService, $location) {


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
        $scope.question = function(){
            location.href = "/question1";
        };



        executeResults.notice_D(sessionStorage.getItem('event_ID')).then(function(data) {
            $scope.item123 = data;
            console.log($scope.item123);
        });


    });
