angular.module("App")
.controller("postCtrl",['$scope','PostService','$routeParams','$location','CommentService',function(scope,Post,Params,location,Comments) {
    scope.post = Post.get({id: Params.id});
    scope.comments = Comments.query({id: Params.id});
    scope.tittle = "Edit Post";

    scope.savePost = function(){
      Post.update({id: scope.post.id},{data: scope.post},function(data){
        location.path('post/'+ scope.post.id);
      });
    }

    scope.back = function() {
        window.history.back();
    }
}]);
