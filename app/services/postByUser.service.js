angular.module("App")
  .factory('postByUserService',['$resource',function(resource){
    return resource("http://jsonplaceholder.typicode.com/users/:id/posts",{id: "@id"},{update: {method: "PUT"}});
  }]);
