'use strict';

angular.module('mynltkchat')
    .controller('mnc_ctrl',['$scope','mncservice', '$timeout', '$sce', '$firebaseArray', function($scope, mncservice, $timeout, $sce, $firebaseArray) {
        
        mncservice.flist(function(list){
                $scope.list = list[0].data;
                mncservice.plist = list[0].data;
                $scope.bot = "";
                let tinterval = 2000;
                for (let i=0;i<list[0].data.length;i++) {
                    (function(i){
                        $timeout(function () {
                            $scope.bot = $scope.bot + $sce.trustAsHtml("<bot-talk cline='" + list[0].data[i].botresponse + "'></bot-talk>");
                            if (typeof(list[0].data[i].options) != 'undefined') {
                                let opts = [];
                                for (let opt of list[0].data[i].options) {
                                    opts.push({"opt" : opt });
                                }
                                $scope.optns = opts;
                                $timeout(function () {
                                    $scope.usrselect = true;
                                    $scope.soptions = "<options cline=optns bot=bot usrselect=usrselect></options>";
                                }, i * tinterval)
                            }
                        }, i * tinterval)
                    })(i);
                    if(!list[0].data[i].followup) {
                        break;
                    } 
                }

            })

        $scope.bclick = function() {
            $scope.bot = $scope.bot + $sce.trustAsHtml("<user-talk cline=" + $scope.chatline +"></user-talk>");
        }
    }])