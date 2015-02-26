'use strict';

angular.module('eventApp')
    .controller('lectureQnaList', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {




        $scope.event_ID = sessionStorage.getItem('event_ID');
        $scope.user_class_ID = sessionStorage.getItem('user_class_ID');
        $scope.user_ID = sessionStorage.getItem('user_ID');


        executeResults.list_qna($scope.event_ID,$scope.user_class_ID,$scope.user_ID).then(function(data) {
            $scope.item = data;

            for(var i=0; i<$scope.item.length; i++){
                if($scope.item[i].QNA_comment.length>19){
                    $scope.item[i].QNA_comment = $scope.item[i].QNA_comment.slice(0,19)+"....";
                }
            }


        });
    });