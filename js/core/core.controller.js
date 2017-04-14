var core = angular.module('core', [
  'httpService',
  'alertService'
]);

// For demo purposes only on component outputs
core.controller('myRetailController', ['$rootScope', '$scope', 'httpService', '$sce', 'alertService', function myRetailController($rootScope, $scope, httpService, $sce, alertService) {
  $scope.cart = {
    amountToPurchase: 0
  }
  // setup our data object
  $scope.data = {};

  $scope.jason = '5-5-5';

  $rootScope.closeAlert = alertService.closeAlert;

  // initialze the app and get our data
  this.$onInit = function() {
    httpService.async()
      .then(function success(d) {
        $scope.data = d.data.CatalogEntryView[0];
      }, function error(error) {
        $scope.error = {message: error.data || 'Not Found!', status: error.status};
        console.error('Http call failed!', $scope.error);
      });
  }

  $scope.$watch('jason', function(newVal) {
    console.warn('new val changed', newVal);
  });

  $scope.addCountToCart = function(newCount) {
    $scope.cart.amountToPurchase = newCount;
  }

  $scope.applyPurchase = function() {
    if ($scope.cart.amountToPurchase === 0) {
      alert('You have no amount selected');
      return;
    }
    var display = JSON.stringify($scope.cart, null, 2);
    alert(display);
  }

  // Below could be a filters
  $scope.renderHTML = function(code) {
    return $sce.trustAsHtml(code);
  }
}]);
