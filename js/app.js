'use strict';

angular.module('mynltkchat', [
    'ngMaterial', 
    'ngResource',
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    'firebase'
]);
angular.module('mynltkchat')
    .config(function() {
        var config = {
            apiKey: "AIzaSyBF9-Ll1R0wqrrI8XDF0RApYmyubOKlI0M",               // Your Firebase API key
            authDomain: "botconv.firebaseapp.com",       // Your Firebase Auth domain ("*.firebaseapp.com")
            databaseURL: "https://botconv.firebaseio.com",     // Your Firebase Database URL ("https://*.firebaseio.com")
            storageBucket: "botconv.appspot.com"  // Your Cloud Storage for Firebase bucket ("*.appspot.com")
          };
          firebase.initializeApp(config);
    })