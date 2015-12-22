angular.module('myApp').controller('BannerCtrl', function($scope, $location) {

    $scope.showBanner = function() {
        console.log($location.path());
        return $location.path() != '/hideBanner';
    }

})