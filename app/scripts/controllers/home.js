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
  HomeCtrl.$inject = ['$firebaseArray','$rootScope','$scope'];
  function HomeCtrl($firebaseArray,$rootScope,$scope){
  	var loadEvents = firebase.database().ref().child('Events');
  	var totalEvents = $firebaseArray(loadEvents);
  	console.log(totalEvents);
  	totalEvents.$loaded()
  					.then(function(){
  						console.log("hi1");
  						angular.forEach(totalEvents,function(totalEvents){
  							$scope.events.push(totalEvents);

  						})
  					});
  };
