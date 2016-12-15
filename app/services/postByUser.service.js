angular.module("App")
  .factory('postByUserService',['$resource',function(resource){
    return resource("https://jsonplaceholder.typicode.com/users/:id/posts",{id: "@id"},{update: {method: "PUT"}});
  }]);
