angular.module('ppidInput')
  .directive('ppidInput', function() {
    return {
      restrict: 'A',
      scope: {
        jason: '=ngModel'
      },
      require: 'ngModel',
      templateUrl: 'js/directive/ppid-input.directive.html',
      link: function(scope, element, attrs) {
        scope.$watch('jason', function(val, old) {
          if (val === old) {
            return;
          }
          scope.jason = scope.ppidValSet(val);
        });

        scope.ppidValSet = function(val) {
          var a = val.split('-');
          a[0] = idValidationSet(a[0], 3);
          a[1] = idValidationSet(a[1], 2);
          a[2] = idValidationSet(a[2], 3);
          return a.join('-');
        }

        function idValidationSet(s, count) {
          for (var i = 0; s.length < count; i++) {
            s = '0' + s;
          }
          return s;
        }
      }
    }
  });
