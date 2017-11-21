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
        controller: function($scope, $sce, mncservice, $timeout) {
            $scope.clickres = function(res) {
                $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + res +"></user-talk>");
                $scope.usrselect = false;
                for (let i=0;i<mncservice.plist.length;i++) {
                    if (mncservice.plist[i].intent!=undefined && mncservice.plist[i].intent == res){
                        (function(i){
                            $timeout(function () {
                                $scope.bot = $scope.bot + $sce.trustAsHtml("<bot-talk cline='" + mncservice.plist[i].botresponse + "'></bot-talk>");
                                if (typeof(mncservice.plist[i].options) != 'undefined') {
                                    let opts = [];
                                    for (let opt of mncservice.plist[i].options) {
                                        opts.push({"opt" : opt });
                                    }
                                    $timeout(function () {
                                        $scope.opts1 = opts;
                                        $scope.usrselect = true;
                                    }, i * 1000)
                                }
                            }, i * 1000)
                        })(i);
                        if(!mncservice.plist[i].followup) {
                            break;
                        } 
                    }
                    }
                }
            }
        }
    })
    .directive('userTalk', function() {
        return {
        restrict: 'EA',  
        replace: true,
        scope: {usrline: '@cline'},  
        template: "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>{{usrline}}</div></div>"
        };
    });  