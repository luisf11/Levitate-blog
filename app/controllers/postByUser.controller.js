angular.module("App")
.controller("postByUserCtrl",['$scope','postByUserService','$routeParams','UserService',function(scope,Post,Params,User) {
    scope.posts = Post.query({id: Params.id});
    scope.user = User.get({id: Params.id});


    scope.back = function() {
        window.history.back();
    }
}]);
