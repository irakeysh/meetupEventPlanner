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
         .run(function($rootScope){
          $rootScope.events=[];
          $rootScope.userId = null;
         });