angular.module("App")
  .factory('UserService',['$resource',function(resource){
    return resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"},{update: {method: "PUT"}});
  }]);
