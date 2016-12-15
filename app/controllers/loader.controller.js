angular.module("App")
  .controller("loaderCtrl",['$scope','PostService','$routeParams',function(scope,Post,Params) {
      scope.post = Post.get({id: Params.id});
  }]);
