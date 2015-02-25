'use strict';

angular.module('eventApp')
    .controller('login', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {
        $http.get('/api/awesomeThings').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.sideClass= function(index){
            $scope.index=index;
            console.log("INDEX"+index);
        };

        $scope.nfcNumber;
        $scope.login = function() {
            executeResults.login_go($scope.nfcNumber).then(function(data){
                $scope.item = data;
                if($scope.item[0].name=='error')
                {
                    alert("등록되지 않는 카드 입니다");
                }
                else{
                    alert($scope.item[0].name+"님 환영합니다")
                    sessionStorage.setItem('aaa',1);
                    sessionStorage.setItem('user',$scope.item[0].name);
                    location.reload();
                }

            });
            /*sessionStorage.setItem('aaa',1);
             location.reload();*/

        };

    });