'use strict';

angular.module('eventApp')
    .controller('lectureDetail', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        var url = window.location;
        var getValue = [];
        $scope.lecture_ID = [];



        getValue = String(url).split('?');
        getValue = getValue[1].split('&');
        $scope.lecture_ID= getValue[0].split('='); //키와 값분리
        alert($scope.lecture_ID[1]);



        executeResults.detail_qna($scope.event_ID,$scope.user_class_ID,$scope.user_ID,$scope.schedule_ID[1],$scope.QNA_ID[1]).then(function(data) {
            $scope.item = data;



        });


    });