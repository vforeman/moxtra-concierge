//core.js

// create the module and name it app
var app = angular.module('app', ['ngRoute']);


// configure our routes
// we usually specify the route, template to use, and possibly a controller
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

 // route for the home page
    .when('/', {
      templateUrl : '/templates/dash.html',
      controller : 'mainController'
    })
    

  }]);
    //
app.controller('mainController', function($scope){

  // create a message to display in our view
  $scope.message = 'Welcome to your store dashboard';
  
  
});







