var xml = angular.module('httpService', []);

xml.factory('httpService', ['$http', function($http) {
  var httpService = {
    async: function(){
      var promise = $http.get('js/data-json/item-data.json')
        .then(function(response) {
          return response;
        });
      return promise;
    }
  }
  return httpService;
}]);
