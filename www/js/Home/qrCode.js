(function() {
	angular.module('Home')
		.controller('qrCodeCtrl', qrCodeCtrl);
	qrCodeCtrl.$inject = ['$scope', '$rootScope', '$ionicPlatform', '$cordovaPlugin'];

	function qrCodeCtrl($scope,$rootScope, $ionicPlatform, $cordovaPlugin) {
	    $ionicPlatform.ready(function () {
	        $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
	            $scope. batteryLevel = result.level;       // (0 - 100)
	            $scope.isPluggedIn = result.isPlugged;   // bool
	        });

	        $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
	            $scope.batteryLevel = result.level;       // (0 - 100)
	            $scope.isPluggedIn = result.isPlugged;   // bool
	        });

	        $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
	            $scope.batteryLevel = result.level;       // (0 - 100)
	            $scope.isPluggedIn = result.isPlugged;   // bool
	        });

	    });
	}

})()