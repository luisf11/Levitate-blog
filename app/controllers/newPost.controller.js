angular.module("App")
  .controller("postNewCtrl",['$scope','PostService','$location',function(scope,Post,location) {
      scope.post = {};
      scope.tittle = "Nuevo Post";

      scope.savePost = function(){
        Post.save({data: scope.post},function(data){
            location.path('post/'+ scope.post.id);
        });
      }
  }]);
