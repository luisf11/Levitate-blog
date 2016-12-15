angular.module("App")
  .factory('CommentService',['$resource',function(resource){
      return resource("http://jsonplaceholder.typicode.com/posts/:id/comments",{id: "@id"},{update: {method: "PUT"}});
  }]);
