var counter = angular.module('counter', [
  'alertService'
]);

counter.component('counter', {
  templateUrl: 'js/counter/counter.component.html',
  controller: CounterController,
  bindings: {
    onCountChange: '&'
  }
});

function CounterController($scope, alertService) {
  var c = this;
  c.count = c.count || 0;
  c.maxCount = 20;

  c.counterIncrement = function() {
    if (c.count >= c.maxCount) {
      return;
    }
    c.count = ++c.count;
    this.onCountChange({newCount: c.count});
    alertService.add("success", "Count has incremented", '1000');
  }
  c.counterDecrement = function() {
    if (c.count <= 0) {
      return;
    }
    c.count = --c.count;
    this.onCountChange({newCount: c.count});
  }
}
