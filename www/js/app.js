(function() {
	// Ionic Starter App

	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	angular.module('app', ['ionic','Account','Home'])

	.run(run);
	run.$inject = ["$ionicPlatform"];

	function run($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	}
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
})()