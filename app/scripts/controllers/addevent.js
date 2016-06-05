'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AddeventCtrl
 * @description
 * # AddeventCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('AddeventCtrl',AddeventCtrl);

  AddeventCtrl.$inject = ['$scope','$firebaseObject','$rootScope','$state'];

  function AddeventCtrl($scope,$firebaseObject,$rootScope,$state){
    if($scope.userId==null)
       $state.go('login');
  	$scope.uploadEvent = function(){
  		console.log($scope.eventName);
  		var addEvent = firebase.database().ref().child('Events');
  	addEvent.push({
  		eventname:$scope.eventName,
        place:$scope.location,
        starts:$scope.startDateTime,
        ends:$scope.endDateTime,
        theme:$scope.eventTheme
    })
  	}}
