angular.module("App")
  .controller("mainCtrl",['$scope','PostService','UserService',function(scope,Post,User){
    scope.posts = Post.query();
    scope.users = User.query();

    scope.remove = function(post){
          Post.delete({id: post.id});
          //se elimina del arreglo de objetos porque jsonplaceholder no lo borra de su base de datos.
          scope.posts = scope.posts.filter(function(element){
            return post.id !== element.id;
          })
    }
  }]);
