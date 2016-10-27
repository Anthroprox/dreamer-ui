// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);
var control = angular.module('starter.controllers', []);
var service = angular.module('starter.services', []);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})


app.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    }).state('tab.now', {
        url: '/now',
        views: {
            'tab-now': {
                templateUrl: 'view/now/tab-now.html',
                controller: 'nowCtrl'
            }
        }
    }).state('tab.publicate', {
        url: '/publicate',
        views: {
            'tab-publicate': {
                templateUrl: 'view/publicate/tab-publicate.html',
                controller: 'publicateCtrl'
            }
        }
    }).state('tab.ten', {
        url: '/ten',
        views: {
            'tab-ten': {
                templateUrl: 'view/ten/tab-ten.html',
                controller: 'tenCtrl'
            }
        }
    }).state('login', {
        url: '/login',
        templateUrl: 'view/login/login.html',
        controller: 'loginCtrl'
    }).state('singup', {
        url: '/singup',
        templateUrl: 'view/singup/singup.html',
        controller: 'singupCtrl'
    });


    $urlRouterProvider.otherwise('/login');

});


