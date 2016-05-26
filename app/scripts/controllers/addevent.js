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

  AddeventCtrl.$inject = ['$scope','$firebaseObject','$rootScope'];

  function AddeventCtrl($scope,$firebaseObject,$rootScope){
  	$scope.uploadEvent = function(){
  		console.log("Event uplaod initiated");
  		var addEvent = firebase.database().ref().child('events').child($rootScope.userId);
  	addEvent.push({
  		eventname:"Action",
  		performer:"Sana Khan"
  	})

  	}
    }
