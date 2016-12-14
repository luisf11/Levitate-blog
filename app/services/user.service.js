angular.module("App")
  .factory('UserService',['$resource',function(resource){
    return resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"},{update: {method: "PUT"}});
  }]);
