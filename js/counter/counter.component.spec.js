'use strict';

describe('Component: counter', function () {
  var $componentController;

  beforeEach(module('counter'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a `counter` object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {onCountChange: 'Wolverine'};
    var ctrl = $componentController('counter', null, bindings);

    expect(ctrl.onCountChange).toBeDefined();
    expect(ctrl.onCountChange).toBe('Wolverine');
  });

  it('should call the `onCountChange` binding, when decrementing the counter', function() {
    var onCountChangeSpy = jasmine.createSpy('onCountChange');
    var bindings = {newCount: {}, count: 2, onCountChange: onCountChangeSpy};
    var ctrl = $componentController('counter', null, bindings);

    ctrl.counterDecrement();
    expect(onCountChangeSpy).toHaveBeenCalledWith({newCount: 1});
  });

  it('should call the `onCountChange` binding, when incrementing the counter', function() {
    var onCountChangeSpy = jasmine.createSpy('onCountChange');
    var bindings = {newCount: {}, count: 2, onCountChange: onCountChangeSpy};
    var ctrl = $componentController('counter', null, bindings);

    ctrl.counterIncrement();
    expect(onCountChangeSpy).toHaveBeenCalledWith({newCount: 3});
  });
});
