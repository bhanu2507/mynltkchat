'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', function($scope, mncservice, $timeout) {

        $scope.bclick = function() {
            console.log(mncservice.mnc_gettags($scope.chatline));
            $scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>" + $scope.chatline + "</div></div>"
        }

        $scope.clickres = function(res) {
            console.log('here');
            $scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgleft' /><div class='calloutright'>" + res + "</div></div>"
        }

        $timeout(function () {
            $scope.bot = "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgright' /><div class='calloutleft'>welcome</div></div>";
        }, 2000)

        $timeout(function () {
            $scope.bot = $scope.bot + "<div class='calloutbig'><img src='img/logo220.png' width='45px' height='45px' class='circular--square imgright' /><div class='calloutleft'>How are you today?</div></div>";
        }, 4000)

        $timeout(function () {
            $scope.bot = $scope.bot + "<div class='calloutbigres'><div class='resops'><a ng-click='clickres()'>Good</a></div><div class='resops'>Not So Good</div><div class='resops'>Bad</div></div>";
        }, 5000)
    }])