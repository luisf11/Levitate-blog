angular.module("App")
.controller("aboutCtrl",['$scope',function(scope) {
    scope.skills = [
      "Actively Seek New Programming Knowledge",
      "Experience Building User Interfaces and Prototypes From Wireframes and Designs",
      "Experience With Git and Github",
      "Familiar With Development and Debugging Tools for Cross-Browser Issues",
      "Knowledgeable of REST-Based APIs",
      "Proficient With Javascript",
      "Seamlessly Switch Between Multiple Projects",
      "Self-Starter Attitude",
      "Solid Understanding of HTML5/CSS3, jQuery and Responsive Design",
      "Solid Understanding of Object-Oriented Programming (OOP)",
      "Strong Problem Solver"];

    scope.back = function() {
        window.history.back();
    }
}]);
