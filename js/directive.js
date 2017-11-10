'use strict';

angular.module('mynltkchat')
    .directive('compile', ['$compile', function ($compile) {
        return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
                return scope.$eval(attrs.compile);
            },
            function(value) {
                element.html(value);
                $compile(element.contents())(scope);
            }
        );
        };
    }])
    .directive('botTalk', function() {
        return {
        restrict: 'EA',  
        replace: true,
        scope: {botline: '@cline'},  
        template: "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgright' /><div class='calloutleft'>{{botline}}</div></div>"
        };
    })
    .directive('options', function() {
        return {
        restrict: 'EA',  
        replace: true,
        scope: {opts1: '=cline', bot: '=bot', usrselect: '=usrselect'},   
        templateUrl: "../options.html",
        controller: function($scope, $sce) {
            $scope.clickres = function(res) {
                //$scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>" + res + "</div></div>"
                console.log(res);
                $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + res +"></user-talk>");
                $scope.usrselect = false;
            }
        }
        };
    })
    .directive('userTalk', function() {
        return {
        restrict: 'EA',  
        replace: true,
        scope: {usrline: '@cline'},  
        template: "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>{{usrline}}</div></div>"
        };
    });  