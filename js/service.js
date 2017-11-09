'use strict';

angular.module('mynltkchat')
    .service('mncservice', ['$resource', function($resource) {
        let self = this;
        this.stest = "hello";
        this.chattalk = "";
        this.mnc_gettags = function(ltext) {
            //let tags = $resource('http://47.89.183.51:1234/gettags:line', {sline:'@line'});
            let tags = $resource('http://47.89.183.51:1234/rasanlu:line', {sline:'@line'});
            let result = tags.get({sline:encodeURIComponent(ltext)});
            return result;
        }
    }])