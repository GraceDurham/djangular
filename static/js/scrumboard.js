
(function(){
	'use strict';

	angular.module('scrumboard.demo', ['ngRoute'])
		.controller('ScrumboardController', ['$scope', '$http', 'Login', ScrumboardController]);

	function ScrumboardController($scope, $http, Login)  {
		$scope.add = function (list, title) {
			var card = {
				list: list.id,
				title: title
			};

			$http.post('/scrumboard/cards/', card)
				.then(function (response) {
					list.cards.push(response.data); // response contains response from server 
													// after saving card has database id that we can use it to create url that references id where we can use put delete method on card
				},									// takes card object from server and pushes it onto list
											   		// stores id of card to the server when user gets an error card	 
				 function () {
				 	alert('Could not create card');
				
				}

			);

		};

		Login.redirectIfNotLoggedIn();
		$scope.data =[];
		$scope.logout = Login.logout;
		$scope.sortBy = 'story_points';
		$scope.reverse = true;
		$scope.showFilters = false;


	
		$http.get('/scrumboard/lists/').then(
			function (response) {
				$scope.data = response.data;
			//add $http.get data from url restframe work add then functions pass response from http call add scope.data to display JSON data
			}
		);
					
	}								
					
}());