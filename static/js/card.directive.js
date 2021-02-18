(function () {
	'use strict';

	angular.module('scrumboard.demo')
		.directive('scrumboardCard', CardDirective);


	function CardDirective() {
		return {
			templateUrl: '/static/html/card.html',
			restrict:'E',
			controller: ['$scope', '$http', function ($scope, $http){
				var url = '/scrumboard/cards/' + $scope.card.id + '/';


				$scope.update = function () {
					return $http.put(
						url,
						$scope.card
						
					);
				};

				function removeCardFromList(card, list){
					var cards = list.cards;
					cards.splice(
						cards.indexOf(card),
						1


					);
				}

				$scope.delete = function()  {
					$http.delete(url).then(
						function(){
							removeCardFromList($scope.card, $scope.list);

						}

					);

				};

				$scope.modelOptions = {
					debounce:500 //Add model options Debounce when event causes model 
								 //to be updated waits for 500 milliseconds to update change
				};

				$scope.move = function () {
					if ($scope.destList === undefined)  {
						return;
					}
					$scope.card.list = $scope.destList.id;
					$scope.update().then(function (){
						{
							removeCardFromList($scope.card, $scope.list);
							$scope.destList.cards.push($scope.card);
						}
					});
				}
			}]

		};

	}

})();