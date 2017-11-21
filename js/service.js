'use strict';

angular.module('mynltkchat')
    .service('mncservice', ['$resource', '$firebaseArray', '$q', function($resource, $firebaseArray, $q) {
        let self = this;
        self.plist = "";
        this.mnc_gettags = function(ltext) {
            //let tags = $resource('http://47.89.183.51:1234/gettags:line', {sline:'@line'});
            let tags = $resource('http://47.89.183.51:1234/rasanlu:line', {sline:'@line'});
            let result = tags.get({sline:encodeURIComponent(ltext)});
            return result;
        }
        
        let ref = firebase.database().ref();
        let list = $firebaseArray(ref);

        this.flist = function(callback) {
            list.$loaded().then(function() {
                const glist = [];
                angular.forEach(list, function(value,key){
                glist.push({ id: key, data: value});
                }); 
              callback(glist);
            })
        };
        

    }])