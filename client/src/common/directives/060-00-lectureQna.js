'use strict';

angular.module('eventApp')
    .controller('lectureQna', function ($scope,executeResults ,$http, $route, $rootScope, $location ,$routeParams) {



        if(sessionStorage.getItem('user_class_ID')==1){
            $rootScope.list_view = true;
        }
        else{
            $rootScope.list_view = false;
        }


        $scope.event_ID = null;
        $scope.user_class_ID = null;
        $scope.user_ID = null;
        $scope.schedule_ID = null;


        var lecture_Order = function(){
            executeResults.lecture_Order().then(function(data) {
                $scope.item = data;
            });
            };
        lecture_Order();

        $scope.list_click = function(i) {
            $("#lecture-order").empty();
            $("#lecture-order").append((i+1)+"강의. "+$scope.item[i].lecture+" <i class='fa fa-caret-down pull-right'> </i>");
            $scope.event_ID = $scope.item[i].event_ID;
            $scope.user_class_ID = $scope.item[i].user_class_ID;
            $scope.user_ID = $scope.item[i].user_ID;
            $scope.schedule_ID = $scope.item[i].schedule_ID;
        }


        $scope.insert_qna = function(){
            if($scope.event_ID == null){
                alert("질문 하실 강의를 선택해 주세요");
            }
            else{
                if($scope.write_qna==null){
                    alert("질문을 작성해 주세요");
                }
                else{
                    executeResults.insert_qna($scope.event_ID,$scope.user_class_ID,$scope.user_ID,$scope.schedule_ID,$scope.write_qna).then(function(data) {
                        $scope.insert_qna = data;
                        location.reload();
                    });

                }
            }
        }


        $scope.qna_list = function(){
            $location.url('/lectureQnaList');
        }


    });