'use strict';

describe('Alert Service::', function() {
  var alert,
      $rootScope;
  beforeEach(module('alertService'));
  beforeEach(inject(function($injector, _$rootScope_){
    alert = $injector.get('alertService');
    $rootScope = _$rootScope_;
  }));

  it('should add an alert', function() {
    $rootScope.alerts = [];
    var m = {
      'type': 'success',
      'msg': 'Winning!'
    };

    alert.add(m.type, m.msg);
    expect($rootScope.alerts.length).toBe(1);
    expect($rootScope.alerts[0].type).toEqual(m.type);
    expect($rootScope.alerts[0].msg).toEqual(m.msg);
  });
});
