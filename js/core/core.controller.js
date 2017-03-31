var core = angular.module('core', [
  'httpService'
]);

// For demo purposes only on component outputs
core.controller('myRetailController', ['$scope', 'httpService', '$sce', function myRetailController($scope, httpService, $sce) {
  $scope.cart = {
    amountToPurchase: 0
  }
  // setup our data object
  $scope.data = {};

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

  $scope.toDate = function(date) {
    var opts = {year: 'numeric', month: 'short'};
    var d = new Date(date);
    var locale = d.toLocaleDateString('en-US', opts);
    var month = locale.slice(0,3);
    var day = d.getDate();
    var f = locale.replace(/^.{0,3}/, month + ' ' + day + ',');
    return f;
  }
}]);
