angular.module('gae-blog')
    .directive('authDirective', Auth);

function Auth($log) {
    return {
        restrict: 'E',
        templateUrl: 'scripts/authentication/auth-template.html',
        link: function (scope) {
            scope.isLoggedIn = false;
            //TODO add component for getting client id
            scope.clientId = '892304973346-gavurg94hpu18m05d2r8h8c2fe62ddss.apps.googleusercontent.com';
            scope.attemptLogin = function () {
                $log.log("~~~ attempting to fetch an Access token ~~~");
                gapi.auth.authorize(
                    {'client_id': scope.clientId, 'scope': 'https://www.googleapis.com/auth/drive', 'immediate': false},
                    handleAuthResult);
            };
            scope.toggleLoginState=function(){
            };
           scope.createFolder=function()
            {
//TODO
            };

            function handleAuthResult(authResult) {
                scope.$apply(function () {
                    if (authResult && !authResult.error) {
                        $log.log("~~~ Access token has been successfully retrieved, requests can be sent to the API ~~~");
                        scope.isLoggedIn = true;
                    } else {
                        $log.log("~~~ Access token fetching attempt was not successful ~~~");
                        //TODO handle error

                    }
                });
            }
        }
    };
}
