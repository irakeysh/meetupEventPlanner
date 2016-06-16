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
     $scope.eventLocation = {'address': '', 'Lat': '', 'Lng' : ''};
    $rootScope.homeButton = true;
    var addressBox = document.getElementById("location");
    var addressInput = new google.maps.places.Autocomplete(addressBox);
    google.maps.event.addListener(addressInput, 'place_changed', function() {
        var place = addressInput.getPlace();
        $scope.eventLocation.Lat = place.geometry.location.lat();
        $scope.eventLocation.Lng = place.geometry.location.lng();
        $scope.eventLocation.address = place.formatted_address;
        $scope.$apply();
    });
  	$scope.uploadEvent = function(){
  		console.log($scope.eventName);
  		var addEvent = firebase.database().ref().child('Events');
  	   addEvent.push({
  		  eventname:$scope.eventName,
        host:$scope.hostName,
        physcialAddress:$scope.eventLocation.address,
        lng:$scope.eventLocation.Lat,
        lat:$scope.eventLocation.Lng,
        starts:$scope.startDate,
        startTime:$scope.eventStartTime,
        ends:$scope.endDate,
        endTime:$scope.eventEndTime,
        theme:$scope.eventTheme,
        guest:$scope.guestList,


    }).then(function(){
           var confirm = $mdDialog.confirm().title("Event Upload Suceessfull").ariaLabel("Event Upload Suceessfull")
                                .targetEvent(event).ok("Go to Home").cancel("Add another Event");
                                $mdDialog.show(confirm).then(function(){
                                  $state.go('home');
                                },function(){$state.go('addevent')})
    })
  	}}
