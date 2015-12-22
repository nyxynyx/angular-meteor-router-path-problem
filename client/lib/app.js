angular.module('myApp', ['angular-meteor', 'ui.router', 'accounts.ui', 'angularUtils.directives.dirPagination', 
	'angularMoment'])


function onReady() {
	angular.bootstrap(document, ['myApp'], {
		strictDi: false
	})
}

if(Meteor.isCordova)
	angular.element(document).on('deviceready', onReady)
else
	angular.element(document).ready(onReady)