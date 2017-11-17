'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', '$sce', '$firebaseArray', function($scope, mncservice, $timeout, $sce, $firebaseArray) {
        
        /* let ref = firebase.database().ref();
        let list = $firebaseArray(ref);
        list.$loaded().then(function() {
            $scope.list = [];
            angular.forEach(list, function(value,key){
               $scope.list.push({ id: key, data: value})
            })
            console.log($scope.list[0]);
         }); */
        
        //console.log($scope.list);
        mncservice.flist(function(list){
                $scope.list = list[0].data;
                $scope.bot = "";
                let tinterval = 2000;
                for (let i=0;i<list[0].data.length;i++) {
                    (function(i){
                        $timeout(function () {
                            console.log(list[0].data[i]);
                            $scope.bot = $scope.bot + $sce.trustAsHtml("<bot-talk cline='" + list[0].data[i].botresponse + "'></bot-talk>");
                        }, i * 2000)
                    })(i);

                }

            })

        $scope.bclick = function() {
            $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + $scope.chatline +"></user-talk>");
        }

        $scope.optns = [{opt: "Banking"},{opt : "Investment"}, {opt : "Not Sure"}];

/*         $timeout(function () {
            $scope.bot = $sce.trustAsHtml("<bot-talk cline='Welcome!!'></bot-talk>");
        }, 2000)

        $timeout(function () {
            $scope.bot =  $scope.bot + $sce.trustAsHtml("<bot-talk cline='What do you want to do?'></bot-talk>");
        }, 4000)

        $timeout(function () {
            //$scope.bot = $scope.bot + "<options cline=optns bot=bot></options>";
            $scope.usrselect = true;
            $scope.soptions = "<options cline=optns bot=bot usrselect=usrselect></options>";
        }, 5000) */
    }])