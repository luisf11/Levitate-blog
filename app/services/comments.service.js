angular.module("App")
  .factory('CommentService',['$resource',function(resource){
      return resource("https://jsonplaceholder.typicode.com/posts/:id/comments",{id: "@id"},{update: {method: "PUT"}});
  }]);
