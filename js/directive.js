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
        restrict: 'E',
        transclude: false,  
        scope: {botline: '=cline'},  
        template: "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgright' /><div class='calloutleft'>{{botline}}</div></div>"
        };
      });