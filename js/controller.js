'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', '$sce', function($scope, mncservice, $timeout, $sce) {

        $scope.bclick = function() {
            console.log(mncservice.mnc_gettags($scope.chatline));
           // $scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>" + $scope.chatline + "</div></div>"
            $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + $scope.chatline +"></user-talk>");
        }

        $scope.clickres = function(res) {
            //$scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>" + res + "</div></div>"
            $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + res +"></user-talk>");
        }

        $scope.optns = [{opt: "Good"},{opt : "Bad"}, {opt : "Not so Good"}];

        $timeout(function () {
            $scope.bot = $sce.trustAsHtml("<bot-talk cline='Welcome!!'></bot-talk>");
        }, 2000)

        $timeout(function () {
            $scope.bot =  $scope.bot + $sce.trustAsHtml("<bot-talk cline='How are you today?'></bot-talk>");
        }, 4000)

        $timeout(function () {
            //$scope.bot = $scope.bot + "<div class='calloutbigres'><div class='resops'><a ng-click=clickres('Good')>Good</a></div><div class='resops'>Not So Good</div><div class='resops'>Bad</div></div>";
            $scope.bot = $scope.bot + "<options cline=optns bot=bot></options>";
        }, 5000)
    }])