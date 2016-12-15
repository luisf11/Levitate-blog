angular.module("App")
  .factory('PostService',['$resource',function(resource){
      return resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"},{update: {method: "PUT"}});
  }]);
