'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', '$sce', function($scope, mncservice, $timeout, $sce) {

        $scope.bclick = function() {
            $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + $scope.chatline +"></user-talk>");
        }

        $scope.optns = [{opt: "Banking"},{opt : "Investment"}, {opt : "Not Sure"}];

        $timeout(function () {
            $scope.bot = $sce.trustAsHtml("<bot-talk cline='Welcome!!'></bot-talk>");
        }, 2000)

        $timeout(function () {
            $scope.bot =  $scope.bot + $sce.trustAsHtml("<bot-talk cline='What do you want to do?'></bot-talk>");
        }, 4000)

        $timeout(function () {
            //$scope.bot = $scope.bot + "<options cline=optns bot=bot></options>";
            $scope.usrselect = true;
            $scope.soptions = "<options cline=optns bot=bot usrselect=usrselect></options>";
        }, 5000)
    }])