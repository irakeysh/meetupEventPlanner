'use strict';
 
/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
 
angular.module('eventPlannerApp')
  .controller('LoginCtrl',LoginCtrl);
  LoginCtrl.$inject = ['$scope', '$rootScope', '$location', 'APP_SETTINGS', '$firebaseAuth','$state','$firebaseObject','$mdToast'];

  function LoginCtrl($scope, $rootScope, $location, APP_SETTINGS, $firebaseAuth,$state,$firebaseObject,$mdToast) {
    if($rootScope.userId!=null)
          $state.go('home');
    var auth = firebase.auth();
    $scope.registerUser = function(){
    	auth.createUserWithEmailAndPassword($scope.newUserEmail,$scope.newUserPassword)
    			.then(function(userData){
    				console.log("User Registration successfull with the following details",userData.uid);
            var addUserInEventsDb = firebase.database().ref().child('events');
            $rootScope.userId = userData.uid;
            $rootScope.userName = $scope.newUserFullname;
            console.log($rootScope.userId);
             $state.go('home');
            
    			})
    			.catch(function(error){
    				console.log("Error with the error:",error);
    			})
    };

    $scope.loginUser = function(){
      auth.signInWithEmailAndPassword($scope.activeUserEmail,$scope.activeUserPassword)
          .then(function(userData){
            console.log("User Login successfull with the following details",userData.uid);
             $rootScope.userId = userData.uid;
            $state.go('home');
          },function(){
            $mdToast.show($mdToast.simple().textContent("Authentication failed. Invalid username or password.")
                                            .hideDelay(10000));
          })

           
          }
    };
