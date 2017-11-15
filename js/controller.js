'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', '$sce', '$firebaseArray', function($scope, mncservice, $timeout, $sce, $firebaseArray) {
        let ref = firebase.database().ref();
        let list = $firebaseArray(ref);
        list.$loaded().then(function() {
            $scope.list = [];
            angular.forEach(list, function(value,key){
               $scope.list.push({ id: key, data: value})
            })
            console.log($scope.list[0].data[1]);
         });

        //console.log($scope.list);

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