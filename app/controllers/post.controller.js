angular.module("App")
.controller("postController",['$scope','PostService','$routeParams','$location',function(scope,Post,Params,location) {
    scope.post = Post.get({id: Params.id});
    scope.tittle = "Editar Post";

    scope.savePost = function(){
      Post.update({id: scope.post.id},{data: scope.post},function(data){
        location.path('post/'+ scope.post.id);
      });
    }

    scope.back = function() {
        window.history.back();
    }
}]);
