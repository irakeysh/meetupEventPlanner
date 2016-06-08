(function () {
    angular.module('eventPlannerApp').constant('APP_SETTINGS', {
        "FIREBASE_URL": "https://angularfireauth.firebaseio.com/"
    })}());

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkOXCIoGyQBjD3tLwYESnADkA5d_YzccI",
    authDomain: "meetupeventplanner-84795.firebaseapp.com",
    databaseURL: "https://meetupeventplanner-84795.firebaseio.com",
    storageBucket: "meetupeventplanner-84795.appspot.com",
  };
  firebase.initializeApp(config);

  angular.module('eventPlannerApp')
         .run(function($rootScope,$firebaseArray){
          $rootScope.events=[];
          $rootScope.userId = null;
          console.log("testing testing");
          var loadEvents = firebase.database().ref().child('Events');
          var totalEvents = $firebaseArray(loadEvents);
          console.log(totalEvents);
          totalEvents.$loaded()
            .then(function(){
              console.log("hi1");
              angular.forEach(totalEvents,function(totalEvents){
                 $rootScope.events.push(totalEvents);

              })
         });
    });

angular.module('eventPlannerApp')
        .controller('navBarCtrl',['$firebaseAuth','$state','$scope','$rootScope',function($firebaseAuth,$state,$scope,$rootScope){
             $scope.signout = function(){
             firebase.auth().signOut().then(function() {
                console.log('You have Sign Out successfully.');
                 $rootScope.userId = null;
                 $state.go('login');

                }, function(error) {
                   console.error('Sign Out Error', error);
});

             }
        }]);

       