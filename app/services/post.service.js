angular.module("App")
  .factory('PostService',['$resource',function(resource){
      return resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"},{update: {method: "PUT"}});
  }]);
