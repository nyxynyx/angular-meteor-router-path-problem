angular.module('myApp').config(function($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true)

	$stateProvider	
		.state('hideBanner', {
			url: '/hideBanner',
			templateUrl: 'client/hideBanner/views/hideBanner.ng.html',
		})

	$urlRouterProvider.otherwise('/hideBanner')
})