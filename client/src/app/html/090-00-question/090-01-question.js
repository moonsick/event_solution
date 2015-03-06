'use strict';

angular.module('eventApp')
    .controller('question', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {

        $scope.test = function(){
            alert($("[name='number1']:checked").val());
            alert($("[name='number2']:checked").val());
        }
    });