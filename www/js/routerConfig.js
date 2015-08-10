(function() {
	angular.module('app')
		.config(config);
	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'Views/Account/login.html',
				controller: 'LoginCtrl'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'Views/Home/index.html',
				controller: 'HomeCtrl'
			})
			.state('browser', {
				url: '/browser/:title/:url',
				templateUrl: 'Views/Home/browser.html',
				controller: 'BrowserCtrl'
			})
			.state('qrCode', {
				url: '/qrCode',
				templateUrl: 'Views/Home/qrCode.html',
				controller: 'qrCodeCtrl'
			})
			// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/login');
	}

})()