(function() {
	angular.module('Home')
		.controller('BrowserCtrl', BrowserCtrl)
		.filter('trustAsResourceUrl', ['$sce',
			function($sce) {
				return function(val) {
					return $sce.trustAsResourceUrl(val);
				};
			}
		])
	
	BrowserCtrl.$inject=['$scope', '$state', '$stateParams', '$sce'];

	function BrowserCtrl($scope, $state, $stateParams, $sce) {
		console.log($stateParams);
		$scope.title = $stateParams.title;
		$scope.url =$stateParams.url;
	}

})()