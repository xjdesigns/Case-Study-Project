'use strict';

describe('Alert Service::', function() {
  var alert,
      $rootScope,
      $timeout;
  beforeEach(module('alertService'));
  beforeEach(inject(function($injector, _$rootScope_, _$timeout_){
    alert = $injector.get('alertService');
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
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

  it('should add multiple alerts', function() {
    $rootScope.alerts = [];
    var m = {
      'type': 'success',
      'msg': 'Winning!'
    };

    alert.add(m.type, m.msg);
    alert.add(m.type, m.msg);
    alert.add(m.type, m.msg);
    expect($rootScope.alerts.length).toBe(3);
  });

  it('should add alert and remove from timeout', function() {
    $rootScope.alerts = [];
    var m = {
      'type': 'success',
      'msg': 'Winning!'
    };

    alert.add(m.type, m.msg, '10');
    $timeout.flush();
    expect($rootScope.alerts.length).toBe(0);
  });

  it('should remove the alert', function() {
    $rootScope.alerts = [{
      'type': 'success',
      'msg': 'Winning!'
    }];

    alert.closeAlert();
    expect($rootScope.alerts.length).toBe(0);
  });

  it('should remove the correct alert by index', function() {
    $rootScope.alerts = [{
      'type': 'success',
      'msg': 'Winning!'
    }, {
      'type': 'error',
      'msg': 'Not winning!'
    }];

    alert.closeAlertIdx(1);
    expect($rootScope.alerts[0]).not.toEqual($rootScope.alerts[1]);
  });
});
