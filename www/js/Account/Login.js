(function() {
	angular.module('Account', [])
		.controller('LoginCtrl', LoginCtrl);
		
	LoginCtrl.$inject=['$scope', '$state'];

	function LoginCtrl($scope, $state) {
		$scope.title = "登录";
		$scope.login = function() {
			$state.go('home');
		}
	}

})()