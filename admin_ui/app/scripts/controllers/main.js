'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope, Gdrive) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.login = function() {
      Gdrive.attemptLogin().then(function(a) {
        console.log('xx', a)
      }, function(a) {
        console.log('error', a)
      });
    }
  });
