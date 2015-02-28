'use strict';

/**
 * @ngdoc service
 * @name adminApp.Gdrive
 * @description
 * # Gdrive
 * Service in the adminApp.
 */
angular.module('adminApp')
  .service('Gdrive', function ($window, $q, $rootScope, $log) {
    var gdrive = this;
    gdrive.isLoggedIn = false;
    //TODO add component for getting client id
    var clientId = '892304973346-gavurg94hpu18m05d2r8h8c2fe62ddss.apps.googleusercontent.com';

    gdrive.attemptLogin = function () {
      var D = $q.defer();
      $window.gapi.auth.authorize(
        {'client_id': clientId, 'scope': 'https://www.googleapis.com/auth/drive', 'immediate': false},
        function (authResult) {
          $rootScope.$apply(function () {
            if (authResult && !authResult.error) {
              $log.log("~~~ Access token has been successfully retrieved, requests can be sent to the API ~~~");
              gdrive.isLoggedIn = true;
              D.resolve(true);
            } else {
              $log.log("~~~ Access token fetching attempt was not successful ~~~");
              D.reject('Failed to authorize');
            }
          });
        });
      return D.promise;
    };
    gdrive.toggleLoginState = function () {
    };
    gdrive.createFolder = function () {
    };
  });
