angular.module("App")
.config(['$routeProvider','$locationProvider',function(routeProvider,locationProvider){
  routeProvider
    .when("/home",{
        controller: "mainCtrl",
        templateUrl: "templates/home.html"
    })
    .when("/post/new/",{
      controller: "postNewCtrl",
      templateUrl: "templates/post_form.html"
    })
    .when("/post/edit/:id",{
      controller: "postCtrl",
      templateUrl: "templates/post_form.html"
    })
    .when("/post/:id",{
      controller: "postCtrl",
      templateUrl: "templates/post.html"
    })
    .when("/user/contact/:id",{
      controller: "UserCtrl",
      templateUrl: "templates/user.html"
    })
    .when("/user/posts/:id",{
      controller: "postByUserCtrl",
      templateUrl: "templates/postByUser.html"
    })
    .otherwise({
        redirectTo: '/home'
    });

    locationProvider.html5Mode({
               enabled: true,
               requireBase: true
        });
}]);
