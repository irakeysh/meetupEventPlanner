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
        .controller('navBarCtrl',['$firebaseAuth','$state','$scope','$rootScope','$state',function($firebaseAuth,$state,$scope,$rootScope,$state){
             $rootScope.newEventButton = false;
             $rootScope.homeButton = false;
             $scope.toHome = function(){
              $state.go('home');
             }
             $scope.toAddEvent = function(){
              $state.go('addevent');
             }
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

       