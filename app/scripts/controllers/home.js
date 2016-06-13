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
   $rootScope.homeButton = false;
   	$rootScope.addEventButton =true;
    
  					};
