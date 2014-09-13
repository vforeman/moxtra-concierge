//core.js

// create the module and name it app
var app = angular.module('app', ['ngRoute']);


// configure our routes
// we usually specify the route, template to use, and possibly a controller
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider

 // route for the home page
    .when('/', {
      templateUrl : '/templates/home.html',
      controller : 'mainController'
    })
     .when('/home' , {
        templateUrl : '/templates/home.html',
        controller : 'mainController'
    })

    .when('/about', {
      templateUrl : '/templates/faq.html',
      controller : 'aboutController'
    })

    .when('/faq', {
      templateUrl : '/templates/faq.html',
      controller : 'faqController'
    })

    .when('/members',{
      templateUrl : '/templates/members.html',
      controller : 'membersController'
    })

    .when('/contact',{
      templateUrl : '/templates/contact.html',
      controller : 'contactController'
    })

    .when('/goals',{
      templateUrl : '/templates/goals.html',
      controller : 'goalController'
    })

    .when('/updates',{
      templateUrl : '/templates/updates.html',
      controller : 'updateController'
    })


    .when('/legends',{
      templateUrl : '/templates/legends.html',
      controller : 'legendController'
    })

    .when('/join',{
      templateUrl : '/templates/join.html',
      controller : 'joinController'
    })

    .when('/services',{
      templateUrl : '/templates/services.html',
      controller : 'servicesController'
    })

    .when('/resources',{
      templateUrl : '/templates/resources.html',
      controller : 'resourcesController'
    });

  }]);
    //
app.controller('mainController', function($scope){

  // create a message to display in our view
  $scope.message = 'Welcome to the CLDC SITE!!';
  
  
});

app.controller('aboutController', function($scope){

  // create a message to display in our view
  $scope.message = 'About CLDC';
});

app.controller('goalController', function($scope){

  // create a message to display in our view
  $scope.message = 'About our GOALS';
});






app.controller('faqController', function($scope){

  // create a message to display in our view
 
  $scope.questions=[
  {ask:"where is cldc located",ans:'CLDC is located on the second floor of the Lewis K. Downing building, otherwise known as the School of Engineering and Computer Science'},
  {ask:"which rooms are available", ans:'Rooms 2104:Clide, 2105:Orange, and 2110:Purple are accessible to the general public'},
  {ask:"can anyone use the cldc labs",ans:'anyone with a cldc-lab account may use the computers'},
  {ask:"how do I acquire a CLDC-lab account",ans:'If you desire a login, you must present an operator with your ID card. You will be given a login and a temporary password. This password must be changed when you attempt to log on for the first time. After that it\'s smooth sailing.'},
  {ask:"when is the lab open",ans:'CLDC normal hours of operation are Monday - Thursday 10am - 10pm Friday 10am- 4pm'},
  {ask:"how can I resolve printing issues",ans:'If you are having trouble printing, first be sure to check that you are using the correct printer. If you are in fact using the correct printer and are still unable to print, calmly alert the nearest operator / administrator. Also keep in mind that print quotas are in effect. this means that users are allowed 30 pages per week. unused pages DO NOT carry over.'}
  ];
});







app.controller('membersController', function($scope){

  // create a message to display in our view
  $scope.message = 'The Members of CLDC';
  $scope.members=[
  {name:'Victor Foreman',email:'vforeman@scs.howard.edu'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'},
  {name:'cldc member',email:'someone@something.com'}

  ];
});


app.controller('contactController', function($scope){

  // create a message to display in our view
  $scope.message = 'Contact Us!';
});





app.controller('legendController', function($scope){

  // create a message to display in our view
  $scope.message = 'Testimonials from Alumni';
  $scope.alum=[
  {name:'Peter Scotland-Cudjoe',
    bio:"I was a Chemical Engineering major when I worked in CLDC.",
    imgsrc:'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1560745_10100421908848170_1682215361_n.jpg'},
  {name:'Andre Fraser',
    bio:"As a Principal with ETE Enterprises, Andre T. Fraser is a pioneer in the application service provider industry.",
    imgsrc:'http://www.eteenterprises.com/cms/wp-content/uploads/2012/09/Andre_T.Fraser-150x150.jpg'}];
});





app.controller('joinController', function($scope){

  // create a message to display in our view
  $scope.message = 'Interested? Join CLDC';
});

app.controller('servicesController', function($scope){

  // create a message to display in our view
  $scope.message = 'Services Within CLDC';
});

app.controller('resourcesController', function($scope){

  // create a message to display in our view
  $scope.message = 'Tools and Resources for Projects';
});







