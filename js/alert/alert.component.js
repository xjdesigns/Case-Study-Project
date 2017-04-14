angular.module('alertService')
  .component('alert', {
    templateUrl: 'js/alert/alert.component.html',
    controller: AlertController,
    bindings: {
      close: '&',
      type: '<',
      msg: '<'
    }
  });

function AlertController() {
  var a = this;

  a.closeAlert = function() {
    this.close();
  }
}
