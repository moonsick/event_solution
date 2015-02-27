'use strict';

var app = angular.module('eventApp', [
    'ngRoute',
    'angularFileUpload',
    'LocalStorageModule',
    'angular-storage',
    'ui.bootstrap',
    'ngCookies'
]);
app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/html/010-00-main/010-00-main.html'
            })
            /*.when('/kang', {
                redirectTo: '/'
            })*/
            .when('/introduction', {
                templateUrl: '/src/app/html/020-00-introduction/020-00-introduction.html'
            })
            .when('/invitation', {
                templateUrl: '/src/app/html/030-00-invitation/030-00-invitation.html'
            })
            .when('/schedule', {
                templateUrl: '/src/app/html/040-00-schedule/040-00-schedule.html'
            })
            .when('/lectureList', {
                templateUrl: '/src/app/html/050-00-lecture/050-00-lectureList.html'
            })
            .when('/lectureDetail', {
                templateUrl: '/src/app/html/050-00-lecture/050-01-lectureDetail.html'
            })
            .when('/lectureQna', {
                templateUrl: '/src/app/html/060-00-lectureQna/060-00-lectureQna.html'
            })
            .when('/lectureQnaList', {
                templateUrl: '/src/app/html/060-00-lectureQna/060-01-lectureQnaList.html'
            })
            .when('/lectureQnaDetail', {
                templateUrl: '/src/app/html/060-00-lectureQna/060-02-lectureQnaDetail.html'
            })
            .when('/surroundings', {
                templateUrl: '/src/app/html/070-00-surroundings/070-00-surroundings.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

