/**
 * Created by 성시원님 on 2015-02-10.
 */




'use strict';

angular.module('eventApp')
    .controller('lectureQnaCtrl', function ($scope, executeResults, $filter, ngTableParams, $timeout) {
        $scope.rowItem = {};
        $scope.actedList = [];
        function replaceAll(sValue, param1, param2) {
            return sValue.split(param1).join(param2);
        };

        var filess;
        $scope.onFileSelect = function ($files) {
            filess = $files;
        };

        $scope.excel_Btn = function () {
            location.href = "/Excel/commnetl";
        };

        //코멘트 형태 값 받아오는 소스
        var getComm = function () {
            executeResults.actData().then(function (data) {
                $scope.comm_names = data;
            });
        };
        getComm();


        var getLectureList = function () {
            executeResults.getLectureList().then(function (data) {
                $scope.comm_names = data;
            });
        };
        getLectureList();


    });
