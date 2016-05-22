angular
	.module('eventPlannerApp')
	.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/login")
      
      $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "../views/login.html"
        })
          
        .state('events', {
            url: "/events",
            templateUrl: "../views/events.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "../views/home.html"
        })
        .state('addevent', {
            url: "/addevent",
            templateUrl: "../views/addevent.html"
        })
    })