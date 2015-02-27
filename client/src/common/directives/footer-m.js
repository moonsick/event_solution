'use strict';

angular.module('eventApp')
    .controller('footer', function ($scope, $http, $route, $rootScope,localStorageService, $location) {


        if(sessionStorage.getItem('aaa')==null){
            $rootScope.logout = true;
        }
        else{
            $rootScope.logout = false;
        }


        $scope.logout1 = function(){
            alert("로그아웃 하셨습니다")
            sessionStorage.setItem('aaa',2);
            location.href = "/";
        }

    });
