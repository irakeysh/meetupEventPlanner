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

  AddeventCtrl.$inject = ['$scope','$firebaseObject','$rootScope','$state','$mdDialog'];

  function AddeventCtrl($scope,$firebaseObject,$rootScope,$state,$mdDialog){
    if($rootScope.userId==null)
       $state.go('login');
    $rootScope.addEventButton = false;
    $rootScope.homeButton = true;
  	$scope.uploadEvent = function(){
  		console.log($scope.eventName);
  		var addEvent = firebase.database().ref().child('Events');
  	   addEvent.push({
  		  eventname:$scope.eventName,
        host:$scope.hostName,
        place:$scope.location,
        starts:$scope.startDate,
        startTime:$scope.eventStartTime,
        ends:$scope.endDate,
        endTime:$scope.eventEndTime,
        theme:$scope.eventTheme,
        guest:$scope.guestList

    }).then(function(){
           var confirm = $mdDialog.confirm().title("Event Upload Suceessfull").ariaLabel("Event Upload Suceessfull")
                                .targetEvent(event).ok("Go to Home").cancel("Add another Event");
                                $mdDialog.show(confirm).then(function(){
                                  $state.go('home');
                                },function(){$state.go('addevent')})
    })
  	}}
