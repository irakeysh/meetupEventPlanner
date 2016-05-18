'use strict';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkOXCIoGyQBjD3tLwYESnADkA5d_YzccI",
    authDomain: "meetupeventplanner-84795.firebaseapp.com",
    databaseURL: "https://meetupeventplanner-84795.firebaseio.com",
    storageBucket: "meetupeventplanner-84795.appspot.com",
  };
  firebase.initializeApp(config);
/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl',LoginCtrl);
  LoginCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS', '$firebaseAuth'];

  function LoginCtrl($scope, $rootScope, $location, APP_SETTINGS, $firebaseAuth) {
    var auth = firebase.auth();
    $scope.registerUser = function(){
    	auth.createUserWithEmailAndPassword($scope.newUserEmail,$scope.newUserPassword)
    			.then(function(userData){
    				console.log("User Registration successfull with the following details",userData.uid)
    			})
    			.catch(function(error){
    				console.log("Error with the error:",error);
    			})
    };

    $scope.loginUser = function(){
      auth.signInWithEmailAndPassword($scope.activeUserEmail,$scope.activeUserPassword)
          .then(function(userData){
            console.log("User Login successfull with the following details",userData.uid)
          })
          .catch(function(error){
            console.log("Error with the error:",error);
          })
    };
};
