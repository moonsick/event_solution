'use strict';

angular.module('eventApp')
    .controller('lectureQnaDetail', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.event_ID = sessionStorage.getItem('event_ID');
        $scope.user_class_ID = sessionStorage.getItem('user_class_ID');
        $scope.user_ID = sessionStorage.getItem('user_ID');

        var url = window.location;
        var getValue = [];
        $scope.schedule_ID = [];
        $scope.QNA_ID = [];


        getValue = String(url).split('?');
        getValue = getValue[1].split('&');
        $scope.schedule_ID = getValue[0].split('='); //키와 값분리
        $scope.QNA_ID = getValue[1].split('='); //키와 값분리


        executeResults.detail_qna($scope.event_ID,$scope.user_class_ID,$scope.user_ID,$scope.schedule_ID[1],$scope.QNA_ID[1]).then(function(data) {
            $scope.item = data;



        });


    });