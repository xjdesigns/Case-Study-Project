var counter = angular.module('counter', []);

counter.component('counter', {
  templateUrl: 'js/counter/counter.component.html',
  controller: CounterController,
  bindings: {
    onCountChange: '&'
  }
});

function CounterController() {
  var c = this;
  c.count = c.count || 0;
  c.maxCount = 20;

  c.counterIncrement = function() {
    if (c.count >= c.maxCount) {
      return;
    }
    c.count = ++c.count;
    this.onCountChange({newCount: c.count});
  }
  c.counterDecrement = function() {
    if (c.count <= 0) {
      return;
    }
    c.count = --c.count;
    this.onCountChange({newCount: c.count});
  }
}
