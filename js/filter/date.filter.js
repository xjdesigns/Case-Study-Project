var d = angular.module('dateFilter', []);
d.filter('dateFormat', function() {
  return function(date) {
    var opts = {year: 'numeric', month: 'short'};
    var d = new Date(date);
    var locale = d.toLocaleDateString('en-US', opts);
    var month = locale.slice(0,3);
    var day = d.getDate();
    var f = locale.replace(/^.{0,3}/, month + ' ' + day + ',');
    return f;
  }
});
