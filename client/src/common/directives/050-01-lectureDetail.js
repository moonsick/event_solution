'use strict';

angular.module('eventApp')
    .controller('lectureDetail', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        var url = window.location;
        var getValue = [];
        $scope.lecture_ID = [];



        getValue = String(url).split('?');
        getValue = getValue[1].split('&');
        $scope.lecture_ID= getValue[0].split('='); //키와 값분리


        executeResults.detail_lecture($scope.lecture_ID[1]).then(function(data) {
            $scope.item = data;
        });


    });