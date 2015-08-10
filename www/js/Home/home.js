(function() {
    angular.module('Home', ['ngCordova'])
		.controller('HomeCtrl', HomeCtrl);
		
	HomeCtrl.$inject=['$scope', '$state'];
	function HomeCtrl($scope, $state) {
		$scope.title = "登录";
		
		
		/*
		 * $scope.goto = function(ops) {
			$state.go('browser');

		}*/
	
	 $scope.goto = function(ops) {
			var params = {
				title: 'RD',
				url: 'http://www.baidu.com'
			};
		$state.go('browser', params);
	 }
	}

})()