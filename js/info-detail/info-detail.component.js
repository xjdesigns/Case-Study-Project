var detail = angular.module('infoDetail', []);

detail.component('infoDetail', {
  templateUrl: 'js/info-detail/info-detail.component.html',
  bindings: {
    onUpdate: '&'
  },
  controller: function infoDetailComponent() {
    this.thing = 'jason';

    this.triggerMe = function() {
      console.warn({thing: this.thing});
      this.onUpdate({thing: this.thing, jason: 'jason'});
    }
  }
})
