angular.module("App")
.controller("UserCtrl",['$scope','$routeParams','UserService',function(scope,Params,User) {
    scope.user = User.get({id: Params.id});


    scope.back = function() {
        window.history.back();
    }
}]);
