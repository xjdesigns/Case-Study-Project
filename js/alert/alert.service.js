'use strict';

angular.module('alertService')
  .factory('alertService', function($rootScope, $timeout) {
    $rootScope.alerts = [];

    var alertService = {
      add: function(type, msg, timeout) {
        $rootScope.alerts.push(
          {
            'type': type,
            'msg': msg,
            'close': function() {
              alertService.closeAlert(this);
            }
          }
        );

        if (timeout) {
          $timeout(function() {
            alertService.closeAlert(this);
          }, timeout);
        }
      },

      closeAlert: function(a) {
        alertService.closeAlertIdx($rootScope.alerts.indexOf(a));
      },

      closeAlertIdx: function(index) {
        $rootScope.alerts.splice(index, 1);
      }
    }

    return alertService;
  });
