'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('HomeCtrl',HomeCtrl);
  HomeCtrl.$inject = ['$firebaseArray','$rootScope','$scope','$state'];
  function HomeCtrl($firebaseArray,$rootScope,$scope,$state){
    if($rootScope.userId==null)
       $state.go('login');
   var loadEvents = firebase.database().ref().child('Events');
   loadEvents.on('value',function(snapshot){
   	   $rootScope.events = [];
   	snapshot.forEach(function(childSnapshot) {
                    $rootScope.events.push(childSnapshot.val());
                });
   				console.log("Update successfull");
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

   $rootScope.homeButton = false;
   	$rootScope.addEventButton =true;

   	$scope.showMap = function(lat,lng){
   		console.log(lat,lng);
   	}
    
  					};
